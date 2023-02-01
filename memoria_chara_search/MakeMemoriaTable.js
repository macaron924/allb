$(".select-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与
});

function charaButtonPushAction(charaId) {
  var i = existInSelection(charaId);
  if (i >= 0) {
    selectionArray.splice(i, 1);
  } else {
    selectionArray.push(charaId);
  }
  makeTable(selectionArray);
}

function existInSelection(charaId) {
  for (var i = 0; i < selectionArray.length; i++) {
    if (charaId == selectionArray[i]) return i;
  }
  return -1;
}

function searchFromArray(charaId, array) {
  // 初期化の0指定なら問答無用true
  if (charaId.length == 0) return true;
  // 各メモリアに対し，指定キャラが見つかればtrue
  var trueCount = 0;
  for (var j = 0; j < charaId.length; j++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == charaId[j]) {
        trueCount++;
        break;
      }
    }
  }
  if (trueCount == charaId.length) return true;
  return false;
}

function getCharaName(array) {
  var stringArray = "";
  stringArray += charaJson[array[0]-1]['charaName'];
  for (var i = 1; i < array.length; i++) {
    stringArray += (", " + charaJson[array[i]-1]['charaName']);
  }
  return stringArray;
}

function getCharaImg(array) {
  var tdChara = document.createElement('td');
  for (var i = 0; i < array.length; i++) {
    // サムネ画像要素の追加
    var img = document.createElement('img');
    img.src = "../img/chara_img/chara_" + array[i] + ".png"
    img.height = 80;
    tdChara.appendChild(img);
  }
  return tdChara;
}

function makeTable(charId) {

  // table要素を生成
  var table = document.createElement('table');
  
  // ヘッダーを作成
  var tr = document.createElement('tr');
  // td要素を生成
  var thId = document.createElement('th');
  var thName = document.createElement('th');
  var thChara = document.createElement('th');
  // th要素内にテキストを追加
  thId.textContent = "サムネイル";
  thName.textContent = "メモリア名";
  thChara.textContent = "イラストキャラ";
  // th要素をtr要素の子要素に追加
  tr.appendChild(thId);
  tr.appendChild(thName);
  tr.appendChild(thChara);
  // tr要素をtable要素の子要素に追加
  table.appendChild(tr);
  
  // テーブル本体を作成
  for (var i = 0; i < jsonCopy.length; i++) {
    array = jsonCopy[i]['chara'];
    if (searchFromArray(charId, array) == true) {
      // tr要素を生成
      var tr = document.createElement('tr');
      // td要素を生成
      var tdId = document.createElement('td');
      var tdName = document.createElement('td');
      var tdChara = document.createElement('td');
      // サムネ画像要素の追加
      var img = document.createElement('img');
      img.src = "../img/memoria_img/memoria_" + jsonCopy[i]['id'] + ".png"
      img.height = 80;
      // td要素内にテキストを追加
      tdId.appendChild(img);
      tdName.textContent = jsonCopy[i]['name'];
      //tdChara.textContent = getCharaName(array);
      tdChara = getCharaImg(array);
      // td要素をtr要素の子要素に追加
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdChara);
      // tr要素をtable要素の子要素に追加
      table.appendChild(tr);
    }
  }
  // 生成したtable要素を追加する
  document.getElementById('maintable').replaceChildren(table);
}

// 初期化
var jsonCopy = JSON.parse(JSON.stringify(json));
var selectionArray = [];
makeTable([]);