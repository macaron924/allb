$(".category").click(function () {//タイトル要素をクリックしたら
	let findElm = $(this).next(".flex_chara-btn-box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass('close');// closeクラスを付与
	$(this).toggleClass('close');// 自身にもcloseクラスを付与
});

$("#chara-open-btn").click(function () { // キャラ選択表示ボタンがクリックされたら
    $(this).toggleClass('active'); // 自身にactiveクラスを付与
    $("#chara_list").toggleClass('active'); // chara_listにactiveクラスを付与(リストopen)
});

$(".select-btn").click(function () { // キャラ選択ボタンがクリックされたら
    $(this).toggleClass('active'); // 自身にactiveクラスを付与(色付け)
});

$("#mode-check").click(function () { // モード選択ボタンがクリックされたら
    onlymode = document.getElementById("mode-check").checked; // onlymodeに変数代入
    filter(); // 即座にfilter実行
});

// キャラ選択ボタンが押された時
function charaButtonPushAction(charaId) { 
    let i = existInSelection(charaId); // 押したものがあるかどうか、あれば位置を返す
    if (i >= 0) { // あった
        selectionArray.splice(i, 1); // それを削除
    } else { // 無かった(-1だった)
        selectionArray.push(charaId); // 追加
    }
    filter();
}

// 指定したキャラが既に選択されてるかどうか
function existInSelection(charaId) {
    for (let i = 0; i < selectionArray.length; i++) {
        if (charaId == selectionArray[i]) return i; // あればその位置を返す
    }
    return -1; // 無ければ-1を返す
}

// 選択したキャラがそのメモリアに全員いるか
function searchFromArray(memoriaCharaArray) {

    // 配列の長さが0ならtrue
    if (selectionArray.length == 0) return true;

    // 選択キャラ"のみ"のメモリアを探すモードオンの時
    if (onlymode == true) {
        // 選択数とメモリアキャラ数が一致しないときfalse
        if (memoriaCharaArray.length != selectionArray.length) return false;
    }

    // 各メモリアに対し，指定キャラが見つからないときfalse
    for (let j = 0; j < selectionArray.length; j++) {
        let flag = false
        for (let i = 0; i < memoriaCharaArray.length; i++) {
            if (selectionArray[j] == memoriaCharaArray[i]) {
                flag = true;
                break;
            }
        }
        if (flag == false) return false;
    }
    return true;
}

// メモリアキャラのサムネ取得
function getCharaImg(memoriaCharaArray) {

    // td要素を生成
    let tdChara = document.createElement('td');

    // キャラサムネ追加
    for (let i = 0; i < memoriaCharaArray.length; i++) {

        // サムネ画像要素の追加
        let img = document.createElement('img');
        img.src = "../../images/chara/chara_" + memoriaCharaArray[i] + ".png"
        img.height = 80;
        img.loading = "lazy";

        // td要素内に追加
        tdChara.appendChild(img);
    }

    return tdChara;
}

// 検索条件変更時フィルターする
function filter() {

    // 検索結果件数を保存する変数
    let resultCount = 0;

    for (let i = 0; i < memoriaJsonCopy.length; i++) {

        // メモリアキャラ取得
        const memoriaCharaArray = memoriaJsonCopy[i]['chara'];
        // 対応tr参照
        const tr = memoriaJsonCopy[i]["tr"]

        if (searchFromArray(memoriaCharaArray) == true) {
            // 検索結果件数カウント
            resultCount++;
            // 表示
            tr.style.display = ''
        } else {
            // 非表示
            tr.style.display = 'none'
        }
    }

    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

// テーブル作成
function makeTable() {
    
    // table要素を生成
    let table = document.createElement('table');
    
    // ヘッダーを作成
    let tr = document.createElement('tr');
    // td要素を生成
    let thId = document.createElement('th');
    let thName = document.createElement('th');
    let thChara = document.createElement('th');
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
    
    // 検索結果件数を保存する変数
    let resultCount = 0;
    
    // テーブル本体を作成
    for (let i = 0; i < memoriaJsonCopy.length; i++) {
        
        // メモリアキャラ取得
        memoriaCharaArray = memoriaJsonCopy[i]['chara'];
        
        // 検索結果件数カウント
        resultCount++;
        
        // tr要素を生成
        let tr = document.createElement('tr');
        // td要素を生成
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdChara = document.createElement('td');
        // サムネ画像要素の追加
        let img = document.createElement('img');
        img.src = "../../images/memoria/memoria_" + memoriaJsonCopy[i]['id'] + ".png"
        img.height = 80;
        img.loading = "lazy";
        // td要素内にテキストを追加
        tdId.appendChild(img);
        tdName.textContent = memoriaJsonCopy[i]['name'];
        tdChara = getCharaImg(memoriaCharaArray);
        // td要素をtr要素の子要素に追加
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdChara);
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);
        
        memoriaJsonCopy[i]["tr"] = tr;
    }
    // 生成したtable要素を追加する
    document.getElementById('maintable').replaceChildren(table);
    
    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

// 初期化
let memoriaJsonCopy = JSON.parse(JSON.stringify(memoriaJson));
for (let i = 0; i < memoriaJsonCopy.length; i++) {
    memoriaJsonCopy[i]["tr"] = "";
}
makeTable();
let selectionArray = [];
let onlymode = false