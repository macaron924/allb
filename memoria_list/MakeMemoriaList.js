$(document).on('click', '.switch-icon', function() { // 絞り込み選択表示ボタンクリック時
    $(this).parent().children(".costume").toggleClass('active');
    $(this).parent().children(".memoria").toggleClass('active');
});

function getCharaName(charaID) {
    for (let i = 0; i < charaJson.length; i++) {
        if (charaJson[i]['charaID'] == charaID) return charaJson[i]['charaName'];
    }
    return "";
}

function getCostumeChara(id) {
    for (let i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]['id'] == id) return getCharaName(costumeJson[i]['chara']);
    }
    return "";
}

function getCostumeName(id) {
    for (let i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]['id'] == id) return costumeJson[i]['name'];
    }
    return "";
}

function addMemoriaList() {
    // flexboxを生成
    let flexbox = document.createElement('div');
    flexbox.className = "flex_memoria-box";
    
    // テーブル本体を作成
    for (let i = 0; i < memoriaJson.length; i++) {

        // flexitemを生成
        let flexitem = document.createElement('div');
        flexitem.className = "flex_memoria-item";

        let innerHtml = `<div class="memoria active"><img src="../images/memoria/memoria_${memoriaJson[i]['id']}.jpg" loading="lazy"><br>${memoriaJson[i]['name']}</div>`;

        let costumeId = memoriaJson[i]['costume'];
        if (costumeId > 0) {
            let costumeChara = getCostumeChara(costumeId);
            let costumeName = getCostumeName(costumeId);
            innerHtml += `<div class="costume"><img src="../images/costume/costume_${costumeId}.jpg" loading="lazy"><br>${costumeChara} / ${costumeName}</div>`;
            innerHtml = `<div class="switch-icon"></div>` + innerHtml;
        }

        flexitem.innerHTML = innerHtml;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

document.getElementById('list').appendChild(addMemoriaList());