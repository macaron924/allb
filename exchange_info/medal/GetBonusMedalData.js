function getMedalData(medalSelection) {
    for (var i = 0; i < exchangeMedalBonusJson.length; i++) {
        if (exchangeMedalBonusJson[i]['index'] == medalSelection) return exchangeMedalBonusJson[i];
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
    flexbox.className = "flex_test-box";
    
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
    flexbox.className = "flex_test-box";
    
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

function addLineup() {
    var caption = "<h2>交換ラインナップ</h2>";
    document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

    for (var i = 0; i < thisMedal['lineup']['memoria'].length; i++) {
        var category = thisMedal['lineup']['memoria'][i];

        var caption = `<br><h3>${category['caption']} : 必要メダル${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var memoria = addMemoriaList(category['content']);
        document.getElementById('lineup').appendChild(memoria);
    }
    
    for (var i = 0; i < thisMedal['lineup']['costume'].length; i++) {
        var category = thisMedal['lineup']['costume'][i];

        var caption = `<br><h3>${category['caption']} : 必要メダル${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var costume = addCostumeList(category['content']);
        document.getElementById('lineup').appendChild(costume);
    }
    
    for (var i = 0; i < thisMedal['lineup']['item'].length; i++) {
        var category = thisMedal['lineup']['item'][i];

        var caption = `<br><h3>${category['caption']} : 必要メダル${category['ratio']}</h3>`;
        document.getElementById('lineup').insertAdjacentHTML('beforeend', caption);

        var item = addItemList(category['content']);
        document.getElementById('lineup').appendChild(item);
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
    addLineup();
}