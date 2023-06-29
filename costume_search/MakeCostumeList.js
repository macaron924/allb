$(".select-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与
});

$(".filter-btn").click(function () {//ボタンがクリックされたら
    $("#filter-menu").toggleClass('active');//filter-menuにactiveクラスを付与
});

$(".chara-open-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与
    $("#chara_list").toggleClass('active');//filter-menuにactiveクラスを付与
});

function runButtonPushAction() {
    parameterSelectionArray = [];
    percentSelection = document.getElementById("percent").value;
    parameterSelectionArray.push([document.getElementById("parameter1-type").value, parseInt(document.getElementById("parameter1-value").value)]);
    parameterSelectionArray.push([document.getElementById("parameter2-type").value, parseInt(document.getElementById("parameter2-value").value)]);
    exSelection = document.getElementById("ex").value;
    
    makeList();
}

function percentFilter(costume) {
    if (percentSelection == 0) return true;
    var percent = costume['percent'];
    if (percent == "") return true;
    if (percent >= percentSelection) return true;
    return false;
}

function parameterFilter(costume) {
    var tag = costume['parameter'];
    var trueCount = 0;
    for (var j = 0; j < parameterSelectionArray.length; j++) {
        for (var i = 0; i < tag.length; i++) {
            if ((parameterSelectionArray[j][0] == "") && (tag[i][1] >= parameterSelectionArray[j][1])) {
                trueCount++;
                break;
            } else if ((tag[i][0] == parameterSelectionArray[j][0]) && (tag[i][1] >= parameterSelectionArray[j][1])) {
                trueCount++;
                break;
            }
        }
    }
    if (trueCount == parameterSelectionArray.length) return true;
    return false;
}

function exFilter(costume) {
    if (exSelection == "") return true;
    var tag = costume['ex'];
    for (var i = 0; i < tag.length; i++) {
        if (tag[i][0] == exSelection) {
            return true;
        }
    }
    return false;
}

function yakuwariFilter(costume) {
    if (yakuwariArray.length == 0) return true;
    var yakuwariNumber = costume['yakuwari'];
    for (var i = 0; i < yakuwariArray.length; i++) {
        if (yakuwariNumber == yakuwariArray[i]) return true;
    }
    return false;
}

function charaFilter(costume) {
    if (charaArray.length == 0) return true;
    var charaNumber = costume['chara'];
    for (var i = 0; i < charaArray.length; i++) {
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
    for (var i = 0; i < yakuwariArray.length; i++) {
        if (yakuwari == yakuwariArray[i]) return i;
    }
    return -1;
}

function yakuwariButtonPushAction(yakuwari) {
    var i = existInYakuwariArray(yakuwari);
    if (i >= 0) {
        yakuwariArray.splice(i, 1);
    } else {
        yakuwariArray.push(yakuwari);
    }
}

function existInCharaArray(chara) {
    for (var i = 0; i < charaArray.length; i++) {
        if (chara == charaArray[i]) return i;
    }
    return -1;
}

function charaButtonPushAction(chara) {
    var i = existInCharaArray(chara);
    if (i >= 0) {
        charaArray.splice(i, 1);
    } else {
        charaArray.push(chara);
    }
}

function yakuwariToString(percent) {
    var str = percent + "%";
    if (percent >= percentBorder) str = "<span>" + str + "</span>";
    return str;
}

function parameterToString(paramArray) {
    var str = "";
    var totalParameter = 0;
    for (var i = 0; i < paramArray.length; i++) {
        if (i != 0) str += ", ";
        str += (paramArray[i][0] + "+" + paramArray[i][1]);
        totalParameter += paramArray[i][1];
    }
    if (totalParameter >= totalParameterBorder) str = "<span>" + str + "</span>";
    return str;
}

function exToString(exArray) {
    var str = "";
    for (var i = 0; i < exArray.length; i++) {
        if (i != 0) str += ", ";
        str += (exArray[i][0] + ":" + exArray[i][1] + "%");
    }
    if (str != "") str = "<span>" + str + "</span>";
    return str;
}

function makeInnerTable(thisCostume) {
    // tableを生成
    var table = document.createElement('table');
    
    // 1行目
    var tr1 = document.createElement('tr');
    var td11 = document.createElement('td');
    td11.rowSpan = "4";
    var img = document.createElement('img');
    img.src = "../images/costume/costume_" + thisCostume['id'] + ".png";
    img.loading = "lazy";
    td11.appendChild(img);
    tr1.appendChild(td11);
    var td12 = document.createElement('td');
    td12.textContent = thisCostume['name'];
    tr1.appendChild(td12);
    table.appendChild(tr1);

    // 2行目
    var tr2 = document.createElement('tr');
    var td22 = document.createElement('td');
    td22.innerHTML = yakuwariToString(thisCostume['percent']);
    tr2.appendChild(td22);
    table.appendChild(tr2);

    // 3行目
    var tr3 = document.createElement('tr');
    var td32 = document.createElement('td');
    td32.innerHTML = parameterToString(thisCostume['parameter']);
    tr3.appendChild(td32);
    table.appendChild(tr3);

    // 4行目
    var tr4 = document.createElement('tr');
    var td42 = document.createElement('td');
    td42.innerHTML = exToString(thisCostume['ex']);
    tr4.appendChild(td42);
    table.appendChild(tr4);

    return table;
}

function makeList() {

    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_costume-box";
    
    // テーブル本体を作成
    for (var i = (costumeJson.length - 1); i >= 0; i--) {
        if (filter(costumeJson[i]) == true) {
            // flexitemを生成
            var flexitem = document.createElement('div');
            flexitem.className = "flex_costume-item";
            
            // tableを生成
            var table = makeInnerTable(costumeJson[i]);

            // tableをflexitemの子要素に追加
            flexitem.appendChild(table);
            // flexitemをflexboxの子要素に追加
            flexbox.appendChild(flexitem);
        }
    }
    // 生成したflexboxを追加する
    document.getElementById('mainbox').replaceChildren(flexbox);
}

// 強調する基準
const percentBorder = 15
const totalParameterBorder = 3000
// 初期化
var charaArray = [];
var yakuwariArray = [];
var percentSelection = 0;
var parameterSelectionArray = [];
var exSelection = "";
makeList();