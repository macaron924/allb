function makeTable() {

    // table要素を生成
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // ヘッダーを作成
    let trHead = document.createElement("tr");
    let thList = ["", "CHARM名", "分類", "ATK", "Sp.ATK", "DEF", "Sp.DEF", "D+SD", "戦闘力", "メモリアスキル効果UP", "パラメータ/回復量特性", "属性特性", "その他の特性", "解放条件", "専用", "実装日"];
    for (let i in thList) {
        let th = document.createElement("th");
        th.textContent = thList[i];
        if ((3 <= i && i <= 9) || i == 15) th.classList.add("sortEnabled");
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);

    // テーブル本体を作成
    for (let id in charmJson) {

        let tr = document.createElement("tr");

        // チェックと画像の列
        let tdImg = document.createElement("td");
        tdImg.innerHTML = `<input type="checkbox" class="check" id="check_${id}">`;
        let img = document.createElement("img");
        img.src = `../images/charm/charm_${id}.webp`
        img.height = 80;
        img.loading = "lazy";
        tdImg.appendChild(img);
        tr.appendChild(tdImg);

        // 名前
        let tdName = document.createElement("td");
        tdName.textContent = charmJsonCopy[id]["CHARM"];
        tr.appendChild(tdName);

        // 分類
        let tdCategory = document.createElement("td");
        tdCategory.textContent = charmJsonCopy[id]["分類"];
        tr.appendChild(tdCategory);

        // 各種パラメータ
        charmJsonCopy[id]["D+SD"] = charmJsonCopy[id]["DEF"] + charmJsonCopy[id]["Sp.DEF"];
        charmJsonCopy[id]["戦闘力"] = charmJsonCopy[id]["ATK"] + charmJsonCopy[id]["Sp.ATK"] + charmJsonCopy[id]["D+SD"];
        let tdAtk = document.createElement("td");
        let tdSpAtk = document.createElement("td");
        let tdDef = document.createElement("td");
        let tdSpDef = document.createElement("td");
        let tdDsD = document.createElement("td");
        let tdTotal = document.createElement("td");
        tdAtk.classList.add("num");
        tdSpAtk.classList.add("num");
        tdDef.classList.add("num");
        tdSpDef.classList.add("num");
        tdDsD.classList.add("num");
        tdTotal.classList.add("num");
        tdAtk.textContent = charmJsonCopy[id]["ATK"];
        tdSpAtk.textContent = charmJsonCopy[id]["Sp.ATK"];
        tdDef.textContent = charmJsonCopy[id]["DEF"];
        tdSpDef.textContent = charmJsonCopy[id]["Sp.DEF"];
        tdDsD.textContent = charmJsonCopy[id]["D+SD"];
        tdTotal.textContent = charmJsonCopy[id]["戦闘力"];
        tr.appendChild(tdAtk);
        tr.appendChild(tdSpAtk);
        tr.appendChild(tdDef);
        tr.appendChild(tdSpDef);
        tr.appendChild(tdDsD);
        tr.appendChild(tdTotal);

        // 特性
        let paramList = ["ATK", "Sp.ATK", "DEF", "Sp.DEF", "回復量"];
        let zokuseiList = ["火", "水", "風", "光", "闇"];

        // 対ヒュージ
        let tdVshMemoria = document.createElement("td");
        let tdVshParam = document.createElement("td");
        let tdVshZokusei = document.createElement("td");
        let tdVshElse = document.createElement("td");
        tdVshMemoria.classList.add("vsh");
        tdVshParam.classList.add("vsh");
        tdVshZokusei.classList.add("vsh");
        tdVshElse.classList.add("vsh");
        tdVshParam.classList.add("characteristic");
        tdVshZokusei.classList.add("characteristic");
        tdVshElse.classList.add("characteristic");
        tdVshMemoria.textContent = `+${charmJsonCopy[id]["特性"]["対ヒュージ"]["メモリアスキル効果UP"]}%`;
        for (let j in paramList) {
            if (charmJsonCopy[id]["特性"]["対ヒュージ"][paramList[j]] != "") {
                if (tdVshParam.innerHTML != "") tdVshParam.insertAdjacentHTML("beforeend", "<br>")
                let span = document.createElement("span");
                span.innerHTML = `${paramList[j]}${charmJsonCopy[id]["特性"]["対ヒュージ"][paramList[j]]}`;
                // バフの場合
                if (span.innerHTML.includes("▲")) { span.classList.add("buff"); }
                // デバフの場合
                if (span.innerHTML.includes("▼")) { span.classList.add("debuff"); }
                tdVshParam.appendChild(span);
            }
        }
        for (let j in zokuseiList) {
            if (charmJsonCopy[id]["特性"]["対ヒュージ"][zokuseiList[j]] != "") {
                if (tdVshZokusei.innerHTML != "") tdVshZokusei.insertAdjacentHTML("beforeend", "<br>")
                let span = document.createElement("span");
                span.innerHTML = `${zokuseiList[j]}${charmJsonCopy[id]["特性"]["対ヒュージ"][zokuseiList[j]]}`;
                switch (zokuseiList[j]) {
                    case "火":
                        span.classList.add("fire");
                        break;
                    case "水":
                        span.classList.add("water");
                        break;
                    case "風":
                        span.classList.add("wind");
                        break;
                    case "光":
                        span.classList.add("light");
                        break;
                    case "闇":
                        span.classList.add("dark");
                        break;
                }
                tdVshZokusei.appendChild(span);
            }
        }
        tdVshElse.textContent = charmJsonCopy[id]["特性"]["対ヒュージ"]["その他の特性"];
        tr.appendChild(tdVshMemoria);
        tr.appendChild(tdVshParam);
        tr.appendChild(tdVshZokusei);
        tr.appendChild(tdVshElse);

        // レギオンマッチ
        let tdLmMemoria = document.createElement("td");
        let tdLmParam = document.createElement("td");
        let tdLmZokusei = document.createElement("td");
        let tdLmElse = document.createElement("td");
        tdLmMemoria.classList.add("lm");
        tdLmParam.classList.add("lm");
        tdLmZokusei.classList.add("lm");
        tdLmElse.classList.add("lm");
        tdLmParam.classList.add("characteristic");
        tdLmZokusei.classList.add("characteristic");
        tdLmElse.classList.add("characteristic");
        tdLmMemoria.textContent = `+${charmJsonCopy[id]["特性"]["レギオンマッチ"]["メモリアスキル効果UP"]}%`;
        for (let j in paramList) {
            if (charmJsonCopy[id]["特性"]["レギオンマッチ"][paramList[j]] != "") {
                if (tdLmParam.innerHTML != "") tdLmParam.insertAdjacentHTML("beforeend", "<br>")
                let span = document.createElement("span");
                span.innerHTML = `${paramList[j]}${charmJsonCopy[id]["特性"]["レギオンマッチ"][paramList[j]]}`;
                // バフの場合
                if (span.innerHTML.includes("▲")) { span.classList.add("buff"); }
                // デバフの場合
                if (span.innerHTML.includes("▼")) { span.classList.add("debuff"); }
                tdLmParam.appendChild(span);
            }
        }
        for (let j in zokuseiList) {
            if (charmJsonCopy[id]["特性"]["レギオンマッチ"][zokuseiList[j]] != "") {
                if (tdLmZokusei.innerHTML != "") tdLmZokusei.insertAdjacentHTML("beforeend", "<br>")
                let span = document.createElement("span");
                span.innerHTML = `${zokuseiList[j]}${charmJsonCopy[id]["特性"]["レギオンマッチ"][zokuseiList[j]]}`;
                switch (zokuseiList[j]) {
                    case "火":
                        span.classList.add("fire");
                        break;
                    case "水":
                        span.classList.add("water");
                        break;
                    case "風":
                        span.classList.add("wind");
                        break;
                    case "光":
                        span.classList.add("light");
                        break;
                    case "闇":
                        span.classList.add("dark");
                        break;
                }
                tdLmZokusei.appendChild(span);
            }
        }
        tdLmElse.textContent = charmJsonCopy[id]["特性"]["レギオンマッチ"]["その他の特性"];
        tr.appendChild(tdLmMemoria);
        tr.appendChild(tdLmParam);
        tr.appendChild(tdLmZokusei);
        tr.appendChild(tdLmElse);

        // 解放条件
        let tdGet = document.createElement("td");
        let kaihouBox = document.createElement("div");
        if (charmJsonCopy[id]["解放条件"]["str"] != "") tdGet.innerHTML = `${charmJsonCopy[id]["解放条件"]["str"]}<br>`;
        for (let j in charmJsonCopy[id]["解放条件"]["costume"]) {
            let img = document.createElement("img");
            img.src = "../images/costume/costume_" + charmJsonCopy[id]["解放条件"]["costume"][j] + ".webp"
            img.height = 60;
            img.loading = "lazy";
            kaihouBox.appendChild(img);
        }
        kaihouBox.classList.add("kaihou");
        tdGet.appendChild(kaihouBox);
        tr.appendChild(tdGet);

        // 装備可能衣装
        let tdEquip = document.createElement("td");
        let senyouBox = document.createElement("div");
        for (let j in charmJsonCopy[id]["専用"]) {
            let img = document.createElement("img");
            img.src = "../images/costume/costume_" + charmJsonCopy[id]["専用"][j] + ".webp"
            img.height = 60;
            img.loading = "lazy";
            senyouBox.appendChild(img);
        }
        senyouBox.classList.add("senyou");
        tdEquip.appendChild(senyouBox);
        tr.appendChild(tdEquip);

        // 実装日
        let tdDate = document.createElement("td");
        tdDate.textContent = charmJsonCopy[id]["実装日"];
        tr.appendChild(tdDate);

        // ここまでで生成したtrの参照を保存
        charmJsonCopy[id]["trRef"] = tr;

        tbody.appendChild(tr);
    }

    // 生成したtable要素を追加する
    table.appendChild(tbody);
    document.getElementById("maintable").appendChild(table);
}

