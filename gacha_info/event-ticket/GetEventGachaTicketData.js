function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]['id'] == id) return memoriaJson[i]['name'];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    let flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // 本体を作成
    for (let i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        let flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.jpg" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    for (let i = eventGachaTicketJson.length - 1; i >= 0; i--) {
        let caption = `<h3>▼${eventGachaTicketJson[i]['name']}</h3>`;
        document.getElementById('ticket-lineup').insertAdjacentHTML('beforeend', caption);
        document.getElementById('ticket-lineup').appendChild(addMemoriaList(eventGachaTicketJson[i]['lineup']));
    }
}

addLineup()