var ranks = [
    {
        "rank": "∞",
        "index": "infinit",
        "summary": "コラボ系 → 該当コラボ期間のみ",
        "content": []
    },
    {
        "rank": "SSS",
        "index": "SSS",
        "summary": "エモーショナルメモリア → ボーナスメダル・メモリアメダル不可、ごくごく稀にしか復刻しない",
        "content": []
    },
    {
        "rank": "未定推定SSS相当",
        "index": "estSSS",
        "summary": "アルティメットメモリア",
        "content": []
    },
    {
        "rank": "SS+",
        "index": "SSp",
        "summary": "御台場ルド女制服 → コラボ並に近い扱い、ボーナスメダルも別、ただしごくごく稀に復刻した",
        "content": []
    },
    {
        "rank": "SS",
        "index": "SS",
        "summary": "御台場ギガント → 御台場ルド女制服と同様でコラボ並に近い扱い、ただし月ボーナスメダルだった",
        "content": []
    },
    {
        "rank": "未定推定SS",
        "index": "estSS",
        "summary": "",
        "content": []
    },
    {
        "rank": "S+",
        "index": "Sp",
        "summary": "季節・誕生日 コスト17 → ごく稀にしか復刻無し、コスト18以上のセレチケだと切り捨てられる",
        "content": []
    },
    {
        "rank": "S",
        "index": "S",
        "summary": "季節・誕生日 コスト18～ → ごく稀にしか復刻無し",
        "content": []
    },
    {
        "rank": "未定推定S",
        "index": "estS",
        "summary": "",
        "content": []
    },
    {
        "rank": "A+",
        "index": "estAp",
        "summary": "覚醒フェス等 → ほとんどのガチャ・ガチャチケ入り無し、ただしリフレインは〇",
        "content": []
    },
    {
        "rank": "A",
        "index": "A",
        "summary": "アールヴヘイムメモリア → ガチャは役割別属性別(専用メダルタイプ)のみ、ガチャチケ入り無し、ただしリフレインは〇",
        "content": []
    },
    {
        "rank": "B+++",
        "index": "Bppp",
        "summary": "メインストーリー3章",
        "content": []
    },
    {
        "rank": "未定推定B+++",
        "index": "estBppp",
        "summary": "",
        "content": []
    },
    {
        "rank": "B++",
        "index": "Bpp",
        "summary": "イベント系 コスト16 → 衣装解放チケのみ、リフレインは〇、実装が早いものは★5チケ・赤チケにも順次追加",
        "content": []
    },
    {
        "rank": "B+",
        "index": "Bp",
        "summary": "イベント系 コスト17 → イベント系が入るガチャがコスト18以上のみが多い、チケでも高コストが増えすぎて確率低下",
        "content": []
    },
    {
        "rank": "B",
        "index": "B",
        "summary": "イベント系",
        "content": []
    },
    {
        "rank": "未定推定B",
        "index": "estB",
        "summary": "",
        "content": []
    },
    {
        "rank": "C+",
        "index": "estCp",
        "summary": "制服隊服(恒常コスト16) → ★5チケ・赤チケ・衣装解放チケ・恒常無料ガチャのみ",
        "content": []
    },
    {
        "rank": "C",
        "index": "C",
        "summary": "恒常コスト17～ → 各種ガチャチケット、イベントガチャからもすり抜け",
        "content": []
    },
    {
        "rank": "未定推定C",
        "index": "estC",
        "summary": "",
        "content": []
    },
    {
        "rank": "非ガチャ産",
        "index": "not-gacha",
        "summary": "",
        "content": []
    }
]

// jsonに格納
for (var i = 0; i < memoriaJson.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
        if (memoriaJson[i]['get_rank'] == ranks[j]['rank']) {
            ranks[j]['content'].push(memoriaJson[i]['id']);
            break;
        }
    }
}

function getMemoriaName(id) {
    for (var i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]['id'] == id) return memoriaJson[i]['name'];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    var flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // テーブル本体を作成
    for (var i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        var flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.png" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    for (var i = 0; i < ranks.length; i++) {
        var jump = `<option value="#${ranks[i]['index']}">${ranks[i]['rank']}</option>`
        document.getElementById('jump').insertAdjacentHTML('beforeend', jump);

        var caption = `<br><h2 id=${ranks[i]['index']}>${ranks[i]['rank']}</h2>${ranks[i]['summary']}`;
        document.getElementById('list').insertAdjacentHTML('beforeend', caption);
        document.getElementById('list').appendChild(addMemoriaList(ranks[i]['content']));
    }
}

addLineup();