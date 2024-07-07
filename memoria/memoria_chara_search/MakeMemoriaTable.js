$(".category").click(function () {//タイトル要素をクリックしたら
    let findElm = $(this).next(".flex_chara-btn-box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).toggleClass("close");// closeクラスを付与
    $(this).toggleClass("close");// 自身にもcloseクラスを付与
});

$("#chara-open-btn").click(function () { // キャラ選択表示ボタンがクリックされたら
    $(this).toggleClass("active"); // 自身にactiveクラスを付与
    $("#chara_list").toggleClass("active"); // chara_listにactiveクラスを付与(リストopen)
});

$(".select-btn").click(function () { // キャラ選択ボタンがクリックされたら
    $(this).toggleClass("active"); // 自身にactiveクラスを付与(色付け)
});

$("#mode-check").click(function () { // モード選択ボタンがクリックされたら
    onlymode = document.getElementById("mode-check").checked; // onlymodeに変数代入
    filter(); // 即座にfilter実行
});

// イラストタイプ選択ボタンが押された時
function typeButtonPushAction(type) {
    for (let i = 0; i < typeSelectionArray.length; i++) { // 指定したタイプが既に選択されてるかどうか
        if (type == typeSelectionArray[i]) {
            typeSelectionArray.splice(i, 1); // あったらそれを削除
            filter();
            return i;
        }
    }
    typeSelectionArray.push(type); // 無かったら追加
    filter();
    return -1; // 無ければ-1を返す
}

// キャラ選択ボタンが押された時
function charaButtonPushAction(charaId) {
    for (let i = 0; i < charaSelectionArray.length; i++) { // 指定したキャラが既に選択されてるかどうか
        if (charaId == charaSelectionArray[i]) {
            charaSelectionArray.splice(i, 1); // あったらそれを削除
            filter();
            return i;
        }
    }
    charaSelectionArray.push(charaId); // 無かったら追加
    filter();
    return -1; // 無ければ-1を返す
}

// タイプでフィルター
function typeFilter(type) {
    if (typeSelectionArray.length == 0) return true;
    for (let i = 0; i < typeSelectionArray.length; i++) {
        if (type == typeSelectionArray[i]) return true;
    }
    return false;
}

// 選択したキャラがそのメモリアに全員いるか
function charaFilter(memoriaCharaArray) {

    // 配列の長さが0ならtrue
    if (charaSelectionArray.length == 0) return true;

    // 選択キャラ"のみ"のメモリアを探すモードオンの時
    if (onlymode == true) {
        // 選択数とメモリアキャラ数が一致しないときfalse
        if (memoriaCharaArray.length != charaSelectionArray.length) return false;
    }

    // 各メモリアに対し，指定キャラが見つからないときfalse
    for (let j = 0; j < charaSelectionArray.length; j++) {
        let flag = false
        for (let i = 0; i < memoriaCharaArray.length; i++) {
            if (charaSelectionArray[j] == memoriaCharaArray[i]) {
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
    let tdChara = document.createElement("td");

    // キャラサムネ追加
    for (let i = 0; i < memoriaCharaArray.length; i++) {

        // サムネ画像要素の追加
        let img = document.createElement("img");
        img.src = "../../images/chara/chara_" + memoriaCharaArray[i] + ".webp";
        img.className = "chara_img";
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

    for (let id in memoriaJsonCopy) {

        // メモリアキャラ取得
        let type = null;
        let memoriaCharaArray = null;
        if (mode == "lowrare") {
            type = "静止画";
            memoriaCharaArray = memoriaJsonCopy[id]["chara"];
        } else {
            type = memoriaJsonCopy[id]["illustration"]["type"];
            memoriaCharaArray = memoriaJsonCopy[id]["illustration"]["chara"];
        }
        // 対応tr参照
        const tr = memoriaJsonCopy[id]["tr"]

        let judge = false;

        if (typeFilter(type) == true) {
            if (charaFilter(memoriaCharaArray) == true) {
                judge = true;
            }
        }

        if (judge == true) {
            // 検索結果件数カウント
            resultCount++;
            // 表示
            tr.style.display = ""
        } else {
            // 非表示
            tr.style.display = "none"
        }
    }

    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);
}

// テーブル作成
function makeTable() {

    // table要素を生成
    let table = document.createElement("table");

    // ヘッダーを作成
    let tr = document.createElement("tr");
    // td要素を生成
    let thId = document.createElement("th");
    let thName = document.createElement("th");
    let thChara = document.createElement("th");
    // th要素内にテキストを追加
    thId.textContent = "画像";
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
    for (let id in memoriaJsonCopy) {

        // メモリアキャラ取得
        let memoriaCharaArray = null;
        if (mode == "lowrare") {
            memoriaCharaArray = memoriaJsonCopy[id]["chara"];
        } else {
            memoriaCharaArray = memoriaJsonCopy[id]["illustration"]["chara"];
        }

        // 検索結果件数カウント
        resultCount++;

        // tr要素を生成
        let tr = document.createElement("tr");
        // td要素を生成
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdChara = document.createElement("td");
        // サムネ画像要素の追加
        let img = document.createElement("img");
        if (mode == "lowrare") {
            img.src = "../../images/low-rare-memoria/low-rare-memoria_" + id + ".webp";
        } else {
            img.src = "../../images/memoria/memoria_" + id + ".webp";
        }
        img.className = "memoria_img";
        img.loading = "lazy";
        // td要素内にテキストを追加
        tdId.appendChild(img);
        tdName.textContent = memoriaJsonCopy[id]["name"];
        tdChara = getCharaImg(memoriaCharaArray);
        // リンク
        if (mode != "lowrare") {
            let p = document.createElement("p");
            let link = document.createElement("a");
            link.href = `../../memoria/detail/?memoriaID=${id}`;
            link.innerText = "詳細＞＞";
            p.appendChild(link);
            tdId.appendChild(p);
        }
        // td要素をtr要素の子要素に追加
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdChara);
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);

        memoriaJsonCopy[id]["tr"] = tr;
    }
    // 生成したtable要素を追加する
    document.getElementById("maintable").replaceChildren(table);

    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);
}

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const mode = params.get("mode");

// 初期化
let memoriaJsonCopy = null;
if (mode == "lowrare") {
    memoriaJsonCopy = JSON.parse(JSON.stringify(lrmemoriaJson));
    document.getElementById("low").classList.remove("active");
    document.getElementById("high").classList.add("active");
} else {
    memoriaJsonCopy = JSON.parse(JSON.stringify(memoriaJson));
}
for (let id in memoriaJsonCopy) {
    memoriaJsonCopy[id]["tr"] = "";
}
makeTable();
let charaSelectionArray = [];
let typeSelectionArray = [];
let onlymode = false
