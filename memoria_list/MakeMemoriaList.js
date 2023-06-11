function addMemoriaList() {
    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // テーブル本体を作成
    for (var i = 0; i < memoriaJson.length; i++) {

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../images/memoria/memoria_${memoriaJson[i]['id']}.png"><br>${memoriaJson[i]['name']}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

document.getElementById('list').appendChild(addMemoriaList());