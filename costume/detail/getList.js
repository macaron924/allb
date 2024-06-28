$(document).on("click", "#costume-open-btn", function () {
    let findElm = $(this).next(".flex_btn-box");
    $("#costume_list").toggleClass("active");
    $(this).toggleClass("active");
});

$(document).on("click", "button.mode-btn", function () {
    let value = this.value;
    switch (value) {
        case "info":
            document.getElementById("button_info").classList.add("active");
            document.getElementById("button_exchanges").classList.remove("active");
            document.getElementById("result_info").classList.add("active");
            document.getElementById("result_exchanges").classList.remove("active");
            break;
        case "exchanges":
            document.getElementById("button_info").classList.remove("active");
            document.getElementById("button_exchanges").classList.add("active");
            document.getElementById("result_info").classList.remove("active");
            document.getElementById("result_exchanges").classList.add("active");
            break;
    }
});

function getCharaName(charaID) {
    return charaJson[charaID]["charaName"];
}

// データ取得
const exchangeDataJson = loadData("../../data/exchange_data.json");

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const costumeSelection = params.get("costumeID");

let exchangeContentList = [];
for (let i in exchangeDataJson) {
    for (let j in exchangeDataJson[i]) {
        let name = exchangeDataJson[i][j]["name"];
        let index = exchangeDataJson[i][j]["index"];
        let get = exchangeDataJson[i][j]["get"];
        let content = [];
        for (let k in exchangeDataJson[i][j]["lineup"]["costume"]) {
            if (exchangeDataJson[i][j]["lineup"]["costume"][k]["caption"].includes("EXペンダント")) continue;
            content = content.concat(exchangeDataJson[i][j]["lineup"]["costume"][k]["content"]);
        }
        exchangeContentList.push({ name: name, index: index, get: get, content: content })
    }
}

document.getElementById("costume_list").appendChild(getCostumeList(Object.keys(costumeJson), 2));


if (costumeSelection != null) {
    let id = costumeSelection;
    let idnum = parseInt(id);

    let text5 = "";
    let judge5 = false;
    for (let j in exchangeContentList) {
        if (exchangeContentList[j]["content"].includes(idnum)) {

            let obj = exchangeContentList[j];
            let flexitem = getMedalBox(obj, 2)

            document.getElementById("result_exchange").appendChild(flexitem);

            /*
            text5 += `
            <div class="flex_medal-item">
            <table>
                <tr><td rowspan="2"><a href="../../exchange/content/?index=${exchangeContentList[j]["index"]}"><img src="../../images/item/${exchangeContentList[j]["index"]}.webp"></a></td>
                    <td><a href="../../exchange/content/?index=${exchangeContentList[j]["index"]}">${exchangeContentList[j]["name"]}</a></td></tr>
            </table></div>
            `;*/
            judge5 = true;
        }
    }
    if (judge5 == false) {
        let div = document.createElement("div");
        div.innerText = "該当なし";
        document.getElementById("result_exchange").appendChild(div);
    }

    let charaName = getCharaName(costumeJson[id]["chara"]);
    document.getElementById("result_img").src = `../../images/costume/costume_${id}.webp`;
    document.getElementById("result_name").innerHTML = `${charaName} / ${costumeJson[id]["name"]}`;
    document.getElementById("result_exchange").insertAdjacentHTML("beforeend", text5);

    document.getElementById("costume-open-btn").classList.remove("active");
    document.getElementById("costume_list").classList.remove("active");
}


const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error", () => {
        image.setAttribute("src", "../../images/no-image.png");
    });
});
