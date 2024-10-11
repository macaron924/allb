let categories = [
    {
        "c1": "初期実装",
        "index": "start",
        "content": []
    },
    {
        "c1": "メダル/ギガント級討伐イベント",
        "index": "event",
        "content": []
    },
    {
        "c1": "チャレンジバトルイベント",
        "index": "challenge",
        "content": []
    },
    {
        "c1": "属性/レジェンダリーバトルガチャ",
        "index": "zokusei",
        "content": []
    },
    {
        "c1": "覚醒フェス",
        "index": "kakusei",
        "content": []
    },
    {
        "c1": "誕生日/誕生月ガチャ",
        "index": "birthday",
        "content": []
    },
    {
        "c1": "前衛後衛/役割別/クリエイターズコラボガチャ",
        "index": "zeneikouei",
        "content": []
    },
    {
        "c1": "エモーショナルメモリアガチャ",
        "index": "emotional",
        "content": []
    },
    {
        "c1": "アルティメットメモリアガチャ",
        "index": "ultimate",
        "content": []
    },
    {
        "c1": "その他のガチャ",
        "index": "other",
        "content": []
    },
    {
        "c1": "レジェンダリー",
        "index": "legendary",
        "content": []
    },
    {
        "c1": "ミッション、ログインボーナス等",
        "index": "mission",
        "content": []
    },
    {
        "c1": "課金",
        "index": "pay",
        "content": []
    },
    {
        "c1": "パック＆ガチャボーナス衣装解放メモリア",
        "index": "pack-and-gacha-bonus",
        "content": []
    },
    {
        "c1": "アイテム獲得メモリア",
        "index": "item-get",
        "content": []
    },
    {
        "c1": "シリアルコード",
        "index": "code",
        "content": []
    }
];

let c1 = {
    "c1": "",
    "index": "",
    "content": []
};

let c2 = {
    "c2": "",
    "content": []
}

let c3 = {
    "c3": "",
    "content": []
}

// c1探索->見つかればその中身の場所を返す
function searchC1(c1str) {
    for (let i = 0; i < categories.length; i++) {
        if (c1str == categories[i]["c1"]) return categories[i]["content"];
    }

    // 見つからなかった場合は新たに作成してその場所を返す
    let c1copy = JSON.parse(JSON.stringify(c1));
    c1copy["c1"] = c1str;
    categories.push(c1copy);
    return categories[categories.length - 1]["content"];
}

// c2探索->見つかればその中身の場所を返す
function searchC2(c1, c2str) {
    for (let i = 0; i < c1.length; i++) {
        if (c2str == c1[i]["c2"]) return c1[i]["content"];
    }

    // 見つからなかった場合は新たに作成してその場所を返す
    let c2copy = JSON.parse(JSON.stringify(c2));
    c2copy["c2"] = c2str;
    c1.push(c2copy);
    return c1[c1.length - 1]["content"];
}

// c3探索->見つかればその中身の場所を返す
function searchC3(c2, c3str) {
    for (let i = 0; i < c2.length; i++) {
        if (c3str == c2[i]["c3"]) return c2[i]["content"];
    }

    // 見つからなかった場合は新たに作成してその場所を返す
    let c3copy = JSON.parse(JSON.stringify(c3));
    c3copy["c3"] = c3str;
    c2.push(c3copy);
    return c2[c2.length - 1]["content"];
}

function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

function addLineup() {
    for (let i = 0; i < categories.length; i++) {

        let captionC1 = `<h2 class="category-1" id=${categories[i]["index"]}>${categories[i]["c1"]}</h2>`;
        document.getElementById("list").insertAdjacentHTML("beforeend", captionC1);

        let jump = `<option value="#${categories[i]["index"]}">${categories[i]["c1"]}</option>`
        document.getElementById("jump").insertAdjacentHTML("beforeend", jump);

        let c1 = categories[i]["content"];

        if (categories[i]["c1"] != "初期実装") c1 = c1.reverse();
        for (let j = 0; j < c1.length; j++) {

            let captionC2 = `<h3 class="category-2">▼ ${c1[j]["c2"]}</h3>`;
            document.getElementById("list").insertAdjacentHTML("beforeend", captionC2);

            let c2 = c1[j]["content"];

            for (let k = 0; k < c2.length; k++) {

                let captionC3 = `<h4>${c2[k]["c3"]}</h4>`;
                document.getElementById("list").insertAdjacentHTML("beforeend", captionC3);

                document.getElementById("list").appendChild(getMemoriaList(c2[k]["content"], 2));
            }
        }
    }
}


// jsonに格納
for (let id in memoriaJson) {
    let memoriaC1 = memoriaJson[id]["category"]["c1"];
    let memoriaC2 = memoriaJson[id]["category"]["c2"];
    let memoriaC3 = memoriaJson[id]["category"]["c3"];

    // 同じc1を探す
    let searchC1res = searchC1(memoriaC1);
    // c1から同じc2を探す
    let searchC2res = searchC2(searchC1res, memoriaC2);

    for (let j = 0; j < memoriaC3.length; j++) {
        // c2から同じc3を探す
        let searchC3res = searchC3(searchC2res, memoriaC3[j]);
        // 格納
        searchC3res.push(id)
    }
}

addLineup();
