$(document).on("click", ".switch-icon", function () {
    $(this).parent().children(".costume").toggleClass("active");
    $(this).parent().children(".memoria").toggleClass("active");
});

function buildLoadScreen() {
    const loadScreen = document.createElement("div");
    loadScreen.id = "loadScreen";
    loadScreen.style = `
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: white;
position: fixed;
top: 0;
left: 0;
zindex: 999999;`;

    const loadImage = document.createElement("img");
    // 開発環境かどうかでURL変更
    if(location.href.includes("allb/")) {
        loadImage.src = "/allb/images/loading.webp"
    } else {
        loadImage.src = "/images/loading.webp";
    }
    
    loadImage.style = `display: block;
width: 150px;
margin: auto;
animation-direction: alternate`;

    // ロード中の動き
    const shakingPercentage = "5";
    loadImage.animate(
        [
            {transform: `translateY(${shakingPercentage}%)`},
            {transform: `translateY(-${shakingPercentage}%)`},
        ],
        {
            duration: 600,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate"
        }
    );

    loadScreen.appendChild(loadImage);
    document.querySelector("body").appendChild(loadScreen);

    //ロード完了後に消えていく演出後、要素を削除
    const fadingDuration = 500;
    addEventListener("DOMContentLoaded", () => {
        const loadScreen = document.querySelector("#loadScreen");
        loadScreen.animate(
            [
                { opacity: 1.0, visibility: "visible" },
                { opacity: 0, visibility: "hidden" }
            ],
            {
                duration: fadingDuration,
                fill: "both"
            }
        );
        setTimeout(() => {
        loadScreen.remove();
        }, fadingDuration);
    })
}


function loadData(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

function getLimitedGachaData(depth) {
    buildLoadScreen();
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../"
    }
    const gachaLimitedList = [];

    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202408.json"), index: 202408, active: true, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202407.json"), index: 202407, active: true, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202406.json"), index: 202406, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202405.json"), index: 202405, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202404.json"), index: 202404, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202403.json"), index: 202403, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202402.json"), index: 202402, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202401.json"), index: 202401, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202312.json"), index: 202312, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202311.json"), index: 202311, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202310.json"), index: 202310, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202309.json"), index: 202309, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202308.json"), index: 202308, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202307.json"), index: 202307, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202306.json"), index: 202306, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202305.json"), index: 202305, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202304.json"), index: 202304, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202303.json"), index: 202303, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202302.json"), index: 202302, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202301.json"), index: 202301, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202212.json"), index: 202212, active: false, group: "" });
    gachaLimitedList.push({ ref: loadData(path + "data/gacha_data/gacha-limited_202211.json"), index: 202211, active: false, group: "" });

    return gachaLimitedList;
};

function getMemoriaList(memoriaArray, depth) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box";

    // 本体を作成
    for (let i in memoriaArray) {

        // flexitemをflexboxの子要素に追加
        let flexitem = getMemoriaBox(memoriaArray[i], depth);
        flexbox.appendChild(flexitem);
    }

    return flexbox;
}

function getCostumeList(costumeArray, depth) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_costume-box";

    // 本体を作成
    for (let i in costumeArray) {

        // flexitemをflexboxの子要素に追加
        let flexitem = getCostumeBox(costumeArray[i], depth);
        flexitem.className = "flex_costume-item";
        flexbox.appendChild(flexitem);
    }

    return flexbox;
}

function getMemoriaBox(id, depth) {
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../"
    }

    // flexitemを生成
    let flexitem = document.createElement("div");
    flexitem.className = "flex_memoria-item";

    let memoriaCostumeId = memoriaJson[id]["costume"];
    if (memoriaCostumeId.length > 0) {
        flexitem.classList.add("with-costume");

        let switchIcon = document.createElement("div");
        switchIcon.className = "switch-icon";
        flexitem.appendChild(switchIcon);

        for (let i in memoriaCostumeId) {
            let costumeBox = getCostumeBox(memoriaCostumeId[i], depth)
            flexitem.appendChild(costumeBox);
        }
    }

    let memoriaBox = document.createElement("div");
    memoriaBox.className = "memoria active";

    let memoriaImg = document.createElement("img");
    memoriaImg.src = `${path}images/memoria/memoria_${id}.webp`;
    memoriaImg.loading = "lazy";
    memoriaBox.appendChild(memoriaImg);

    let memoriaYakuwari = document.createElement("p");
    let skills = memoriaJson[id]["skill"];
    for (let i in skills) {
        let yakuwari_icon = document.createElement("img");
        yakuwari_icon.src = `${path}images/icon/yakuwari_${skills[i]["yakuwari"]}.webp`;
        yakuwari_icon.className = "yakuwari_img";
        yakuwari_icon.loading = "lazy";
        memoriaYakuwari.appendChild(yakuwari_icon);
    }
    memoriaBox.appendChild(memoriaYakuwari);

    let memoriaJump = document.createElement("a");
    memoriaJump.href = `${path}memoria/detail/?memoriaID=${id}`;
    memoriaJump.innerText = "詳細＞＞";
    memoriaBox.appendChild(memoriaJump);

    let memoriaName = document.createElement("p");
    memoriaName.innerText = memoriaJson[id]["name"];
    memoriaBox.appendChild(memoriaName);

    flexitem.appendChild(memoriaBox);

    return flexitem;

}

