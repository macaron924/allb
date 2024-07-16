function memoriaSort() {
    document.getElementById("memoria-sort-btn").className = "active";
    document.getElementById("illustrator-sort-btn").className = "";
    document.getElementById("maintable").classList.remove("disable");
    document.getElementById("illustratorList").classList.add("disable");
}

function illustratorSort() {
    document.getElementById("illustrator-sort-btn").className = "active";
    document.getElementById("memoria-sort-btn").className = "";
    document.getElementById("illustratorList").classList.remove("disable");
    document.getElementById("maintable").classList.add("disable");
}

function makeIllustratorList(illustratorData) {
    for (let i in illustratorData) {
        let caption = `<br><h3>${illustratorData[i]["illustrator"]}</h3>`;
        document.getElementById("illustratorList").insertAdjacentHTML("beforeend", caption);
        document.getElementById("illustratorList").appendChild(getMemoriaList(illustratorData[i]["memoria"], 2));
    }
}

// テーブル作成
function makeTable() {

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
        if (mode == "lowrare") {
            img.src = "../../images/low-rare-memoria/low-rare-memoria_" + id + ".webp";
        } else {
            img.src = "../../images/memoria/memoria_" + id + ".webp";
        }
        img.className = "memoria_img";
        img.loading = "lazy";
        // td要素内にテキストを追加
        tdId.appendChild(img);
        tdName.textContent = memoriaJsonCopy[id]["name"];
        let illustrator = memoriaJsonCopy[id]["illustration"]["illustrator"]
        tdIllustrator.textContent = illustrator;
        let illustratorExist = false;
        for (let index in illustratorData) {
            if (illustratorData[index]["illustrator"] == illustrator) {
                illustratorData[index]["memoria"].push(id);
                illustratorExist = true;
            }
        }
        if (illustratorExist == false) {
            illustratorData.push( { "illustrator": illustrator, "memoria": [id] } )
        }
        // リンク
        if (mode != "lowrare") {
            let p = document.createElement("p");
            let link = document.createElement("a");
            link.href = `../../memoria/detail/?memoriaID=${id}`;
            link.innerText = "詳細＞＞";
            p.appendChild(link);
            tdId.appendChild(p);
        }
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

    makeIllustratorList(illustratorData);
    //console.log(illustratorData);
}

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const mode = params.get("mode");

// 初期化
let memoriaJsonCopy = null;
if (mode == "lowrare") {
    memoriaJsonCopy = JSON.parse(JSON.stringify(lrmemoriaJson));
    document.getElementById("low").classList.remove("active");
    document.getElementById("high").classList.add("active");
} else {
    memoriaJsonCopy = JSON.parse(JSON.stringify(memoriaJson));
}
for (let id in memoriaJsonCopy) {
    memoriaJsonCopy[id]["tr"] = "";
}
makeTable();
let charaSelectionArray = [];
let typeSelectionArray = [];
let onlymode = false
