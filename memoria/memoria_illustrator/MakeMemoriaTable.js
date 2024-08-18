function memoriaSort() {
    document.getElementById("memoria-sort-btn").className = "active";
    document.getElementById("illustrator-sort-btn").className = "";
    document.getElementById("chara-sort-btn").className = "";
    document.getElementById("maintable").classList.remove("disable");
    document.getElementById("illustratorList").classList.add("disable");
    document.getElementById("charaList").classList.add("disable");
}

function illustratorSort() {
    document.getElementById("memoria-sort-btn").className = "";
    document.getElementById("illustrator-sort-btn").className = "active";
    document.getElementById("chara-sort-btn").className = "";
    document.getElementById("maintable").classList.add("disable");
    document.getElementById("illustratorList").classList.remove("disable");
    document.getElementById("charaList").classList.add("disable");
}

function charaSort() {
    document.getElementById("memoria-sort-btn").className = "";
    document.getElementById("illustrator-sort-btn").className = "";
    document.getElementById("chara-sort-btn").className = "active";
    document.getElementById("maintable").classList.add("disable");
    document.getElementById("illustratorList").classList.add("disable");
    document.getElementById("charaList").classList.remove("disable");
}

function makeIllustratorList(resultsObjects, illustratorData) {
    for (let i in illustratorData) {
        let caption = `<br><h3>${illustratorData[i]["illustrator"]}</h3>`;
        document.getElementById("illustratorList").insertAdjacentHTML("beforeend", caption);
        document.getElementById("illustratorList").appendChild(getMemoriaList(resultsObjects, illustratorData[i]["memoria"]));
    }
}

function makeCharaList(resultsObjects, illustrationCharaData) {
    for (let i in illustrationCharaData) {
        let caption = `<br><h3><img src="../../images/chara/chara_${i}.webp" class="charaImg"> ${resultsObjects.charaDataTemp[0][i]["charaName"]}: ${illustrationCharaData[i].length}</h3>`;
        document.getElementById("charaList").insertAdjacentHTML("beforeend", caption);
        document.getElementById("charaList").appendChild(getMemoriaList(resultsObjects, illustrationCharaData[i]));
    }
}

// テーブル作成
function makeTable(resultsObjects, memoriaJsonCopy) {

    // table要素を生成
    let table = document.createElement("table");

    // ヘッダーを作成
    let tr = document.createElement("tr");
    // td要素を生成
    let thId = document.createElement("th");
    let thName = document.createElement("th");
    let thIllustrator = document.createElement("th");
    // th要素内にテキストを追加
    thId.textContent = "画像";
    thName.textContent = "メモリア名";
    thIllustrator.textContent = "イラストレーター";
    // th要素をtr要素の子要素に追加
    tr.appendChild(thId);
    tr.appendChild(thName);
    tr.appendChild(thIllustrator);
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // 検索結果件数を保存する変数
    let resultCount = 0;
    let illustratorData = [];
    let illustrationCharaData = {};

    // テーブル本体を作成
    for (let id in memoriaJsonCopy) {
        if (memoriaJsonCopy[id]["illustration"]["type"] != "クリエイターズコラボ") continue;

        // 検索結果件数カウント
        resultCount++;

        // tr要素を生成
        let tr = document.createElement("tr");
        // td要素を生成
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdIllustrator = document.createElement("td");
        // サムネ画像要素の追加
        let img = document.createElement("img");
        img.src = "../../images/memoria/memoria_" + id + ".webp";
        img.className = "memoria_img";
        img.loading = "lazy";
        // td要素内にテキストを追加
        tdId.appendChild(img);
        tdName.textContent = memoriaJsonCopy[id]["name"];

        let illustrator = memoriaJsonCopy[id]["illustration"]["illustrator"];
        tdIllustrator.textContent = illustrator;
        let illustratorExist = false;
        for (let index in illustratorData) {
            if (illustratorData[index]["illustrator"] == illustrator) {
                illustratorData[index]["memoria"].push(id);
                illustratorExist = true;
            }
        }
        if (illustratorExist == false) {
            illustratorData.push( { "illustrator": illustrator, "memoria": [id] } );
        }

        let charas = memoriaJsonCopy[id]["illustration"]["chara"];
        for (let i in charas) {
            let chara = charas[i].toString();
            if (illustrationCharaData[chara] == undefined) {
                illustrationCharaData[chara] = [id];
            } else {
                illustrationCharaData[chara].push(id);
            }
        }

        // リンク
        let p = document.createElement("p");
        let link = document.createElement("a");
        link.href = `../../memoria/detail/?memoriaID=${id}`;
        link.innerText = "詳細＞＞";
        p.appendChild(link);
        tdId.appendChild(p);
        // td要素をtr要素の子要素に追加
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdIllustrator);
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);

        memoriaJsonCopy[id]["tr"] = tr;
    }
    // 生成したtable要素を追加する
    document.getElementById("maintable").replaceChildren(table);

    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);

    makeIllustratorList(resultsObjects, illustratorData);
    makeCharaList(resultsObjects, illustrationCharaData);
    //console.log(illustratorData);
    //console.log(illustrationCharaData);
}

// データ取得
const path = "../../";
const urls = [
    { dataName: "charaDataTemp", urlName: `${path}data/chara_data.json` },
    { dataName: "costumeJson", urlName: `${path}data/costume_data.json` },
    { dataName: "memoriaJson", urlName: `${path}data/memoria_data.json` }
]

const fetches = urls.map((url) => fetch(url.urlName).then(r => r.json()));

Promise.all(fetches)
    .then(result => {
        // Process
        let resultsObjects = {};
        for (let i in urls) {
            resultsObjects[urls[i].dataName] = result[i];
        }

        // URLパラメータ取得
        const url = new URL(window.location.href);
        const params = url.searchParams;
        
        // indexのパラメータ取得
        const mode = params.get("mode");
        
        // 初期化
        let memoriaJsonCopy = JSON.parse(JSON.stringify(resultsObjects.memoriaJson));
        for (let id in memoriaJsonCopy) {
            memoriaJsonCopy[id]["tr"] = "";
        }
        makeTable(resultsObjects, memoriaJsonCopy);
    })

