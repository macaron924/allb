/**
 * アイテム情報を取得する関数
 */
function getItemName(item) {
    let itemImg = "";
    let itemName = "";
    let link = "";
    let items;

    if (item.startsWith("memoria") && item.endsWith("before")) {
        let itemImg = "memoria_before/" + item;
        let array = item.split("_");
        let id = parseInt(array[1]);
        itemName = `★5メモリア「${getMemoriaName(id)}」`;
        return [itemImg, itemName, link];
    }

    switch (true) {
        case item.startsWith("costume"):
            items = itemByTypeJson["costume_sozai"];
            break;
        case item.startsWith("memoria_") && item.endsWith("evolution"):
            items = itemByTypeJson["memoria_sozai"];
            break;
        case item.startsWith("memoria_") && item.endsWith("awakening"):
            items = itemByTypeJson["memoria_sozai"];
            break;
        case item.startsWith("gacha-ticket"):
            items = itemByTypeJson["gacha_ticket"];
            let index = item.substring(item.indexOf("gacha-ticket_") + "gacha-ticket_".length);
            link = `gacha_info/ticket/?index=${index}`;
            break;
        case item.startsWith("exchange_pendant-ex"):
            items = itemByTypeJson["exchange_pendant_ex"];
            break;
        case item.startsWith("exchange_costume"):
            items = itemByTypeJson["exchange_costume"];
            link = `exchange_info/content/?index=${item}`;
            break;
        case item.startsWith("exchange"):
            items = itemByTypeJson["exchange"];
            link = `exchange_info/content/?index=${item}`;
            break;
        case item.startsWith("medal_bonus"):
            items = itemByTypeJson["medal_bonus"];
            link = `exchange_info/content/?index=${item}`;
            break;
        default: items = itemByTypeJson["other"];
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i]["index"] == item) {
            itemImg = `item/${item}`;
            itemName = items[i]["name"];
            if (items[i]["link"] == false) link = "";
            break;
        }
    }
    return [itemImg, itemName, link];
}

/**
 * IDからメモリア名を取得する関数
 */
