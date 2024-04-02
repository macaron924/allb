$(document).on("click", ".category", function() {//タイトル要素をクリックしたら
	let findElm = $(this).next(".content");//直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass("close");// closeクラスを付与
	$(this).toggleClass("close");// 自身にもcloseクラスを付与
});

//データ取得
const exchangeDataJson = loadData("../../data/exchange_data.json");
const memoriaJson = loadData("../../data/memoria_data.json");
const costumeJson = loadData("../../data/costume_data.json");
const charaDataTemp = loadData("../../data/chara_data.json");
const charaJson = charaDataTemp[0];
const charaBelongJson = charaDataTemp[1];
const eventGachaTicketJson = loadData("../../data/gacha-ticket_event.json");


function getMedalData(medalSelection) {
    for (let i = 0; i < exchangeDataJson.length; i++) {
        if (exchangeDataJson[i]["index"] == medalSelection) return exchangeDataJson[i];
    }
    return "";
}

function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box content";
    
    // flexbox本体を作成
    for (let i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        let flexitem = document.createElement("div");
        flexitem.className = "flex_memoria-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.jpg" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getCharaName(charaID) {
    for (let i = 0; i < charaJson.length; i++) {
        if (charaJson[i]["charaID"] == charaID) return charaJson[i]["charaName"];
    }
    return "";
}

function getCostumeChara(id) {
    for (let i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]["id"] == id) return getCharaName(costumeJson[i]["chara"]);
    }
    return "";
}

function getCostumeName(id) {
    for (let i = 0; i < costumeJson.length; i++) {
        if (costumeJson[i]["id"] == id) return costumeJson[i]["name"];
    }
    return "";
}

function addCostumeList(costumeArray) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box content";
    
    // flexbox本体を作成
    for (let i = 0; i < costumeArray.length; i++) {
        id = costumeArray[i];

        // flexitemを生成
        let flexitem = document.createElement("div");
        flexitem.className = "flex_memoria-item";
        flexitem.innerHTML = `<img src="../../images/costume/costume_${id}.jpg" loading="lazy"><br>${getCostumeChara(id)} / ${getCostumeName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getItemName(id) {
    for (let i = 0; i < itemJson.length; i++) {
        if (itemJson[i]["index"] == id) return itemJson[i]["name"];
    }
    return "";
}

function getItemLink(id) {
    for (let i = 0; i < itemJson.length; i++) {
        if (itemJson[i]["index"] == id) return itemJson[i]["link"];
    }
    return "";
}

function addItemList(itemArray) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box content";
    
    // flexbox本体を作成
    for (let i = 0; i < itemArray.length; i++) {
        id = itemArray[i];

        // flexitemを生成
        let flexitem = document.createElement("div");
        flexitem.className = "flex_memoria-item";
        let content = `<img src="../../images/item/${id}.jpg" loading="lazy"><br>${getItemName(id)}`;
        let link = getItemLink(id);
        if (link != "") content = `<a href="../../gacha_info/${link}">${content}</a>`;
        flexitem.innerHTML = content;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getTicketLineup(ticketName) {
    let lineup = []
    for (let i = 0; i < eventGachaTicketJson.length; i++) {
        if (eventGachaTicketJson[i]["name"] == ticketName) {
            lineup = eventGachaTicketJson[i]["lineup"];
            break;
        }
    }
    return lineup;
}

function addGetWay() {
    let caption = "<h2>入手方法</h2>";
    document.getElementById("getWay").insertAdjacentHTML("beforeend", caption);
    for (let i = 0; i < thisMedal["get"].length; i++) {
        let str = `・${thisMedal["get"][i]}<br>`;
        document.getElementById("getWay").insertAdjacentHTML("beforeend", str);
    }
    let hr = "<hr>";
    document.getElementById("getWay").insertAdjacentHTML("beforeend", hr);
}

function addNotices() {
    let topics = "";
    for (let i = 0; i < thisMedal["notice"].length; i++) {
        topics += `${thisMedal["notice"][i]}<br><br>`;
    }
    document.getElementById("lineup").insertAdjacentHTML("beforeend", topics);
}

function addLineup() {
    let caption = "<h2>交換ラインナップ</h2><br>";
    document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);
    
    addNotices();

    for (let i = 0; i < thisMedal["lineup"]["memoria"].length; i++) {
        let category = thisMedal["lineup"]["memoria"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let memoria = addMemoriaList(category["content"]);
        document.getElementById("lineup").appendChild(memoria);
    }
    
    for (let i = 0; i < thisMedal["lineup"]["costume"].length; i++) {
        let category = thisMedal["lineup"]["costume"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let costume = addCostumeList(category["content"]);
        document.getElementById("lineup").appendChild(costume);
    }
    
    for (let i = 0; i < thisMedal["lineup"]["item"].length; i++) {
        let category = thisMedal["lineup"]["item"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let item = addItemList(category["content"]);
        document.getElementById("lineup").appendChild(item);
    }
    
    for (let i = 0; i < thisMedal["lineup"]["event-ticket"].length; i++) {
        let category = thisMedal["lineup"]["event-ticket"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let content = document.createElement("div");
        content.className = "content";

        for (let j = 0; j < category["content"].length; j++) {
            let ticketName = `<h3>▼ ${category["content"][j]}</h3>`;
            let ticketLineup = getTicketLineup(category["content"][j]);
            content.insertAdjacentHTML("beforeend", ticketName);
            content.appendChild(addMemoriaList(ticketLineup));
        }

        document.getElementById("lineup").appendChild(content);
    }
}


// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const medalSelection = params.get("index");

// 指定データを取得
const thisMedal = getMedalData(medalSelection);

if (thisMedal == "") {  // 指定データが見つからなかった

    // エラーの旨を示すタイトルと本文
    document.title = "error!";
    document.getElementById("title").textContent = "error!";
    document.getElementById("caption").innerHTML = "<h2>データが見つかりませんでした</h2>";

} else {  // 見つかった

    // データ取得とタイトル反映
    const medalName = thisMedal["name"];
    document.title = medalName;
    document.getElementById("title").textContent = medalName;

    // 情報書き込み
    addGetWay();
    addLineup();
}