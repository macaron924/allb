// データ取得
const charaDataTemp = loadData("../data/chara_data.json");
const charaJson = charaDataTemp[0];
const costumeJson = loadData("../data/costume_data.json");

document.getElementById("list").appendChild(getCostumeList(Object.keys(costumeJson), 1));
