// データ取得
const charaDataTemp = loadData("../data/chara_data.json");
const charaJson = charaDataTemp[0];
const costumeJson = loadData("../data/costume_data.json");
const memoriaJson = loadData("../data/memoria_data.json");

document.getElementById("list").appendChild(getMemoriaList(Object.keys(memoriaJson), 1));
