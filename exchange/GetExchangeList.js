$(".category").click(function () {//タイトル要素をクリックしたら
    let findElm = $(this).next(".content");//直後のアコーディオンを行うエリアを取得し
    $(findElm).toggleClass("close");// closeクラスを付与
    $(this).toggleClass("close");// 自身にもcloseクラスを付与
});

// データ取得
const exchangeDataJson = loadData("../data/exchange_data.json");

for (let i in exchangeDataJson["medal_bonus"]) {
    let flexitem = getMedalBox(exchangeDataJson["medal_bonus"][i], 1);
    if (flexitem !== null) {
        document.getElementById("bonus-medal").appendChild(flexitem);
    }
}

for (let i in exchangeDataJson["exchange_memoria"]) {
    let flexitem = getMedalBox(exchangeDataJson["exchange_memoria"][i], 1);
    if (flexitem !== null) {
        document.getElementById("memoria-ticket").appendChild(flexitem);
    }
}

for (let i in exchangeDataJson["exchange_costume"]) {
    let flexitem = getMedalBox(exchangeDataJson["exchange_costume"][i], 1);
    if (flexitem !== null) {
        document.getElementById("costume-ticket").appendChild(flexitem);
    }
}

for (let i in exchangeDataJson["exchange_event-gacha-special"]) {
    let flexitem = getMedalBox(exchangeDataJson["exchange_event-gacha-special"][i], 1);
    if (flexitem !== null) {
        document.getElementById("event-gacha-sp-ticket").appendChild(flexitem);
    }
}

for (let i in exchangeDataJson["exchange_pendant-ex"]) {
    let flexitem = getMedalBox(exchangeDataJson["exchange_pendant-ex"][i], 1);
    if (flexitem !== null) {
        document.getElementById("exchange-list").appendChild(flexitem);
    }
}

for (let i in exchangeDataJson["exchange"]) {
    let flexitem = getMedalBox(exchangeDataJson["exchange"][i], 1);
    if (flexitem !== null) {
        document.getElementById("exchange-list").appendChild(flexitem);
    }
}

const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error", () => {
        image.setAttribute("src", "../images/no-image.png");
    });
});
