$(document).on('click', '.category', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".content");//直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass('close');// closeクラスを付与
	$(this).toggleClass('close');// 自身にもcloseクラスを付与
});

function getMedalData(medalSelection) {
    for (var i = 0; i < exchangeDataJson.length; i++) {
        if (exchangeDataJson[i]['index'] == medalSelection) return exchangeDataJson[i];
    }
    return "";
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
    flexbox.className = "flex_test-box content";
    
    // flexbox本体を作成
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
    flexbox.className = "flex_test-box content";
    
    // flexbox本体を作成
    for (var i = 0; i < costumeArray.length; i++) {
        id = costumeArray[i];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../../images/costume/costume_${id}.png" loading="lazy"><br>${getCostumeChara(id)} / ${getCostumeName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getItemName(id) {
    for (var i = 0; i < itemJson.length; i++) {
        if (itemJson[i]['index'] == id) return itemJson[i]['name'];
    }
    return "";
}

function getItemLink(id) {
    for (var i = 0; i < itemJson.length; i++) {
        if (itemJson[i]['index'] == id) return itemJson[i]['link'];
    }
    return "";
}

function addItemList(itemArray) {
    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_test-box content";
    
    // flexbox本体を作成
    for (var i = 0; i < itemArray.length; i++) {
        id = itemArray[i];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        var content = `<img src="../../images/item/${id}.png" loading="lazy"><br>${getItemName(id)}`;
        var link = getItemLink(id);
        if (link != "") content = `<a href="../../gacha_info/${link}">${content}</a>`;
        flexitem.innerHTML = content;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getTicketLineup(ticketName) {
    var lineup = []
    for (var i = 0; i < eventGachaTicketJson.length; i++) {
        if (eventGachaTicketJson[i]['name'] == ticketName) {
            lineup = eventGachaTicketJson[i]['lineup'];
            break;
        }
    }
    return lineup;
}

function addGetWay() {
    var caption = "<h2>入手方法</h2>";
    document.getElementById('getWay').insertAdjacentHTML('beforeend', caption);
    for (var i = 0; i < thisMedal['get'].length; i++) {
        var str = `・${thisMedal['get'][i]}<br>`;
        document.getElementById('getWay').insertAdjacentHTML('beforeend', str);
    }
    var hr = "<hr>";
    document.getElementById('getWay').insertAdjacentHTML('beforeend', hr);
}

function addNotices() {
    var topics = "";
    for (var i = 0; i < thisMedal['notice'].length; i++) {
        if (i == 0) topics += `<br>`;
        topics += `${thisMedal['notice'][i]}<br>`;
    }
    document.getElementById('lineup').insertAdjacentHTML('beforeend', topics);
}

function addLineup() {
    var caption = "<h2>交換ラインナップ</h2><br>";
    document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);
    
    addNotices();

    for (var i = 0; i < thisMedal['lineup']['memoria'].length; i++) {
        var category = thisMedal['lineup']['memoria'][i];

        var caption = `<h3 class="category"><span>▶</span> ${category['caption']} : 必要 ${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var memoria = addMemoriaList(category['content']);
        document.getElementById('lineup').appendChild(memoria);
    }
    
    for (var i = 0; i < thisMedal['lineup']['costume'].length; i++) {
        var category = thisMedal['lineup']['costume'][i];

        var caption = `<h3 class="category"><span>▶</span> ${category['caption']} : 必要 ${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var costume = addCostumeList(category['content']);
        document.getElementById('lineup').appendChild(costume);
    }
    
    for (var i = 0; i < thisMedal['lineup']['item'].length; i++) {
        var category = thisMedal['lineup']['item'][i];

        var caption = `<h3 class="category"><span>▶</span> ${category['caption']} : 必要 ${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var item = addItemList(category['content']);
        document.getElementById('lineup').appendChild(item);
    }
    
    for (var i = 0; i < thisMedal['lineup']['event-ticket'].length; i++) {
        var category = thisMedal['lineup']['event-ticket'][i];

        var caption = `<h3 class="category"><span>▶</span> ${category['caption']} : 必要 ${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var content = document.createElement('div');
        content.className = "content";

        for (var j = 0; j < category['content'].length; j++) {
            var ticketName = `<h3>▼ ${category['content'][j]}</h3>`;
            var ticketLineup = getTicketLineup(category['content'][j]);
            content.insertAdjacentHTML('beforeend', ticketName);
            content.appendChild(addMemoriaList(ticketLineup));
        }

        document.getElementById('lineup').appendChild(content);
    }
}


// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const medalSelection = params.get('index');

// 指定データを取得
const thisMedal = getMedalData(medalSelection);

if (thisMedal == "") {  // 指定データが見つからなかった

    // エラーの旨を示すタイトルと本文
    document.title = "error!";
    document.getElementById("title").textContent = "error!";
    document.getElementById("caption").innerHTML = "<h2>データが見つかりませんでした</h2>";

} else {  // 見つかった

    // データ取得とタイトル反映
    const medalName = thisMedal['name'];
    document.title = medalName;
    document.getElementById("title").textContent = medalName;

    // 情報書き込み
    addGetWay();
    addLineup();
}