// データ取得
const charmJson = loadData("../data/charm_data.json");

// 初期化
let charmJsonCopy = JSON.parse(JSON.stringify(charmJson));
makeTable();


// デフォ特性をレギオンマッチに
$(".vsh").css({ "display": "none" });
$(".lm").css({ "display": "table-cell" });
$(".mode-btn.mode-vsh").removeClass("active");
$(".mode-btn.mode-lm").addClass("active");
let modeSelection = "レギオンマッチ";

/*
// デフォ特性を対ヒュージに
$(".vsh").css({ "display":"table-cell" });
$(".lm").css({ "display":"none" });
$(".mode-btn.mode-vsh").addClass("active");
$(".mode-btn.mode-lm").removeClass("active");
let modeSelection = "対ヒュージ";
*/
/*
// デフォを両方表示
$(".vsh").css({ "display":"table-cell" });
$(".lm").css({ "display":"table-cell" });
$(".mode-btn.mode-vsh").addClass("active");
$(".mode-btn.mode-lm").addClass("active");
*/

// モード変更　再並べ替えが必要な場合あり
function changeMode(mode) {
    if (mode == "vsh") {
        $(".vsh").css({ "display": "table-cell" });
        $(".lm").css({ "display": "none" });
        $(".mode-btn.mode-vsh").addClass("active");
        $(".mode-btn.mode-lm").removeClass("active");
        modeSelection = "対ヒュージ";
        sort(lastSort, lastOrder);
    }
    if (mode == "lm") {
        $(".vsh").css({ "display": "none" });
        $(".lm").css({ "display": "table-cell" });
        $(".mode-btn.mode-vsh").removeClass("active");
        $(".mode-btn.mode-lm").addClass("active");
        modeSelection = "レギオンマッチ";
        sort(lastSort, lastOrder);
    }
}
