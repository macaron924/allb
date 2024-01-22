$(document).on('click', '#memoria-open-btn', function() {
	let findElm = $(this).next(".flex_btn-box");
	$('#memoria_list').toggleClass('active');
	$(this).toggleClass('active');
});

// URLパラメータ取得
const url = new URL(window.location.href);
const params = url.searchParams;

// indexのパラメータ取得
const memoriaSelection = params.get('memoriaID');

let ticketContentList = [];
for (let i in gachaTicketJson) {
    let name = gachaTicketJson[i]["name"];
    let index = gachaTicketJson[i]["index"];
    let content = [];
    for (let j in gachaTicketJson[i]["lineup"]["else"]) {
        content = content.concat(gachaTicketJson[i]["lineup"]["else"][j]["content"]);
    }
    ticketContentList.push( { name: name, index: index, content: content } )
    //document.getElementById("result").insertAdjacentHTML("beforeend", `${ticketContentList[i]["name"]}: ${ticketContentList[i]["content"]}<br>`)
}

for (let i in memoriaJson) {
    let img = document.createElement("img");
    img.src = `../../images/memoria/memoria_${memoriaJson[i]["id"]}.jpg`;
    let flexitem = `<div class="flex_test-item"><a href="./?memoriaID=${memoriaJson[i]["id"]}"><img src="../../images/memoria/memoria_${memoriaJson[i]['id']}.jpg" loading="lazy"><br>${memoriaJson[i]['name']}</a></div>`;
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
                    <tr><td rowspan="2"><a href="../../gacha_info/ticket/?index=${ticketContentList[j]['index']}"><img src="../../images/item/gacha-ticket_${ticketContentList[j]['index']}.jpg"></a></td>
                        <td><a href="../../gacha_info/ticket/?index=${ticketContentList[j]['index']}">${ticketContentList[j]['name']}</a></td></tr>
                </table></div>
                `;
                judge = true;
            }
        }
        if (judge == false) text += "該当なし";
        document.getElementById("result_img").src = `../../images/memoria/memoria_${memoriaJson[i]['id']}.jpg`;
        document.getElementById("result_name").innerHTML = `${memoriaJson[i]['name']}`;
        document.getElementById("result_content").insertAdjacentHTML("beforeend", text);
        break;
    }
    document.getElementById("memoria-open-btn").classList.remove("active");
    document.getElementById("memoria_list").classList.remove("active");
}