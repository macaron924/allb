function defaultSort() {
    document.getElementById("default-sort-btn").className = "active";
    document.getElementById("date-sort-btn").className = "";
    for (let i = 0; i < ticketContentList.length; i++) {
        document.getElementById("gacha-ticket-list").appendChild(ticketContentList[i]["item"]);
    }
}

function dateSort() {
    document.getElementById("default-sort-btn").className = "";
    document.getElementById("date-sort-btn").className = "active";
    for (let i = 0; i < dateSortedIndexArray.length; i++) {
        document.getElementById("gacha-ticket-list").appendChild(ticketContentList[dateSortedIndexArray[i]]["item"]);
    }
}

function compare(a, b) {
    let dateAndTimeArray_a = ticketContentList[a]["date"].split(" ");
    let date_aray_a = dateAndTimeArray_a[0].split("/");
    let year_a = parseInt(date_aray_a[0]);
    let month_a = parseInt(date_aray_a[1]);
    let day_a = parseInt(date_aray_a[2]);

    let dateAndTimeArray_b = ticketContentList[b]["date"].split(" ");
    let date_aray_b = dateAndTimeArray_b[0].split("/");
    let year_b = parseInt(date_aray_b[0]);
    let month_b = parseInt(date_aray_b[1]);
    let day_b = parseInt(date_aray_b[2]);

    if (year_a < year_b) return 1;
    if (year_a > year_b) return -1;
    if (month_a < month_b) return 1;
    if (month_a > month_b) return -1;
    if (day_a < day_b) return 1;
    if (day_a > day_b) return -1;

    return 1;
}
// データ取得
const gachaTicketJson = loadData("../data/gacha-ticket_data.json");

/*
let gachaTicketJsonCopy = JSON.parse(JSON.stringify(gachaTicketJson));
for (let i = 0; i < gachaTicketJsonCopy.length; i++) {
    gachaTicketJsonCopy[i]["item"] = ""; // flexitem参照先を追加
}*/

let ticketContentList = [];
for (let i in gachaTicketJson) {
    let name = gachaTicketJson[i]["name"];
    let index = gachaTicketJson[i]["index"];
    let date = gachaTicketJson[i]["lineup"]["else"][0]["date"];
    let caption = gachaTicketJson[i]["lineup"]["else"][0]["caption"];
    let content = [];
    for (let j in gachaTicketJson[i]["lineup"]["else"]) {
        content = content.concat(gachaTicketJson[i]["lineup"]["else"][j]["content"]);
    }
    ticketContentList.push({ name: name, index: index, date: date, caption: caption, item: "" });
}

let dateSortedIndexArray = [];
for (let i = 0; i < ticketContentList.length; i++) {
    dateSortedIndexArray.push(i);

    let obj = ticketContentList[i];
    let flexitem = getTicketBox(obj, 1)
    /*
    let item = document.createElement("div");
    item.className = "flex_ticket-item"
    content = `
    <table>
        <tr><td rowspan="2"><a href="./ticket/?index=${gachaTicketJsonCopy[i]["index"]}"><img src="../images/item/gacha-ticket_${gachaTicketJsonCopy[i]["index"]}.webp"></a></td>
            <td><a href="./ticket/?index=${gachaTicketJsonCopy[i]["index"]}">${gachaTicketJsonCopy[i]["name"]}</a></td></tr>
        <tr><td>※${gachaTicketJsonCopy[i]["lineup"]["else"][0]["date"]} ${gachaTicketJsonCopy[i]["lineup"]["else"][0]["caption"]}</td></tr>
    </table>
    `;
    item.innerHTML = content;
    gachaTicketJsonCopy[i]["item"] = item;*/
    ticketContentList[i]["item"] = flexitem;
}

dateSortedIndexArray.sort(compare);

defaultSort();

const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("error", () => {
        image.setAttribute("src", "../images/no-image.png");
    });
});
