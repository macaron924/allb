$("#menu-open-btn").click(function () { // キャラ選択表示ボタンがクリックされたら
    $(this).toggleClass('active'); // 自身にactiveクラスを付与
    $("#filter-menu_content").toggleClass('active'); // chara_listにactiveクラスを付与(リストopen)
});

$(".select-btn").click(function () { // 選択ボタンがクリックされたら
    $(this).toggleClass('active'); // 自身にactiveクラスを付与(色付け)
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
});

$("#filter-btn").click(function () { // フィルターボタンがクリックされたら
    $("#filter-menu").toggleClass('active'); // filter-menuにactiveクラスを付与
});

// 実行ボタンを押した時
function runButtonPushAction() {

    // 現在の条件選択を読み取り
    effectSelectionArray = [];
    hojoSelectionArray = [];
    modeSelection = parseInt(document.getElementById("mode").value);
    dualDisplay = document.getElementById("dual-display").checked;
    damageSelection = stringToNumber(document.getElementById("damage").value);
    healSelection = stringToNumber(document.getElementById("heal").value);
    effectSelectionArray.push([document.getElementById("effect1-type").value, stringToNumber(document.getElementById("effect1-value").value)]);
    effectSelectionArray.push([document.getElementById("effect2-type").value, stringToNumber(document.getElementById("effect2-value").value)]);
    effectUpSelection = document.getElementById("effect-up").value;
    hojoSelectionArray.push([document.getElementById("hojo1-type").value, stringToNumber(document.getElementById("hojo1-value").value)]);
    hojoSelectionArray.push([document.getElementById("hojo2-type").value, stringToNumber(document.getElementById("hojo2-value").value)]);

    skillFilter(); // スキル側のフィルター実行
    hojoFilter(); // 補助スキル側のフィルター実行
    filter();
    document.getElementById("filter-btn").className = "";
    document.getElementById("filter-btn").value = "反映済み";
}

