$(".category").click(function () { // タイトル要素をクリックしたら
    let findElm = $(this).next(".flex_btn-box"); // 直後のアコーディオンを行うエリアを取得し
    $(findElm).toggleClass("close"); // closeクラスを付与
    $(this).toggleClass("close"); // 自身にもcloseクラスを付与
});

$("#menu-open-btn").click(function () { // フィルターボタンがクリックされたら
    $("#filter-menu_content").toggleClass("active"); // filter-menuにactiveクラスを付与
});

$("#chara-open-btn").click(function () { // キャラ選択表示ボタンがクリックされたら
    $(this).toggleClass("active"); // 自身にactiveクラスを付与
    $("#chara_list").toggleClass("active"); // chara_listにactiveクラスを付与(リストopen)
});

function yakuwariToString(percent) {
    let str = percent + "%";
    if (percent >= percentBorder) str = "<span>" + str + "</span>";
    return str;
}

function parameterToString(paramArray) {
    let str = "";
    let totalParameter = 0;
    for (let i = 0; i < paramArray.length; i++) {
        if (i != 0) str += ", ";
        str += (paramArray[i][0] + "+" + paramArray[i][1]);
        totalParameter += paramArray[i][1];
    }
    if (totalParameter >= totalParameterBorder) str = "<span>" + str + "</span>";
    return str;
}

function exToString(exArray) {
    let str = "";
    for (let i = 0; i < exArray.length; i++) {
        if (i != 0) str += ", ";
        str += ("<nobr>" + exArray[i][0] + ":" + exArray[i][1] + "%</nobr>");
    }
    if (str != "") str = "<span>" + str + "</span>";
    return str;
}

// キャラ名取得
function getCharaName(charaIndex) {
    if (charaJson[charaIndex]["specialSkill"] != "") {
        charaJson[charaIndex]["charaName"] = `${charaJson[charaIndex]["charaName"]} (${charaJson[charaIndex]["specialSkill"]})`;
    }
    return charaJson[charaIndex]["charaName"];
}

// キャラ名取得
function getCharaJump(charaIndex) {
    return charaJson[charaIndex]["charaJump"];
}

function getCharaPlayable(charaIndex) {
    return charaJson[charaIndex]["playable"];
}

// メイン表の作成
function makeTable() {

    // ヘッダーを作成
    let yakuwariString = ["通常単体", "通常範囲", "特殊単体", "特殊範囲", "支援", "妨害", "回復"];
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.textContent = "";
    tr.appendChild(th);
    //let thYakuwari = document.createElement("th");
    for (let i = 0; i < 7; i++) {
        let td = document.createElement("th");
        td.textContent += `${yakuwariString[i]}`;
        //thYakuwari.textContent += `${yakuwariString[i]} `;
        tr.appendChild(td);
    }
    //tr.appendChild(thYakuwari);
    document.getElementById("maintable").appendChild(tr);

    // テーブル本体を作成
    for (let i in charaDisplay) {

        let id = charaDisplay[i];
        
        let playable = getCharaPlayable(id);
        if (playable == false) continue;

        // 行作成
        let field = document.createElement("tr");
        field.className = "chara";
        field.id = getCharaJump(id);
        
        // キャラ名
        let chara = document.createElement("th");
        chara.className = "name";
        chara.innerHTML = getCharaName(id);
        field.appendChild(chara);

        // 役割ごと
        //let charayakuwari = document.createElement("div");
        //charayakuwari.className = "chara-yakuwari";
        for (let i = 0; i < 7; i++) {
            //let title = document.createElement("div");
            let yakuwari = document.createElement("td");
            //yakuwari.className = "yakuwari";
            //title.innerHTML = yakuwariString[i];
            //title.className = "yakuwari-name";
            //yakuwari.appendChild(title);
            let box = getCostumeDetailList(charaRoleArray[id][i], 2);
            yakuwari.appendChild(box);
            //charayakuwari.appendChild(yakuwari);
            field.appendChild(yakuwari);
        }
        //field.appendChild(charayakuwari);

        // 生成したtable要素を追加する
        document.getElementById("maintable").appendChild(field);
    }
}


// キャラ表示順
let charaDisplay = [];

for (let i in charaBelongJson) {
    charaDisplay = charaDisplay.concat(charaBelongJson[i]["chara"]);
}

// 多次元配列定義
const maxChara = charaDisplay.length;
let charaRoleArray = {};
for (let i in charaDisplay) {
    let id = charaDisplay[i];
    charaRoleArray[`${id}`] = [[], [], [], [], [], [], []];
}

// 多次元配列に新しい順に格納
let ids = Object.keys(costumeJson);
for (let i = (ids.length - 1); i >= 0; i--) {
    let id = ids[i]
    charaRoleArray[costumeJson[id]["chara"]][costumeJson[id]["yakuwari"] - 1].push(id);
}

// 強調する基準
const percentBorder = 15;
const totalParameterBorder = 6000;

// テーブル生成
makeTable();
