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
        "rank": "御台場ルド女制服(メイン2章1～3話)",
        "index": "odaiba-ludojyo_uniform",
        "summary": "→ コラボ並に近い扱いでボーナスメダルが専用のみ(メモリアメダルは可)。過去一斉復刻あり。2周年では配布の引換券で交換可だった。一部はLCSチケット入り。",
        "content": []
    },
    {
        "rank": "御台場ルド女ギガント",
        "index": "odaiba-ludojyo_gigant",
        "summary": "→ 月ボーナスメダルで交換可能だった。しかし同時実装のメモリアが復刻する一方でこちらは基本復刻なし。一部はLCSチケット入り。",
        "content": []
    },
    {
        "rank": "2周年の宴",
        "index": "2nd-anniversary",
        "summary": "→ 御台場ルド女含むが月ボーナスメダルで交換可能だった。LCSチケット入り。衣装は百合ヶ丘のみ2.5周年の衣装引換券で復刻。",
        "content": []
    },
    {
        "rank": "誕生日",
        "index": "birthday",
        "summary": "→ 今は主に課金パックかアルティメットガチャボーナスの引換券。過去には2周年無料ガチャにはあったけど2.5周年では剝奪された。季節を含む一部ガチャに入っていたことも。",
        "content": []
    },
    {
        "rank": "イベント「ユリの花咲く場所」",
        "index": "yuri-event",
        "summary": "→ 季節メモリアじゃないのでシーズンガチャには入らないが限定扱い。2.5周年無料ガチャでは剥奪されなかったが、季節メモリアよりも入手方法がかなり限られている。",
        "content": []
    },
    {
        "rank": "季節",
        "index": "season",
        "summary": "→ 入手方法がかなり限られていたが、毎月シーズンガチャとして復刻するようになった(110連で交換も可)。GWのアイドルもなぜかシーズン。古いものから順に確率アップの対象外になる(交換は可)。",
        "content": []
    },
    {
        "rank": "季節 (推定)",
        "index": "season_est",
        "summary": "→ ホリデイガチャの今後の扱いは不明だが、季節扱いかスプリングバケーション同様に通常イベントと同等の扱いになると予想。",
        "content": []
    },
    {
        "rank": "メインストーリー3章",
        "index": "main-story-3",
        "summary": "→ 現時点では限定並扱い。しかし一部(グラン・エプレ前編)は新規イベント以外の様々なガチャから出てた時期もあったので今後その形になる可能性も。2.5周年で一斉復刻済み。",
        "content": []
    },
    {
        "rank": "メインストーリー3章 (未復刻)",
        "index": "main-story-3_est",
        "summary": "グラン・エプレ編と同じ扱いになるはずだが未復刻なので不明。",
        "content": []
    },
    {
        "rank": "A",
        "index": "A",
        "summary": "アールヴヘイムメモリア・覚醒フェス等 → 排出されるガチャがかなり限られている。ほとんどのガチャチケ入り無し。ただしリフレインは〇。",
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
        "summary": "恒常コスト17～ → 各種ガチャチケット、イベントガチャからもすり抜け。",
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
        if (memoriaJson[i]['get_rank'] == ranks[j]['rank']) {
            ranks[j]['content'].push(memoriaJson[i]['id']);
            break;
        }
    }
}

function getMemoriaName(id) {
    for (let i = 0; i < memoriaJson.length; i++) {
        if (memoriaJson[i]['id'] == id) return memoriaJson[i]['name'];
    }
    return "";
}

function addMemoriaList(memoriaArray) {
    // flexboxを生成
    let flexbox = document.createElement('div');
    flexbox.className = "flex_test-box";
    
    // テーブル本体を作成
    for (let i = 0; i < memoriaArray.length; i++) {
        id = memoriaArray[i];

        // flexitemを生成
        let flexitem = document.createElement('div');
        flexitem.className = "flex_test-item";
        flexitem.innerHTML = `<img src="../../images/memoria/memoria_${id}.png" loading="lazy"><br>${getMemoriaName(id)}`;

        // flexitemをflexboxの子要素に追加
        flexbox.appendChild(flexitem);
    }
    
    return flexbox;
}

function addLineup() {
    for (let i = 0; i < ranks.length; i++) {
        let jump = `<option value="#${ranks[i]['index']}">${ranks[i]['rank']}</option>`
        document.getElementById('jump').insertAdjacentHTML('beforeend', jump);

        let caption = `<br><h2 id=${ranks[i]['index']}>${ranks[i]['rank']}</h2>${ranks[i]['summary']}`;
        document.getElementById('list').insertAdjacentHTML('beforeend', caption);
        document.getElementById('list').appendChild(addMemoriaList(ranks[i]['content']));
    }
}

addLineup();