function getMemoriaName(id) {

    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

/**
 * メモリアID配列からflexboxを生成する関数
 */
function addMemoriaList(memoriaArray) {

    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box";
    
    // 中身を作成
    for (let i = 0; i < memoriaArray.length; i++) {

        let id = memoriaArray[i];
        let name = getMemoriaName(id);

        // flexitemを生成
        let flexitem = document.createElement("div");
        flexitem.className = "flex_memoria-item";
        flexitem.innerHTML = `<img src="../../../images/memoria/memoria_${id}.webp" loading="lazy"><br>${name}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

/**
 * ガチャ情報開始日, 終了日, ボーナスメダル, 内容を取得する関数
 */
function getGachaData(gachaSelection) {
    let list = gachaFree;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i]["gacha"].length; j++) {
            if (list[i]["gacha"][j]["index"] == gachaSelection) {

                return [
                    list[i]["start"], 
                    list[i]["finish"], 
                    list[i]["medal"], 
                    list[i]["gacha"][j]
                ];
            }
        }
    }
    return ["", "", "", ""];
}

/**
 * バナーを書き込む関数
 */
function writeBanner() {

    if (thisGacha["big_banner"] == true) banner = `<img class="banner-big_img" src="../../../images/banner_big/${thisGacha["index"]}_big.webp">`;
    else banner = `<img class="banner_img" src="../../../images/banner/${thisGacha["index"]}.webp">`;

    document.getElementById("banner").insertAdjacentHTML("beforeend", banner);
}

/**
 * 開始日時と終了日時を書き込む関数
 */
function writeStartFinish() {
    let startFinish = `${start} ～ ${finish}`;
    document.getElementById("start-finish").insertAdjacentHTML("beforeend", startFinish);
}

/**
 * ガチャボーナス(定常のおまけ)を書き込む関数
 */
function writeGachaBonus() {

    let noticeArray = thisGacha["bonus"]["notice"];
    for (let i = 0; i < noticeArray.length; i++) {

        let p = document.createElement("p");

        let notice = `${noticeArray[i]["text"]}<br>`;
        for (let j = 0; j < noticeArray[i]["item"].length; j++) {

            let itemIndex = noticeArray[i]["item"][j]["index"];
            if (noticeArray[i]["item"][j]["index"] == "medal") itemIndex = medal;
            
            let [itemImg, itemName, link] = getItemName(itemIndex);

            let value = noticeArray[i]["item"][j]["value"];

            let item = `<img class="item_img" src="../../../images/${itemImg}.webp">${itemName} ×${value}<br>`;
            
            // リンクがある場合のみ付加
            if (link != "") item = `<a href="../../../${link}">${item}</a>`;

            notice += item;
        }

        p.insertAdjacentHTML("beforeend", notice)
        document.getElementById("gacha-bonus").appendChild(p);
    }
}

/**
 * 累計ガチャ回数ボーナス表を書き込む関数
 */
function writeBonusTable() {

    let usedItemArray = [];

    /**
     * 取得済みアイテム一覧にあればそこから取得, 無ければ外部から取得
     */
    function getItemFromUsedList(index) {
        for (let i = 0; i < usedItemArray.length; i++) {

            let thisItem = usedItemArray[i];
            if (index == thisItem["index"]) {

                let itemIndex = index;
                let itemImg = thisItem["img"];
                let itemName = thisItem["name"];
                let link = thisItem["link"];

                return [itemImg, itemName, link];
            }
        }

        let [itemImg, itemName, link] =  getItemName(index);

        let usedItem = { index: index, img: itemImg, name: itemName, link: link };
        usedItemArray.push(usedItem);

        return [itemImg, itemName, link];
    }

    let table = document.createElement("table");

    let tableHeaderArray = thisGacha["bonus"]["table_header"];
    let trHeader = document.createElement("tr");
    for (let i = 0; i < tableHeaderArray.length; i++) {
        let td = `<th>${tableHeaderArray[i]}</th>`;
        trHeader.insertAdjacentHTML("beforeend", td);
    }
    table.appendChild(trHeader);

    let tableContentArray = thisGacha["bonus"]["table_content"];
    for (let i = 0; i < tableContentArray.length; i++) {

        let tr = document.createElement("tr");

        for (let j = 0; j < tableContentArray[i]["need"].length; j++) {
            let td = `<td>${tableContentArray[i]["need"][j]}</td>`;
            tr.insertAdjacentHTML("beforeend", td);
        }

        let tdContent = "";
        for (let j = 0; j < tableContentArray[i]["item"].length; j++) {
            
            let itemIndex = tableContentArray[i]["item"][j]["index"];
            let value = tableContentArray[i]["item"][j]["value"]

            let [itemImg, itemName, link] = getItemFromUsedList(itemIndex);

            let item = `<img class="item_img" src="../../../images/${itemImg}.webp">${itemName} ×${value}`;
            
            // リンクがある場合のみ付加
            if (link != "") item = `<a href="../../../${link}">${item}</a>`;

            if (j != 0) tdContent += `<br>`;

            tdContent += item;
        }
        td = `<td>${tdContent}</td>`

        tr.insertAdjacentHTML("beforeend", td);

        table.appendChild(tr);
    }

    document.getElementById("bonus-table").appendChild(table);
}

/**
 * 合計★5出現率を書き込む関数
 */
function writeTotalRatio() {

    let total = thisGacha["lineup"]["total_ratio"];

    let ratioStr = "";
    if (total.length == 1) ratioStr = ` ★5出現率${total[0]}%`;
    else {
        ratioStr = "<br>★5出現率";
        for (let j = 0; j < total.length; j++) {
            ratioStr += ` STEP${j+1}:各${total[j]}%`;
        }
    }
    document.getElementById("total-ratio").innerHTML = ratioStr;
}

/**
 * ラインナップ内容の注釈を書き込む関数
 */
function writeLineupNotice() {

    let noticeArray = thisGacha["lineup"]["notice"];
    for (let i = 0; i < noticeArray.length; i++) {

        let p = document.createElement("p");

        let notice = `${noticeArray[i]}<br>`;

        p.insertAdjacentHTML("beforeend", notice)
        document.getElementById("lineup-notice").appendChild(p);
    }
}

/**
 * メモリアラインナップを取得し書き込む関数
 */
function writeLineup() {

    let total = thisGacha["lineup"]["total_ratio"];

    for (let i = 0; i < thisGacha["lineup"]["pu"].length; i++) {

        let caption = thisGacha["lineup"]["pu"][i]["caption"];
        let ratio = thisGacha["lineup"]["pu"][i]["ratio"];
        let content = thisGacha["lineup"]["pu"][i]["content"];

        for (let j = 0; j < total.length; j++) {
            total[j] -= (ratio[j] * content.length);
        }
        
        let ratioStr = "";
        if (ratio.length == 1) ratioStr = `各${(Math.floor(ratio[0] * 1000) / 1000).toFixed(3)}%`;
        else {
            ratioStr += "<br>";
            for (let j = 0; j < total.length; j++) {
                ratioStr += ` STEP${j+1}:各${(Math.floor(ratio[j] * 1000) / 1000).toFixed(3)}%`;
            }
        }

        let captionStr = `<h3>${caption}: 全${content.length}種 ${ratioStr}</h3>`;
        document.getElementById("lineup").insertAdjacentHTML("beforeend", captionStr);

        let memoriaList = addMemoriaList(content);
        document.getElementById("lineup").appendChild(memoriaList);
    }

    let caption = thisGacha["lineup"]["else"]["caption"];
    let content = thisGacha["lineup"]["else"]["content"];
    let ratio = [];
    for (let j = 0; j < total.length; j++) {
        ratio.push(total[j] / content.length);
    }

    let ratioStr = "";
    if (ratio.length == 1) ratioStr = `各${(Math.floor(ratio[0] * 1000) / 1000).toFixed(3)}%`;
    else {
        ratioStr += "<br>";
        for (let j = 0; j < total.length; j++) {
            ratioStr += ` STEP${j+1}:各${(Math.floor(ratio[j] * 1000) / 1000).toFixed(3)}%`;
        }
    }
    let captionStr = `<h3>${caption}: 全${content.length}種 ${ratioStr}</h3>`;
    document.getElementById("lineup").insertAdjacentHTML("beforeend", captionStr);

    let memoriaList = addMemoriaList(content);
    document.getElementById("lineup").appendChild(memoriaList);
}

// データ取得
const gachaFree = loadData("../../../data/gacha_data/gacha-free.json");
const memoriaJson = loadData("../../../data/memoria_data.json")

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const gachaSelection = params.get("index");

// 指定ガチャのデータを取得
const [start, finish, medal, thisGacha] = getGachaData(gachaSelection);

if (thisGacha == "") {  // 指定ガチャが見つからなかった

    // エラーの旨を示すタイトルと本文
    document.title = "error!";
    document.getElementById("title").textContent = "error!";
    document.getElementById("banner").textContent = "ガチャ情報が見つかりませんでした";

} else {  // 見つかった

    // ガチャ名取得とタイトル反映
    const gachaName = thisGacha["name"];
    document.title = gachaName;
    document.getElementById("title").textContent = gachaName;

    // 情報書き込み
    writeBanner();
    writeStartFinish();
    writeGachaBonus();
    writeBonusTable();
    writeTotalRatio()
    writeLineupNotice()
    writeLineup();
}



const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error",() => {
        image.setAttribute("src", "../../../images/no-image.png");
    });
});
