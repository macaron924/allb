let ranks = [
    {
        "rank": "コラボ",
        "index": "collabo",
        "summary": "→ 該当コラボ期間のみ",
        "content": []
    },
    {
        "rank": "アルティメットメモリア",
        "index": "ultimate",
        "summary": "→ ボーナスメダル・メモリアメダル不可。ガチャボーナス(最短220連)の引換券でも獲得可能だがメモリアムーン使用不可。ごくごく稀に復刻。",
        "content": []
    },
    {
        "rank": "エモーショナルメモリア",
        "index": "emotional",
        "summary": "→ メモリアメダル不可。専用ボーナスメダルでのみ交換(ガチャボーナスでも獲得可能)。節目の時期のエモーショナルメモリアガチャでのみ過去のも復刻。過去にはエモーショナルメモリア確定ガチャチケットの課金パックも。",
        "content": []
    },
    {
        "rank": "御台場ルド女",
        "index": "odaiba-ludojyo",
        "summary": "→ メイン2章以外は月ボーナスメダルで交換可能だった(メモリアメダルはいずれも可)。メイン2章は過去一斉復刻あり2周年配布引換券でメモリア交換可。同時実装のメモリアが復刻する一方でこちらは基本復刻なし。一部はLCSチケット入り。",
        "content": []
    },
    {
        "rank": "2周年の宴",
        "index": "2nd-anniversary",
        "summary": "→ LCSチケット入り。衣装は一部引換券で交換可。",
        "content": []
    },
    {
        "rank": "3周年",
        "index": "3nd-anniversary",
        "summary": "",
        "content": []
    },
    {
        "rank": "誕生日",
        "index": "birthday",
        "summary": "→ 今は主に課金パックかアルティメットガチャボーナスの引換券。過去には2周年無料ガチャにはあったけど2.5周年では無し、3周年は大感謝11回のみ。",
        "content": []
    },
    {
        "rank": "イベント「ユリの花咲く場所」",
        "index": "yuri-event",
        "summary": "→ 季節ではないが限定扱い。2.5周年無料ガチャにはあったが、季節メモリアよりも入手方法がかなり限られている。しかし衣装のみリフレイン等で交換可。",
        "content": []
    },
    {
        "rank": "季節",
        "index": "season",
        "summary": "→ 入手方法がかなり限られている。不定期のシーズンガチャがあったが廃止の模様。シーズンガチャではGWのアイドルも含んでいて、古いものから順に確率アップの対象外になっていた(交換は可)。",
        "content": []
    },
    {
        "rank": "季節 (推定)",
        "index": "season_est",
        "summary": "→ ホリデイガチャは不明だが季節と同時復刻が多そう",
        "content": []
    },
    {
        "rank": "限定イベント",
        "index": "event",
        "summary": "→ 季節でもメイン3章でもないレジェンダリーのないイベントだけど復刻が少ない。",
        "content": []
    },
    {
        "rank": "限定イベント (推定)",
        "index": "event_est",
        "summary": "",
        "content": []
    },
    {
        "rank": "メインストーリー3章",
        "index": "main-story-3",
        "summary": "→ 限定扱い。グラン・エプレ前編のみ新規イベント以外の様々なガチャから出てた時期もあり。グラン・エプレは2.5周年で、クエレブレはクリスマス記念で一斉復刻済み。",
        "content": []
    },
    {
        "rank": "メインストーリー3章 (未復刻)",
        "index": "main-story-3_est",
        "summary": "",
        "content": []
    },
    {
        "rank": "メインストーリー4章 (未復刻)",
        "index": "main-story-4_est",
        "summary": "",
        "content": []
    },
    {
        "rank": "2023秋衣装のクリエイターズコラボ衣装",
        "index": "creators_costume",
        "summary": "マンデーボーナスガチャには一定期間入るがその後の復刻が少ない。",
        "content": []
    },
    {
        "rank": "A",
        "index": "A",
        "summary": "アールヴヘイムメモリア・覚醒フェス・一部の誕生日等 → 排出されるガチャがかなり限られている。ほとんどのガチャチケ入り無し。ただしリフレインは〇。",
        "content": []
    },
    {
        "rank": "B++",
        "index": "Bpp",
        "summary": "イベント系 コスト16 → 主に★5チケ・赤チケ・衣装解放チケのみ。ジュエル消費のガチャでは基本的に含まない。リフレインは〇。",
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
        "summary": "イベント系 コスト18～ → 新規イベント以外の様々なガチャで排出。スプリングバケーション前衛後衛ガチャは前衛後衛ガチャ実装でありながらイベント系と同等の扱いになっている。",
        "content": []
    },
    {
        "rank": "B (推定)",
        "index": "B_est",
        "summary": "",
        "content": []
    },
    {
        "rank": "C+",
        "index": "Cp",
        "summary": "初期実装(制服+一柳隊隊服+α)&隊服 (恒常コスト16) → 主に★5チケ・赤チケ・衣装解放チケ・恒常無料ガチャのみ。ジュエル消費のガチャでは基本的に含まない。",
        "content": []
    },
    {
        "rank": "C",
        "index": "C",
        "summary": "恒常コスト17～ → 各種ガチャチケット、イベントガチャからもすり抜け。ただし衣装付きクリコラ以降は現時点ではマンデーに追加された後、他のガチャに追加される。季節衣装の色違いは入らず。",
        "content": []
    },
    {
        "rank": "C (推定)",
        "index": "C_est",
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
for (let i = 0; i < memoriaJson.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
        if (memoriaJson[i]["get_rank"] == ranks[j]["rank"]) {
            ranks[j]["content"].push(memoriaJson[i]["id"]);
            break;
        }
    }
}

function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]["id"] == id) return memoriaJson[i]["name"];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    let flexbox = document.createElement("div");
    flexbox.className = "flex_memoria-box";
    
    // テーブル本体を作成
    for (let i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        let flexitem = document.createElement("div");
        flexitem.className = "flex_memoria-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.jpg" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    for (let i = 0; i < ranks.length; i++) {
        let jump = `<option value="#${ranks[i]["index"]}">${ranks[i]["rank"]}</option>`
        document.getElementById("jump").insertAdjacentHTML("beforeend", jump);

        let caption = `<br><h2 id=${ranks[i]["index"]}>${ranks[i]["rank"]}</h2>${ranks[i]["summary"]}`;
        document.getElementById("list").insertAdjacentHTML("beforeend", caption);
        document.getElementById("list").appendChild(addMemoriaList(ranks[i]["content"]));
    }
}

addLineup();
