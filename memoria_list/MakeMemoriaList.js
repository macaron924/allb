function addMemoriaList() {
    // flexboxを生成
    let flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // テーブル本体を作成
    for (let i = 0; i < memoriaJson.length; i++) {

        // flexitemを生成
        let flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../images/memoria/memoria_${memoriaJson[i]['id']}.jpg" loading="lazy"><br>${memoriaJson[i]['name']}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

document.getElementById('list').appendChild(addMemoriaList());