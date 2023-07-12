function getMemoriaName(id) {
    for (var i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]['id'] == id) return memoriaJson[i]['name'];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // テーブル本体を作成
    for (var i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.png" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    for (var i = eventGachaTicketJson.length - 1; i >= 0; i--) {
        var caption = `<h3>▼${eventGachaTicketJson[i]['name']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);
        document.getElementById('lineup').appendChild(addMemoriaList(eventGachaTicketJson[i]['lineup']));
    }
}

addLineup()