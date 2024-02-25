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

$(".select-btn").click(function () { // 選択ボタンがクリックされたら
    $(this).toggleClass("active"); // 自身にactiveクラスを付与(色付け)
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
});

$("#dual-display").click(function () { // モード切替ボタンがクリックされたら
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
});

$("select").change(function () { // プルダウンがクリックされたら
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
    if (this.value == "") {
        $(this).next(".filter-group").addClass("disable");
    } else {
        $(this).next(".filter-group").removeClass("disable");
    }
});

function runButtonPushAction() {
    percentSelection = [
        document.getElementById("percent-min").value, 
        document.getElementById("percent-max").value
    ];
    parameterSelectionArray = [
        [
            document.getElementById("parameter1-type").value, 
            document.getElementById("parameter1-min").value, 
            document.getElementById("parameter1-max").value
        ],[
            document.getElementById("parameter2-type").value, 
            document.getElementById("parameter2-min").value, 
            document.getElementById("parameter2-max").value
        ]
    ];
    exSelection = document.getElementById("ex").value;
    
    makeList();
    document.getElementById("filter-btn").className = "";
    document.getElementById("filter-btn").value = "反映済み";
}

function percentFilter(costume) {
    let percent = costume["percent"];
    if (percentSelection[0] != "") {
        let min = parseInt(percentSelection[0]);
        if (percent < min) {
            return false;
        }
    }
    if (percentSelection[1] != "") {
        let max = parseInt(percentSelection[1]);
        if (percent >= max) {
            return false;
        }
    }
    return true;
    /*
    if (percentSelection == 0) return true;
    let percent = costume["percent"];
    if (percent == "") return true;
    if (percent >= percentSelection) return true;
    return false;*/
}

function parameterFilter(costume) {
    let tag = costume["parameter"];
    let trueCount = 0;
    for (let j = 0; j < parameterSelectionArray.length; j++) {
        if (parameterSelectionArray[j][0] == "") {
            trueCount++;
            continue;
        }
        for (let i = 0; i < tag.length; i++) {
            if (parameterSelectionArray[j][0] != tag[i][0]) {
                continue;
            }
            if (parameterSelectionArray[j][1] != "") {
                let min = parseInt(parameterSelectionArray[j][1]);
                if (tag[i][1] < min) {
                    continue;
                }
            }
            if (parameterSelectionArray[j][2] != "") {
                let max = parseInt(parameterSelectionArray[j][2]);
                if (tag[i][1] >= max) {
                    continue;
                }
            }
            trueCount++;
        }
    }
    if (trueCount == 2) return true;
    return false;
}

function exFilter(costume) {
    if (exSelection == "") return true;
    let tag = costume["ex"];
    for (let i = 0; i < tag.length; i++) {
        if (tag[i][0] == exSelection) {
            return true;
        }
    }
    return false;
}

function yakuwariFilter(costume) {
    if (yakuwariArray.length == 0) return true;
    let yakuwariNumber = costume["yakuwari"];
    for (let i = 0; i < yakuwariArray.length; i++) {
        if (yakuwariNumber == yakuwariArray[i]) return true;
    }
    return false;
}

function charaFilter(costume) {
    if (charaArray.length == 0) return true;
    let charaNumber = costume["chara"];
    for (let i = 0; i < charaArray.length; i++) {
        if (charaNumber == charaArray[i]) return true;
    }
    return false;
}

function filter(costume) {
    if (charaFilter(costume) == false) return false;
    if (yakuwariFilter(costume) == false) return false;
    if (percentFilter(costume) == false) return false;
    if (parameterFilter(costume) == false) return false;
    if (exFilter(costume) == false) return false;
    return true;
}

function existInYakuwariArray(yakuwari) {
    for (let i = 0; i < yakuwariArray.length; i++) {
        if (yakuwari == yakuwariArray[i]) return i;
    }
    return -1;
}

function yakuwariButtonPushAction(yakuwari) {
    let i = existInYakuwariArray(yakuwari);
    if (i >= 0) {
        yakuwariArray.splice(i, 1);
    } else {
        yakuwariArray.push(yakuwari);
    }
}

function existInCharaArray(chara) {
    for (let i = 0; i < charaArray.length; i++) {
        if (chara == charaArray[i]) return i;
    }
    return -1;
}

function charaButtonPushAction(chara) {
    let i = existInCharaArray(chara);
    if (i >= 0) {
        charaArray.splice(i, 1);
    } else {
        charaArray.push(chara);
    }
}

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

function makeInnerTable(thisCostume) {
    // tableを生成
    let table = document.createElement("table");
    
    // 1行目
    let tr1 = document.createElement("tr");
    let td11 = document.createElement("td");
    td11.rowSpan = "4";
    let img = document.createElement("img");
    img.src = "../../images/costume/costume_" + thisCostume["id"] + ".jpg";
    img.loading = "lazy";
    td11.appendChild(img);
    tr1.appendChild(td11);
    let td12 = document.createElement("td");
    td12.textContent = thisCostume["name"];
    tr1.appendChild(td12);
    table.appendChild(tr1);

    // 2行目
    let tr2 = document.createElement("tr");
    let td22 = document.createElement("td");
    td22.innerHTML = yakuwariToString(thisCostume["percent"]);
    tr2.appendChild(td22);
    table.appendChild(tr2);

    // 3行目
    let tr3 = document.createElement("tr");
    let td32 = document.createElement("td");
    td32.innerHTML = parameterToString(thisCostume["parameter"]);
    tr3.appendChild(td32);
    table.appendChild(tr3);

    // 4行目
    let tr4 = document.createElement("tr");
    let td42 = document.createElement("td");
    td42.innerHTML = exToString(thisCostume["ex"]);
    tr4.appendChild(td42);
    table.appendChild(tr4);

    return table;
}

function makeList() {

    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_costume-box";
    
    // テーブル本体を作成
    let resultCount = 0;
    for (let i = (costumeJson.length - 1); i >= 0; i--) {
        if (filter(costumeJson[i]) == true) {
            
            resultCount++;
            
            // flexitemを生成
            let flexitem = document.createElement("div");
            flexitem.className = "flex_costume-item";
            
            // tableを生成
            let table = makeInnerTable(costumeJson[i]);

            // tableをflexitemの子要素に追加
            flexitem.appendChild(table);
            // flexitemをflexboxの子要素に追加
            flexbox.appendChild(flexitem);
        }
    }
    // 生成したflexboxを追加する
    document.getElementById("mainbox").replaceChildren(flexbox);
    
    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);
}

// 強調する基準
const percentBorder = 15
const totalParameterBorder = 6000
// 初期化
let charaArray = [];
let yakuwariArray = [];
let percentSelection = ["", ""];
let parameterSelectionArray = [
    ["", "", ""],
    ["", "", ""]
];
let exSelection = "";
makeList();