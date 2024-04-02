$(document).on("click", "#memoria-open-btn", function() {
	let findElm = $(this).next(".flex_btn-box");
	$("#memoria_list").toggleClass("active");
	$(this).toggleClass("active");
});

// データ取得
const memoriaJson = loadData("../../data/memoria_data.json");
const gachaTicketJson = loadData("../../data/gacha-ticket_data.json");
const gachaDaily11 = loadData("../../data/gacha_data/gacha-daily11.json");
const gachaFree = loadData("../../data/gacha_data/gacha-free.json");
const gachaLimitedList = getLimitedGachaData(2);


// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const memoriaSelection = params.get("memoriaID");

let ticketContentList = [];
for (let i in gachaTicketJson) {
    let name = gachaTicketJson[i]["name"];
    let index = gachaTicketJson[i]["index"];
    let content = [];
    for (let j in gachaTicketJson[i]["lineup"]["else"]) {
        content = content.concat(gachaTicketJson[i]["lineup"]["else"][j]["content"]);
    }
    ticketContentList.push( { name: name, index: index, content: content } )
}

let gachaContentList = [];
for (let i in gachaLimitedList) {
    let list = gachaLimitedList[i]["ref"];
    for (let j in list) {
        let start = list[j]["start"];
        for (let k in list[j]["gacha"]) {
            let index = list[j]["gacha"][k]["index"];
            let name = list[j]["gacha"][k]["name"];
            let content = [];
            let pu = list[j]["gacha"][k]["lineup"]["pu"];
            let other = list[j]["gacha"][k]["lineup"]["else"];
            for (let l in pu) {
                content = content.concat(pu[l]["content"]);
            }
            content = content.concat(other["content"]);
            gachaContentList.push( { start: start, index: index, name: name, content: content } );
        }
    }
}

let freeContentList = [];
for (let i in gachaFree) {
    let start = gachaFree[i]["start"];
    for (let j in gachaFree[i]["gacha"]) {
        let index = gachaFree[i]["gacha"][j]["index"];
        let name = gachaFree[i]["gacha"][j]["name"];
        let content = [];
        let pu = gachaFree[i]["gacha"][j]["lineup"]["pu"];
        let other = gachaFree[i]["gacha"][j]["lineup"]["else"];
        for (let k in pu) {
            content = content.concat(pu[k]["content"]);
        }
        content = content.concat(other["content"]);
        freeContentList.push( { start: start, index: index, name: name, content: content } );
    }
}

let daily11ContentList = [];
for (let i in gachaDaily11) {
    let start = gachaDaily11[i]["start"];
    for (let j in gachaDaily11[i]["gacha"]) {
        let index = gachaDaily11[i]["gacha"][j]["index"];
        let name = gachaDaily11[i]["gacha"][j]["name"];
        let content = [];
        let pu = gachaDaily11[i]["gacha"][j]["lineup"]["pu"];
        let other = gachaDaily11[i]["gacha"][j]["lineup"]["else"];
        for (let k in pu) {
            content = content.concat(pu[k]["content"]);
        }
        content = content.concat(other["content"]);
        daily11ContentList.push( { start: start, index: index, name: name, content: content } );
    }
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
        for (let j in ticketContentList) {
            if (ticketContentList[j]["content"].includes(memoriaJson[i]["id"])) {
                text += `
                <div class="flex_ticket-item">
                <table>
                    <tr><td rowspan="2"><a href="../../gacha_info/ticket/?index=${ticketContentList[j]["index"]}"><img src="../../images/item/gacha-ticket_${ticketContentList[j]["index"]}.jpg"></a></td>
                        <td><a href="../../gacha_info/ticket/?index=${ticketContentList[j]["index"]}">${ticketContentList[j]["name"]}</a></td></tr>
                </table></div>
                `;
                judge = true;
            }
        }
        if (judge == false) text += "該当なし";

        let text2 = "";
        let judge2 = false;
        for (let j in gachaContentList) {
            if (gachaContentList[j]["content"].includes(memoriaJson[i]["id"])) {
                text2 += `
                <div class="flex_gacha-item">
                <table>
                    <tr><td>${gachaContentList[j]["start"]}</td></tr>
                    <tr><td><a href="../../gacha_info/limited/detail/?index=${gachaContentList[j]["index"]}"><img src="../../images/banner/${gachaContentList[j]["index"]}.jpg"></a></td></tr>
                </table></div>
                `;
                judge2 = true;
            }
        }
        if (judge2 == false) text2 += "該当なし";

        let text3 = "";
        let judge3 = false;
        for (let j in freeContentList) {
            if (freeContentList[j]["content"].includes(memoriaJson[i]["id"])) {
                text3 += `
                <div class="flex_gacha-item">
                <table>
                    <tr><td>${freeContentList[j]["start"]}</td></tr>
                    <tr><td><a href="../../gacha_info/free/detail/?index=${freeContentList[j]["index"]}"><img src="../../images/banner/${freeContentList[j]["index"]}.jpg"></a></td></tr>
                </table></div>
                `;
                judge3 = true;
            }
        }
        if (judge3 == false) text3 += "該当なし";

        let text4 = "";
        let judge4 = false;
        for (let j in daily11ContentList) {
            if (daily11ContentList[j]["content"].includes(memoriaJson[i]["id"])) {
                text4 += `
                <div class="flex_gacha-item">
                <table>
                    <tr><td>${daily11ContentList[j]["start"]}</td></tr>
                    <tr><td><a href="../../gacha_info/daily11/detail/?index=${daily11ContentList[j]["index"]}"><img src="../../images/banner/daily11.jpg"></a></td></tr>
                </table></div>
                `;
                judge4 = true;
            }
        }
        if (judge4 == false) text4 += "該当なし";

        document.getElementById("result_img").src = `../../images/memoria/memoria_${memoriaJson[i]["id"]}.jpg`;
        document.getElementById("result_name").innerHTML = `${memoriaJson[i]["name"]}`;
        document.getElementById("result_ticket").insertAdjacentHTML("beforeend", text);
        document.getElementById("result_gacha").insertAdjacentHTML("beforeend", text2);
        document.getElementById("result_free").insertAdjacentHTML("beforeend", text3);
        document.getElementById("result_daily11").insertAdjacentHTML("beforeend", text4);
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