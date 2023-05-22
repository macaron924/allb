function getTicketData(ticketSelection) {
    for (var i = 0; i < exchangeTicketMemoriaJson.length; i++) {
        if (exchangeTicketMemoriaJson[i]['index'] == ticketSelection) return exchangeTicketMemoriaJson[i];
    }
    return "";
}

function addTopics(topicArray) {
    var topics = "";
    for (var i = 0; i < topicArray.length; i++) {
        topics += `<br>${topicArray[i]}`;
    }
    topics += `<br>`;
    return topics;
}

function changeBorder(color) {
    if (color == "") return "";
    return `class="border-${color}" `;
}

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
    
    // flexbox本体を作成
    for (var i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i][0];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img ${changeBorder(memoriaArray[i][1])}src="../../images/memoria/memoria_${id}.png"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getCharaName(charaID) {
    for (var i = 0; i < charaJson.length; i++) {
        if (charaJson[i]['charaID'] == charaID) return charaJson[i]['charaName'];
    }
    return "";
}

function getCostumeChara(id) {
    for (var i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]['id'] == id) return getCharaName(costumeJson[i]['chara']);
    }
    return "";
}

function getCostumeName(id) {
    for (var i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]['id'] == id) return costumeJson[i]['name'];
    }
    return "";
}

function addCostumeList(costumeArray) {
    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // flexbox本体を作成
    for (var i = 0; i < costumeArray.length; i++) {
        id = costumeArray[i][0];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img ${changeBorder(costumeArray[i][1])}src="../../images/costume/costume_${id}.png"><br>${getCostumeChara(id)} / ${getCostumeName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    var caption = "<h2>交換ラインナップ</h2>";
    document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);
    var topics = addTopics(thisTicket['lineup']['topic']);
    document.getElementById('lineup').insertAdjacentHTML('beforeend', topics);
    for (var i = 0; i < thisTicket['lineup']['else'].length; i++) {
        var caption = `<br><h3>${thisTicket['lineup']['else'][i]['caption']} :</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);
        document.getElementById('lineup').appendChild(addMemoriaList(thisTicket['lineup']['else'][i]['memoria']));
        if (thisTicket['lineup']['else'][i]['costume'].length != 0){
            document.getElementById('lineup').appendChild(addCostumeList(thisTicket['lineup']['else'][i]['costume']));
        }
    }
}

function addGetWay() {
    var caption = "<h2>入手方法</h2>";
    document.getElementById('getWay').insertAdjacentHTML('beforeend', caption);
    for (var i = 0; i < thisTicket['get'].length; i++) {
        var str = `・${thisTicket['get'][i]}<br>`;
        document.getElementById('getWay').insertAdjacentHTML('beforeend', str);
    }
    var hr = "<hr>";
    document.getElementById('getWay').insertAdjacentHTML('beforeend', hr);
}


// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const ticketSelection = params.get('index');

// 指定データを取得
const thisTicket = getTicketData(ticketSelection);

if (thisTicket == "") {  // 指定データが見つからなかった

    // エラーの旨を示すタイトルと本文
    document.title = "error!";
    document.getElementById("title").textContent = "error!";
    document.getElementById("caption").innerHTML = "<h2>データが見つかりませんでした</h2>";

} else {  // 見つかった

    // データ取得とタイトル反映
    const ticketName = thisTicket['name'];
    document.title = ticketName;
    document.getElementById("title").textContent = ticketName;

    // 情報書き込み
    addGetWay();
    addLineup();
}