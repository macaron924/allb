$(".category").click(function () { // タイトル要素をクリックしたら
	let findElm = $(this).next(".flex_btn-box"); // 直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass('close'); // closeクラスを付与
	$(this).toggleClass('close'); // 自身にもcloseクラスを付与
});

$("#menu-open-btn").click(function () { // フィルターボタンがクリックされたら
    $("#filter-menu_content").toggleClass('active'); // filter-menuにactiveクラスを付与
});

$("#chara-open-btn").click(function () { // キャラ選択表示ボタンがクリックされたら
    $(this).toggleClass('active'); // 自身にactiveクラスを付与
    $("#chara_list").toggleClass('active'); // chara_listにactiveクラスを付与(リストopen)
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
        str += (exArray[i][0] + ":" + exArray[i][1] + "%");
    }
    if (str != "") str = "<span>" + str + "</span>";
    return str;
}

function makeInnerTable(thisCostume) {
    // tableを生成
    let table = document.createElement('table');
    table.className = "innerTable";
    
    // 1行目
    let tr1 = document.createElement('tr');
    let td11 = document.createElement('td');
    td11.rowSpan = "4";
    let img = document.createElement('img');
    img.src = "../images/costume/costume_" + thisCostume['id'] + ".png";
    img.loading = "lazy";
    td11.appendChild(img);
    tr1.appendChild(td11);
    let td12 = document.createElement('td');
    td12.textContent = thisCostume['name'];
    tr1.appendChild(td12);
    table.appendChild(tr1);

    // 2行目
    let tr2 = document.createElement('tr');
    let td22 = document.createElement('td');
    td22.innerHTML = yakuwariToString(thisCostume['percent']);
    tr2.appendChild(td22);
    table.appendChild(tr2);

    // 3行目
    let tr3 = document.createElement('tr');
    let td32 = document.createElement('td');
    td32.innerHTML = parameterToString(thisCostume['parameter']);
    tr3.appendChild(td32);
    table.appendChild(tr3);

    // 4行目
    let tr4 = document.createElement('tr');
    let td42 = document.createElement('td');
    td42.innerHTML = exToString(thisCostume['ex']);
    tr4.appendChild(td42);
    table.appendChild(tr4);

    return table;
}

// キャラの役割あたりの最大衣装数取得
function getCharaMaxRow(charaIndex) {
    let max = 0;
    for (let i = 0; i < 7; i++) {
        if (charaRoleArray[charaIndex][i].length > max) max = charaRoleArray[charaIndex][i].length;
    }
    return max;
}

// キャラ名取得
function getCharaName(charaIndex) {
    return charaJson[charaIndex]['charaName'];
}

// キャラ名取得
function getCharaJump(charaIndex) {
    return charaJson[charaIndex]['charaJump'];
}

// メイン表の作成
function makeTable() {
    
    // ヘッダーを作成
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = "";
    tr.appendChild(th);
    let yakuwariString = ["通常単体", "通常範囲", "特殊単体", "特殊範囲", "支援", "妨害", "回復"];
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th');
        th.textContent = yakuwariString[i];
        tr.appendChild(th);
    }
    document.getElementById('maintable').appendChild(tr);
    
    // テーブル本体を作成
    for (let i = 0; i < charaRoleArray.length; i++) {
        let charaIndex = charaDisplay[i] - 1; // 表示順取得
        let maxRow = getCharaMaxRow(charaIndex);
        for (let charaRowIndex = 0; charaRowIndex < maxRow; charaRowIndex++) {
            // 行作成
            let tr = document.createElement('tr');
            if (charaRowIndex == maxRow - 1) tr.className = "charaBottom";
            // キャラ名
            if (charaRowIndex == 0) {
                let th = document.createElement('th');
                th.innerHTML = getCharaName(charaIndex);
                th.rowSpan = maxRow;
                th.id = getCharaJump(charaIndex);
                tr.appendChild(th);
            }
            // 役割ごと
            for (let yakuwari = 0; yakuwari < 7; yakuwari++) {
                let td = document.createElement('td');
                if (charaRoleArray[charaIndex][yakuwari].length > charaRowIndex) {
                    td.appendChild(makeInnerTable(costumeJson[charaRoleArray[charaIndex][yakuwari][charaRowIndex]]));
                } else {
                    td.textContent = "";
                }
                tr.appendChild(td);
            }

            // 生成したtable要素を追加する
            document.getElementById('maintable').appendChild(tr);
        }
    }
}


// キャラ表示順
const charaDisplay = [
    1, 30, 2, 3, 4, 5, 55, 6, 7, 8, 9, 35, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 53, 54, 56, 57, 98, 99, 
    10, 95, 11, 84, 12, 96, 13, 14, 71, 93, 72, 85, 73, 86, 74, 94, 
    15, 16, 17, 18, 19, 67, 68, 69, 70, 
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 34, 
    31, 32, 33, 36, 37, 38, 39, 50, 51, 52, 58, 59, 60, 61, 62, 63, 64, 65, 66, 75, 76, 77, 78, 79, 80, 87, 88, 89, 90, 91, 92, 
    81, 82, 83, 97
]

// 多次元配列定義
const maxChara = charaDisplay.length;
let charaRoleArray = [];
for (let i = 0; i < maxChara; i++){
    charaRoleArray.push([[], [], [], [], [], [], []]);
}

// 多次元配列に新しい順に格納
for (let i = (costumeJson.length - 1); i >= 0; i--) {
    charaRoleArray[costumeJson[i]['chara'] - 1][costumeJson[i]['yakuwari'] - 1].push(i);
}

// 強調する基準
const percentBorder = 15;
const totalParameterBorder = 3000;

// テーブル生成
makeTable();