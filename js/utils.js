function loadData( filePath ) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

function getLimitedGachaData ( depth ) {
    let path = "";
    for(let i = 0; i < depth; i++) {
        path += "../"
    }
    const gachaLimitedList = [];

    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202403.json"), index: 202403, active: true, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202402.json"), index: 202402, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202401.json"), index: 202401, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202312.json"), index: 202312, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202311.json"), index: 202311, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202310.json"), index: 202310, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202309.json"), index: 202309, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202308.json"), index: 202308, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202307.json"), index: 202307, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202306.json"), index: 202306, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202305.json"), index: 202305, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202304.json"), index: 202304, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202303.json"), index: 202303, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202302.json"), index: 202302, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202301.json"), index: 202301, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202212.json"), index: 202212, active: false, group: "" } );
    gachaLimitedList.push( { ref: loadData(path + "data/gacha_data/gacha-limited_202211.json"), index: 202211, active: false, group: "" } );
    
    return gachaLimitedList;
};