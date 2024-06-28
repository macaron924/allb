function getBanner(gacha) {
    let res = "";
    for (let i = 0; i < gacha.length; i++) {
        res += `
        <tr>
            <td colspan="2">
                <a href="./detail/?index=${gacha[i]["index"]}">
                    <img class="mini-banner_img" src="../../images/banner/${gacha[i]["index"]}.webp">
                </a>
            </td>
        </tr>
        `;
    }
    return res;
}

function getMedalName(medal) {
    let medalName = "";
    let link = false;
    let medals = itemJson["medal_bonus"];
    for (let i = 0; i < medals.length; i++) {
        if (medals[i]["index"] == medal) {
            medalName = medals[i]["name"];
            link = medals[i]["link"];
            break;
        }
    }
    return [medalName, link];
}

function getMedalLinks(medal) {

    let medalImg = `<img class="item_img" src="../../images/item/${medal}.webp">`;

    let [medalName, link] = getMedalName(medal);

    if (medalName == "") { // メダル無し
        medalImg = ``;
        medalName = ``;
    } else if (link == true) { // リンクがある場合のみ付加
        medalImg = `<a href="../../exchange/content/?index=${medal}">${medalImg}</a>`;
        medalName = `<a href="../../exchange/content/?index=${medal}">${medalName}</a>`;
    }

    let res = `
    <tr>
        <td>${medalImg}</td>
        <td>${medalName}</td>
    </tr>
    `;

    return res;
}

function makeContent() {

    let list = gachaFree;

    let group = document.createElement("div");
    group.className = `gacha-group active`;
    //group.insertAdjacentHTML("beforeend", `<h2 class="title"><span>▶</span> 無料ガチャ</h2>`)

    let flexBox = document.createElement("div");
    flexBox.className = `flex_gacha-box`;
    let type = "";

    for (let j = 0; j < list.length; j++) {

        let start = list[j]["start"];
        let finish = list[j]["finish"];
        let banners = getBanner(list[j]["gacha"]);
        let medal = getMedalLinks(list[j]["medal"]);
        type = list[j]["type"];

        let flexItem = document.createElement("div");
        flexItem.className = "flex_gacha-item";
        let content = `
        <table>
            <tr><td colspan="2">${start} <br>～ ${finish}</td></tr>
            ${banners}
            ${medal}
        </table>
        `;
        flexItem.insertAdjacentHTML("beforeend", content);

        gachaBoxList.push({ ref: flexItem, type: type, display: true });
        flexBox.insertAdjacentElement("beforeend", flexItem);
    }

    group.insertAdjacentElement("beforeend", flexBox);

    document.getElementById("content").insertAdjacentElement("beforeend", group);
}

// データ取得
const gachaFree = loadData("../../data/gacha_data/gacha-free.json");

const itemJson = loadData("../../data/item_data.json");
let gachaBoxList = [];
makeContent();
