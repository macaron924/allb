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
    let list = null
    switch (true) {
        case medalSelection.startsWith("medal_bonus"):
            list = exchangeDataJson["medal_bonus"];
            break;
        case medalSelection.startsWith("exchange_memoria"):
            list = exchangeDataJson["exchange_memoria"];
            break;
        case medalSelection.startsWith("exchange_costume"):
            list = exchangeDataJson["exchange_costume"];
            break;
        case medalSelection.startsWith("exchange_event-gacha-special"):
            list = exchangeDataJson["exchange_event-gacha-special"];
            break;
        case medalSelection.startsWith("exchange_pendant-ex"):
            list = exchangeDataJson["exchange_pendant-ex"];
            break;
        default:
            list = exchangeDataJson["exchange"];
    }

    for (let i in list) {
        if (list[i]["index"] == medalSelection) return list[i];
    }
    return null;
}

function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

function getItemBox(index) {

    // flexitemを生成
    let flexitem = document.createElement("div");
    flexitem.className = "flex_memoria-item";
    let [itemImg, itemName, link] = getItemName(index);
    let content = `<img src="../../images/item/${index}.webp" loading="lazy"><br>${itemName}`;
    if (link !== "") content = `<a href="../../${link}">${content}</a>`;
    flexitem.innerHTML = content;

    return flexitem;
}
/*
function getItemNameLink(index) {
    let list = null;
    let link = "";

    switch (true) {
        case index.startsWith("memoria_") && index.endsWith("evolution"):
            list = itemJson["memoria_sozai"];
            break;
        case index.startsWith("memoria_") && index.endsWith("awakening"):
            list = itemJson["memoria_sozai"];
            break;
        case index.startsWith("gacha-ticket"):
            list = itemJson["gacha_ticket"];
            let indexCopy = index.substring(index.indexOf("gacha-ticket_") + "gacha-ticket_".length);
            link = `../../gacha/ticket/?index=${indexCopy}`;
            break;
        case index.startsWith("exchange_pendant-ex"):
            list = itemJson["exchange_pendant_ex"];
            break;
        case index.startsWith("exchange_costume"):
            list = itemJson["exchange_costume"];
            link = `../../exchange/content/?index=${item}`;
            break;
        case index.startsWith("exchange"):
            list = itemJson["exchange"];
            link = `../../exchange/content/?index=${item}`;
            break;
        case index.startsWith("medal_bonus"):
            list = itemJson["medal_bonus"];
            link = `../../exchange/content/?index=${item}`;
            break;
        default: list = itemJson["other"];
    }
    for (let i = 0; i < list.length; i++) {
        let name = list[i]["name"];
        if (list[i]["index"] == index) return [name, link];
    }
    return null;
}*/

function addItemList(itemArray) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box content";
    
    // flexbox本体を作成
    for (let i in itemArray) {
        let index = itemArray[i];

        // flexitemを生成
        let flexitem = getItemBox(index);

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function getTicketLineup(ticketName) {
    let lineup = []
    for (let i in eventGachaTicketJson) {
        if (eventGachaTicketJson[i]["name"] == ticketName) {
            lineup = eventGachaTicketJson[i]["lineup"];
            break;
        }
    }
    return lineup;
}

function addGetWay(get) {
    let caption = "<h2>入手方法</h2>";
    document.getElementById("getWay").insertAdjacentHTML("beforeend", caption);
    for (let i = 0; i < get.length; i++) {
        let str = `・${get[i]}<br>`;
        document.getElementById("getWay").insertAdjacentHTML("beforeend", str);
    }
    let hr = "<hr>";
    document.getElementById("getWay").insertAdjacentHTML("beforeend", hr);
}

function addNotices(notice) {
    let topics = "";
    for (let i = 0; i < notice.length; i++) {
        topics += `${notice[i]}<br><br>`;
    }
    document.getElementById("lineup").insertAdjacentHTML("beforeend", topics);
}

function addLineup(lineup) {
    let caption = "<h2>交換ラインナップ</h2><br>";
    document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

    for (let i = 0; i < lineup["memoria"].length; i++) {
        let category = lineup["memoria"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let memoria = getMemoriaList(category["content"], 2);
        memoria.classList.add("content");
        document.getElementById("lineup").appendChild(memoria);
    }
    
    for (let i = 0; i < lineup["costume"].length; i++) {
        let category = lineup["costume"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let costume = getCostumeList(category["content"], 2);
        costume.classList.add("content");
        document.getElementById("lineup").appendChild(costume);
    }
    
    for (let i = 0; i < lineup["item"].length; i++) {
        let category = lineup["item"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let item = addItemList(category["content"]);
        document.getElementById("lineup").appendChild(item);
    }
    
    for (let i = 0; i < lineup["event-ticket"].length; i++) {
        let category = lineup["event-ticket"][i];

        let caption = `<h3 class="category"><span>▶</span> ${category["caption"]} : 必要 ${category["ratio"]}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", caption);

        let content = document.createElement("div");
        content.className = "content";

        for (let j = 0; j < category["content"].length; j++) {
            let ticketName = `<h3>▼ ${category["content"][j]}</h3>`;
            let ticketLineup = getTicketLineup(category["content"][j]);
            content.insertAdjacentHTML("beforeend", ticketName);
            content.appendChild(getMemoriaList(ticketLineup, 2));
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

const itemJson = loadData("../../data/item_data.json");

if (thisMedal == null) {  // 指定データが見つからなかった

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
    addGetWay(thisMedal["get"]);
    addNotices(thisMedal["notice"]);
    addLineup(thisMedal["lineup"]);
}
