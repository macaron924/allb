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

function hojoFilter(hojoName) {
  var tag = getHojoSkillInfoFromName(hojoName, 'tag');
  if (tag == "") return true;
  var trueCount = 0;
  for (var j = 0; j < hojoSelectionArray.length; j++) {
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

function effectUpFilter(skillName) {
  if (effectUpSelection == "") return true;
  var tag = getSkillInfoFromName(skillName, 'tag');
  if (tag == "") return true;
  for (var i = 0; i < tag.length; i++) {
    if (tag[i][0] == effectUpSelection) {
      return true;
    }
  }
  return false;
}

function effectFilter(skillName) {
  var tag = getSkillInfoFromName(skillName, 'tag');
  if (tag == "") return true;
  var trueCount = 0;
  for (var j = 0; j < effectSelectionArray.length; j++) {
    for (var i = 0; i < tag.length; i++) {
      if ((effectSelectionArray[j][0] == "") && (stringToNumber(tag[i][1]) >= effectSelectionArray[j][1])) {
        trueCount++;
        break;
      } else if ((tag[i][0] == effectSelectionArray[j][0]) && (stringToNumber(tag[i][1]) >= effectSelectionArray[j][1])) {
        trueCount++;
        break;
      }
    }
  }
  if (trueCount == effectSelectionArray.length) return true;
  return false;
}

function damageFilter(skillName) {
  if (stringToNumber(damageSelection) == 0) return true;
  var tag = getSkillInfoFromName(skillName, 'tag');
  if (tag == "") return true;
  for (var i = 0; i < tag.length; i++) {
    if (tag[i][0].includes('ダメージ')) {
      if (stringToNumber(tag[i][1]) >= damageSelection) return true;
      else return false;
    }
  }
  return false;
}

function healFilter(skillName) {
  if (stringToNumber(healSelection) == 0) return true;
  var tag = getSkillInfoFromName(skillName, 'tag');
  if (tag == "") return true;
  for (var i = 0; i < tag.length; i++) {
    if (tag[i][0].includes('回復')) {
      if (stringToNumber(tag[i][1]) >= healSelection) return true;
      else return false;
    }
  }
  return false;
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

function yakuwariFilter(skillName) {
  if (yakuwariArray.length == 0) return true;
  var yakuwariNumber = getSkillInfoFromName(skillName, 'yakuwari')
  for (var i = 0; i < yakuwariArray.length; i++) {
    if (yakuwariNumber == yakuwariArray[i]) return true;
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

function filter(skillArray) {
  var skillName = skillArray[modeSelection];
  if (yakuwariFilter(skillName) == false) return false;
  if (rangeFilter(skillName) == false) return false;
  if (damageFilter(skillName) == false) return false;
  if (healFilter(skillName) == false) return false;
  if (effectFilter(skillName) == false) return false;
  if (effectUpFilter(skillName) == false) return false;
  if (modeSelection == 1) {
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

function getSkillInfoFromName(skillName, option) {
  for (var i = 0; i < skillJson.length; i++) {
    if (skillName == skillJson[i]['name']) return skillJson[i][option];
  }
  return "";
}

function createSkillDetailFromName(skillName) {
  if (skillName == "") return "";
  return tagToString(getSkillInfoFromName(skillName, 'tag'));
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
  for (var i = (memoriaJson.length - 1); i >= 0; i--) {
    for (var j = 0; j < memoriaJson[i]['skill'].length; j++) {
      if (filter(memoriaJson[i]['skill'][j]) == true) {
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
        img.src = "../images/memoria/memoria_" + memoriaJson[i]['id'] + ".png";
        img.height = 80;
        // td要素内にテキストを追加
        tdId.appendChild(img);
        tdName.textContent = memoriaJson[i]['name'];
        if (modeSelection == 0 || dualDisplay == true) {
          tdVshugeName.classList.add('skill_name');
          tdVshugeName.innerHTML = "<nobr>" + memoriaJson[i]['skill'][j][0] + "</nobr><br>" + getSkillInfoFromName(memoriaJson[i]['skill'][j][0], 'effect_detail');
          tdVshugeDetail.innerHTML = createSkillDetailFromName(memoriaJson[i]['skill'][j][0]);
        }
        if (modeSelection == 1 || dualDisplay == true) {
          tdLmName.classList.add('skill_name');
          tdLmName.innerHTML =  "<nobr>" + memoriaJson[i]['skill'][j][1] + "</nobr><br>" + getSkillInfoFromName(memoriaJson[i]['skill'][j][1], 'effect_detail');
          tdLmDetail.innerHTML = createSkillDetailFromName(memoriaJson[i]['skill'][j][1]);
          tdHojoName.classList.add('skill_name');
          tdHojoName.innerHTML =  "<nobr>" + memoriaJson[i]['skill'][j][2] + "</nobr><br>" + getHojoSkillInfoFromName(memoriaJson[i]['skill'][j][2], 'effect_detail');
          tdHojoDetail.innerHTML = createHojoSkillDetailFromName(memoriaJson[i]['skill'][j][2]);
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