// データ取得
const path = "../";
const urls = [
    { dataName: "charaDataTemp", urlName: `${path}data/chara_data.json` },
    { dataName: "costumeJson", urlName: `${path}data/costume_data.json` },
    { dataName: "memoriaJson", urlName: `${path}data/memoria_data.json` }
]

const fetches = urls.map((url) => fetch(url.urlName).then(r => r.json()));

Promise.all(fetches)
    .then(result => {
        // Process
        let resultsObjects = {};
        for (let i in urls) {
            resultsObjects[urls[i].dataName] = result[i];
        }
        document.getElementById("list").appendChild(getMemoriaList(resultsObjects, Object.keys(resultsObjects.memoriaJson)));
    })