function getCostumeBox(id, depth) {
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../";
    }

    let costumeBox = document.createElement("div");
    costumeBox.className = "costume";

    let costumeImg = document.createElement("img");
    costumeImg.src = `${path}images/costume/costume_${id}.webp`;
    costumeImg.loading = "lazy";
    costumeBox.appendChild(costumeImg);

    let costumeJump = document.createElement("a");
    costumeJump.href = `${path}costume/detail/?costumeID=${id}`;
    costumeJump.innerText = "詳細＞＞";
    costumeBox.appendChild(costumeJump);

    let costumeName = document.createElement("p");
    costumeName.innerText = `${charaJson[costumeJson[id]["chara"]]["charaName"]} / ${costumeJson[id]["name"]}`;
    costumeBox.appendChild(costumeName);

    return costumeBox;
}

function getMedalBox(obj, depth) {
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../";
    }

    let id = obj["index"];
    let name = obj["name"];
    let get = obj["get"];

    let flexitem = document.createElement("div");
    flexitem.className = "flex_medal-item";
    
    let imgDiv = document.createElement("div");
    let linkImg = document.createElement("a");
    linkImg.href = `${path}exchange/content/?index=${id}`;
    let img = document.createElement("img");
    img.src = `${path}images/item/${id}.webp`;
    img.loading = "lazy";
    linkImg.appendChild(img);
    imgDiv.appendChild(linkImg);

    let detailDiv = document.createElement("div");

    let div1 = document.createElement("div");
    let linkName = document.createElement("a");
    linkName.href = `${path}exchange/content/?index=${id}`;
    linkName.innerText = name;
    div1.appendChild(linkName);
    detailDiv.appendChild(div1);
    
    let div2 = document.createElement("div");
    div2.innerHTML = `${get}`;
    detailDiv.appendChild(div2);
    
    flexitem.appendChild(imgDiv);
    flexitem.appendChild(detailDiv);

    return flexitem;
}

function getTicketBox(obj, depth) {
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../";
    }

    let id = obj["index"];
    let name = obj["name"];
    let date = `※${obj["date"]} ${obj["caption"]}`;

    let flexitem = document.createElement("div");
    flexitem.className = "flex_ticket-item";
    
    let imgDiv = document.createElement("div");
    let linkImg = document.createElement("a");
    linkImg.href = `${path}gacha/ticket/?index=${id}`;
    let img = document.createElement("img");
    img.src = `${path}images/item/gacha-ticket_${id}.webp`;
    img.loading = "lazy";
    linkImg.appendChild(img);
    imgDiv.appendChild(linkImg);

    let detailDiv = document.createElement("div");

    let div1 = document.createElement("div");
    let linkName = document.createElement("a");
    linkName.href = `${path}gacha/ticket/?index=${id}`;
    linkName.innerText = name;
    div1.appendChild(linkName);
    detailDiv.appendChild(div1);
    
    let div2 = document.createElement("div");
    div2.innerHTML = `${date}`;
    detailDiv.appendChild(div2);
    
    flexitem.appendChild(imgDiv);
    flexitem.appendChild(detailDiv);

    return flexitem;
}
function getItemName(item) {
    let itemImg = "";
    let itemName = "アイテム";
    let link = "";
    let items = null;

    if (item.startsWith("memoria") && item.endsWith("before")) {
        itemImg = "memoria_before/" + item;
        let array = item.split("_");
        let id = parseInt(array[1]);
        itemName = `★5メモリア「${memoriaJson[id]["name"]}」`;
        return [itemImg, itemName, link];
    }

    if (item.startsWith("costume")) {
        itemImg = `item/${item}`;
        let array = item.split("_");
        let id = parseInt(array[1]);
        switch (array[2]) {
            case "pendant-1":
                itemName = `${charaJson[costumeJson[id]["chara"]]["charaName"]}/${costumeJson[id]["name"]}のペンダントLv.1`;
                break;
            case "pendant-2":
                itemName = `${charaJson[costumeJson[id]["chara"]]["charaName"]}/${costumeJson[id]["name"]}のペンダントLv.2`;
                break;
            case "pendant-ex":
                itemName = `${charaJson[costumeJson[id]["chara"]]["charaName"]}/${costumeJson[id]["name"]}のペンダントEX`;
                break;
            case "pendant-ad":
                itemName = `${charaJson[costumeJson[id]["chara"]]["charaName"]}/${costumeJson[id]["name"]}のADペンダント`;
                break;
            default:
                itemName = `${charaJson[costumeJson[id]["chara"]]["charaFullName"]}/${costumeJson[id]["name"]}`;
                "";
        }
        return [itemImg, itemName, link];
    }

    switch (true) {
        case item.startsWith("memoria_") && item.endsWith("evolution"):
            items = itemJson["memoria_sozai"];
            break;
        case item.startsWith("memoria_") && item.endsWith("awakening"):
            items = itemJson["memoria_sozai"];
            break;
        case item.startsWith("gacha-ticket"):
            items = itemJson["gacha_ticket"];
            let index = item.substring(item.indexOf("gacha-ticket_") + "gacha-ticket_".length);
            link = `gacha/ticket/?index=${index}`;
            break;
        case item.startsWith("exchange_pendant-ex"):
            items = itemJson["exchange_pendant_ex"];
            link = `exchange/content/?index=${item}`;
            break;
        case item.startsWith("exchange_costume"):
            items = itemJson["exchange_costume"];
            link = `exchange/content/?index=${item}`;
            break;
        case item.startsWith("exchange_memoria"):
            items = itemJson["exchange_memoria"];
            link = `exchange/content/?index=${item}`;
            break;
        case item.startsWith("exchange"):
            items = itemJson["exchange"];
            link = `exchange/content/?index=${item}`;
            break;
        case item.startsWith("medal_bonus"):
            items = itemJson["medal_bonus"];
            link = `exchange/content/?index=${item}`;
            break;
        default: items = itemJson["other"];
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
