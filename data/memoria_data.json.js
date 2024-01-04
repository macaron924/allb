const memoriaJson = [
    {
        id: 1,
        name: "守りたいもの",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅲ", "パワーストライクA Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 2,
        name: "世代を越え伝えるもの",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅲ", "Sp.ガードバーストA Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 3,
        name: "完全無欠のお嬢様",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 4,
        name: "ふーみん、司令官になる",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 5,
        name: "紡ぐ未来、変わる今",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 6,
        name: "吉村・Ｔｈｉ・梅の日常",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["ガードストライクA Ⅲ", "ガードストライクA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 7,
        name: "ふたりで守る灯り",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅲ", "Sp.ガードバーストA Ⅲ", "攻:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 8,
        name: "淑やかなるスナイパー",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅲ", "パワーストライクA Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 9,
        name: "先輩と後輩と仲間たち",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 10,
        name: "全力少女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 11,
        name: "藍の一番長い日",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["ガードブレイクA Ⅲ", "ガードブレイクA Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 12,
        name: "ヘルヴォルの名を冠する者",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 13,
        name: "言葉なく猛る",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅲ", "Sp.パワースマッシュA Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 14,
        name: "秘密の魔法の唱え方",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 15,
        name: "その笑顔を守るために",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅲ", "Sp.パワースマッシュA Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 16,
        name: "グラン・エプレの必勝戦術",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 17,
        name: "努力は憧れを追って",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["ガードブレイクA Ⅲ", "ガードブレイクA Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 18,
        name: "エアリアル☆シューター",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 19,
        name: "花は優しく微笑む",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "制服", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードスマッシュA Ⅲ", "Sp.ガードスマッシュA Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 20,
        name: "お気に入りの隊服",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストB Ⅲ", "Sp.ガードアシストB Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 21,
        name: "孤高のリリィが生きる今",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 22,
        name: "バトル・ウエイトレス",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールB Ⅲ", "ガードフォールB Ⅲ", "援:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 23,
        name: "一柳隊の仲間として",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストA Ⅲ", "Sp.パワーアシストA Ⅲ", "援:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 24,
        name: "紅蓮を翔ける勇者",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールC Ⅲ", "ヒールC Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 25,
        name: "トレイン・コースター",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 26,
        name: "可憐なる旗のもとに",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 27,
        name: "踏み出す勇気",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 28,
        name: "夢見る魔法少女",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "アラウンドザウィロー(一柳隊隊服)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールA Ⅲ", "パワーフォールA Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 29,
        name: "レンズにほころぶ百合の蕾",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7, 8] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "カップリングメモリア", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 30,
        name: "ねむねむにさようなら",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11, 10] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "カップリングメモリア", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールC Ⅲ", "ヒールC Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 31,
        name: "やさしい黄昏",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15, 16] },
        get_rank: "C+",
        category: { c1: "初期実装", c2: "カップリングメモリア", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストA Ⅲ", "ガードアシストA Ⅲ", "援:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 32,
        name: "そばにいるだけで",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [2, 1] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "初心者ミッション等", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅲ", "Sp.パワースマッシュA Ⅲ", "攻:ダメージUP Ⅰ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールA Ⅲ", "Sp.パワーフォールA Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 33,
        name: "祝!!リリース!!",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "初心者ミッション等", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストA Ⅱ", "ガードアシストA Ⅱ", "援:支援UP Ⅰ"] }
        ]
    },
    {
        id: 34,
        name: "果てなき戦いの日々",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1, 2] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "初心者ミッション等", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクC Ⅲ", "ストライクC Ⅲ", "攻:ガードUP Ⅱ"] },
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 35,
        name: "ふたりの約束",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1, 2] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "初心者ミッション等", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールB Ⅱ", "ヒールB Ⅱ", "回:回復UP Ⅰ"] }
        ]
    },
    {
        id: 36,
        name: "焔の中の断罪者",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "夢結 / ルナティックトランサー", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["ストライクA Ⅲ", "ストライクA Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 37,
        name: "帰り立つ少女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅱ", "スマッシュB Ⅱ", "攻:Sp.ガードDOWN Ⅰ"] }
        ]
    },
    {
        id: 38,
        name: "シュッツエンゲルの誓い",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1, 2] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 6, name: ["ガードフォールB Ⅲ", "ガードフォールB Ⅲ", "援:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 39,
        name: "雪辱の一閃",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストB Ⅲ", "Sp.パワーアシストB Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 40,
        name: "疾風の救助者",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["WパワーバーストA Ⅳ", "WパワーバーストA Ⅳ", "攻:Sp.ガードUP Ⅱ"] },
           { yakuwari: 6, name: ["風：Sp.ガードフォールB Ⅲ", "風：Sp.ガードフォールB Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 41,
        name: "強くなるために",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["第2弾イベントガチャ (2021/1/22～)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "回:ガードUP Ⅱ"] },
           { yakuwari: 1, name: ["ガードブレイクA Ⅳ+", "ガードブレイクA Ⅳ+", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 42,
        name: "Dear Schutzengel",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "守護天使の誓い (2021/1/20～)", c3: ["第2弾イベントガチャ (2021/1/22～)"] },
        skill: [
           { yakuwari: 1, name: ["ストライクA Ⅲ", "ストライクA Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 43,
        name: "アフタヌーンティー",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードスマッシュA Ⅲ", "Sp.ガードスマッシュA Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 44,
        name: "夜に潜む",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストA Ⅱ", "Sp.ガードアシストA Ⅱ", "援:Sp.ガードDOWN Ⅰ"] }
        ]
    },
    {
        id: 45,
        name: "伝えたい言葉",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールB Ⅲ", "ヒールB Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 46,
        name: "歴戦の貫禄",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 47,
        name: "ニアレスト",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5, 1] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ガードストライクA Ⅲ", "ガードストライクA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 48,
        name: "雨上がりの朝稽古",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["第2弾イベントガチャ (2021/2/3～)"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 49,
        name: "放課後ファンタズム",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ブーステッド・フレンド (2021/1/31～)", c3: ["第2弾イベントガチャ (2021/2/3～)"] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 50,
        name: "楯の乙女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅱ", "パワーストライクA Ⅱ", "攻:ガードDOWN Ⅰ"] }
        ]
    },
    {
        id: 51,
        name: "雨降って絆深まる",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ダメージUP Ⅰ"] }
        ]
    },
    {
        id: 52,
        name: "お気に入りのかわいい服",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールA Ⅲ", "パワーフォールA Ⅲ", "援:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 53,
        name: "誇りの一閃",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["スマッシュA Ⅲ", "スマッシュA Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 54,
        name: "約束のピクニック",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストA Ⅲ", "ガードアシストA Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 55,
        name: "ヘルヴォルの戦乙女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 56,
        name: "私たちの正義",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10, 12] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "叛逆のスキャルドメール (2021/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:支援UP Ⅰ"] }
        ]
    },
    {
        id: 57,
        name: "星降る夜の約束",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールC Ⅲ", "ヒールC Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 58,
        name: "変わる世界と変わらぬ想い",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 59,
        name: "貴方に贈る花",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールA Ⅲ", "Sp.パワーフォールA Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 60,
        name: "わたしの秘密の記録",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストA Ⅲ", "パワーアシストA Ⅲ", "援:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 61,
        name: "都会の空を舞う天使",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールB Ⅲ", "ヒールB Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 62,
        name: "ストロベリー・プリンセス",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅲ", "パワーストライクA Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 63,
        name: "これまでも、これからも隣で",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15, 16] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフル・ダイアリー (2021/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 6, name: ["パワーフォールB Ⅲ", "パワーフォールB Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 64,
        name: "猫の誘惑",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 65,
        name: "安らぎの帰り道",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3, 4] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールA Ⅲ", "ヒールA Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 66,
        name: "戦場を切り裂く閃光",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 7, name: ["ガードヒールB Ⅲ", "ガードヒールB Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 67,
        name: "わたしにできること",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["スマッシュA Ⅲ", "スマッシュA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 68,
        name: "一流の戦い",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["報酬", "第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールA Ⅳ", "ガードフォールA Ⅳ", "援:パワーUP Ⅱ"] },
           { yakuwari: 1, name: ["ストライクA Ⅳ", "ストライクA Ⅳ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 69,
        name: "ふたりのアーセナル",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 5, name: ["火：Sp.ガードアシストB Ⅲ", "火：Sp.ガードアシストB Ⅲ", "援:Sp.ガードUP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 70,
        name: "CHARMにお疲れ様",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3, 4, 9] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 71,
        name: "ロイヤル・ホスピタリティ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールB Ⅲ", "パワーフォールB Ⅲ", "援:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 72,
        name: "一柳隊、大特集！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 5, name: ["火：ガードアシストC Ⅳ", "火：ガードアシストC Ⅳ", "援:パワーUP Ⅱ"] },
           { yakuwari: 2, name: ["ストライクC Ⅲ", "ストライクC Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 73,
        name: "一柳隊の知恵袋",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ノーブルリリィ・レポート (2021/2/28～)", c3: ["第2弾イベントガチャ (2021/3/3～)"] },
        skill: [
           { yakuwari: 1, name: ["Sp.ガードストライクA Ⅲ", "Sp.ガードストライクA Ⅲ", "攻:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 74,
        name: "あたしがこの手で守るもの",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "後衛ピックアップガチャ (2021/3/5～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 75,
        name: "ガラスの中の大切な世界",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "後衛ピックアップガチャ (2021/3/5～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールB Ⅲ", "ガードフォールB Ⅲ", "援:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 76,
        name: "姫歌イメチェン大作戦!!",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 77,
        name: "湯けむりの園",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [3, 1] },
        get_rank: "B+",
        category: { c1: "チャレンジバトルイベント", c2: "水属性チャレンジバトル (2021/3/15～)", c3: ["水属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 3, name: ["ヒールスマッシュA Ⅲ", "ヒールスマッシュA Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 78,
        name: "晴れのちラムネ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B+",
        category: { c1: "チャレンジバトルイベント", c2: "水属性チャレンジバトル (2021/3/15～)", c3: ["水属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 79,
        name: "クラシック・ホリデイ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B++",
        category: { c1: "チャレンジバトルイベント", c2: "水属性チャレンジバトル (2021/3/15～)", c3: ["報酬", "水属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストA Ⅲ", "Sp.パワーアシストA Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 80,
        name: "迷子のクマ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "前衛ガチャピックアップ (2021/3/18～)", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["ストライクA Ⅲ", "ストライクA Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 81,
        name: "うさぎになったカメ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "前衛ガチャピックアップ (2021/3/18～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードスマッシュB Ⅲ", "Sp.ガードスマッシュB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 82,
        name: "アイドルリリィ★スマイル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19, 18] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールA Ⅲ", "Sp.パワーフォールA Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 83,
        name: "ハッピー☆シューティングスター",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ヒールストライクA Ⅳ", "ヒールストライクA Ⅳ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 84,
        name: "光り輝くステージへ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストA Ⅲ", "Sp.ガードアシストA Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 85,
        name: "アイドルリリィをつかまえて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16, 15] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 86,
        name: "姫歌を脅かす2つの新星",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17, 18] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:パワーUP Ⅱ"] },
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅳ+", "Sp.ガードバーストA Ⅳ+", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 87,
        name: "ひめひめ・オン・ザ・ステージ！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アイドルリリィ★ステージ (2021/3/21～)", c3: ["報酬", "イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅲ", "Sp.ガードバーストA Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 88,
        name: "藍の宝物",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.パワーUP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 89,
        name: "突き通す信念の剣",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールB Ⅲ", "ヒールB Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 90,
        name: "トリガーハッピー",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["パワーバーストB Ⅲ", "パワーバーストB Ⅲ", "攻:Sp.ガードUP Ⅱ"] },
           { yakuwari: 5, name: ["風：Sp.パワーアシストB Ⅲ", "風：Sp.パワーアシストB Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 91,
        name: "たった一歩の前進",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールA Ⅲ", "ガードフォールA Ⅲ", "援:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 92,
        name: "キャッチ＆リリース＆イート",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:ガードUP Ⅱ"] },
           { yakuwari: 1, name: ["ガードストライクA Ⅳ", "ガードストライクA Ⅳ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 93,
        name: "そこにある笑顔",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:Sp.パワーDOWN Ⅱ"] },
           { yakuwari: 6, name: ["マイトフォールA Ⅲ", "マイトフォールA Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 94,
        name: "白花咲く港",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:ガードUP Ⅱ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストA Ⅳ", "Sp.パワーアシストA Ⅳ", "援:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 95,
        name: "星が見えない君へ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [10, 12] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "罪なき少女たちのスティグマ (2021/3/31～)", c3: ["報酬", "イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ガードストライクA Ⅲ", "ガードストライクA Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 96,
        name: "ふたつのふれあい",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "後衛ピックアップガチャ (2021/4/6～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールA Ⅲ", "WパワーフォールA Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 97,
        name: "ワンショット",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "後衛ピックアップガチャ (2021/4/6～)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールC Ⅲ", "ヒールC Ⅲ", "回:回復UP Ⅱ"] }
        ]
    },
    {
        id: 98,
        name: "不器用なお姉様",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 99,
        name: "レンズに咲く百合の花",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "前衛ピックアップガチャ (2021/4/13～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:ダメージUP Ⅱ"] }
        ]
    },
    {
        id: 100,
        name: "ハッピーハッピー☆タピオカ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "前衛ピックアップガチャ (2021/4/13～)", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["スマッシュA Ⅲ", "スマッシュA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 101,
        name: "GO!GO!ミリアム",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アーセナル・ジェラシー (2021/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 102,
        name: "優美なる舞",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アーセナル・ジェラシー (2021/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["WガードスマッシュB Ⅲ+", "WガードスマッシュB Ⅲ+", "攻:パワーDOWN Ⅱ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 103,
        name: "踏み込む勇気",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "アーセナル・ジェラシー (2021/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["火：ガードフォールB Ⅲ", "火：ガードフォールB Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 104,
        name: "見切れ希望女子",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [17, 16] },
        get_rank: "B+",
        category: { c1: "チャレンジバトルイベント", c2: "風属性チャレンジバトル (2021/4/19～)", c3: ["風属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 105,
        name: "空想と現実は陸続き",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "B++",
        category: { c1: "チャレンジバトルイベント", c2: "風属性チャレンジバトル (2021/4/19～)", c3: ["報酬", "風属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールA Ⅲ", "ヒールA Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 106,
        name: "パーフェクトガード",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["スマッシュA Ⅲ", "スマッシュA Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 107,
        name: "朋友",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7, 8] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストA Ⅲ", "ガードアシストA Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 108,
        name: "想いの輪唱",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 109,
        name: "復讐の炎",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:Sp.ガードDOWN Ⅱ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 110,
        name: "甘いスイーツでおもてなし♪",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5, 7, 8] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第2弾イベントガチャ (2021/5/3～)"] },
        skill: [
           { yakuwari: 1, name: ["ヒールストライクA Ⅲ", "ヒールストライクA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 111,
        name: "出逢いの約束",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "朋友のブルーストライク (2021/4/30～)", c3: ["第2弾イベントガチャ (2021/5/3～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:回復UP Ⅱ"] },
           { yakuwari: 3, name: ["Sp.マイトバーストA Ⅳ+", "Sp.マイトバーストA Ⅳ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 112,
        name: "恋花様ダイエット大作戦",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["風：パワーフォールB Ⅲ", "風：パワーフォールB Ⅲ", "援:パワーDOWN Ⅱ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 113,
        name: "不完全ゆえに愛おしく",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "リミテッド後衛ガチャ (2021/5/11～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["マイトアシストA Ⅲ", "マイトアシストA Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 114,
        name: "果断なる漆黒の騎士",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "漆黒の騎士と白の姫騎士 (2021/5/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールB Ⅲ", "パワーフォールB Ⅲ", "援:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 115,
        name: "撃滅のブラックナイト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "漆黒の騎士と白の姫騎士 (2021/5/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 116,
        name: "優麗なる白の姫騎士",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "漆黒の騎士と白の姫騎士 (2021/5/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 117,
        name: "不滅のホワイトナイト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "漆黒の騎士と白の姫騎士 (2021/5/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 118,
        name: "カワイイのシャッターチャンス",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "リミテッド前衛ガチャ (2021/5/18～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクB Ⅲ", "ストライクB Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 119,
        name: "おこづかいのゆくえ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B+",
        category: { c1: "チャレンジバトルイベント", c2: "火属性チャレンジバトル (2021/5/20～)", c3: ["火属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅳ", "Sp.ガードバーストA Ⅳ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 120,
        name: "心を満たす栄養食",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B++",
        category: { c1: "チャレンジバトルイベント", c2: "火属性チャレンジバトル (2021/5/20～)", c3: ["報酬", "火属性チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 121,
        name: "この地にて芽吹く",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストC Ⅳ", "ガードアシストC Ⅳ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 122,
        name: "百由の息抜き",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [20] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "百由 / 百合ヶ丘標準制服", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["WガードアシストA Ⅲ", "WガードアシストA Ⅲ", "援:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 123,
        name: "未来を切り開く武器",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [20] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "超越のアーセナルハート (2021/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーブレイクB Ⅲ", "パワーブレイクB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 124,
        name: "新しい可能性",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B++",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "超越のアーセナルハート (2021/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["火：ガードフォールB Ⅲ", "火：ガードフォールB Ⅲ", "援:ガードDOWN Ⅱ"] },
           { yakuwari: 2, name: ["パワーブレイクB Ⅲ", "パワーブレイクB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 125,
        name: "アーセナルの絆",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "超越のアーセナルハート (2021/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュB Ⅲ", "スマッシュB Ⅲ", "攻:ダメージUP Ⅱ"] }
        ]
    },
    {
        id: 126,
        name: "黄昏の研究者たち",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "超越のアーセナルハート (2021/5/31～)", c3: ["第2弾イベントガチャ (2021/6/3～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 127,
        name: "鬼さんズ、こちら",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [7, 4] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "超越のアーセナルハート (2021/5/31～)", c3: ["第2弾イベントガチャ (2021/6/3～)"] },
        skill: [
           { yakuwari: 1, name: ["ガードブレイクA Ⅳ+", "ガードブレイクA Ⅳ+", "攻:ガードDOWN Ⅱ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 128,
        name: "文武両道の乙女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/6/6～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 129,
        name: "ひとりはみんなのために",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/6/6～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 130,
        name: "アンブレイカブル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 131,
        name: "蒼き月の御使い",
        zokusei: 2,
        legendary: "リーグ",
        illustration: { type: "", chara: [21] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュD LG", "スマッシュD LG", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 132,
        name: "勝負の鍵は",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "C",
        category: { c1: "属性/レジェンダリーバトルガチャ", c2: "水属性ピックアップガチャ (2021/6/14～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ウォーターストライクB Ⅲ", "ストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 133,
        name: "アナザーワールド",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 134,
        name: "ウォーター・レイルウェイ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [2, 10, 1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["Sp.ガードストライクA Ⅲ", "Sp.ガードストライクA Ⅲ", "攻:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 135,
        name: "ラ・ヴァカンス・パルフェ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.パワーヒールB Ⅲ", "Sp.パワーヒールB Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 136,
        name: "水の車窓",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [3, 1, 2] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 137,
        name: "あなたと甘いひとときを",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["Sp.パワーブレイクA Ⅲ+", "Sp.パワーブレイクA Ⅲ+", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 138,
        name: "ランペイジクラフト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第2弾イベントガチャ (2021/6/22～)"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 139,
        name: "ざっぱ～～ん！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第2弾イベントガチャ (2021/6/22～)"] },
        skill: [
           { yakuwari: 5, name: ["水：Sp.パワーアシストB Ⅲ", "水：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 140,
        name: "おもちゃのプール",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13, 11] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリティカル☆サマー (2021/6/18～)", c3: ["第2弾イベントガチャ (2021/6/22～)"] },
        skill: [
           { yakuwari: 3, name: ["ヒールスマッシュA Ⅲ", "ヒールスマッシュA Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 141,
        name: "エスコートナイト",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 142,
        name: "輝きの海岸線",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WガードフォールB Ⅲ", "WガードフォールB Ⅲ", "援:Sp.パワーUP Ⅱ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 143,
        name: "馳せたる海辺",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5, 8, 7] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュC Ⅲ", "スマッシュC Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 144,
        name: "グリーンライフ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第2弾イベントガチャ (2021/7/3～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールB Ⅲ", "Sp.ガードヒールB Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 145,
        name: "きみとぼくの創作世界",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第2弾イベントガチャ (2021/7/3～)"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 146,
        name: "スーパーかわいいジャンプ！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [19, 18] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "真夏のエスコートナイト (2021/6/29～)", c3: ["第2弾イベントガチャ (2021/7/3～)"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストA Ⅲ", "WパワーアシストA Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 147,
        name: "レギオン、集結",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "災禍の胎動 (2021/7/10～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールB Ⅱ", "パワーフォールB Ⅱ", "援:支援UP Ⅰ"] }
        ]
    },
    {
        id: 148,
        name: "夜の闇を切り拓く者たち",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15, 16, 17, 19, 18] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "災禍の胎動 (2021/7/10～)", c3: ["1章完結編後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WガードアシストB Ⅲ", "WガードアシストB Ⅲ", "援:ガードUP Ⅱ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 149,
        name: "通じ合うふたり",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [8, 13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "災禍の胎動 (2021/7/10～)", c3: ["1章完結編前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 6, name: ["火：Sp.パワーフォールB Ⅲ", "火：Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 150,
        name: "顕現する脅威",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "災禍の胎動 (2021/7/10～)", c3: ["報酬", "1章完結編前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードストライクB Ⅲ", "ガードストライクB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 151,
        name: "ラプラスの発動",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "梨璃 / ラプラスの目覚め", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ストライクC Ⅲ", "ストライクC Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 152,
        name: "親愛なる仲間",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7, 19, 18] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "未来を切り開く、絆の弾丸 (2021/7/15～)", c3: ["1章完結編前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 153,
        name: "単騎無双",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "未来を切り開く、絆の弾丸 (2021/7/15～)", c3: ["1章完結編前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ヒールストライクB Ⅲ", "ヒールストライクB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 154,
        name: "信頼の背中",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10, 15] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "未来を切り開く、絆の弾丸 (2021/7/15～)", c3: ["1章完結編後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 155,
        name: "戦いを終えて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1, 2, 10, 15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "未来を切り開く、絆の弾丸 (2021/7/15～)", c3: ["1章完結編後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールB Ⅲ+", "ガードヒールB Ⅲ+", "回:WガードUP Ⅱ"] },
           { yakuwari: 4, name: ["ウォータースマッシュB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 156,
        name: "リリィのすべてを伝えるために",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "C",
        category: { c1: "属性/レジェンダリーバトルガチャ", c2: "風属性ピックアップガチャ (2021/7/19～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["ウィンドスマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 157,
        name: "リリィたちの羽休め",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "HA、AN無料/ボックスガチャ", c3: ["0.5周年"] },
        skill: [
           { yakuwari: 3, name: ["ガードスマッシュA Ⅲ", "ガードスマッシュA Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 158,
        name: "神宿りの暴走",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "歴戦乙女のアンサンブル (2021/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ガードストライクA Ⅳ", "ガードストライクA Ⅳ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 159,
        name: "大切な存在",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [6, 2] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "歴戦乙女のアンサンブル (2021/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.パワーフォールC Ⅳ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 160,
        name: "悲壮の華",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "歴戦乙女のアンサンブル (2021/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストD Ⅲ", "ガードアシストD Ⅲ", "援:ガードUP Ⅱ"] },
           { yakuwari: 2, name: ["パワーブレイクB Ⅲ", "パワーブレイクB Ⅲ", "攻:パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 161,
        name: "黄昏の英雄たち",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2, 6, 21, 14, 22] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "歴戦乙女のアンサンブル (2021/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールA Ⅳ", "Sp.ガードフォールA Ⅳ", "援:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["風：スマッシュB Ⅲ", "風：スマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 162,
        name: "のびのびトレーニング！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストA Ⅲ", "Sp.マイトアシストA Ⅲ", "援:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 163,
        name: "プランセス",
        zokusei: 3,
        legendary: "リーグ",
        illustration: { type: "", chara: [22] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 2, name: ["ストライクD LG", "ストライクD LG", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 164,
        name: "夜空に咲く約束の花",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15, 16] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜空に咲く追憶の花 (2021/7/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードスマッシュA Ⅳ", "Sp.ガードスマッシュA Ⅳ", "攻:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 165,
        name: "もう何も奪わせない",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜空に咲く追憶の花 (2021/7/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールB Ⅲ", "ガードヒールB Ⅲ", "回:回復UP Ⅱ"] }
        ]
    },
    {
        id: 166,
        name: "夏祭りのスナイパー",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜空に咲く追憶の花 (2021/7/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードストライクB Ⅲ", "ガードストライクB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 167,
        name: "約束の蕾",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15, 16] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜空に咲く追憶の花 (2021/7/31～)", c3: ["第2弾イベントガチャ (2021/8/3～)"] },
        skill: [
           { yakuwari: 5, name: ["水：ガードアシストC Ⅳ", "水：ガードアシストC Ⅳ", "援:ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:マイトUP Ⅰ"] }
        ]
    },
    {
        id: 168,
        name: "紅巴式夏祭りの楽しみ方",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜空に咲く追憶の花 (2021/7/31～)", c3: ["第2弾イベントガチャ (2021/8/3～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ディファーバーストB Ⅲ+", "Sp.ディファーバーストB Ⅲ+", "攻:Sp.ディファーDOWN Ⅱ"] },
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:Sp.マイトDOWN Ⅱ"] }
        ]
    },
    {
        id: 169,
        name: "優しい夕暮れ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13, 11] },
        get_rank: "B",
        category: { c1: "チャレンジバトルイベント", c2: "サマーチャレンジバトル (2021/8/7～)", c3: ["ハーフアニバーサリー~Sequel~記念サマーガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ガードブレイクA Ⅴ", "ガードブレイクA Ⅴ", "攻:マイトUP Ⅱ"] },
           { yakuwari: 6, name: ["WパワーフォールA Ⅲ", "WパワーフォールA Ⅲ", "援:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 170,
        name: "楽しい遊園地",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "古き空より祈りをこめて (2021/8/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["ファイアスマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:Sp.ガードUP Ⅱ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ガードアシストC Ⅳ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 171,
        name: "繋げたい言葉",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "古き空より祈りをこめて (2021/8/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 172,
        name: "いつかみんなと見る景色",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [11, 5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "古き空より祈りをこめて (2021/8/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 173,
        name: "リフレッシュ！エンジン",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "パワーストライクA Ⅳ+", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 174,
        name: "清淑なる黒き槍",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/8/20～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 1, name: ["ガードブレイクA Ⅳ+", "ガードブレイクA Ⅳ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["火：パワーアシストB Ⅲ", "火：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 175,
        name: "プリンセスひめひめ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/8/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "パワーフォールC Ⅳ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 176,
        name: "仮想訓練場の応酬",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "C",
        category: { c1: "属性/レジェンダリーバトルガチャ", c2: "レジェンダリーバトルガチャ (2021/8/23～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ファイアストライクB Ⅲ", "Sp.ディファーストライクB Ⅲ+", "攻:WガードUP Ⅱ"] },
           { yakuwari: 6, name: ["火：Sp.パワーフォールB Ⅲ", "火：Sp.パワーフォールB Ⅲ", "援:ディファーDOWN Ⅱ"] }
        ]
    },
    {
        id: 177,
        name: "獅子奮迅",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [23] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 5, name: ["WガードアシストD LG", "WガードアシストD LG", "援:支援UP/Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 178,
        name: "はるかな空",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [31, 1] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["ヒールストライクA Ⅳ", "ヒールストライクA Ⅳ", "攻:ダメージUP Ⅱ"] },
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 179,
        name: "貫く想いの一撃",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [31] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 180,
        name: "救う願いの一閃",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [32] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["ウォータースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 6, name: ["水：Sp.パワーフォールB Ⅲ", "水：Sp.パワーフォールB Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 181,
        name: "束ねる絆の一夜",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [33] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["Sp.ディファーストライクA Ⅳ+", "Sp.ディファーストライクA Ⅳ+", "攻:WガードUP Ⅱ"] },
           { yakuwari: 5, name: ["水：パワーアシストB Ⅲ", "水：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 182,
        name: "わたしたちの魔法",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [31, 1] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第2弾イベントガチャ (2021/9/3～)"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ガードアシストC Ⅳ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 183,
        name: "小さなシュッツエンゲル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [31, 32] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第2弾イベントガチャ (2021/9/3～)"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:WパワーDOWN Ⅱ"] },
           { yakuwari: 4, name: ["ウォータースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 184,
        name: "世界を越えて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [32, 2] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "約束の魔法 (魔法少女リリカルなのはDetonation コラボ) (2021/8/31～)", c3: ["第2弾イベントガチャ (2021/9/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 185,
        name: "凛々しい花々",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "1stシングル BD付き限定版", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 186,
        name: "姉妹の休息",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "C",
        category: { c1: "チャレンジバトルイベント", c2: "コラボ開催記念チャレンジバトル (2021/9/8～)", c3: ["コラボ開催記念チャレンジバトルガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 187,
        name: "花を束ねる者",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "蒼穹の白百合 (2021/9/14～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 188,
        name: "追跡者",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "蒼穹の白百合 (2021/9/14～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.パワーブレイクB Ⅲ", "Sp.パワーブレイクB Ⅲ", "攻:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 189,
        name: "この空の下で",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "蒼穹の白百合 (2021/9/14～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 190,
        name: "発進☆ユニコーン！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C",
        category: { c1: "属性/レジェンダリーバトルガチャ", c2: "レジェンダリーバトルガチャ (2021/9/16～)", c3: [""] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.マイトUP Ⅱ"] },
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:Sp.マイトUP Ⅱ"] }
        ]
    },
    {
        id: 191,
        name: "一直線上のストラテジー",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/9/18～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:ダメージUP Ⅱ"] }
        ]
    },
    {
        id: 192,
        name: "校舎屋上のストラグル",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/9/18～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["風：Sp.パワーアシストB Ⅲ", "風：Sp.パワーアシストB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 3, name: ["ウィンドスマッシュA Ⅳ", "WパワーバーストA Ⅳ", "攻:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 193,
        name: "ハッピーを見つけたら☆",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 1, name: ["ウィンドストライクA Ⅳ", "パワーブレイクA Ⅳ", "攻:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 194,
        name: "誠実なる守護者",
        zokusei: 2,
        legendary: "リーグ",
        illustration: { type: "", chara: [24] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA LG", "パワーストライクA LG", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 195,
        name: "ハッピー＆トリート",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "虹色ハロウィンバスターズ (2021/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅴ", "Sp.ガードバーストA Ⅴ", "攻:Sp.マイトUP Ⅱ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.パワーフォールC Ⅳ", "援:Sp.マイトDOWN Ⅱ"] }
        ]
    },
    {
        id: 196,
        name: "吸血鬼のたしなみ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16, 15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "虹色ハロウィンバスターズ (2021/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:WガードUP Ⅱ"] },
           { yakuwari: 4, name: ["ウォータースマッシュB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.マイトDOWN Ⅱ"] }
        ]
    },
    {
        id: 197,
        name: "おいでよ☆ハロウィン",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "虹色ハロウィンバスターズ (2021/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 198,
        name: "ヘルヴォルのお嫁さん",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] },
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅳ+", "Sp.ガードバーストA Ⅳ+", "攻:Sp.マイトUP Ⅰ"] }
        ]
    },
    {
        id: 199,
        name: "ようこそ！ふしぎの国へ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふしぎの国のタヅサ (2021/10/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 200,
        name: "プレ・ハロウィンパーティー！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [6, 5, 9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふしぎの国のタヅサ (2021/10/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 201,
        name: "ホワイト・ラビット・マジック！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふしぎの国のタヅサ (2021/10/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 202,
        name: "平穏を守るための哮り",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/10/14～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅰ"] }
        ]
    },
    {
        id: 203,
        name: "フォール・ダウン・アタック",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/10/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅲ", "ガードヒールD Ⅲ", "回:回復UP Ⅱ"] }
        ]
    },
    {
        id: 204,
        name: "無邪気な親近感",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 ブーステッド・フレンド (2021/10/21～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "パワーアシストC Ⅳ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 205,
        name: "神の子",
        zokusei: 3,
        legendary: "リーグ",
        illustration: { type: "", chara: [25] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 7, name: ["ヒールE LG", "ヒールE LG", "回:回復UP/ガードUP Ⅲ"] }
        ]
    },
    {
        id: 206,
        name: "ここから先へ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5, 11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 ブーステッド・フレンド (2021/10/21～)", c3: ["第2弾イベントガチャ (2021/10/23～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 207,
        name: "プレシャス・モーニング",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "A",
        category: { c1: "覚醒フェス", c2: "覚醒フェス (2021/10/26～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:パワーUP Ⅱ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:マイトUP Ⅰ"] }
        ]
    },
    {
        id: 208,
        name: "飾らぬ想いに咲き誇る",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 209,
        name: "ヘイムスクリングラ・シスターズ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8, 34] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凛然のリトル・シスター (2021/10/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["WパワーブレイクB Ⅲ+", "WパワーブレイクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "パワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 210,
        name: "勝利の女神が微笑む時",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凛然のリトル・シスター (2021/10/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールB Ⅲ", "パワーヒールB Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 211,
        name: "二水のヘイムスクリングラ体験",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凛然のリトル・シスター (2021/10/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 212,
        name: "アクアプラクティス",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "A",
        category: { c1: "属性/レジェンダリーバトルガチャ", c2: "レジェンダリーバトルガチャ (2021/11/3～)", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅲ+", "パワーストライクA Ⅲ+", "攻:パワーUP Ⅱ"] },
           { yakuwari: 5, name: ["WガードアシストB Ⅲ", "WガードアシストB Ⅲ", "援:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 213,
        name: "街角の寡黙な花",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "C",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ", "ディファースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 214,
        name: "電光石火でご到着！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/11/8～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風：ストライクC Ⅲ", "風：ストライクC Ⅲ", "攻:ダメージUP Ⅱ"] }
        ]
    },
    {
        id: 215,
        name: "スピード☆スター",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2021/11/8～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "WパワーアシストB Ⅲ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 216,
        name: "駆けろ！エージェント",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12, 13, 14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜闇を駆けるエージェント (2021/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅲ", "Sp.パワースマッシュA Ⅲ", "攻:Sp.マイトUP Ⅰ"] }
        ]
    },
    {
        id: 217,
        name: "美しき鉄糸の舞",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B+",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜闇を駆けるエージェント (2021/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.ガードDOWN Ⅱ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 218,
        name: "せめて、この子だけは",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "夜闇を駆けるエージェント (2021/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:マイトDOWN Ⅱ"] },
           { yakuwari: 5, name: ["水：パワーアシストB Ⅲ", "水：パワーアシストB Ⅲ", "援:マイトUP Ⅱ"] }
        ]
    },
    {
        id: 219,
        name: "リトル・アークメイジ",
        zokusei: 2,
        legendary: "リーグ",
        illustration: { type: "", chara: [26] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 6, name: ["WガードフォールD LG", "WガードフォールD LG", "援:支援UP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 220,
        name: "エレクトロンバウト！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [20] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 ノーブルリリィ・レポート (2021/11/20～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ヒールスマッシュB Ⅲ", "ヒールスマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 221,
        name: "気まぐれのツーショット",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3, 9] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 ノーブルリリィ・レポート (2021/11/20～)", c3: ["第2弾イベントガチャ (2021/11/22～)"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ガードフォールC Ⅳ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 222,
        name: "指先と白いペン",
        zokusei: 1,
        legendary: "レギオンボックスガチャ",
        illustration: { type: "", chara: [15, 10] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンボックスガチャ", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 223,
        name: "トライング・オン",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "A",
        category: { c1: "覚醒フェス", c2: "覚醒フェス (2021/11/24～)", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:パワーUP Ⅱ"] },
           { yakuwari: 6, name: ["Sp.マイトフォールA Ⅲ", "Sp.マイトフォールA Ⅲ", "援:Sp.ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 224,
        name: "リワード・マイセルフ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "パワーアシストC Ⅳ", "援:パワーUP Ⅱ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 225,
        name: "リリィになるために！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [35] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "結梨 / 百合ヶ丘標準制服", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 226,
        name: "冷たいラムネをどうぞ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "イベント「ユリの花咲く場所」",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ユリの花咲く場所 (2021/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅲ", "ヒールD Ⅲ", "回:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 227,
        name: "みんな、ガンバレー！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [35] },
        get_rank: "イベント「ユリの花咲く場所」",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ユリの花咲く場所 (2021/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 228,
        name: "結梨の大好きな場所",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [35, 1, 2] },
        get_rank: "イベント「ユリの花咲く場所」",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ユリの花咲く場所 (2021/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅳ+", "Sp.ガードバーストA Ⅳ+", "攻:Sp.パワーUP Ⅱ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 229,
        name: "胸躍る聖夜",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メモリー・オブ・リリィズ (2021/12/13～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 230,
        name: "スノーフレイク",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2, 1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メモリー・オブ・リリィズ (2021/12/13～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.ウィンドパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 231,
        name: "プレゼントはお任せ♪",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メモリー・オブ・リリィズ (2021/12/13～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅱ"] },
           { yakuwari: 5, name: ["風：ガードアシストB Ⅲ", "風：ガードアシストB Ⅲ", "援:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 232,
        name: "高らかと響き渡る歌声の中で",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 アイドルリリィ★ステージ (2021/12/20～)", c3: ["第1弾イベントガチャ (第2弾も同日で既存PUのみ)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 233,
        name: "大丈夫、みんながいるから",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 アイドルリリィ★ステージ (2021/12/20～)", c3: ["第1弾イベントガチャ (第2弾も同日で既存PUのみ)"] },
        skill: [
           { yakuwari: 6, name: ["水：パワーフォールB Ⅲ", "水：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 234,
        name: "戦場のコンダクター",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [27] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA LG", "Sp.パワースマッシュA LG", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 235,
        name: "情熱の取材前夜！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "マイトストライクA Ⅳ+", "攻:パワーUP Ⅱ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 236,
        name: "あなたに傘を",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2021", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ガードフォールC Ⅳ", "援:Sp.ガードDOWN Ⅱ"] },
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅲ+", "Sp.パワースマッシュA Ⅲ+", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 237,
        name: "戦いの合間に",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [36, 1, 2, 39] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2021/12/26～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 238,
        name: "絆の歌",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [36, 1] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2021/12/26～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅱ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 239,
        name: "神獣鏡の輝き",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [37] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2021/12/26～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WガードアシストB Ⅲ", "WガードアシストB Ⅲ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 240,
        name: "ガンズ・パーティー",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [38] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2021/12/26～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 241,
        name: "気高き錬金術師",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [39] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2021/12/26～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:ダメージUP Ⅱ"] }
        ]
    },
    {
        id: 242,
        name: "元日の決斗！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "招福万来のラッキーガール (2021/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 243,
        name: "心弛ぶひととき",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "招福万来のラッキーガール (2021/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水：スマッシュB Ⅲ", "水：スマッシュB Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 244,
        name: "故郷へ想い馳せながら",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "招福万来のラッキーガール (2021/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:Sp.ガードUP Ⅱ"] }
        ]
    },
    {
        id: 245,
        name: "罰執行のお時間です",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7, 8] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "招福万来のラッキーガール (2021/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:回復UP Ⅱ"] },
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 246,
        name: "大切な貴女への贈り物",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["火：パワーフォールB Ⅲ", "火：パワーフォールB Ⅲ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 1, name: ["パワーブレイクA Ⅳ", "パワーブレイクA Ⅳ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 247,
        name: "ボナペティ！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [25] },
        get_rank: "A",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "1周年記念役割別ガチャ (2022/1/6～)", c3: ["通常ガチャ", "支援ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 5, name: ["火：パワーアシストB Ⅲ", "火：パワーアシストB Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 248,
        name: "CHARMを絵筆に替えて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [23] },
        get_rank: "A",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "1周年記念役割別ガチャ (2022/1/6～)", c3: ["特殊ガチャ", "妨害ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅱ"] },
           { yakuwari: 6, name: ["Sp.ディファーフォールB Ⅲ", "Sp.ディファーフォールB Ⅲ", "援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 249,
        name: "海の世界に想いを馳せて",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [22] },
        get_rank: "A",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "1周年記念役割別ガチャ (2022/1/6～)", c3: ["回復ガチャ", "特殊ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅲ", "ガードヒールD Ⅲ", "回:回復UP Ⅱ"] },
           { yakuwari: 3, name: ["ディファースマッシュA Ⅳ+", "ディファースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 250,
        name: "ミューチュアルプロテクション",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 守護天使の誓い (2022/1/8～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ヒールスマッシュC Ⅲ", "ヒールスマッシュC Ⅲ", "攻:Sp.パワーUP Ⅱ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 251,
        name: "ファイア・ダッシュ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [20] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 守護天使の誓い (2022/1/8～)", c3: ["第2弾イベントガチャ (同日～)"] },
        skill: [
           { yakuwari: 6, name: ["風：ガードフォールB Ⅲ", "風：ガードフォールB Ⅲ", "援:ガードDOWN Ⅱ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅱ"] }
        ]
    },
    {
        id: 252,
        name: "パジャマパーティー",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "ヴァイスシュヴァルツ アサルトリリィVol.2", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅱ"] }
        ]
    },
    {
        id: 253,
        name: "猪突猛進！",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [28] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 2, name: ["ストライクD LG", "ストライクD LG", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 254,
        name: "戦いの旅路",
        zokusei: 1,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 45, 10, 15, 40, 41] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "HA、AN無料/ボックスガチャ", c3: ["1周年"] },
        skill: [
           { yakuwari: 1, name: ["ガードストライクA Ⅳ", "ガードストライクA Ⅳ", "攻:ガードUP Ⅱ"] },
           { yakuwari: 7, name: ["ガードヒールB Ⅲ", "ガードヒールB Ⅲ", "回:ガードUP Ⅱ"] }
        ]
    },
    {
        id: 255,
        name: "Anniversary Memoria -大切なあなたを想い-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["1周年記念"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールB Ⅲ", "パワーヒールB Ⅲ", "回:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 256,
        name: "狂乱の姫巫女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [40] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "激戦のプレリュード (2022/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 257,
        name: "台場の白き魔女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [41] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "激戦のプレリュード (2022/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 258,
        name: "鬼神の意志を継ぐ者",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [45] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "激戦のプレリュード (2022/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "パワーフォールC Ⅳ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 259,
        name: "ラ・ピュセル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [46] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "激戦のプレリュード (2022/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 260,
        name: "戦火の結束",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15, 40, 45] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "激戦のプレリュード (2022/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "マイトストライクA Ⅳ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 261,
        name: "ジャスト・ザ・ブレイブ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "慟哭のクリューサーオール (2022/1/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 262,
        name: "コール・ユア・ネーム",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "慟哭のクリューサーオール (2022/1/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 263,
        name: "ガーディアン・パワー",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "慟哭のクリューサーオール (2022/1/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 264,
        name: "エクストリームブースト",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "慟哭のクリューサーオール (2022/1/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストC Ⅳ", "ガードアシストC Ⅳ", "援:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["パワーストライクA Ⅲ+", "パワーストライクA Ⅲ+", "攻:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 265,
        name: "一筆の心",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["WパワーブレイクB Ⅲ+", "WパワーブレイクB Ⅲ+", "攻:パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 266,
        name: "煌めく花々",
        zokusei: 2,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "2ndシングル BD付き限定版", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅳ", "ヒールD Ⅳ", "回:WガードUP Ⅰ"] },
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅱ"] }
        ]
    },
    {
        id: 267,
        name: "ドキドキ・ショコラーデ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [9, 20] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メイド・イン・シルト (2022/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 268,
        name: "まごころをこめて！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メイド・イン・シルト (2022/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 269,
        name: "ハッピーバレンタインだにゃん♪",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メイド・イン・シルト (2022/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WパワーヒールC Ⅲ", "WパワーヒールC Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 270,
        name: "ハンドメイド・リリィ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [25, 8, 1, 9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メイド・イン・シルト (2022/2/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストD Ⅲ", "Sp.ガードアシストD Ⅲ", "援:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.マイトスマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 271,
        name: "暁に笑う少女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:支援UP Ⅲ"] },
           { yakuwari: 1, name: ["ガードブレイクA Ⅳ+", "ガードブレイクA Ⅳ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 272,
        name: "ワンマンアーミー",
        zokusei: 3,
        legendary: "リーグ",
        illustration: { type: "", chara: [29] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["1st"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストD LG", "WパワーアシストD LG", "援:支援UP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 273,
        name: "暴君の花嫁",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [44] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双璧の戦乙女 (2022/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 274,
        name: "セインツの宝石",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [43] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双璧の戦乙女 (2022/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "パワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 275,
        name: "劔の妖精",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [42] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双璧の戦乙女 (2022/2/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["WパワーバーストB Ⅲ", "WパワーバーストB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 276,
        name: "信念と誇り",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [15, 40, 16, 41] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["光闇実装記念"] },
        skill: [
           { yakuwari: 6, name: ["闇：WパワーフォールA Ⅲ", "闇：WパワーフォールA Ⅲ", "援:WパワーDOWN Ⅱ"] },
           { yakuwari: 3, name: ["WパワーバーストA Ⅳ", "WパワーバーストA Ⅳ", "攻:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 277,
        name: "寂寥の美",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "美しき世界のメッセンジャー (2022/2/28～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["チャージストライクB Ⅱ", "チャージストライクB Ⅱ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 7, name: ["チャージヒールC Ⅱ", "チャージヒールC Ⅱ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 278,
        name: "先駆けプリンセス",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "美しき世界のメッセンジャー (2022/2/28～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["チャージパワーアシストB Ⅱ", "チャージパワーアシストB Ⅱ", "援:パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["チャージストライクA Ⅲ", "チャージストライクA Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 279,
        name: "遠い日の足跡",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "美しき世界のメッセンジャー (2022/2/28～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["チャージSp.パワーフォールB Ⅱ", "チャージSp.パワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 3, name: ["チャージスマッシュA Ⅲ", "チャージスマッシュA Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 280,
        name: "真夜中のクリエイター",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["闇：Sp.パワーアシストB Ⅲ", "闇：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 281,
        name: "小春日和",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [21, 25] },
        get_rank: "A",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "新属性追加記念ガチャ (2022/3/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["WガードアシストC Ⅳ", "WガードアシストC Ⅳ", "援:WガードUP Ⅱ"] }
        ]
    },
    {
        id: 282,
        name: "放課後のミューズ",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [24] },
        get_rank: "A",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "新属性追加記念ガチャ (2022/3/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:回復UP/副援:支援UP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 283,
        name: "純白の想い",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [2, 1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "オーダーメイドシスターズ (2022/3/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["闇：パワーフォールB Ⅲ", "闇：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 284,
        name: "いつでも近くに",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [20, 9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "オーダーメイドシスターズ (2022/3/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "パワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 285,
        name: "あなただけの守護天使",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [21, 25] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "オーダーメイドシスターズ (2022/3/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["チャージスマッシュB Ⅱ", "チャージスマッシュB Ⅱ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["闇：WガードアシストB Ⅲ", "闇：WガードアシストB Ⅲ", "援:WガードUP Ⅱ"] }
        ]
    },
    {
        id: 286,
        name: "レスキューキャット",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [6, 5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "ギガント級リリース直前記念ガチャ (2022/3/18～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["闇：WガードアシストB Ⅲ", "闇：WガードアシストB Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 287,
        name: "静かに肩を寄せて",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [4, 3] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "ギガント級リリース直前記念ガチャ (2022/3/18～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 288,
        name: "ブレイブ・ショット",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.1 (2022/3/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["チャージSp.パワーアシストB Ⅱ", "チャージSp.パワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.マイトスマッシュA Ⅳ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 289,
        name: "不撓不屈の心を胸に",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.1 (2022/3/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["闇：ガードフォールB Ⅲ", "闇：ガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 290,
        name: "迎え撃つ勇士たち",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [1, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.1 (2022/3/24～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 291,
        name: "キラキラアイスクリーム！",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["チャージヒールD Ⅱ", "チャージヒールD Ⅱ", "回:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 292,
        name: "デートのプロフェッショナル",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [51, 16] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ", "パワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["光：WパワーアシストA Ⅲ", "光：WパワーアシストA Ⅲ", "援:WパワーUP Ⅱ"] }
        ]
    },
    {
        id: 293,
        name: "静寂の中で",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [50] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["チャージストライクB Ⅱ", "チャージストライクB Ⅱ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["チャージガードアシストC Ⅲ", "チャージガードアシストC Ⅲ", "援:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 294,
        name: "灼爛の一撃",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [51] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ", "Sp.パワースマッシュA Ⅳ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールD Ⅲ", "Sp.パワーヒールD Ⅲ", "回:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 295,
        name: "扶翼の剣",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [52] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 296,
        name: "悪夢との共闘",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [50, 52] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["第2弾イベントガチャ (2022/4/4～)"] },
        skill: [
           { yakuwari: 4, name: ["チャージスマッシュB Ⅱ", "チャージスマッシュB Ⅱ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["チャージSp.ガードアシストC Ⅲ", "チャージSp.ガードアシストC Ⅲ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 297,
        name: "世界を守る剣たち",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [52, 15] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "デート・ア・リリィ 狂三フレンド (デート・ア・ライブ コラボ) (2022/3/31～)", c3: ["第2弾イベントガチャ (2022/4/4～)"] },
        skill: [
           { yakuwari: 6, name: ["光：パワーフォールB Ⅲ", "光：パワーフォールB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 298,
        name: "水流乱撃",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 アーセナル・ジェラシー (2022/4/8～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["チャージスマッシュB Ⅱ", "チャージスマッシュB Ⅱ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ガードアシストC Ⅳ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 299,
        name: "なかよしとわいらいと",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [14, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/4/10～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 6, name: ["光：WガードフォールB Ⅲ", "光：WガードフォールB Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 300,
        name: "月下の傍観者",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [5, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/4/10～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 301,
        name: "愛しき人との待ち合わせ",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["チャージストライクB Ⅱ", "チャージストライクB Ⅱ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["パワーヒールD Ⅲ", "パワーヒールD Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 302,
        name: "そうさく倶楽部の活動",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [53, 3] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "まごころを留めて (2022/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["スマッシュC Ⅲ", "スマッシュC Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["光：WガードフォールA Ⅲ", "光：WガードフォールA Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 303,
        name: "不動劔の姫",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [53] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "まごころを留めて (2022/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "パワーストライクA Ⅳ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 6, name: ["チャージパワーフォールB Ⅱ", "チャージパワーフォールB Ⅱ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 304,
        name: "飛翔迎撃",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "まごころを留めて (2022/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ", "Sp.ガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 305,
        name: "麗しき出立",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "まごころを留めて (2022/4/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["光：パワーアシストB Ⅲ", "光：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 306,
        name: "フラガラッハの光",
        zokusei: 4,
        legendary: "リーグ",
        illustration: { type: "", chara: [21] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールE LG", "WガードヒールE LG", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 307,
        name: "雷光一閃",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.2 (2022/4/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["光：Sp.ガードフォールB Ⅲ", "光：Sp.ガードフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 308,
        name: "アクアストライク",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.2 (2022/4/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["チャージヒールC Ⅱ", "チャージヒールC Ⅱ", "回:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 309,
        name: "ストームデュオ",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [15, 18] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.2 (2022/4/25～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 5, name: ["光：ガードアシストB Ⅲ", "光：ガードアシストB Ⅲ", "援:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトブレイクA Ⅳ+", "マイトブレイクA Ⅳ+", "攻:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 310,
        name: "アサルトリリィ ふるーつ",
        zokusei: 4,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "アサルトリリィ ふるーつ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["光：WガードフォールA Ⅲ", "光：WガードフォールA Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 311,
        name: "駆ける希望",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [1, 45, 40] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["GWキャンペーン"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "回:パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["ガードブレイクA Ⅳ", "ガードブレイクA Ⅳ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 312,
        name: "Emotional Memoria -癒しの露天風呂-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "ラスバれ！GW記念 エモーショナルメモリア -癒しの露天風呂- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["チャージスマッシュB Ⅱ", "チャージスマッシュB Ⅱ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["光：WガードアシストB Ⅲ", "光：WガードアシストB Ⅲ", "援:WガードUP Ⅱ"] }
        ]
    },
    {
        id: 313,
        name: "不死身の刃",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [47] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "鋼鉄の意志、未来への翼 (2022/4/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ディファーアシストB Ⅲ", "ディファーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 314,
        name: "友を守護する剣",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [48] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "鋼鉄の意志、未来への翼 (2022/4/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["チャージガードフォールB Ⅱ", "チャージガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 315,
        name: "狂化フルスロットル",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [49] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "鋼鉄の意志、未来への翼 (2022/4/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 316,
        name: "みんなを守るために",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [11, 45] },
        get_rank: "御台場ルド女制服(メイン2章1～3話)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "鋼鉄の意志、未来への翼 (2022/4/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:回復UP Ⅲ"] },
           { yakuwari: 1, name: ["Sp.ディファーストライクA Ⅳ+", "Sp.ディファーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 317,
        name: "足踏み健康ロードの悲劇",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["チャージストライクB Ⅱ", "チャージストライクB Ⅱ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["闇：パワーフォールB Ⅲ", "闇：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 318,
        name: "すってんあかりん",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/5/16～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 319,
        name: "ブレイク・タイム",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [3, 5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/5/16～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 320,
        name: "ラブリーアンドピース",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [15, 19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/5/16～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 321,
        name: "思い出はカメラの中に",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [16, 18, 17] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/5/16～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "WパワーアシストB Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 322,
        name: "希望の光",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [10, 14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "悪蝕のナイトメア (2022/5/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 323,
        name: "だいすきをあげる",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "悪蝕のナイトメア (2022/5/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ディファーアシストB Ⅲ", "Sp.ディファーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 324,
        name: "私ヲ蝕ム悪イ夢",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "悪蝕のナイトメア (2022/5/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["チャージSp.パワーフォールB Ⅱ", "チャージSp.パワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["チャージスマッシュB Ⅱ", "チャージスマッシュB Ⅱ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 325,
        name: "昼下がりのラプソディー",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:Sp.ガードUP Ⅲ"] },
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 326,
        name: "心の炎は豪雨で消えず",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.3 (2022/5/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["ディファーアシストB Ⅲ", "ディファーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 327,
        name: "相生の水先案内人",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.3 (2022/5/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 328,
        name: "もう一度、何度でも",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [8, 1] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.3 (2022/5/25～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "マイトストライクA Ⅳ+", "攻:ガードUP Ⅲ"] },
           { yakuwari: 6, name: ["闇：ガードフォールB Ⅲ", "闇：ガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 329,
        name: "BZのプロフェッショナル",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [54] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メンター・ザ・リリィ (2022/5/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ディファーアシストB Ⅲ", "Sp.ディファーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 330,
        name: "最高のルームメイト",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [2, 54] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メンター・ザ・リリィ (2022/5/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:回復UP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.マイトスマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 331,
        name: "美しき師弟関係",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [1, 54] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メンター・ザ・リリィ (2022/5/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "パワーアシストC Ⅳ", "援:パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "マイトストライクA Ⅳ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 332,
        name: "生徒会のお仕事",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [54] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "メンター・ザ・リリィ (2022/5/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["光：Sp.パワーフォールB Ⅲ", "光：Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 333,
        name: "尊みの探求者",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["闇：Sp.パワーフォールB Ⅲ", "闇：Sp.パワーフォールB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 334,
        name: "回遊のススメ",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [18, 8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/6/9～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 335,
        name: "メイクアップ！",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [12, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/6/9～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 336,
        name: "謳歌のミュージックアワー",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [13, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/6/9～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ディファーアシストB Ⅲ", "Sp.ディファーアシストB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 337,
        name: "お手当マイスター",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [16, 18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/6/9～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["チャージSp.パワーフォールB Ⅱ", "チャージSp.パワーフォールB Ⅱ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 338,
        name: "勝利のファンファーレ",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [6, 7] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 朋友のブルーストライク (2022/6/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["チャージストライクB Ⅱ", "チャージストライクB Ⅱ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "パワーヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 339,
        name: "M.V.P.オンステージ",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [19, 15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "フェス!フェス!アイドルリリィ (2022/6/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ディファーブレイクB Ⅲ+", "ディファーブレイクB Ⅲ+", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 6, name: ["ディファーフォールB Ⅲ", "ディファーフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 340,
        name: "乙女の非常事態",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "フェス!フェス!アイドルリリィ (2022/6/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["闇：Sp.パワーアシストB Ⅲ", "闇：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 341,
        name: "ビーチでバカンス",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17, 18] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "フェス!フェス!アイドルリリィ (2022/6/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールD Ⅲ", "パワーヒールD Ⅲ", "回:パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "マイトストライクA Ⅳ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 342,
        name: "華の休息",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "フェス!フェス!アイドルリリィ (2022/6/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ガードフォールC Ⅳ", "援:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 343,
        name: "クローバー・クラウン",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["WパワーヒールC Ⅲ", "WパワーヒールC Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 344,
        name: "猛る獅子の剣",
        zokusei: 5,
        legendary: "リーグ",
        illustration: { type: "", chara: [23] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクD LG", "ガードブレイクD LG", "攻:ダメージUP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 345,
        name: "ここから先は通さない",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.4 (2022/6/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.パワーアシストC Ⅳ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 346,
        name: "巨影を討つ閃光",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.4 (2022/6/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["光：パワーフォールB Ⅲ", "光：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["ディファーブレイクB Ⅲ+", "ディファーブレイクB Ⅲ+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 347,
        name: "この勝利が小さな一歩でも",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [10, 13] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 アビスサーペントChapter.4 (2022/6/24～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ガードヒールD Ⅲ", "回:Sp.パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 348,
        name: "Emotional Memoria-お姉様の水難-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -お姉様の水難- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["マイトフォールB Ⅲ", "マイトフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 349,
        name: "ピュリファイ・ラプラス",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "絆色のスフィアコネクト (2022/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["闇：Sp.パワーアシストB Ⅲ", "Sp.ダークパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ダークガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 350,
        name: "絆のアルケミートレース",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "絆色のスフィアコネクト (2022/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ダークパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["闇：ガードフォールB Ⅲ", "ダークガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 351,
        name: "信じる想いを力に変えて",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [8, 1] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "絆色のスフィアコネクト (2022/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ライトパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ", "Sp.ダークガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 352,
        name: "水も滴るいい乙女",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/7/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ライトパワーストライクB Ⅲ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["光：パワーアシストB Ⅲ", "ライトパワーアシストB Ⅱ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 353,
        name: "ゼロ距離のしあわせ",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17, 15] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/7/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ダークパワースマッシュB Ⅲ", "攻:ダメージUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ライトガードアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 354,
        name: "光の注ぐ夜",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [6, 4] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/7/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ダークガードヒールC Ⅲ", "回:回復UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ライトガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 355,
        name: "やめられない刺激",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/7/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["闇：パワーフォールB Ⅲ", "ライトパワーフォールB Ⅱ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ダークガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 356,
        name: "殲滅のシルバーバレット",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 罪なき少女たちのスティグマ (2022/7/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["光：パワーフォールB Ⅲ", "ダークパワーフォールB Ⅱ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ライトガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 357,
        name: "祝1.5周年りりふぇす!!",
        zokusei: 5,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 10, 15] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "HA、AN無料/ボックスガチャ", c3: ["1.5周年"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストA Ⅲ", "WパワーアシストA Ⅲ", "援:WパワーUP Ⅱ"] }
        ]
    },
    {
        id: 358,
        name: "面目躍如のサバイバル",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [4, 3] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィティック漂流記 (2022/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ダークガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ライトパワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 359,
        name: "炊事は任せた！",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [6, 2] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィティック漂流記 (2022/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ダークパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 360,
        name: "ウッドクラフトに挑戦",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィティック漂流記 (2022/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ダークガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 361,
        name: "ダイビング・アタッカー",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィティック漂流記 (2022/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ダークガードアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ライトガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 362,
        name: "楽しいを探しに行こう！",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ダークパワーブレイクB Ⅲ", "攻:パワーDOWN Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ダークパワーフォールB Ⅱ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 363,
        name: "Emotional Memoria-晴れときどきサンオイル-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -晴れときどきサンオイル- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ライトパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールD Ⅲ", "ダークガードヒールD Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 364,
        name: "アンブッシュ",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.1 (2022/7/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクE Ⅳ", "ダークパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールE Ⅲ", "ライトガードヒールC Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 365,
        name: "淀みを蹴って",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.1 (2022/7/25～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュE Ⅳ", "Sp.ダークパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールE Ⅳ", "Sp.ライトパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 366,
        name: "バトル・デプロイメント",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [6, 2] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.1 (2022/7/25～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅴ+", "Sp.ダークパワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストE Ⅳ", "Sp.ライトガードアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 367,
        name: "クリエイターズコラボ-月に顔をそむけて-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [23, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/7/27～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ダークガードブレイクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 368,
        name: "クリエイターズコラボ-レディーティータイム-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [16, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/7/27～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ライトパワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 369,
        name: "クリエイターズコラボ-ひまわりとんだよ-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 15] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/7/27～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["闇：パワーフォールB Ⅲ", "ライトパワーフォールB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 370,
        name: "クリエイターズコラボ-らぶらぶぴーす-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/7/27～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["光：ガードアシストB Ⅲ", "ダークガードアシストB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 371,
        name: "不屈の一太刀",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "灼炎のエニグマ (2022/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ライトパワーストライクB Ⅲ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["光：ガードアシストB Ⅲ", "ダークガードアシストB Ⅱ", "援:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 372,
        name: "極限コンビネーション",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [12, 13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "灼炎のエニグマ (2022/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ライトガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ダークパワースマッシュA Ⅳ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 373,
        name: "激戦の終わりに",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [13, 10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "灼炎のエニグマ (2022/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ライトガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 374,
        name: "Cherish",
        zokusei: 4,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "一柳隊ソロ曲アルバム", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "パワーフォールC Ⅳ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 375,
        name: "Diverse",
        zokusei: 5,
        legendary: "",
        illustration: { type: "静止画", chara: [15, 10, 11, 12, 13, 14, 16, 17, 18, 19] },
        get_rank: "非ガチャ産",
        category: { c1: "シリアルコード", c2: "ヘルヴォル＆グラン・エプレソロ曲アルバム", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 376,
        name: "新刊1部ください！？",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [17, 4] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "新刊1部ください！？ (2022/8/6～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "回:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 377,
        name: "見返り美人",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 夜空に咲く追憶の花 (2022/8/8～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ライトガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["光：Sp.パワーフォールB Ⅲ", "Sp.ダークパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 378,
        name: "夏の海とかき氷",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ダークガードブレイクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["闇：ガードフォールB Ⅲ", "ダークガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 379,
        name: "クリエイターズコラボ-きらめきステージ-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/8/14～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ライトパワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 380,
        name: "クリエイターズコラボ-躍動の旋律-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/8/14～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "ダークパワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 381,
        name: "クリエイターズコラボ-花咲くハーモニー-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/8/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストC Ⅳ", "ダークガードアシストB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 382,
        name: "クリエイターズコラボ-想いを込めた歌声-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "レギオンリーグ記念前衛後衛ガチャ (2022/8/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ライトガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 383,
        name: "祭囃子と恋の音",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [3, 1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふたりの魂祭り (2022/8/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ライトパワーブレイクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 384,
        name: "ポイ越しの笑顔",
        zokusei: 5,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふたりの魂祭り (2022/8/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ライトパワーバーストB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.ライトガードアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 385,
        name: "飛び出せミリアム！",
        zokusei: 4,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ふたりの魂祭り (2022/8/17～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ダークガードヒールC Ⅲ", "回:回復UP Ⅲ"] },
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "ライトパワーストライクA Ⅳ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 386,
        name: "クリエイターズコラボ-納涼かき氷-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [1, 9] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/8/20～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ダークガードバーストB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 387,
        name: "クリエイターズコラボ-涼やかな響き-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/8/20～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ライトガードブレイクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 388,
        name: "クリエイターズコラボ-打ち上げ花火-",
        zokusei: 4,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/8/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ダークパワーフォールB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 389,
        name: "クリエイターズコラボ-夏色日和-",
        zokusei: 5,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [21, 25] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "祝1.5周年りりふぇす!!記念ガチャ (2022/8/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ライトガードヒールC Ⅲ", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 390,
        name: "ナイトガンスリンガー",
        zokusei: 4,
        legendary: "リーグ",
        illustration: { type: "", chara: [26] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストD LG", "Sp.ガードバーストD LG", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 391,
        name: "天からの強襲",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.2 (2022/8/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅱ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウォーターパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 392,
        name: "アクロバット・シューター",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.2 (2022/8/24～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.ウォーターパワーヒールC Ⅲ", "回:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 393,
        name: "その瞳に映るモノ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17, 12] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.2 (2022/8/24～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールB Ⅲ", "Sp.ウォーターガードフォールB Ⅱ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 394,
        name: "氷帝",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [56] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ライフロングフレンド (2022/8/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["パワーヒールC Ⅲ", "ウォーターパワーヒールC Ⅲ", "回:パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 395,
        name: "白鳥の姫騎士",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [57] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ライフロングフレンド (2022/8/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["水拡：パワーアシストB Ⅳ", "水拡：パワーアシストB Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 396,
        name: "戦場のお色直し",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [1, 56] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ライフロングフレンド (2022/8/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウォーターガードフォールB Ⅱ", "コ:MP消費DOWN Ⅱ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 397,
        name: "親愛なるルームメイト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [56, 1] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ライフロングフレンド (2022/8/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ウォーターガードバーストB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 398,
        name: "クリエイターズコラボ-りざるとちぇっく-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [4, 3] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ウォーターガードブレイクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 399,
        name: "クリエイターズコラボ-もっと優しく-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 400,
        name: "クリエイターズコラボ-先輩ふぁいと☆-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [16, 18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストC Ⅳ", "WパワーアシストC Ⅳ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 401,
        name: "クリエイターズコラボ-ペアトレ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [29, 26] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 402,
        name: "一葉ののんびりタイム",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 古き空より祈りをこめて (2022/9/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:ガードDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "コ:MP消費DOWN Ⅱ"] }
        ]
    },
    {
        id: 403,
        name: "真夜中の極秘作戦",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜楯のコンフリクト (2022/9/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 404,
        name: "ミッドナイトスティール",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜楯のコンフリクト (2022/9/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 405,
        name: "息を潜めて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜楯のコンフリクト (2022/9/16～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウォーターパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 406,
        name: "クリエイターズコラボ-すすきの道しるべ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [6, 5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/21～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 407,
        name: "クリエイターズコラボ-二人の奏でる夜の歌-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/21～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 408,
        name: "クリエイターズコラボ-星空のどうぶつ探し-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/21～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["水：WガードアシストC Ⅳ", "水：WガードアシストC Ⅳ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 409,
        name: "クリエイターズコラボ-好きなものを一緒に-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [28, 27] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/9/21～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 410,
        name: "静寂に佇む狩人",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.3 (2022/9/23～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ガードフォールC Ⅳ", "援:ガードDOWN Ⅲ"] },
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウォーターパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 411,
        name: "藍は舞い降りた",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.3 (2022/9/23～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["ディファーアシストC Ⅳ", "ディファーアシストC Ⅳ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 412,
        name: "らんとたづさのかくれんぼ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11, 5] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.3 (2022/9/23～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 413,
        name: "ダイスキをキャンバスに",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 414,
        name: "ふたりの距離",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16, 15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "すれ違いのティーガーデン (2022/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 415,
        name: "庭園の護り人",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "すれ違いのティーガーデン (2022/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["チャージSp.パワーフォールB Ⅱ", "チャージSp.パワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 416,
        name: "ソーイングマスター姫歌",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "すれ違いのティーガーデン (2022/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 417,
        name: "秋空ピクニック",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 418,
        name: "クリエイターズコラボ-ジャックコーデ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [12, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 419,
        name: "クリエイターズコラボ-Early Trick-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [24, 23] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 420,
        name: "クリエイターズコラボ-こころにいたずら-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [2, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["水：Sp.パワーアシストC Ⅳ", "水：Sp.パワーアシストC Ⅳ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 421,
        name: "クリエイターズコラボ-くるくおーらんたん-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールC Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウォーターパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 422,
        name: "陽だまりシュッツエンゲル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [37, 36] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2022/10/7～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.ウォーターパワーヒールC Ⅲ", "回:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 423,
        name: "夜空に響く勝利の歌",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [36] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻 戦場に咲く歌の花 (戦姫絶唱シンフォギアXD UNLIMITED コラボ) (2022/10/7～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 424,
        name: "いたずらゴースト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "トリック・オア・スイーツ (2022/10/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ウォーターガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 425,
        name: "どきどきデビル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "トリック・オア・スイーツ (2022/10/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ディファーアシストC Ⅳ", "Sp.ディファーアシストC Ⅳ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["ディファーブレイクB Ⅲ+", "ディファーブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 426,
        name: "はじらいマミー",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "トリック・オア・スイーツ (2022/10/15～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 427,
        name: "クリエイターズコラボ-秋の木漏れ日-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/19～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 428,
        name: "クリエイターズコラボ-秋月夜の彩り-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [22, 21] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/19～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウォーターパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 429,
        name: "クリエイターズコラボ-紅葉も頬も色づいて-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [8, 7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/19～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 430,
        name: "クリエイターズコラボ-紅葉の帳-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [14, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/10/19～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 431,
        name: "ひめひめ華麗に参上！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.4 (2022/10/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["水拡：Sp.パワーフォールB Ⅳ", "水拡：Sp.パワーフォールB Ⅳ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 432,
        name: "好機を待つのじゃ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.4 (2022/10/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["水：パワーアシストC Ⅳ", "水：パワーアシストC Ⅳ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 433,
        name: "雲間から差し込む光",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [19, 9] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ギガント級ヒュージ討伐 カオスサーペントChapter.4 (2022/10/21～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅳ+", "Sp.ウォーターガードバーストA Ⅳ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 434,
        name: "月夜に吠える天狼",
        zokusei: 3,
        legendary: "リーグ",
        illustration: { type: "", chara: [24] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールE LG", "WパワーフォールE LG", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 435,
        name: "ワイン色の思い出",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["風：WガードフォールB Ⅲ", "風：WガードフォールB Ⅲ", "援:WガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 436,
        name: "形勢逆転！！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [58, 10] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウィンドパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 437,
        name: "西住流の誇り",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [59] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 438,
        name: "優雅なティータイム",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [60] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["風：Sp.パワーアシストB Ⅲ", "ライフアシストB Ⅱ", "援:WガードUP Ⅲ"] }
        ]
    },
    {
        id: 439,
        name: "予想外の事態",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [61, 11] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 440,
        name: "作戦会議です！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [58, 59, 10, 12] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストB Ⅲ", "ライフアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウィンドパワースマッシュA Ⅳ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 441,
        name: "束の間の休息",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [62] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第2弾イベントガチャ (2022/11/4～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:回復UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ウィンドガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 442,
        name: "ワーオ！　エキサイティン！！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [63] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第2弾イベントガチャ (2022/11/4～)"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウィンドガードフォールC Ⅲ", "援:ガードDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 443,
        name: "CHARMという兵器",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [58] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "リリィズ＆パンツァー (ガールズ＆パンツァー コラボ) (2022/10/31～)", c3: ["第2弾イベントガチャ (2022/11/4～)"] },
        skill: [
           { yakuwari: 5, name: ["風：パワーアシストB Ⅲ", "ライフアシストB Ⅱ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ウィンドガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 444,
        name: "クリエイターズコラボ-ねんねこぐろっぴ-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [20, 9] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/6～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ディファーアシストB Ⅲ", "Sp.ディファーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 445,
        name: "クリエイターズコラボ-不動劔と至宝-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [53, 3] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/6～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウォーターガードフォールC Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 446,
        name: "カワウソづくし",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/6～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["水：WパワーアシストB Ⅲ", "水：WパワーアシストB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 447,
        name: "ひめひめコールお願いっ！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/6～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.マイトフォールB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 448,
        name: "かめ、のち、えがお",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/6～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 449,
        name: "暮れなずむ空",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "復刻(イベント復刻無し) 歴戦乙女のアンサンブル (2022/11/8～)", c3: ["ピックアップガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["チャージガードフォールB Ⅱ", "チャージガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 450,
        name: "縄跳びトレーニング",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 451,
        name: "あなたとおそろい",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "憂い晴らすは姉妹の絆 (2022/11/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 452,
        name: "騒がし乙女の凱旋",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [34] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "憂い晴らすは姉妹の絆 (2022/11/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["水：ガードフォールB Ⅲ", "ウォーターガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 453,
        name: "覚醒の兆し",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "憂い晴らすは姉妹の絆 (2022/11/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "ライフアシストB Ⅱ", "援:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 454,
        name: "クリエイターズコラボ-もふもふな時間-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [5, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/18～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 455,
        name: "クリエイターズコラボ-思い出がもう一つ-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [25, 24] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/18～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["WガードアシストB Ⅲ", "WガードアシストB Ⅲ", "援:WガードUP Ⅱ"] }
        ]
    },
    {
        id: 456,
        name: "クリエイターズコラボ-どたばたデイズ-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/18～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["ガードアシストC Ⅳ", "ライフアシストB Ⅱ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ウィンドガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 457,
        name: "クリエイターズコラボ-いつものおやつ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/18～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 458,
        name: "クリエイターズコラボ-ご一緒にいかが？-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [57, 56] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/11/18～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅲ", "WガードヒールD Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 459,
        name: "鳴り響く狂乱の連弾",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [40, 11] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―狂乱の三重奏― / ギガント級ヒュージ討伐 フロストサーペントChapter.1 (2022/11/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクE Ⅳ", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストE Ⅳ", "ウィンドパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 460,
        name: "雪原の白き魔女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [41] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―狂乱の三重奏― / ギガント級ヒュージ討伐 フロストサーペントChapter.1 (2022/11/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュE Ⅳ", "Sp.ウィンドパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールE Ⅳ", "Sp.ウィンドガードフォールC Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 461,
        name: "雪風と踊る少女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―狂乱の三重奏― / ギガント級ヒュージ討伐 フロストサーペントChapter.1 (2022/11/19～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールE Ⅲ", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["パワーストライクE Ⅳ", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 462,
        name: "白に染まる世界",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [41] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―狂乱の三重奏― / ギガント級ヒュージ討伐 フロストサーペントChapter.1 (2022/11/19～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅴ+", "マイトストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["風：パワーアシストD Ⅲ", "風：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 463,
        name: "レンズ越しの視点",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストD Ⅲ", "Sp.ガードライフアシストD Ⅱ", "援:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 464,
        name: "帯びる熱と急接近",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10, 15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜へ捧ぐサプライズ (2022/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウォーターパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 465,
        name: "サプライズゲーム",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜へ捧ぐサプライズ (2022/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 466,
        name: "はっぴーらっきーとっきー",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜へ捧ぐサプライズ (2022/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールB Ⅱ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 467,
        name: "クリエイターズコラボ-ひめひめ仕立て-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [19, 15, 16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "ウィンドパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["風：パワーフォールB Ⅲ", "風：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 468,
        name: "クリエイターズコラボ-手作りクリスマス-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [14, 12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.ウォーターパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 469,
        name: "クリエイターズコラボ-聖夜に乾杯-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [54, 2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウォーターパワーアシストC Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウォーターパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 470,
        name: "クリエイターズコラボ-聖夜のテラリウム-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [26, 22] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["マイトフォールB Ⅲ", "ウィンドガードフォールC Ⅲ", "援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ウィンドガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 471,
        name: "クリエイターズコラボ-サンタをつかまえて-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [3, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 472,
        name: "神琳！？　これは違うの！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "雨嘉 / 聖夜のプレゼント", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "WパワーアシストB Ⅲ", "援:WパワーUP Ⅱ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 473,
        name: "旋律に身を委ねて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [43] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―輝きを繋ぐ旋律― / ギガント級ヒュージ討伐 フロストサーペントChapter.2 (2022/12/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "ライフアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 474,
        name: "縮地、友の元へ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [6] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―輝きを繋ぐ旋律― / ギガント級ヒュージ討伐 フロストサーペントChapter.2 (2022/12/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 475,
        name: "雪原に火花散る",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―輝きを繋ぐ旋律― / ギガント級ヒュージ討伐 フロストサーペントChapter.2 (2022/12/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウォーターガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 476,
        name: "歴戦の余裕",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [43] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―輝きを繋ぐ旋律― / ギガント級ヒュージ討伐 フロストサーペントChapter.2 (2022/12/11～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.マイトスマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["WパワーフォールA Ⅲ", "WパワーフォールA Ⅲ", "援:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 477,
        name: "ふーみんにインタビュー",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 478,
        name: "聞こえし者",
        zokusei: 3,
        legendary: "リーグ",
        illustration: { type: "", chara: [29] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA LG+", "パワーストライクA LG+", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 479,
        name: "懐かしくて、優しい味",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "誕生日",
        category: { c1: "誕生日/誕生月ガチャ", c2: "2022", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 480,
        name: "クリエイターズコラボ-どんがらがっしゃん-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [28, 25] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/20～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 481,
        name: "クリエイターズコラボ-あつあつの肉まん-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 17] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/20～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 482,
        name: "クリエイターズコラボ-ゆー姉と一緒！-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [34, 8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["風拡：Sp.パワーアシストB Ⅳ", "風拡：Sp.パワーアシストB Ⅳ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 483,
        name: "クリエイターズコラボ-かずはをよしよし-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールC Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 484,
        name: "クリエイターズコラボ-膝の子猫と窓の雪-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7, 5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2022/12/20～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 485,
        name: "空想魔法少女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [64, 1] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "シスターズ・カラミティ (プリズマ☆イリヤ コラボ) (2022/12/22～)", c3: ["シスターズ・カラミティ イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["WパワーアシストC Ⅳ", "WパワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 486,
        name: "願いの魔法少女",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [65] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "シスターズ・カラミティ (プリズマ☆イリヤ コラボ) (2022/12/22～)", c3: ["シスターズ・カラミティ イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウィンドパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 487,
        name: "投影魔術",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [66] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "シスターズ・カラミティ (プリズマ☆イリヤ コラボ) (2022/12/22～)", c3: ["シスターズ・カラミティ イベントガチャ"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "ウィンドパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] },
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP Ⅲ"] }
        ]
    },
    {
        id: 488,
        name: "射殺す百頭",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [65] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "シスターズ・カラミティ (プリズマ☆イリヤ コラボ) (2022/12/22～)", c3: ["シスターズ・カラミティ・ツヴァイ イベントガチャ (2022/12/25～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 489,
        name: "約束された勝利の剣",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [64] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "シスターズ・カラミティ (プリズマ☆イリヤ コラボ) (2022/12/22～)", c3: ["シスターズ・カラミティ・ツヴァイ イベントガチャ (2022/12/25～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 490,
        name: "初春の宴に貴女を想う",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 491,
        name: "新年、はっじまっるよ～♪",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["ディファースマッシュA Ⅳ+", "Sp.ウィンドパワースマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 492,
        name: "兎であけおめですわ！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールB Ⅱ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 1, name: ["Sp.ディファーストライクA Ⅳ+", "ウィンドパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 493,
        name: "かがみもち、できました！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [53] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウィンドパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 494,
        name: "雪兎に会えた日",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第2弾ガチャ (2023/1/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 495,
        name: "突きて返すは兎姉妹",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1, 2] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第2弾ガチャ (2023/1/3～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウィンドガードフォールC Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 496,
        name: "思い出を抱きしめて",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第2弾ガチャ (2023/1/3～)"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.ガードバーストA Ⅴ", "Sp.ウィンドガードバーストA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 497,
        name: "賀正！！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "年始めに想い重ねて (2022/12/31～)", c3: ["イベント第2弾ガチャ (2023/1/3～)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["ガードブレイクA Ⅴ", "ウィンドガードブレイクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 498,
        name: "クリエイターズコラボ-ことよろなのじゃ！-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [9, 5, 4] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/1/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 499,
        name: "クリエイターズコラボ-新年を祝すわ！-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [21, 22, 25] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/1/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 500,
        name: "クリエイターズコラボ-あけおめですっ♪-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [1, 3, 2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/1/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストC Ⅳ", "WパワーアシストC Ⅳ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 501,
        name: "クリエイターズコラボ-謹賀新年です！-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 11, 12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/1/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウィンドパワーフォールB Ⅱ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 502,
        name: "クリエイターズコラボ-今年もよろしくね-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 19, 16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/1/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 503,
        name: "この手に劔がある限り",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [42] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―雪風に劔を掲げて― / ギガント級ヒュージ討伐 フロストサーペントChapter.3 (2023/1/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WガードフォールB Ⅲ", "WガードフォールB Ⅲ", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 504,
        name: "うりゃうりゃうりゃうりゃ！！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―雪風に劔を掲げて― / ギガント級ヒュージ討伐 フロストサーペントChapter.3 (2023/1/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅱ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 505,
        name: "飢えし群れ、挑む狩人",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―雪風に劔を掲げて― / ギガント級ヒュージ討伐 フロストサーペントChapter.3 (2023/1/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 506,
        name: "引導を渡して差し上げますわ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [40] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―雪風に劔を掲げて― / ギガント級ヒュージ討伐 フロストサーペントChapter.3 (2023/1/10～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "パワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "マイトアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 507,
        name: "2周年祭り 絆の彩り",
        zokusei: 1,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 35, 40, 41, 46, 45] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "HA、AN無料/ボックスガチャ", c3: ["2周年"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストB Ⅲ", "Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 508,
        name: "止めどない熱",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストB Ⅲ", "Sp.ファイアガードバーストB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 509,
        name: "Cherishing",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [35, 1] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ファイアガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 510,
        name: "変わらない絆",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [40, 41] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 511,
        name: "ふたりのヒメゴト",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [46, 45] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅳ", "WガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 512,
        name: "好いも甘いも受け止めて",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ (2023/1/22～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.ウィンドパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 513,
        name: "宵に舞う華",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [1] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ (2023/1/22～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウィンドガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 514,
        name: "湯けむりの向こう側",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ (2023/1/22～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅲ", "WガードヒールD Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 515,
        name: "蝶の夢",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [41] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ～おかわり～ (2023/1/24～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウィンドパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 516,
        name: "いつも隣に",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [45] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ～おかわり～ (2023/1/24～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅱ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 517,
        name: "ありのままのわたしで",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [23] },
        get_rank: "2周年の宴",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "花々集う大宴会 (2023/1/20～)", c3: ["アニバーサリー大宴会ガチャ～おかわり～ (2023/1/24～) (特効は共闘イベントのみ)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ファイアガードフォールB Ⅱ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 518,
        name: "Ultimate Memoria -比類なき異能-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [26] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/1/26～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["火：パワーストライクB Ⅲ", "火：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ+"] },
           { yakuwari: 5, name: ["WガードアシストD Ⅲ", "WガードアシストD Ⅲ", "援:支援UP Ⅳ+"] }
        ]
    },
    {
        id: 519,
        name: "Ultimate Memoria -フェノメノ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [23] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/1/26～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.パワースマッシュB Ⅲ", "火：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ+"] },
           { yakuwari: 6, name: ["WガードフォールD Ⅲ", "WガードフォールD Ⅲ", "援:支援UP Ⅳ+"] }
        ]
    },
    {
        id: 520,
        name: "Ultimate Memoria -蒼き月、満ちる時-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [21] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/1/26～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールD Ⅲ", "WパワーフォールD Ⅲ", "援:支援UP Ⅳ+"] },
           { yakuwari: 4, name: ["風：Sp.ガードバーストB Ⅲ", "風：Sp.ガードバーストB Ⅲ", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 521,
        name: "Ultimate Memoria -シリウス・ロア-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [24] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/1/26～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストD Ⅲ", "WパワーアシストD Ⅲ", "援:支援UP Ⅳ+"] },
           { yakuwari: 2, name: ["風：ガードブレイクB Ⅲ", "風：ガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 522,
        name: "Ultimate Memoria -縦横無尽、阻む者無し-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [29] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/1/26～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅳ", "リカバーヒールD Ⅳ", "回:回復UP Ⅳ+"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅴ+", "Sp.マイトスマッシュA Ⅴ+", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 523,
        name: "Emotional Memoria -吐息の距離-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -吐息の距離- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 524,
        name: "ハルナストライク！！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [67] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフルデイズ・エンド (2023/1/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ファイアガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 525,
        name: "光の盾",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [68] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフルデイズ・エンド (2023/1/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ガードヒールC Ⅲ+", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 526,
        name: "貴女の笑顔を守るために",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフルデイズ・エンド (2023/1/31～)", c3: ["イベント第1弾ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "WパワーアシストB Ⅲ", "援:WパワーUP Ⅲ"] }
        ]
    },
    {
        id: 527,
        name: "貴女と共にあるために",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフルデイズ・エンド (2023/1/31～)", c3: ["イベント第2弾ガチャ (2023/2/2～)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ガードヒールC Ⅲ+", "回:ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 528,
        name: "運命のトリニティ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [68, 15, 2, 1, 10, 71] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カラフルデイズ・エンド (2023/1/31～)", c3: ["イベント第2弾ガチャ (2023/2/2～)"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストB Ⅱ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 529,
        name: "チョコを知らない君へ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [12, 10] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "楯のメイドとバレンタイン (2023/2/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウィンドパワーアシストC Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["ガードブレイクB Ⅲ", "ウィンドガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 530,
        name: "触れ合う吐息",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "楯のメイドとバレンタイン (2023/2/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 531,
        name: "安らぎをあなたに",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "楯のメイドとバレンタイン (2023/2/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウィンドガードフォールC Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 532,
        name: "あなたにお茶を",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "非ガチャ産",
        category: { c1: "課金", c2: "神琳 / メイドバレンタイン", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 533,
        name: "クリエイターズコラボ-いただきだゾ♪-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [6, 2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/2/11～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 534,
        name: "クリエイターズコラボ-ショコラのゆうわく-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 13] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/2/11～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 535,
        name: "クリエイターズコラボ-甘いきらめき-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [19, 18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/2/11～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストC Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 536,
        name: "クリエイターズコラボ-とろけるハート-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [23, 24] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/2/11～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 537,
        name: "輝ける流星",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [44] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―勝利を描く光軌― / ギガント級ヒュージ討伐 フロストサーペントChapter.4 (2023/2/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.ガードアシストC Ⅳ", "Sp.ガードライフアシストD Ⅱ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 538,
        name: "六花、胡蝶の如く舞う",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―勝利を描く光軌― / ギガント級ヒュージ討伐 フロストサーペントChapter.4 (2023/2/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ファイアガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ファイアパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 539,
        name: "一意専心",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―勝利を描く光軌― / ギガント級ヒュージ討伐 フロストサーペントChapter.4 (2023/2/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ファイアガードフォールB Ⅱ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 540,
        name: "氷嵐を断つ劔",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [42] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "凍て空の流星 ―勝利を描く光軌― / ギガント級ヒュージ討伐 フロストサーペントChapter.4 (2023/2/18～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["WパワーフォールA Ⅲ", "WパワーフォールA Ⅲ", "援:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 541,
        name: "連携プレーの勝利！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [75, 76] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 542,
        name: "謎めいた魔法少女",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [76] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.ファイアパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 543,
        name: "頼れる先輩",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [77] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "ファイアパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 544,
        name: "奇跡の出会い！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [75, 1] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "Sp.ファイアガードヒールD Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 545,
        name: "僕と契約して、魔法少女になってよ！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [80] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ファイアパワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 546,
        name: "共同戦線！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [78, 79] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第2弾イベントガチャ (2023/3/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールB Ⅱ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 547,
        name: "差し出されたお菓子",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [79, 15] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マギカ☆ワンダーワールド (魔法少女まどか☆マギカ コラボ) (2023/2/28～)", c3: ["第2弾イベントガチャ (2023/3/3～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 548,
        name: "クリエイターズコラボ-苺色に染めて-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7, 8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 549,
        name: "クリエイターズコラボ-籠いっぱいの幸せ-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 18] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 550,
        name: "クリエイターズコラボ-甘々苺クレープ-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [12, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウィンドパワーアシストC Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 551,
        name: "クリエイターズコラボ-苺飴の味わい-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [27, 26] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウィンドガードフォールC Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 552,
        name: "クリエイターズコラボ-シルト餌付け実験-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [20, 9] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 553,
        name: "ぎゅーっとしてあげる",
        zokusei: 3,
        legendary: "ガチャ",
        illustration: { type: "", chara: [11] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ハンドメイド・ギフト (2023/3/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["風：WパワーアシストB Ⅲ", "風：WパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 554,
        name: "泡立てチャレンジの結果",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ハンドメイド・ギフト (2023/3/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウィンドパワーフォールB Ⅱ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 555,
        name: "光咲く日々を抱いて",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [10, 11, 12, 13, 14] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ハンドメイド・ギフト (2023/3/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 556,
        name: "堅固なる守り",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [27] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 5, name: ["WガードアシストE LG", "WガードアシストE LG", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 557,
        name: "クリエイターズコラボ-春風に吹かれて-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [56, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/14～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 558,
        name: "クリエイターズコラボ-お花見ティータイム-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/14～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 559,
        name: "クリエイターズコラボ-天に舞う花びら-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [25, 21] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["火：WガードアシストC Ⅳ", "火：WガードアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 560,
        name: "クリエイターズコラボ-GOGO新学期！-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [4, 3] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "火：Sp.ファイアパワーフォールC Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 561,
        name: "クリエイターズコラボ-桜と貴女を-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [16, 15] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/3/14～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅳ", "ガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 562,
        name: "贖いの祈り",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [45] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の祈り― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.1 (2023/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅳ", "Sp.ガードヒールD Ⅳ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウィンドパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 563,
        name: "その心、炎よりも熱く",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [48] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の祈り― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.1 (2023/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールC Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 564,
        name: "蒼き輝き、楯たる矜持",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の祈り― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.1 (2023/3/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 565,
        name: "反りし刃、誘うは棺",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [48] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の祈り― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.1 (2023/3/21～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウィンドパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 566,
        name: "ツインテじゃらし",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "スプリングバケーション前衛後衛ガチャ (2023/3/23～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風拡：パワーストライクB Ⅲ", "風拡：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 567,
        name: "グラスにラムネを注いだら",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "B",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "スプリングバケーション前衛後衛ガチャ (2023/3/23～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["風拡：Sp.パワースマッシュB Ⅲ", "風拡：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 568,
        name: "ぱーふぇくとアカリズム",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "B",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "スプリングバケーション前衛後衛ガチャ (2023/3/23～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["風：WガードアシストC Ⅳ", "風：WガードアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 569,
        name: "玲瓏玉の如し",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "B",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "スプリングバケーション前衛後衛ガチャ (2023/3/23～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "風：ウィンドパワーフォールC Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 570,
        name: "千香瑠のエクササイズ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "スプリングバケーション前衛後衛ガチャ (2023/3/23～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅲ", "風：Sp.ウィンドガードヒールC Ⅲ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 571,
        name: "Emotional Memoria -朝寝坊のススメ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -朝寝坊のススメ- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["WガードヒールC Ⅲ", "WガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 572,
        name: "天使の左手、堕天使の右手",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [70] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["WガードアシストC Ⅳ", "ライフアシストB Ⅱ", "援:WガードUP Ⅲ"] }
        ]
    },
    {
        id: 573,
        name: "笑顔の夜明け",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [69, 68] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールC Ⅲ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] }
        ]
    },
    {
        id: 574,
        name: "尊き花を守るために",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [17] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "マイトストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 575,
        name: "マルチカラード・ティアーズ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [15, 16, 68, 69] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅲ", "ファイアガードヒールD Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 576,
        name: "これが、あたしの理！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [19] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第2弾イベントガチャ (2023/4/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールC Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 577,
        name: "天のアカリ目！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [18] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "マルチカラード・ティアーズ (2023/3/31～)", c3: ["第2弾イベントガチャ (2023/4/3～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 578,
        name: "クリエイターズコラボ-エッグロール開始！-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [14, 13] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストC Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 579,
        name: "クリエイターズコラボ-イースターエッグ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 17] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/7～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ファイアガードフォールC Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 580,
        name: "クリエイターズコラボ-花咲くイースター-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [8, 7] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["火拡：WガードアシストB Ⅳ", "火拡：WガードアシストB Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 581,
        name: "クリエイターズコラボ-イースターハント-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [57, 56] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/7～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "火：Sp.ファイアパワーフォールC Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 582,
        name: "魅惑のセレクション",
        zokusei: 3,
        legendary: "ガチャ",
        illustration: { type: "", chara: [14, 16, 8] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "魅惑のバニーセレクション (2023/4/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅳ", "WガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 583,
        name: "バニートラップ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "魅惑のバニーセレクション (2023/4/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "Sp.マイトアシストB Ⅲ", "援:Sp.マイトUP Ⅲ"] }
        ]
    },
    {
        id: 584,
        name: "さみしがりうさぎ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [8] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "魅惑のバニーセレクション (2023/4/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールC Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 585,
        name: "舞台「The Gleam of Dawn」開演！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [81, 82, 83] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["イルマ女子応援"] },
        skill: [
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.パワーヒールC Ⅲ", "Sp.パワーヒールC Ⅲ", "回:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 586,
        name: "クリエイターズコラボ-紫に酔い、白に想う-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [29, 23] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 587,
        name: "クリエイターズコラボ-藤棚の下で-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.マイトスマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストC Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 588,
        name: "クリエイターズコラボ-花言葉のように-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [2, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/17～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["マイトアシストB Ⅲ", "[風防]マイトアシストB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 589,
        name: "クリエイターズコラボ-ウィステリアの誘い-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [19, 16] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/4/17～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.マイトフォールB Ⅲ", "Sp.ウィンドパワーフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 590,
        name: "戦場に差しこむ光",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [49] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―切り裂くは軍略の閃き― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.2 (2023/4/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ファイアパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 591,
        name: "猛禽の視点",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [4] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―切り裂くは軍略の閃き― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.2 (2023/4/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストB Ⅲ", "[風防]Sp.マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ディファーバーストB Ⅲ+", "Sp.ディファーバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 592,
        name: "閑かなること、幻想の如く",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [56] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―切り裂くは軍略の閃き― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.2 (2023/4/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["マイトフォールB Ⅲ", "ウィンドパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 593,
        name: "荒ぶる魂",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [49] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―切り裂くは軍略の閃き― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.2 (2023/4/20～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 594,
        name: "ゴージャスアイドル☆楓",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [3] },
        get_rank: "季節",
        category: { c1: "その他のガチャ", c2: "ラスバれ！ゴールデン☆ウィーク2023記念ガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["ディファースマッシュB Ⅲ+", "ディファースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "水拡：Sp.ファイアパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 595,
        name: "エクセレントアイドル☆紗癒",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [57] },
        get_rank: "季節",
        category: { c1: "その他のガチャ", c2: "ラスバれ！ゴールデン☆ウィーク2023記念ガチャ", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["Sp.ディファーストライクB Ⅲ+", "Sp.ディファーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 596,
        name: "藍だけが使える魔法",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [11] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水拡：Sp.ガードバーストB Ⅲ", "水拡：Sp.ガードバーストB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 597,
        name: "征くと決めたこの道を",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [72] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 598,
        name: "パーフェクトエイム",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [73] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 599,
        name: "竜のシャナと楯の乙女",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [71, 10] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ", "ファイアガードヒールC Ⅲ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] }
        ]
    },
    {
        id: 600,
        name: "戦乙女の誇り",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第2弾イベントガチャ (2023/5/3～)"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ", "Sp.ファイアガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 601,
        name: "言葉無く吠える",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜のシャナと楯の乙女 (2023/4/30～)", c3: ["第2弾イベントガチャ (2023/5/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 602,
        name: "クリエイターズコラボ-皐月の頃に-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/8～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風：パワーストライクB Ⅲ", "風：パワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウィンドガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 603,
        name: "クリエイターズコラボ-尊さの不意打ち-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [4, 17] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/8～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["風：Sp.パワースマッシュB Ⅲ", "風：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 604,
        name: "クリエイターズコラボ-なでなで連鎖-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [6, 5] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/8～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "風：ウォーターガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 605,
        name: "クリエイターズコラボ-ピクニック日和-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/8～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウォーターパワーフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 606,
        name: "エターナル・プロミス",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [15, 16] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Mirage Mariage (2023/5/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["水拡：ガードブレイクB Ⅲ", "水拡：ガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 607,
        name: "ウエディング・マーチ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [68] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Mirage Mariage (2023/5/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 608,
        name: "夢見る自分を、怖れずに",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [69] },
        get_rank: "季節",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Mirage Mariage (2023/5/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 609,
        name: "クリエイターズコラボ-門出のブーケ・トス-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [20, 9] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["火：ガードブレイクB Ⅲ", "火：ガードブレイクB Ⅲ", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 610,
        name: "クリエイターズコラボ-ウェディングベア-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 12] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.ガードバーストB Ⅲ", "火：Sp.ガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ファイアガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 611,
        name: "クリエイターズコラボ-想像ウェディング-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [67, 19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/17～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "火：Sp.ウィンドガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 612,
        name: "クリエイターズコラボ-式場を決めましたわ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [3, 1] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/5/17～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["火：WガードアシストC Ⅳ", "火：WガードアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 613,
        name: "月光奏鳴",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [47] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―静かなる鉄騎― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.3 (2023/5/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウィンドガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 614,
        name: "黒蝕の夢",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―静かなる鉄騎― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.3 (2023/5/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 615,
        name: "焼け焦げた土を踏んで",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―静かなる鉄騎― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.3 (2023/5/21～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 616,
        name: "G戦場の百合亜",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [47] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―静かなる鉄騎― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.3 (2023/5/21～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "ウィンドパワーストライクA Ⅳ+", "攻:獲得マッチPtUP/通常単体 Ⅱ"] },
           { yakuwari: 6, name: ["WパワーフォールA Ⅲ", "WパワーフォールA Ⅲ", "援:WパワーDOWN Ⅱ"] }
        ]
    },
    {
        id: 617,
        name: "つきしーMAX!!",
        zokusei: 2,
        legendary: "リーグ",
        illustration: { type: "", chara: [28] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールE LG", "WガードヒールE LG", "回:回復UP/副援:支援UP Ⅱ"] }
        ]
    },
    {
        id: 618,
        name: "貴方に微笑む",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [87] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ファイアガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 619,
        name: "愛情の絆",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [88] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 620,
        name: "情熱",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [89] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウィンドパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 621,
        name: "交差する勇み花",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [87, 1] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 622,
        name: "そよ風のシュッツエンゲル",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [88, 87] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第2弾イベントガチャ (2023/6/3～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 623,
        name: "清純な心",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [90] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-白百合の章- (結城友奈は勇者である コラボ) (2023/5/31～)", c3: ["第2弾イベントガチャ (2023/6/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 624,
        name: "クリエイターズコラボ-紫陽花の咲く頃-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [1, 53] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水：Sp.パワースマッシュB Ⅲ", "水：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウォーターガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 625,
        name: "クリエイターズコラボ-雨の日は紅茶を-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [68, 69] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["水：パワーストライクB Ⅲ", "水：パワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["ガードアシストC Ⅳ", "ファイアガードアシストB Ⅲ", "援:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 626,
        name: "クリエイターズコラボ-雨、舌戦のあと-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [3, 26] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "水：Sp.ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 627,
        name: "クリエイターズコラボ-二度寝のいいわけ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [12, 10] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 628,
        name: "Emotional Memoria -伝わる鼓動-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -伝わる鼓動- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["水：Sp.ガードフォールB Ⅲ", "水：Sp.ガードフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 629,
        name: "勇気の拳",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [87] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-絆の章- (結城友奈は勇者である コラボ) (2023/6/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 630,
        name: "輝く心",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [91] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-絆の章- (結城友奈は勇者である コラボ) (2023/6/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ファイアガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 631,
        name: "心の痛みを判る人",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [92] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-絆の章- (結城友奈は勇者である コラボ) (2023/6/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "[風防]マイトアシストB Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 632,
        name: "桜花爛漫",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [87, 2] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "煌めき満ちる勇花-絆の章- (結城友奈は勇者である コラボ) (2023/6/9～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウィンドパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 633,
        name: "クリエイターズコラボ-水族館を探検-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 13] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/13～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["風：Sp.ガードバーストB Ⅲ", "風：Sp.ガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ウィンドガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 634,
        name: "クリエイターズコラボ-初夏の装い-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [2, 54] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/13～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風：パワーストライクB Ⅲ", "風：パワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウィンドパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 635,
        name: "クリエイターズコラボ-日差しを見上げて-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [9, 4] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/13～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウィンドガードフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 636,
        name: "クリエイターズコラボ-これなんかどう？-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 19] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/6/13～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:回復UP/副援:水ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 637,
        name: "祈りの声が届く時",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [46] },
        get_rank: "御台場ルド女ギガント",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の奇跡― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.4 (2023/6/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクE Ⅳ", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールE Ⅲ", "ファイアガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 638,
        name: "煉獄の守護天使",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の奇跡― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.4 (2023/6/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.マイトアシストE Ⅳ", "[水攻火防]マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.ガードバーストE Ⅳ", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 639,
        name: "受け継がれし攻守の型",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [53] },
        get_rank: "B",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の奇跡― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.4 (2023/6/18～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅴ+", "水：Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールE Ⅳ", "Sp.ファイアパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 640,
        name: "心を鋼鉄に変えて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [46] },
        get_rank: "非ガチャ産",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "紅蓮の聖乙女 ―聖乙女の奇跡― / ギガント級ヒュージ討伐 ドゥームサーペントChapter.4 (2023/6/18～)", c3: ["報酬"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅴ+", "Sp.マイトスマッシュA Ⅳ+", "攻:獲得マッチPtUP/特殊単体 Ⅱ"] },
           { yakuwari: 5, name: ["水：Sp.パワーアシストD Ⅲ", "[火防]Sp.マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 641,
        name: "幸せな夢を見る前に",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "季節 (推定)",
        category: { c1: "その他のガチャ", c2: "メモリアルホリデイガチャ", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 642,
        name: "枕投げチャンピオン",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [11] },
        get_rank: "季節 (推定)",
        category: { c1: "その他のガチャ", c2: "メモリアルホリデイガチャ", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 643,
        name: "ゴージャス☆おしゃ恋花",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "季節 (推定)",
        category: { c1: "その他のガチャ", c2: "メモリアルホリデイガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "[火攻風防]マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 644,
        name: "竜のシャナ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [71] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "深炎のスキャルドメール (2023/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 645,
        name: "七頭龍幻想の担い手",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [74] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "深炎のスキャルドメール (2023/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅳ", "Sp.ファイアガードヒールD Ⅳ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 646,
        name: "深炎のスキャルドメール",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [10, 71] },
        get_rank: "メインストーリー3章",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "深炎のスキャルドメール (2023/6/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["水：WパワーフォールB Ⅲ", "水：WパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 647,
        name: "正義の咆哮",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [10] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "覚醒のスキャルドメール (2023/7/3～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールD Ⅳ", "ファイアガードヒールD Ⅳ", "回:回復UP/副援:火ガードUP Ⅲ"] }
        ]
    },
    {
        id: 648,
        name: "夢の果て、その先へ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "覚醒のスキャルドメール (2023/7/3～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールB Ⅳ", "援:Sp.パワーDOWN/副援:火パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 649,
        name: "クリエイターズコラボ-碧い海のふたり-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7, 8] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["水：ガードブレイクB Ⅲ", "水：ガードブレイクB Ⅲ", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "ウォーターガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 650,
        name: "クリエイターズコラボ-灯莉の貝殻アート☆-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 9] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水：Sp.ガードバーストB Ⅲ", "水：Sp.ガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "[水攻火防]マイトアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 651,
        name: "クリエイターズコラボ-冷たい舌触り-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [8, 5] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアパワーブレイクB Ⅲ+", "攻:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 652,
        name: "クリエイターズコラボ-非常事態のその後-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアパワーバーストB Ⅲ+", "攻:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 653,
        name: "蒼き月の夜",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [21] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―星月夜に咲く花― / ギガント級ヒュージ討伐 (2023/7/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールC Ⅳ", "援:パワーDOWN/副援:風パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 654,
        name: "月下に舞うプランセス",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [22] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―星月夜に咲く花― / ギガント級ヒュージ討伐 (2023/7/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "[火攻風防]マイトアシストB Ⅲ", "援:火パワーUP Ⅲ"] }
        ]
    },
    {
        id: 655,
        name: "星月夜の指揮者",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [27] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―星月夜に咲く花― / ギガント級ヒュージ討伐 (2023/7/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅳ", "ウィンドガードヒールD Ⅳ", "回:ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ファイアパワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 656,
        name: "祝2.5周年 リリサマ!!",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 21, 25] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "HA、AN無料/ボックスガチャ", c3: ["2.5周年"] },
        skill: [
           { yakuwari: 1, name: ["パワーストライクA Ⅳ+", "パワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["WガードフォールA Ⅲ", "WガードフォールA Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 657,
        name: "夏色スライダー",
        zokusei: 3,
        legendary: "ガチャ",
        illustration: { type: "", chara: [23, 1, 3] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Summer Lilies Vacation (2023/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風拡：パワーストライクB Ⅲ", "カウンターパワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 658,
        name: "アグレッシヴ・ヒロイン",
        zokusei: 3,
        legendary: "ガチャ",
        illustration: { type: "", chara: [67, 19] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Summer Lilies Vacation (2023/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["風拡：Sp.パワースマッシュB Ⅲ", "Sp.カウンターパワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 659,
        name: "王家の夏休み",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [34, 8] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Summer Lilies Vacation (2023/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WカウンターパワーフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターパワーブレイクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 660,
        name: "惹かれる手のひら",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [69] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Summer Lilies Vacation (2023/7/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅳ", "WカウンターガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターパワーバーストB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 661,
        name: "Emotional Memoria -楽しいを探して-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [35] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -楽しいを探して- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅳ", "WガードヒールD Ⅳ", "回:回復UP/副援:水ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウィンドガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 662,
        name: "クリエイターズコラボ-水着をお披露目-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 19] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/28～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["火：パワーストライクB Ⅲ", "カウンターパワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 663,
        name: "クリエイターズコラボ-向日葵の咲く園-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [21, 20] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/28～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.パワースマッシュB Ⅲ", "Sp.カウンターパワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 664,
        name: "クリエイターズコラボ-浮き輪でぷかぷか-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 10] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/28～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WガードフォールC Ⅳ", "WカウンターガードフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "[風攻火防]マイトバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 665,
        name: "クリエイターズコラボ-真夏のステージ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [1, 2] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/7/28～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールC Ⅳ", "WカウンターガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "[風攻火防]マイトブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 666,
        name: "はにかみプールサイド",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [72] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Twinkle Lilies Party (2023/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["水：WパワーアシストB Ⅲ", "水：WパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 667,
        name: "いたずらトゥインクル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [71, 10] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Twinkle Lilies Party (2023/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "水強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 668,
        name: "焦がれる夜",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [16, 15] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Twinkle Lilies Party (2023/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "火弱：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 669,
        name: "待ち望んだパーティナイト",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [12] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "Twinkle Lilies Party (2023/7/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "火強：ヒールC Ⅳ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 670,
        name: "Ultimate Memoria -ヴィルトシュバイン-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [28] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/8/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["水：パワーストライクB Ⅲ", "水：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ+"] },
           { yakuwari: 6, name: ["WガードフォールD Ⅲ", "WガードフォールD Ⅲ", "援:支援UP Ⅳ+"] }
        ]
    },
    {
        id: 671,
        name: "Ultimate Memoria -終曲のタクト-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [27] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/8/4～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水：Sp.パワースマッシュB Ⅲ", "水：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ+"] },
           { yakuwari: 5, name: ["WガードアシストD Ⅲ", "WガードアシストD Ⅲ", "援:支援UP Ⅳ+"] }
        ]
    },
    {
        id: 672,
        name: "Ultimate Memoria -幻奏乙女-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [25] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/8/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストD Ⅲ", "WパワーアシストD Ⅲ", "援:支援UP Ⅳ+"] },
           { yakuwari: 4, name: ["火：Sp.ガードバーストB Ⅲ", "火：Sp.ガードバーストB Ⅲ", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 673,
        name: "Ultimate Memoria -無二なる二刀-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [53] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/8/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールD Ⅲ", "WパワーフォールD Ⅲ", "援:支援UP Ⅳ+"] },
           { yakuwari: 2, name: ["火：ガードブレイクB Ⅲ", "火：ガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 674,
        name: "Ultimate Memoria -双刃無双-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [22] },
        get_rank: "アルティメットメモリア",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "アルティメットメモリア前衛後衛ガチャ (2023/8/4～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ヒールD Ⅳ", "リカバーヒールD Ⅳ", "回:回復UP Ⅳ+"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅴ+", "ウォーターパワーストライクA Ⅴ+", "攻:ダメージUP Ⅳ+"] }
        ]
    },
    {
        id: 675,
        name: "くすみんサマー",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [25] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―迷い猫と夏の空― / ギガント級ヒュージ討伐 (2023/8/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "風弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "水強：ヒールC Ⅳ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 676,
        name: "壱撃必殺！！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [24] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―迷い猫と夏の空― / ギガント級ヒュージ討伐 (2023/8/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "風弱：Sp.パワースマッシュA Ⅳ", "攻:Sp.パワーUP/副攻:風パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "風弱：Sp.ガードフォールC Ⅳ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 677,
        name: "夏尽くしの海",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [28] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―迷い猫と夏の空― / ギガント級ヒュージ討伐 (2023/8/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストC Ⅳ", "[風攻水防]マイトアシストC Ⅳ", "援:風パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "風弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 678,
        name: "神の子は、水面に踊る",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [25] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 4, name: ["Sp.ガードバーストD LG", "Sp.ガードバーストD LG", "攻:ダメージUP Ⅲ"] }
        ]
    },
    {
        id: 679,
        name: "真実の刃＆リリコレ2023　開演！",
        zokusei: 3,
        legendary: "",
        illustration: { type: "静止画", chara: [97, 40, 43, 46, 45] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["真実の刃＆リリィコレクション応援"] },
        skill: [
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["WパワーアシストA Ⅲ", "WパワーアシストA Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 680,
        name: "燦然たる騎士",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [57] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "エレガンス・セッション (2023/8/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.パワースマッシュB Ⅲ", "火：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 681,
        name: "陽だまりの女神",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [98] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "エレガンス・セッション (2023/8/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅳ", "風強：ヒールD Ⅳ", "回:回復UP/副援:風ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 682,
        name: "明朗たる戦乙女",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [99] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "エレガンス・セッション (2023/8/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "[火攻風防]マイトアシストC Ⅳ", "援:火パワーUP Ⅲ"] }
        ]
    },
    {
        id: 683,
        name: "クリエイターズコラボ-切れた鼻緒と繋ぐ心-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [14, 10] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/8/23～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "カウンターガードブレイクB Ⅲ", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "水強：ヒールC Ⅳ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 684,
        name: "クリエイターズコラボ-射的の景品です！-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [4, 3] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/8/23～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.カウンターガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストC Ⅳ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 685,
        name: "クリエイターズコラボ-瞳の中に映る花火-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 16] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/8/23～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "カウンターウィンドパワーアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウィンドパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 686,
        name: "クリエイターズコラボ-お祭りを味わって-",
        zokusei: 3,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [70, 69] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/8/23～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅳ", "Sp.ウォーターガードヒールC Ⅳ+", "回:回復UP/副援:支援UP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ウィンドパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 687,
        name: "これが私の、全力だぁ――！！",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [100] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールC Ⅳ", "水弱：ガードフォールB Ⅲ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 688,
        name: "お姉様の露払い",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [101] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "水強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 689,
        name: "さすが私ってところかしらぁ？",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [102] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 690,
        name: "楯の乙女と超電磁砲",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [100, 10] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "火弱：パワーフォールB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 691,
        name: "超電磁アイドル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [100] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第2弾イベントガチャ (2023/9/3～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "火弱：Sp.パワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 692,
        name: "デュエットですの♥",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [101, 100] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第2弾イベントガチャ (2023/9/3～)"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "水強：パワーアシストB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 693,
        name: "キラキラ★アイドル",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [102] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "とある科学と楯の乙女 (とある科学の超電磁砲 コラボ) (2023/8/31～)", c3: ["第2弾イベントガチャ (2023/9/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 694,
        name: "クリエイターズコラボ-コスモスコスメ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [12, 14] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.カウンターガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウォーターパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 695,
        name: "クリエイターズコラボ-朋友信之-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7, 8] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/5～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "カウンターガードブレイクB Ⅲ", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 696,
        name: "クリエイターズコラボ-黄色い絨毯で-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 11] },
        get_rank: "C",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/5～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアパワーブレイクB Ⅲ+", "攻:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 697,
        name: "シャナの剣",
        zokusei: 3,
        legendary: "ガチャ",
        illustration: { type: "", chara: [72, 71] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜の生まれた日 (2023/9/10～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["風拡：ガードブレイクB Ⅲ", "風拡：ガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 698,
        name: "追憶の星空",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [74] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜の生まれた日 (2023/9/10～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "風弱：Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターパワーバーストB Ⅲ+", "攻:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 699,
        name: "ワイルドバンチ",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [103] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜の生まれた日 (2023/9/10～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "風弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "風強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 700,
        name: "クエレブレの正義",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [71] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜の生まれた日 (2023/9/10～)", c3: ["第2弾イベントガチャ (2023/9/13～)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールD Ⅳ", "ウォーターガードヒールD Ⅳ", "回:回復UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "風弱：パワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] }
        ]
    },
    {
        id: 701,
        name: "2人でニューゲーム",
        zokusei: 3,
        legendary: "",
        illustration: { type: "", chara: [73, 74] },
        get_rank: "レジェンダリーを含むイベント (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "竜の生まれた日 (2023/9/10～)", c3: ["第2弾イベントガチャ (2023/9/13～)"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウィンドガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ウィンドパワーアシストB Ⅲ", "援:Sp.パワーUP/副援:風パワーUP Ⅲ"] }
        ]
    },
    {
        id: 702,
        name: "クリエイターズコラボ-お月さまの秘密-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 17] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["火：ガードブレイクB Ⅲ", "カウンターガードブレイクB Ⅲ", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 703,
        name: "クリエイターズコラボ-月を見上げて-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [24, 22] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/17～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.ガードバーストB Ⅲ", "Sp.カウンターガードバーストB Ⅲ", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウィンドガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 704,
        name: "クリエイターズコラボ-ムーンリットワルツ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [19, 15] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "クリエイターズコラボ前衛後衛ガチャ (2023/9/17～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.カウンターファイアガードフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ファイアパワースマッシュA Ⅳ+", "攻:Sp.パワーUP/副攻:火パワーUP Ⅲ"] }
        ]
    },
    {
        id: 705,
        name: "荒ぶる銘花",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [23] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―絢爛たる宵の明星― / ギガント級ヒュージ討伐 (2023/9/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストE Ⅳ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストE Ⅳ", "Sp.ウォーターパワーアシストC Ⅳ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 706,
        name: "彼方の宵空",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [26] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―絢爛たる宵の明星― / ギガント級ヒュージ討伐 (2023/9/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクE Ⅳ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["ガードフォールE Ⅳ", "ウォーターガードフォールC Ⅳ", "援:ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 707,
        name: "たつき100％",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [29] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "サマー・フェアリーテール ―絢爛たる宵の明星― / ギガント級ヒュージ討伐 (2023/9/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールE Ⅳ", "Sp.ファイアガードヒールD Ⅳ", "回:回復UP/副援:火ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅴ+", "Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP/副攻:水パワーUP Ⅲ"] }
        ]
    },
    {
        id: 708,
        name: "Emotional Memoria -ねこさんこちら-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [69] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -ねこさんこちら- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.カウンターファイアパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "火強：WパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 709,
        name: "誓いの剣閃",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [1, 2] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双星のコントラスト (2023/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["火：WパワーフォールB Ⅲ", "火：WパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 710,
        name: "緋染めの天使",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [2] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双星のコントラスト (2023/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "火強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 711,
        name: "光射す守護者",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [105, 106] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "双星のコントラスト (2023/9/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウィンドガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 712,
        name: "クリエイターズコラボ-楓の頃-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [3, 1] },
        get_rank: "季節 (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/3～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "カウンターパワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 713,
        name: "クリエイターズコラボ-もみじまんじゅう-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [20, 9] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/3～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.カウンターパワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 714,
        name: "百合ヶ丘ティーパーティ2023開催！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "静止画", chara: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["一柳隊コラボカフェ記念"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストA Ⅲ", "WパワーアシストA Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.パワースマッシュA Ⅳ+", "Sp.パワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 715,
        name: "健気×恥じらい＝",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [69] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "モンスターズ・パニック (2023/10/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["水：WガードヒールD Ⅳ", "水：WガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 716,
        name: "這い寄る妖艶",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [70] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "モンスターズ・パニック (2023/10/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "水：Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP/副攻:水パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 717,
        name: "優美な魔女に魅せられて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [68] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "モンスターズ・パニック (2023/10/12～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:パワーUP/副援:水パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "水弱：Sp.ガードフォールB Ⅲ", "援:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 718,
        name: "クリエイターズコラボ-秋空を見上げながら-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [71, 72] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/16～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "カウンターパワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "火：ファイアパワーストライクA Ⅳ+", "攻:パワーUP/副攻:火パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウィンドパワーフォールC Ⅳ", "援:パワーDOWN/副援:風パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.カウンターガードヒールC Ⅲ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 719,
        name: "クリエイターズコラボ-転ばぬ先の一葉-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 12] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/16～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.カウンターファイアパワーアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.カウンターパワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 720,
        name: "廃墟のアンティークドール",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [9] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―失われた刻を探して― / ギガント級ヒュージ討伐 (2023/10/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.ガードフォールC Ⅳ", "Sp.ファイアガードフォールC Ⅳ", "援:Sp.ガードDOWN/副援:火ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 721,
        name: "掲げし長針と短針",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [53] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―失われた刻を探して― / ギガント級ヒュージ討伐 (2023/10/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 722,
        name: "瓦礫の街に咲いてこそ",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [20] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―失われた刻を探して― / ギガント級ヒュージ討伐 (2023/10/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ファイアガードヒールC Ⅳ", "回:ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "火強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 723,
        name: "雹嵐の如く",
        zokusei: 1,
        legendary: "リーグ",
        illustration: { type: "", chara: [22] },
        get_rank: "非ガチャ産",
        category: { c1: "レジェンダリー", c2: "レギオンリーグ", c3: ["2nd"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールE LG", "WパワーフォールE LG", "援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 724,
        name: "クリエイターズコラボ-深まる秋の一幕-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [16, 15] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/26～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["水：ガードブレイクB Ⅲ", "カウンターウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールC Ⅳ", "援:パワーDOWN/副援:水パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 725,
        name: "クリエイターズコラボ-落ち葉のリース-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [67, 18] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/10/26～)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅳ", "Sp.カウンターウォーターガードヒールD Ⅳ", "回:回復UP/副援:水ガードUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "水弱：Sp.マイトスマッシュA Ⅳ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 4, name: ["水：Sp.パワースマッシュB Ⅲ", "Sp.カウンターウォーターパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.カウンターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 726,
        name: "海風に吹かれて",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [108] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 727,
        name: "メイドのご奉仕",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [109] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ファイアパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 728,
        name: "メイドのうたたね",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [110, 109] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールC Ⅳ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 729,
        name: "素敵なお茶会",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [108, 109, 110, 7, 8] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第1弾イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストB Ⅲ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["WパワーフォールD Ⅲ", "火弱：WパワーフォールD Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 730,
        name: "双子メイド風スタイル",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [8, 7] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第2弾イベントガチャ (2023/11/3～)"] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ファイアガードヒールC Ⅲ", "回:回復UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 731,
        name: "かけがえのない時間",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [111, 112] },
        get_rank: "コラボ",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "百合ヶ丘に咲う紫紺の花 (Re:ゼロから始める異世界生活 コラボ) (2023/10/31～)", c3: ["第2弾イベントガチャ (2023/11/3～)"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストC Ⅳ", "援:Sp.パワーUP/副援:火パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅳ", "回:回復UP/副援:火ガードUP Ⅲ"] }
        ]
    },
    {
        id: 732,
        name: "クリエイターズコラボ-秋のそうさく-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [4, 53] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/5～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["火：パワーストライクB Ⅲ", "カウンターファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "カウンターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 733,
        name: "クリエイターズコラボ-新涼灯火-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [7, 2] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/5～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["火：Sp.ガードバーストB Ⅲ", "Sp.カウンターファイアガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["WガードヒールC Ⅳ", "WガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 734,
        name: "クリエイターズコラボ-ひそひそナイト-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [13, 14] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "オータムフェス前衛後衛ガチャ (2023/11/8～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 735,
        name: "クリエイターズコラボ-フレフレリリィ！-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [2, 1] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "オータムフェス前衛後衛ガチャ (2023/11/8～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅳ", "Sp.ウォーターガードヒールC Ⅳ", "回:回復UP/副援:水ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 736,
        name: "クリエイターズコラボ-夢の中で隠れんぼ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [12, 11] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "オータムフェス前衛後衛ガチャ (2023/11/8～)", c3: ["後衛ガチャ"] },
        skill: [
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールC Ⅳ", "援:パワーDOWN/副援:水パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 737,
        name: "クリエイターズコラボ-はつらつハイタッチ-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 13] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "オータムフェス前衛後衛ガチャ (2023/11/8～)", c3: ["前衛ガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウォーターパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 738,
        name: "秘め事☆プールサイド",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [19, 18] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カガヤキ☆アクトレス (2023/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["水拡：Sp.パワースマッシュB Ⅲ", "水拡：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 739,
        name: "シネマティックに煌めいて",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [15] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カガヤキ☆アクトレス (2023/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水弱：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 740,
        name: "神庭の花火師",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [70] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "カガヤキ☆アクトレス (2023/11/11～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "水強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 741,
        name: "クリエイターズコラボ-藍の心と秋の空-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [11, 14] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/13～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "カウンターファイアパワーアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["火：ガードブレイクB Ⅲ", "カウンターファイアガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 742,
        name: "クリエイターズコラボ-かわいい狩りの秋-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [74, 73] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/13～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.パワースマッシュB Ⅲ", "Sp.カウンターファイアパワースマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 2, name: ["火：パワーストライクB Ⅲ", "火：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールD Ⅳ", "カウンターファイアガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 743,
        name: "夕映えに冴える一手",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [56] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―幻想織りなす黄金律― / ギガント級ヒュージ討伐 (2023/11/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウォーターパワーフォールB Ⅲ", "援:支援UP/副援:水パワーDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] }
        ]
    },
    {
        id: 744,
        name: "暮れなずむ廃址の佳人",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [98] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―幻想織りなす黄金律― / ギガント級ヒュージ討伐 (2023/11/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストB Ⅲ", "援:パワーUP/副援:水パワーUP Ⅲ"] }
        ]
    },
    {
        id: 745,
        name: "理が導く勝機",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [99] },
        get_rank: "B (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "ゴシック・ノスタルジカ ―幻想織りなす黄金律― / ギガント級ヒュージ討伐 (2023/11/22～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターパワーバーストB Ⅲ+", "攻:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "水弱：パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ウォーターガードヒールC Ⅲ", "回:Sp.ガードUP/副援:水ガードUP Ⅲ"] }
        ]
    },
    {
        id: 746,
        name: "クリエイターズコラボ-小さな音楽会-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 19] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/23～)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["ガードヒールC Ⅳ", "ファイアガードヒールC Ⅳ", "回:ガードUP/副援:火ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["火：パワーストライクB Ⅲ", "火：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 747,
        name: "クリエイターズコラボ-秋の日に描く面影-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [69, 68] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/11/23～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["火：Sp.パワースマッシュB Ⅲ", "火：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ファイアパワーストライクA Ⅳ+", "攻:パワーUP/副攻:火パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストC Ⅳ", "援:Sp.パワーUP/副援:火パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールC Ⅳ", "援:パワーDOWN/副援:火パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 748,
        name: "やがて運命は扉を叩く",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [1, 5, 2, 6] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "誓いのリコネクト (2023/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["火拡：パワーストライクB Ⅲ", "火拡：パワーストライクB Ⅲ", "攻:ダメージUP Ⅳ"] }
        ]
    },
    {
        id: 749,
        name: "決着の引き金、魂を重ねて",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [6, 5] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "誓いのリコネクト (2023/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅲ+", "Sp.ファイアガードヒールC Ⅲ", "回:Sp.ガードUP Ⅲ"] }
        ]
    },
    {
        id: 750,
        name: "邪眼解放",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [5] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "誓いのリコネクト (2023/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "火強：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 751,
        name: "真打ち登場やで！",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [106] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "誓いのリコネクト (2023/11/30～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ファイアガードバーストB Ⅲ+", "攻:Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 752,
        name: "クリエイターズコラボ-初雪を見上げて-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [9, 3] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/3～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "カウンターウォーターパワーブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "カウンターウォーターパワーフォールC Ⅳ", "援:支援UP/副援:水パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 753,
        name: "クリエイターズコラボ-2人のおもてなし-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [69, 67] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/3～)", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.カウンターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.カウンターウォーターガードバーストB Ⅲ+", "攻:ダメージUP/Sp.ガードDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅲ", "回:ガードUP/副援:水ガードUP Ⅲ"] }
        ]
    },
    {
        id: 754,
        name: "Emotional Memoria -箱入り神琳-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [7] },
        get_rank: "エモーショナルメモリア",
        category: { c1: "エモーショナルメモリアガチャ", c2: "エモーショナルメモリア -箱入り神琳- ガチャ", c3: [""] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストC Ⅳ", "WカウンターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "カウンターファイアガードブレイクB Ⅲ+", "攻:ダメージUP/ガードDOWN Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.カウンターファイアパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールD Ⅳ", "Sp.カウンターファイアガードヒールD Ⅳ", "回:回復UP/副援:火ガードUP Ⅲ"] }
        ]
    },
    {
        id: 755,
        name: "流星のトリニティ",
        zokusei: 2,
        legendary: "ガチャ",
        illustration: { type: "", chara: [1, 2, 10, 71, 15, 68] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "極天に集いし花々 (2023/12/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["WパワーフォールB Ⅲ", "WカウンターパワーフォールB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 756,
        name: "聖眼解放",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [74] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "極天に集いし花々 (2023/12/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "水強：Sp.パワーアシストB Ⅲ", "援:Sp.パワーUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "ウォーターパワーストライクB Ⅲ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 3, name: ["Sp.マイトスマッシュA Ⅳ+", "Sp.ウォーターパワースマッシュA Ⅳ+", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅲ+", "ウォーターガードヒールC Ⅳ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 757,
        name: "悠久なるノスフェラトゥ",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [115] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "極天に集いし花々 (2023/12/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "水：Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウォーターパワーフォールC Ⅳ", "援:Sp.パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 758,
        name: "清廉なる赤き衝動",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [69] },
        get_rank: "メインストーリー3章 (未復刻)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "極天に集いし花々 (2023/12/10～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ウォーターパワーアシストC Ⅳ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 759,
        name: "クリエイターズコラボ-ツリーを飾る指先-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [8, 1] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/13～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.カウンターファイアガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.カウンターファイアパワーアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 760,
        name: "クリエイターズコラボ-白きホーリーナイト-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [15, 16] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/13～)", c3: [""] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅳ", "Sp.カウンターファイアガードヒールC Ⅳ", "回:Sp.ガードUP/副援:火ガードUP Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "カウンターファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火弱：Sp.パワースマッシュB Ⅲ", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "カウンターファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 761,
        name: "新たな闘いの幕開け",
        zokusei: 2,
        legendary: "",
        illustration: { type: "静止画", chara: [116, 4, 117, 40] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["舞台新章応援"] },
        skill: [
           { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストB Ⅲ", "パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["Sp.パワーフォールB Ⅲ", "Sp.パワーフォールB Ⅲ", "援:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールB Ⅲ", "ガードヒールB Ⅲ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 762,
        name: "クリエイターズコラボ-相合い傘越しの虹-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [17, 16] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "ウィンターフェスガチャ (2023/12/17～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ファイアガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅳ", "ファイアガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 763,
        name: "クリエイターズコラボ-雨上がりレインボー-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [18, 19] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "ウィンターフェスガチャ (2023/12/17～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ファイアパワーフォールC Ⅳ", "援:Sp.パワーDOWN/副援:火パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火弱：パワーストライクB Ⅲ", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "ファイアパワーアシストC Ⅳ", "援:支援UP/副援:火パワーUP Ⅲ"] }
        ]
    }
    ,
    {
        id: 764,
        name: "聖夜の竜星",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [71, 72] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜の竜星 (2023/12/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 5, name: ["WパワーアシストB Ⅲ", "WカウンターパワーアシストB Ⅲ", "援:支援UP Ⅳ"] }
        ]
    }
    ,
    {
        id: 765,
        name: "聖夜のスニーキングミッション",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [73] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜の竜星 (2023/12/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ウォーターパワーフォールC Ⅳ", "援:パワーDOWN Ⅲ"] }
        ]
    }
    ,
    {
        id: 766,
        name: "約束のサンタクロース",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [103] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "聖夜の竜星 (2023/12/20～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅳ", "Sp.ウォーターガードヒールC Ⅳ", "回:Sp.ガードUP Ⅲ"] },
           { yakuwari: 1, name: ["マイトストライクA Ⅳ+", "ウォーターパワーストライクA Ⅳ+", "攻:パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターガードバーストB Ⅲ+", "攻:Sp.ガードDOWN/副攻:水ガードDOWN Ⅲ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "水強：パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] }
        ]
    },
    {
        id: 767,
        name: "クリエイターズコラボ-聖夜のデュオ-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [19, 17] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/22～)", c3: [""] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "火：Sp.ファイアパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火：Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP/Sp.パワーUP Ⅲ"] }
        ]
    },
    {
        id: 768,
        name: "クリエイターズコラボ-サンタを待ちながら-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [10, 11] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "BRAND-NEWメモリアガチャ (2023/12/22～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "火：ファイアパワーストライクB Ⅲ+", "攻:ダメージUP/パワーUP Ⅲ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.カウンターファイアガードバーストB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "火：Sp.ファイアパワーアシストC Ⅳ", "援:支援UP/副援:火パワーUP Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅳ", "火：ファイアガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    },
    {
        id: 769,
        name: "龍の威纏う女帝",
        zokusei: 1,
        legendary: "ガチャ",
        illustration: { type: "", chara: [12] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "龍炎舞踊のエージェント (2023/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 7, name: ["WガードヒールD Ⅳ", "WカウンターガードヒールD Ⅳ", "回:回復UP Ⅳ"] }
        ]
    },
    {
        id: 770,
        name: "炎龍を宿す舞人",
        zokusei: 1,
        legendary: "",
        illustration: { type: "", chara: [13] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "龍炎舞踊のエージェント (2023/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火：Sp.ファイアパワースマッシュB Ⅲ+", "攻:Sp.パワーUP/副攻:火パワーUP Ⅲ"] },
           { yakuwari: 5, name: ["Sp.パワーアシストC Ⅳ", "Sp.ファイアパワーアシストC Ⅳ", "援:Sp.パワーUP/副援:火パワーUP Ⅲ"] },
           { yakuwari: 6, name: ["パワーフォールC Ⅳ", "ファイアパワーフォールC Ⅳ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 771,
        name: "恵みもたらす食神",
        zokusei: 2,
        legendary: "",
        illustration: { type: "", chara: [14] },
        get_rank: "季節 (推定)",
        category: { c1: "メダル/ギガント級討伐イベント", c2: "龍炎舞踊のエージェント (2023/12/31～)", c3: ["イベントガチャ"] },
        skill: [
           { yakuwari: 6, name: ["Sp.パワーフォールC Ⅳ", "Sp.ウォーターパワーフォールC Ⅳ", "援:Sp.パワーDOWN/副援:水パワーDOWN Ⅲ"] },
           { yakuwari: 2, name: ["マイトブレイクB Ⅲ+", "ウォーターガードブレイクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 4, name: ["Sp.マイトバーストB Ⅲ+", "Sp.ウォーターパワーバーストB Ⅲ+", "攻:Sp.パワーDOWN Ⅲ"] },
           { yakuwari: 7, name: ["ガードヒールC Ⅳ", "ウォーターガードヒールC Ⅳ", "回:ガードUP Ⅲ"] }
        ]
    },
    {
        id: 772,
        name: "辰年ニューイヤー",
        zokusei: 1,
        legendary: "",
        illustration: { type: "静止画", chara: [25, 21] },
        get_rank: "非ガチャ産",
        category: { c1: "ミッション、ログインボーナス等", c2: "期間限定", c3: ["お正月記念"] },
        skill: [
            { yakuwari: 7, name: ["Sp.ガードヒールB Ⅲ", "Sp.ガードヒールB Ⅲ", "回:Sp.ガードUP Ⅲ"] },
            { yakuwari: 2, name: ["パワーストライクB Ⅲ", "パワーストライクB Ⅲ", "攻:パワーUP Ⅲ"] },
            { yakuwari: 4, name: ["Sp.パワースマッシュB Ⅲ", "Sp.パワースマッシュB Ⅲ", "攻:Sp.パワーUP Ⅲ"] },
            { yakuwari: 5, name: ["Sp.パワーアシストB Ⅲ", "Sp.パワーアシストB Ⅲ", "援:パワーUP Ⅲ"] },
            { yakuwari: 6, name: ["パワーフォールB Ⅲ", "パワーフォールB Ⅲ", "援:パワーDOWN Ⅲ"] }
        ]
    },
    {
        id: 773,
        name: "クリエイターズコラボ-ふたりだけの夜-",
        zokusei: 2,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [6, 5] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "新春!!BRAND-NEWメモリアガチャ (2024/1/4～)", c3: [""] },
        skill: [
           { yakuwari: 2, name: ["マイトストライクB Ⅲ+", "水拡：ウォーターパワーストライクB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 5, name: ["パワーアシストC Ⅳ", "カウンターウォーターパワーアシストC Ⅳ", "援:支援UP Ⅳ"] }
        ]
    },
    {
        id: 774,
        name: "クリエイターズコラボ-満たされる時間-",
        zokusei: 1,
        legendary: "",
        illustration: { type: "クリエイターズコラボ", chara: [21, 25] },
        get_rank: "C (推定)",
        category: { c1: "前衛後衛/役割別/クリエイターズコラボガチャ", c2: "新春!!BRAND-NEWメモリアガチャ (2024/1/4～)", c3: [""] },
        skill: [
           { yakuwari: 4, name: ["Sp.マイトスマッシュB Ⅲ+", "火：Sp.ファイアパワースマッシュB Ⅲ+", "攻:ダメージUP Ⅳ"] },
           { yakuwari: 1, name: ["マイトブレイクA Ⅳ+", "ファイアガードブレイクA Ⅳ+", "攻:ガードDOWN/副攻:火ガードDOWN Ⅲ"] },
           { yakuwari: 6, name: ["火：WパワーフォールC Ⅳ", "火：WパワーフォールC Ⅳ", "援:支援UP Ⅳ"] },
           { yakuwari: 7, name: ["Sp.ガードヒールC Ⅳ", "火：Sp.ファイアガードヒールC Ⅳ", "回:回復UP/副援:支援UP Ⅲ"] }
        ]
    }
    /*
    ,
    {
        id: ,
        name: "",
        zokusei: ,
        legendary: "",
        illustration: { type: "", chara: [] },
        get_rank: "",
        category: { c1: "", c2: "", c3: [] },
        skill: [
           { yakuwari: , name: ["", "", ""] },
           { yakuwari: , name: ["", "", ""] }
        ]
    }
    */
]