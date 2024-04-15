$(document).on("click", "#costume-open-btn", function() {
	let findElm = $(this).next(".flex_btn-box");
	$("#costume_list").toggleClass("active");
	$(this).toggleClass("active");
});

function getCharaName(charaID) {
    for (let i = 0; i < charaJson.length; i++) {
        if (charaJson[i]["charaID"] == charaID) return charaJson[i]["charaName"];
    }
    return "";
}

// データ取得
const charaDataTemp = loadData("../../data/chara_data.json");
const charaJson = charaDataTemp[0];
const charaBelongJson = charaDataTemp[1];
const costumeJson = loadData("../../data/costume_data.json");
const exchangeDataJson = loadData("../../data/exchange_data.json");

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const costumeSelection = params.get("costumeID");

let exchangeContentList = [];
for (let i in exchangeDataJson) {
    let name = exchangeDataJson[i]["name"];
    let index = exchangeDataJson[i]["index"];
    let content = [];
    for (let j in exchangeDataJson[i]["lineup"]["costume"]) {
        if (exchangeDataJson[i]["lineup"]["costume"][j]["caption"].includes("EXペンダント")) continue;
        content = content.concat(exchangeDataJson[i]["lineup"]["costume"][j]["content"]);
    }
    exchangeContentList.push( { name: name, index: index, content: content } )
}

for (let i in costumeJson) {
    let img = document.createElement("img");
    img.src = `../../images/costume/costume_${costumeJson[i]["id"]}.webp`;
    let charaName = getCharaName(costumeJson[i]["chara"]);
    let flexitem = `<div class="flex_memoria-item"><a href="./?costumeID=${costumeJson[i]["id"]}"><img src="../../images/costume/costume_${costumeJson[i]["id"]}.webp" loading="lazy"><br>${charaName} / ${costumeJson[i]["name"]}</a></div>`;
    document.getElementById("costume_list").insertAdjacentHTML("beforeend", flexitem);
}

if (costumeSelection == null) {
} else {
    for (let i in costumeJson) {
        if (costumeJson[i]["id"] != costumeSelection) continue;
        let text = "";
        let judge = false;
        for (let j in exchangeContentList) {
            if (exchangeContentList[j]["content"].includes(costumeJson[i]["id"])) {
                text += `
                <div class="flex_medal-item">
                <table>
                    <tr><td rowspan="2"><a href="../../exchange_info/content/?index=${exchangeContentList[j]["index"]}"><img src="../../images/item/${exchangeContentList[j]["index"]}.webp"></a></td>
                        <td><a href="../../exchange_info/content/?index=${exchangeContentList[j]["index"]}">${exchangeContentList[j]["name"]}</a></td></tr>
                </table></div>
                `;
                judge = true;
            }
        }
        if (judge == false) text += "該当なし";

        let charaName = getCharaName(costumeJson[i]["chara"]);
        document.getElementById("result_img").src = `../../images/costume/costume_${costumeJson[i]["id"]}.webp`;
        document.getElementById("result_name").innerHTML = `${charaName} / ${costumeJson[i]["name"]}`;
        document.getElementById("result_ticket").insertAdjacentHTML("beforeend", text);
        break;
    }
    document.getElementById("costume-open-btn").classList.remove("active");
    document.getElementById("costume_list").classList.remove("active");
}


const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error",() => {
        image.setAttribute("src", "../../images/no-image.png");
    });
});
