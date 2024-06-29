function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

function addLineup() {
    for (let i = eventGachaTicketJson.length - 1; i >= 0; i--) {
        let caption = `<h3>▼${eventGachaTicketJson[i]["name"]}</h3>`;
        document.getElementById("ticket-lineup").insertAdjacentHTML("beforeend", caption);
        document.getElementById("ticket-lineup").appendChild(getMemoriaList(eventGachaTicketJson[i]["lineup"], 1));
    }
}

// データ取得
const eventGachaTicketJson = loadData("../../data/gacha-ticket_event.json");
const memoriaJson = loadData("../../data/memoria_data.json");
const costumeJson = loadData("../../data/costume_data.json");
const charaDataTemp = loadData("../../data/chara_data.json");
const charaJson = charaDataTemp[0];
const charaBelongJson = charaDataTemp[1];

addLineup()
