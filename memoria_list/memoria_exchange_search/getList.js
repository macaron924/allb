$(document).on("click", "#memoria-open-btn", function() {
	let findElm = $(this).next(".flex_btn-box");
	$("#memoria_list").toggleClass("active");
	$(this).toggleClass("active");
});

// データ取得
const memoriaJson = loadData("../../data/memoria_data.json");
const exchangeDataJson = loadData("../../data/exchange_data.json");

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const memoriaSelection = params.get("memoriaID");

let exchangeContentList = [];
for (let i in exchangeDataJson) {
    let name = exchangeDataJson[i]["name"];
    let index = exchangeDataJson[i]["index"];
    let content = [];
    for (let j in exchangeDataJson[i]["lineup"]["memoria"]) {
        content = content.concat(exchangeDataJson[i]["lineup"]["memoria"][j]["content"]);
    }
    exchangeContentList.push( { name: name, index: index, content: content } )
}

for (let i in memoriaJson) {
    let img = document.createElement("img");
    img.src = `../../images/memoria/memoria_${memoriaJson[i]["id"]}.jpg`;
    let flexitem = `<div class="flex_memoria-item"><a href="./?memoriaID=${memoriaJson[i]["id"]}"><img src="../../images/memoria/memoria_${memoriaJson[i]["id"]}.jpg" loading="lazy"><br>${memoriaJson[i]["name"]}</a></div>`;
    document.getElementById("memoria_list").insertAdjacentHTML("beforeend", flexitem);
}

if (memoriaSelection == null) {
} else {
    for (let i in memoriaJson) {
        if (memoriaJson[i]["id"] != memoriaSelection) continue;
        let text = "";
        let judge = false;
        for (let j in exchangeContentList) {
            if (exchangeContentList[j]["content"].includes(memoriaJson[i]["id"])) {
                text += `
                <div class="flex_medal-item">
                <table>
                    <tr><td rowspan="2"><a href="../../exchange_info/content/?index=${exchangeContentList[j]["index"]}"><img src="../../images/item/${exchangeContentList[j]["index"]}.jpg"></a></td>
                        <td><a href="../../exchange_info/content/?index=${exchangeContentList[j]["index"]}">${exchangeContentList[j]["name"]}</a></td></tr>
                </table></div>
                `;
                judge = true;
            }
        }
        if (judge == false) text += "該当なし";

        document.getElementById("result_img").src = `../../images/memoria/memoria_${memoriaJson[i]["id"]}.jpg`;
        document.getElementById("result_name").innerHTML = `${memoriaJson[i]["name"]}`;
        document.getElementById("result_ticket").insertAdjacentHTML("beforeend", text);
        break;
    }
    document.getElementById("memoria-open-btn").classList.remove("active");
    document.getElementById("memoria_list").classList.remove("active");
}


const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error",() => {
        image.setAttribute("src", "../../images/no-image.png");
    });
});