function stringToNumber(str) {
    if (str == "") return 0;
    if (str == "小") return 1;
    if (str == "中") return 2;
    if (str == "大") return 3;
    if (str == "特大") return 4;
    if (str == "超特大") return 5;
    return -1;
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

function existInRangeArray(range) {
    for (var i = 0; i < rangeArray.length; i++) {
        if (range == rangeArray[i]) return i;
    }
    return -1;
}

function rangeButtonPushAction(range) {
    var i = existInRangeArray(range);
    if (i >= 0) {
        rangeArray.splice(i, 1);
    } else {
        rangeArray.push(range);
    }
}

function yakuwariFilter(yakuwari) {
    if (yakuwariArray.length == 0) return true;
    for (var i = 0; i < yakuwariArray.length; i++) {
        if (yakuwari == yakuwariArray[i]) return true;
    }
    return false;
}

function rangeFilter(skillName) {
    if (rangeArray.length == 0) return true;
    for (var i = 0; i < rangeArray.length; i++) {
        if (skillName.includes(rangeArray[i])) return true;
    }
    return false;
}

function damageFilter(skillInfo) {
    if (stringToNumber(damageSelection) == 0) return true;
    var tag = skillInfo['tag'];
    for (var i = 0; i < tag.length; i++) {
        if (tag[i]['fx'].includes('ダメージ')) {
            if (stringToNumber(tag[i]['val']) >= damageSelection) return true;
            else return false;
        }
    }
    return false;
}

function healFilter(skillInfo) {
    if (stringToNumber(healSelection) == 0) return true;
    var tag = skillInfo['tag'];
    for (var i = 0; i < tag.length; i++) {
        if (tag[i]['fx'].includes('回復')) {
            if (stringToNumber(tag[i]['val']) >= healSelection) return true;
            else return false;
        }
    }
    return false;
}

function effectFilter(skillInfo) {
    var tag = skillInfo['tag'];
    var trueCount = 0;
    for (var j = 0; j < effectSelectionArray.length; j++) {
        for (var i = 0; i < tag.length; i++) {
            if ((effectSelectionArray[j][0] == "") && (stringToNumber(tag[i]['val']) >= effectSelectionArray[j][1])) {
                trueCount++;
                break;
            } else if ((tag[i]['fx'] == effectSelectionArray[j][0]) && (stringToNumber(tag[i]['val']) >= effectSelectionArray[j][1])) {
                trueCount++;
                break;
            }
        }
    }
    if (trueCount == effectSelectionArray.length) return true;
    return false;
}

function effectUpFilter(skillInfo) {
    if (effectUpSelection == "") return true;
    var tag = skillInfo['tag'];
    for (var i = 0; i < tag.length; i++) {
        if (tag[i]['fx'] == effectUpSelection) {
            return true;
        }
    }
    return false;
}

// 各補助スキルの効果が条件に合うかどうかを判定する関数
function hojoEffectFilter(hojoInfo) {
    var tag = hojoInfo['tag'];
    for (var j = 0; j < hojoSelectionArray.length; j++) {
        var flag = false;
        if (hojoSelectionArray[j][0] == "" && hojoSelectionArray[j][1] == 0) { // 種別・効果量未指定のとき
            flag = true;
            break;
        }
        for (var i = 0; i < tag.length; i++) {
            if ((hojoSelectionArray[j][0] == "") && (stringToNumber(tag[i][2]) >= hojoSelectionArray[j][1])) { // 種別未指定かつ効果量が指定以上
                flag = true;
                break;
            }
            if ((tag[i][1] == hojoSelectionArray[j][0]) && (stringToNumber(tag[i][2]) >= hojoSelectionArray[j][1])) { // 種別一致かつ効果量が指定以上
                flag = true;
                break;
            }
        }
        if (flag == false) return false;
    }
    return true;
}

// 各補助スキルが条件に合うかどうかを判定し保持
function hojoFilter() {
    var hojoJsons = [hojoJsonCopy_attack, hojoJsonCopy_support, hojoJsonCopy_heal, hojoJsonCopy_command];
    for (var i = 0; i < hojoJsons.length; i++) {
        var hojoJson = hojoJsons[i];
        for (var j = 0; j < hojoJson.length; j++) {
            var hojoInfo = getHojoSkillInfoFromName(hojoJson[j]['name']);
            if (hojoEffectFilter(hojoInfo) == false) { // 補助スキル効果のフィルター
                hojoJson[j]['filter'] = false;
            } else {
                hojoJson[j]['filter'] = true;
            }
        }
    }
}

// 役割をもとに探索する対象を限定するための関数
function getSkillsFromYakuwari(yakuwari) {
    var skillJson;
    switch (yakuwari) {
        case 1:
            skillJson = skillJsonCopy_1;
            break;
        case 2:
            skillJson = skillJsonCopy_2;
            break;
        case 3:
            skillJson = skillJsonCopy_3;
            break;
        case 4:
            skillJson = skillJsonCopy_4;
            break;
        case 5:
            skillJson = skillJsonCopy_5;
            break;
        case 6:
            skillJson = skillJsonCopy_6;
            break;
        case 7:
            skillJson = skillJsonCopy_7;
            break;
        default:
            skillJson = "";
    }
    return skillJson;
}

// 選択してる役割のスキルのみ、各スキルが条件に合うかどうかを判定し保持
function skillFilter() {
    var yakuwariArray_copy;
    if (yakuwariArray.length == 0) {
        yakuwariArray_copy = [1, 2, 3, 4, 5, 6, 7];
    } else {
        yakuwariArray_copy = yakuwariArray;
    }
    for (var i = 0; i < yakuwariArray_copy.length; i++) {
        var skillJson = getSkillsFromYakuwari(yakuwariArray_copy[i]); // 役割をもとに探索する対象を限定する
        if (skillJson == "") break;

        for (var j = 0; j < skillJson.length; j++) {
            var skillInfo = getSkillInfoFromName(yakuwariArray_copy[i], skillJson[j]['name']);
            if (damageFilter(skillInfo) == false) { // ダメージ種別と大きさのフィルター
                skillJson[j]['filter'] = false;
                continue;
            }
            if (healFilter(skillInfo) == false) { // 回復種別(自身か味方か)と大きさのフィルター
                skillJson[j]['filter'] = false;
                continue;
            }
            if (effectFilter(skillInfo) == false) { // バフ・デバフ種別と大きさのフィルター
                skillJson[j]['filter'] = false;
                continue;
            }
            if (effectUpFilter(skillInfo) == false) { // 効果量・範囲アップの種別フィルター
                skillJson[j]['filter'] = false;
                continue;
            }
            skillJson[j]['filter'] = true; // 全部クリアの場合だけ真
        }
    }
}
/*
// 個別の条件をまとめて真偽を返す関数
function allFilter(yakuwari, skillArray) {

    // まず役割でフィルター
    if (yakuwariFilter(yakuwari) == false) return false;

    // 次にスキル効果範囲
    var skillName = skillArray[modeSelection];
    if (rangeFilter(skillName) == false) return false;

    // スキル効果内容
    var skillInfo = getSkillInfoFromName(yakuwari, skillName); // スキル情報取得
    if (skillInfo['filter'] == false) return false; // スキル側のfilter参照して偽なら偽
    
    // レギマモードのとき補助スキルも
    if (modeSelection == 1) {
        var hojoName = skillArray[2];
        var hojoInfo = getHojoSkillInfoFromName(hojoName); // 補助スキル情報取得
        if (hojoInfo['filter'] == false) return false; // 補助スキル側のfilter参照して偽なら偽
    }

    // 全ての条件をクリアした場合のみ真
    return true;
}*/

// 個別の条件をまとめて真偽を返す関数
function allFilter(yakuwari, skillArray, skillRefArray) {

    // まず役割でフィルター
    if (yakuwariFilter(yakuwari) == false) return false;

    // 次にスキル効果範囲
    var skillName = skillArray[modeSelection];
    if (rangeFilter(skillName) == false) return false;

    // スキル効果内容
    var skillInfo = skillRefArray[modeSelection]; // スキル情報取得
    if (skillInfo['filter'] == false) return false; // スキル側のfilter参照して偽なら偽
    
    // レギマモードのとき補助スキルも
    if (modeSelection == 1) {
        var hojoInfo = skillRefArray[2]; // 補助スキル情報取得
        if (hojoInfo['filter'] == false) return false; // 補助スキル側のfilter参照して偽なら偽
    }

    // 全ての条件をクリアした場合のみ真
    return true;
}

// 役割とスキル名をもとに情報を取得
function getSkillInfoFromName(yakuwari, skillName) {
    var skillJson = getSkillsFromYakuwari(yakuwari); // 役割をもとに探索する対象を限定する
    if (skillJson == "") return "";
    for (var i = 0; i < skillJson.length; i++) { // 名前が一致するスキルを探す
        if (skillName == skillJson[i]['name']) return skillJson[i]; // 名前が一致したらそれを返す
    }
    return "";
}

// 頭文字と補助スキル名をもとに情報を取得
function getHojoSkillInfoFromName(skillName) {
    var hojoJson;
    var hojoPrefix = skillName[0]
    switch (hojoPrefix) { // 頭文字をもとに探索する対象を限定する
        case "攻":
            hojoJson = hojoJsonCopy_attack;
            break;
        case "援":
            hojoJson = hojoJsonCopy_support;
            break;
        case "回":
            hojoJson = hojoJsonCopy_heal;
            break;
        case "コ":
            hojoJson = hojoJsonCopy_command;
            break;
        default:
            hojoJson = "";
    }
    for (var i = 0; i < hojoJson.length; i++) { // 名前が一致するスキルを探す
        if (skillName == hojoJson[i]['name']) return hojoJson[i]; // 名前が一致したらそれを返す
    }
    return "";
}

// タグから文字列に(スキル)
function skillTagToString(tag) {
    var str = "";
    for (var i = 0; i < tag.length; i++) {
        if (i != 0) str += "<br>";
        str += tag[i]['fx'];
        str += "・";
        str += tag[i]['val'];
    }
    return str;
}

// スキル詳細を生成
function createSkillDetailFromName(tag) {
    if (tag == "") return "";
    return skillTagToString(tag);
}

// タグから文字列に(補助)
function hojoTagToString(tag) {
    var str = "";
    for (var i = 0; i < tag.length; i++) {
        if (i != 0) str += "<br>";
        for (var j = 0; j < tag[i].length; j++) {
            if (j != 0) str += "・";
            str += tag[i][j];
        }
    }
    return str;
}

// 補助スキル詳細を生成
function createHojoSkillDetailFromName(tag) {
    if (tag == "") return "";
    return hojoTagToString(tag);
}

// 実行ボタン押すとフィルターする
function filter() {

    if (dualDisplay == true) {
        document.getElementById('maintable').className = "all";
    } else {
        switch (modeSelection) {
            case 0:
                document.getElementById('maintable').className = "vshuge";
                break;
            case 1:
                document.getElementById('maintable').className = "lm";
                break;
            default:
                document.getElementById('maintable').className = "all";
        }
    }

    // 検索結果件数を保存する変数
    var resultCount = 0;

    for (var i = 0; i < memoriaJsonCopy.length; i++) {
        for (var j = 0; j < memoriaJsonCopy[i]['skill'].length; j++) {

            var yakuwari = memoriaJsonCopy[i]['yakuwari'][j];
            var skill = memoriaJsonCopy[i]['skill'][j];
            var skillRef = memoriaJsonCopy[i]['skillRef'][j];
    
            // 対応tr参照
            const tr = memoriaJsonCopy[i]["tr"][j]
    
            if (allFilter(yakuwari, skill, skillRef)/*allFilter(yakuwari, skill)*/ == true) {
                // 検索結果件数カウント
                resultCount++;
                // 表示
                tr.style.display = ''
            } else {
                // 非表示
                tr.style.display = 'none'
            }
        }
    }

    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

// テーブル作成
function makeTable() {

    // table要素を生成
    var table = document.createElement('table');
    
    // ヘッダーを作成
    var tr = document.createElement('tr');
    // td要素を生成
    var thId = document.createElement('th');
    var thName = document.createElement('th');
    var thVshugeName = document.createElement('th');
    var thVshugeDetail = document.createElement('th');
    var thLmName = document.createElement('th');
    var thLmDetail = document.createElement('th');
    var thHojoName = document.createElement('th');
    var thHojoDetail = document.createElement('th');
    // 各スキル列のclass
    thVshugeName.className = "vshugeRow";
    thVshugeDetail.className = "vshugeRow";
    thLmName.className = "lmRow";
    thLmDetail.className = "lmRow";
    thHojoName.className = "hojoRow";
    thHojoDetail.className = "hojoRow";
    // th要素内にテキストを追加
    thId.textContent = "サムネイル";
    thName.textContent = "メモリア名";
    thVshugeName.textContent = "対ヒュージスキル名";
    thVshugeDetail.textContent = "対ヒュージスキル効果";
    thLmName.textContent = "レギオンマッチスキル名";
    thLmDetail.textContent = "レギオンマッチスキル効果";
    thHojoName.textContent = "レギオンマッチ補助スキル名";
    thHojoDetail.textContent = "レギオンマッチ補助スキル効果";
    // th要素をtr要素の子要素に追加
    tr.appendChild(thId);
    tr.appendChild(thName);
    tr.appendChild(thVshugeName);
    tr.appendChild(thVshugeDetail);
    tr.appendChild(thLmName);
    tr.appendChild(thLmDetail);
    tr.appendChild(thHojoName);
    tr.appendChild(thHojoDetail);
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // 検索結果件数を保存する変数
    var resultCount = 0;
    
    // テーブル本体を作成
    for (var i = (memoriaJsonCopy.length - 1); i >= 0; i--) {
        for (var j = 0; j < memoriaJsonCopy[i]['skill'].length; j++) {

            var yakuwari = memoriaJsonCopy[i]['yakuwari'][j];
            var skill = memoriaJsonCopy[i]['skill'][j];

            // 検索結果件数カウント
            resultCount++;

            // tr要素を生成
            var tr = document.createElement('tr');
            // td要素を生成
            var tdId = document.createElement('td');
            var tdName = document.createElement('td');
            var tdVshugeName = document.createElement('td');
            var tdVshugeDetail = document.createElement('td');
            var tdLmName = document.createElement('td');
            var tdLmDetail = document.createElement('td');
            var tdHojoName = document.createElement('td');
            var tdHojoDetail = document.createElement('td');
            // 各スキル列のclass
            tdVshugeName.className = "vshugeRow";
            tdVshugeDetail.className = "vshugeRow";
            tdLmName.className = "lmRow";
            tdLmDetail.className = "lmRow";
            tdHojoName.className = "hojoRow";
            tdHojoDetail.className = "hojoRow";
            // サムネ画像要素の追加
            var img = document.createElement('img');
            img.src = "../../images/memoria/memoria_" + memoriaJsonCopy[i]['id'] + ".png";
            img.height = 80;
            img.loading = "lazy";
            // 画像
            tdId.appendChild(img);
            // メモリア名
            tdName.textContent = memoriaJsonCopy[i]['name'];
            // 対ヒュージスキル
            var vshuge = getSkillInfoFromName(yakuwari, skill[0]);
            tdVshugeName.classList.add('skill_name');
            if (vshuge == "") {
                tdVshugeName.innerHTML = "<nobr>" + skill[0] + "</nobr><br>" + "";
                tdVshugeDetail.innerHTML = "";
            } else {
                tdVshugeName.innerHTML = "<nobr>" + skill[0] + "</nobr><br>" + vshuge['effect_detail'];
                tdVshugeDetail.innerHTML = createSkillDetailFromName(vshuge['tag']);
            }
            // レギマスキル
            var lm = getSkillInfoFromName(yakuwari, skill[1]);
            tdLmName.classList.add('skill_name');
            if (lm == "") {
                tdLmName.innerHTML = "<nobr>" + skill[1] + "</nobr><br>" + "";
                tdLmDetail.innerHTML = "";
            } else {
                tdLmName.innerHTML = "<nobr>" + skill[1] + "</nobr><br>" + lm['effect_detail'];
                tdLmDetail.innerHTML = createSkillDetailFromName(lm['tag']);
            }
            // 補助スキル
            var hojo = getHojoSkillInfoFromName(skill[2]);
            tdHojoName.classList.add('skill_name');
            if (lm == "") {
                tdHojoName.innerHTML = "<nobr>" + skill[2] + "</nobr><br>" + "";
                tdHojoDetail.innerHTML = "";
            } else {
                tdHojoName.innerHTML = "<nobr>" + skill[2] + "</nobr><br>" + hojo['effect_detail'];
                tdHojoDetail.innerHTML = createHojoSkillDetailFromName(hojo['tag']);
            }
            // td要素をtr要素の子要素に追加
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdVshugeName);
            tr.appendChild(tdVshugeDetail);
            tr.appendChild(tdLmName);
            tr.appendChild(tdLmDetail);
            tr.appendChild(tdHojoName);
            tr.appendChild(tdHojoDetail);
            // tr要素をtable要素の子要素に追加
            table.appendChild(tr);
            
            memoriaJsonCopy[i]["skillRef"].push([vshuge, lm, hojo]);
            memoriaJsonCopy[i]["tr"].push(tr);
        }
    }
    // 生成したtable要素を追加する
    document.getElementById('maintable').replaceChildren(table);
    
    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

// 初期化
var memoriaJsonCopy = JSON.parse(JSON.stringify(memoriaJson));
for (var i = 0; i < memoriaJsonCopy.length; i++) {
    memoriaJsonCopy[i]["skillRef"] = []; // スキル参照先を追加
    memoriaJsonCopy[i]["tr"] = []; // tr参照先を追加
}

var skillJsonCopy_1 = JSON.parse(JSON.stringify(skillJson_1));
var skillJsonCopy_2 = JSON.parse(JSON.stringify(skillJson_2));
var skillJsonCopy_3 = JSON.parse(JSON.stringify(skillJson_3));
var skillJsonCopy_4 = JSON.parse(JSON.stringify(skillJson_4));
var skillJsonCopy_5 = JSON.parse(JSON.stringify(skillJson_5));
var skillJsonCopy_6 = JSON.parse(JSON.stringify(skillJson_6));
var skillJsonCopy_7 = JSON.parse(JSON.stringify(skillJson_7));
for (var i = 0; i < skillJsonCopy_1.length; i++) skillJsonCopy_1[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_2.length; i++) skillJsonCopy_2[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_3.length; i++) skillJsonCopy_3[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_4.length; i++) skillJsonCopy_4[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_5.length; i++) skillJsonCopy_5[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_6.length; i++) skillJsonCopy_6[i]["filter"] = true;
for (var i = 0; i < skillJsonCopy_7.length; i++) skillJsonCopy_7[i]["filter"] = true;

var hojoJsonCopy_attack = JSON.parse(JSON.stringify(hojoJson_attack));
var hojoJsonCopy_support = JSON.parse(JSON.stringify(hojoJson_support));
var hojoJsonCopy_heal = JSON.parse(JSON.stringify(hojoJson_heal));
var hojoJsonCopy_command = JSON.parse(JSON.stringify(hojoJson_command));
for (var i = 0; i < hojoJsonCopy_attack.length; i++) hojoJsonCopy_attack[i]["filter"] = true;
for (var i = 0; i < hojoJsonCopy_support.length; i++) hojoJsonCopy_support[i]["filter"] = true;
for (var i = 0; i < hojoJsonCopy_heal.length; i++) hojoJsonCopy_heal[i]["filter"] = true;
for (var i = 0; i < hojoJsonCopy_command.length; i++) hojoJsonCopy_command[i]["filter"] = true;

var modeSelection = 1;
var dualDisplay = true;
var yakuwariArray = [];
var rangeArray = [];
var damageSelection = 0;
var healSelection = 0;
var effectSelectionArray = [];
var effectUpSelection = "";
var hojoSelectionArray = [];
makeTable();