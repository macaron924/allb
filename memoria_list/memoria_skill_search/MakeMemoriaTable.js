$(".select-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与
});

$(".filter-btn").click(function () {//ボタンがクリックされたら
    $("#filter-menu").toggleClass('active');//filter-menuにactiveクラスを付与
});


function runButtonPushAction() {
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

    makeTable();
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

function hojoFilter(hojoName) {
    var tag = getHojoSkillInfoFromName(hojoName, 'tag');
    var trueCount = 0;
    var selectionCount = 0;
    for (var j = 0; j < hojoSelectionArray.length; j++) {
        if (hojoSelectionArray[j][0] != "" && hojoSelectionArray[j][1] != 0) selectionCount++;
        for (var i = 0; i < tag.length; i++) {
            if ((hojoSelectionArray[j][0] == "") && (stringToNumber(tag[i][2]) >= hojoSelectionArray[j][1])) {
                trueCount++;
                break;
            } else if ((tag[i][1] == hojoSelectionArray[j][0]) && (stringToNumber(tag[i][2]) >= hojoSelectionArray[j][1])) {
                trueCount++;
                break;
            }
        }
    }
    if (trueCount == effectSelectionArray.length) return true;
    return false;
}

function filter(yakuwari, skillArray) {

    var skillName = skillArray[modeSelection];
    var skillInfo = getSkillInfoFromName(yakuwari, skillName);

    if (yakuwariFilter(yakuwari) == false) return false;
    if (rangeFilter(skillName) == false) return false;
    if (damageFilter(skillInfo) == false) return false;
    if (healFilter(skillInfo) == false) return false;
    if (effectFilter(skillInfo) == false) return false;
    if (effectUpFilter(skillInfo) == false) return false;

    if (modeSelection == 1) {  // レギマモードのとき補助スキルも
        var hojoName = skillArray[2];
        if (hojoFilter(hojoName) == false) return false;
    }

    return true;
}

function tagToString(tag) {
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

function tag2ToString(tag) {
    if (tag == "") return "";
    var str = "";
    for (var i = 0; i < tag.length; i++) {
        if (i != 0) str += "<br>";
        str += tag[i]['fx'];
        str += "・";
        str += tag[i]['val'];
    }
    return str;
}

function getSkillInfoFromName(yakuwari, skillName) {
    var skillJson;
    switch (yakuwari) {
        case 1:
            skillJson = skillJson_1;
            break;
        case 2:
            skillJson = skillJson_2;
            break;
        case 3:
            skillJson = skillJson_3;
            break;
        case 4:
            skillJson = skillJson_4;
            break;
        case 5:
            skillJson = skillJson_5;
            break;
        case 6:
            skillJson = skillJson_6;
            break;
        case 7:
            skillJson = skillJson_7;
            break;
        default:
            skillJson = "";
    }
    if (skillJson == "") return "";
    for (var i = 0; i < skillJson.length; i++) {
        if (skillName == skillJson[i]['name']) return skillJson[i];
    }
    return "";
}

function createSkillDetailFromName(tag) {
    if (tag == "") return "";
    return tag2ToString(tag);
}

function getHojoSkillInfoFromName(skillName, option) {
    for (var i = 0; i < hojoJson.length; i++) {
        if (skillName == hojoJson[i]['name']) return hojoJson[i][option];
    }
    return "";
}

function createHojoSkillDetailFromName(skillName) {
    if (skillName == "") return "";
    return tagToString(getHojoSkillInfoFromName(skillName, 'tag'));
}

function makeTable() {

    // table要素を生成
    var table = document.createElement('table');
    
    // ヘッダーを作成
    var tr = document.createElement('tr');
    // td要素を生成
    var thId = document.createElement('th');
    var thName = document.createElement('th');
    if (modeSelection == 0 || dualDisplay == true) {
        var thVshugeName = document.createElement('th');
        var thVshugeDetail = document.createElement('th');
    }
    if (modeSelection == 1 || dualDisplay == true) {
        var thLmName = document.createElement('th');
        var thLmDetail = document.createElement('th');
        var thHojoName = document.createElement('th');
        var thHojoDetail = document.createElement('th');
    }
    // th要素内にテキストを追加
    thId.textContent = "サムネイル";
    thName.textContent = "メモリア名";
    if (modeSelection == 0 || dualDisplay == true) {
        thVshugeName.textContent = "対ヒュージスキル名";
        thVshugeDetail.textContent = "対ヒュージスキル効果";
    }
    if (modeSelection == 1 || dualDisplay == true) {
        thLmName.textContent = "レギオンマッチスキル名";
        thLmDetail.textContent = "レギオンマッチスキル効果";
        thHojoName.textContent = "レギオンマッチ補助スキル名";
        thHojoDetail.textContent = "レギオンマッチ補助スキル効果";
    }
    // th要素をtr要素の子要素に追加
    tr.appendChild(thId);
    tr.appendChild(thName);
    if (modeSelection == 0 || dualDisplay == true) {
        tr.appendChild(thVshugeName);
        tr.appendChild(thVshugeDetail);
    }
    if (modeSelection == 1 || dualDisplay == true) {
        tr.appendChild(thLmName);
        tr.appendChild(thLmDetail);
        tr.appendChild(thHojoName);
        tr.appendChild(thHojoDetail);
    }
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);
    
    // テーブル本体を作成
    var count = 0;
    for (var i = (memoriaJson.length - 1); i >= 0; i--) {
        for (var j = 0; j < memoriaJson[i]['skill'].length; j++) {

            var yakuwari = memoriaJson[i]['yakuwari'][j];
            var skill = memoriaJson[i]['skill'][j];

            if (filter(yakuwari, skill) == true) {
                count++;

                // tr要素を生成
                var tr = document.createElement('tr');
                // td要素を生成
                var tdId = document.createElement('td');
                var tdName = document.createElement('td');
                if (modeSelection == 0 || dualDisplay == true) {
                    var tdVshugeName = document.createElement('td');
                    var tdVshugeDetail = document.createElement('td');
                }
                if (modeSelection == 1 || dualDisplay == true) {
                    var tdLmName = document.createElement('td');
                    var tdLmDetail = document.createElement('td');
                    var tdHojoName = document.createElement('td');
                    var tdHojoDetail = document.createElement('td');
                }
                // サムネ画像要素の追加
                var img = document.createElement('img');
                img.src = "../../images/memoria/memoria_" + memoriaJson[i]['id'] + ".png";
                img.height = 80;
                img.loading = "lazy";
                // td要素内にテキストを追加
                tdId.appendChild(img);
                tdName.textContent = memoriaJson[i]['name'];
                if (modeSelection == 0 || dualDisplay == true) {

                    var vshuge = getSkillInfoFromName(yakuwari, skill[0]);
                    tdVshugeName.classList.add('skill_name');
                    if (vshuge == "") {
                        tdVshugeName.innerHTML = "<nobr>" + skill[0] + "</nobr><br>" + "";
                        tdVshugeDetail.innerHTML = "";
                    } else {
                        tdVshugeName.innerHTML = "<nobr>" + skill[0] + "</nobr><br>" + vshuge['effect_detail'];
                        tdVshugeDetail.innerHTML = createSkillDetailFromName(vshuge['tag']);
                    }
                }
                if (modeSelection == 1 || dualDisplay == true) {

                    var lm = getSkillInfoFromName(yakuwari, skill[1]);
                    tdLmName.classList.add('skill_name');
                    if (lm == "") {
                        tdLmName.innerHTML = "<nobr>" + skill[1] + "</nobr><br>" + "";
                        tdLmDetail.innerHTML = "";
                    } else {
                        tdLmName.innerHTML = "<nobr>" + skill[1] + "</nobr><br>" + lm['effect_detail'];
                        tdLmDetail.innerHTML = createSkillDetailFromName(lm['tag']);
                    }

                    tdHojoName.classList.add('skill_name');
                    tdHojoName.innerHTML = "<nobr>" + skill[2] + "</nobr><br>" + getHojoSkillInfoFromName(skill[2], 'effect_detail');
                    tdHojoDetail.innerHTML = createHojoSkillDetailFromName(skill[2]);
                }
                // td要素をtr要素の子要素に追加
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                if (modeSelection == 0 || dualDisplay == true) {
                    tr.appendChild(tdVshugeName);
                    tr.appendChild(tdVshugeDetail);
                }
                if (modeSelection == 1 || dualDisplay == true) {
                    tr.appendChild(tdLmName);
                    tr.appendChild(tdLmDetail);
                    tr.appendChild(tdHojoName);
                    tr.appendChild(tdHojoDetail);
                }
                // tr要素をtable要素の子要素に追加
                table.appendChild(tr);
            }
        }
    }
    // 生成したtable要素を追加する
    document.getElementById('maintable').replaceChildren(table);
    document.getElementById('resultCount').replaceChildren(count);
}

// 初期化
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