function getBanner(gacha) {
    let res = "";
    for (let i = 0; i < gacha.length; i++) {
        res += `
        <tr>
            <td colspan="2">
                <a href="./detail/index.html?index=${gacha[i]['index']}">
                    <img class="mini-banner_img" src="../../images/banner/${gacha[i]['index']}.png">
                </a>
            </td>
        </tr>
        `;
    }
    return res;
}

function getMedalName(medal) {
    let medalName = "アイテム";
    let link = false;
    let medals = itemByTypeJson['medal_bonus'];
    for (let i = 0; i < medals.length; i++) {
        if (medals[i]['index'] == medal) {
            medalName = medals[i]['name'];
            link = medals[i]['link'];
            break;
        }
    }
    return [medalName, link];
}

function getMedalLinks(medal) {

    let medalImg = `<img class="item_img" src="../../images/item/${medal}.png">`;
            
    let [medalName, link] = getMedalName(medal);

    // リンクがある場合のみ付加
    if (link == true) {
        medalImg = `<a href="../../exchange_info/content/index.html?index=${medal}">${medalImg}</a>`;
        medalName = `<a href="../../exchange_info/content/index.html?index=${medal}">${medalName}</a>`;
    }

    let res = `
    <tr>
        <td>${medalImg}</td>
        <td>${medalName}</td>
    </tr>
    `;

    return res;
}

for (let i = 0; i < gachaLimitedList.length; i++) {
    
    let list = gachaLimitedList[i]['ref'];/*
    let year = 0;
    let month = 0;*/
    let str = gachaLimitedList[i]['str'];
    let year = Math.floor(str/100);
    let month = str - year * 100;
    

    let group = document.createElement('div');
    group.className = "gacha-group";
    group.insertAdjacentHTML("beforeend", `<h2 class="title active"><span>▶</span> ${year}年${month}月</h2>`)

    let flexBox = document.createElement('div');
    flexBox.className = "flex_gacha-box active";

    for (let j = 0; j < list.length; j++) {

        let start = list[j]['start'];
        let finish = list[j]['finish'];
        let banners = getBanner(list[j]['gacha']);
        let medal = getMedalLinks(list[j]['medal']);
    
        let content = `
        <div class="flex_gacha-item">
            <table>
                <tr><td colspan="2">${start} <br>～ ${finish}</td></tr>
                ${banners}
                ${medal}
            </table>
        </div>
        `;
    
        flexBox.insertAdjacentHTML("beforeend", content);
    }

    group.insertAdjacentElement("beforeend", flexBox)

    document.getElementById('content').insertAdjacentElement("beforeend", group)
}