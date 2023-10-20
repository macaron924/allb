function getBanner(gacha) {
    let res = "";
    for (let i = 0; i < gacha.length; i++) {
        res += `
        <tr>
            <td colspan="2">
                <a href="./detail/?index=${gacha[i]['index']}">
                    <img class="mini-banner_img" src="../../images/banner/${gacha[i]['index']}.png">
                </a>
            </td>
        </tr>
        `;
    }
    return res;
}

function getMedalName(medal) {
    let medalName = "";
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

    if (medalName == "") { // メダル無し
        medalImg = ``;
        medalName = ``;
    } else if (link == true) { // リンクがある場合のみ付加
        medalImg = `<a href="../../exchange_info/content/?index=${medal}">${medalImg}</a>`;
        medalName = `<a href="../../exchange_info/content/?index=${medal}">${medalName}</a>`;
    }

    let res = `
    <tr>
        <td>${medalImg}</td>
        <td>${medalName}</td>
    </tr>
    `;

    return res;
}

function makeContent() {
    // 検索結果件数を保存する変数
    let resultCount = 0;

    for (let i = 0; i < gachaLimitedList.length; i++) {
        
        let list = gachaLimitedList[i]['ref'];
        let index = gachaLimitedList[i]['index'];
        let year = Math.floor(index/100);
        let month = index - year * 100;
        let active = "";
        if (gachaLimitedList[i]['active'] == true) {
            active = "active";
        }
    
        let group = document.createElement('div');
        group.className = `gacha-group ${active}`;
        group.insertAdjacentHTML("beforeend", `<h2 class="title"><span>▶</span> ${year}年${month}月</h2>`);
    
        let flexBox = document.createElement('div');
        flexBox.className = `flex_gacha-box`;
        let type = "";
    
        for (let j = 0; j < list.length; j++) {
    
            let start = list[j]['start'];
            let finish = list[j]['finish'];
            let banners = getBanner(list[j]['gacha']);
            let medal = getMedalLinks(list[j]['medal']);
            type = list[j]['type'];

            let flexItem = document.createElement('div');
            flexItem.className = "flex_gacha-item";
            let content = `
            <table>
                <tr><td colspan="2">${start} <br>～ ${finish}</td></tr>
                ${banners}
                ${medal}
            </table>
            `;
            flexItem.insertAdjacentHTML("beforeend", content);
        
            gachaBoxList.push( { ref: flexItem, type: type, display: true } );
            flexBox.insertAdjacentElement("beforeend", flexItem);
            // 検索結果件数カウント
            resultCount++;
        }

        group.insertAdjacentElement("beforeend", flexBox);
    
        document.getElementById('content').insertAdjacentElement("beforeend", group);
        gachaLimitedList[i]['group'] = group;
    }
    
    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

let gachaBoxList = [];
makeContent();