const skillJson = [
    {
        "name": "パワーストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードバーストA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "ストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与える。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"]
        ]
    },
    {
        "name": "スマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与える。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"]
        ]
    },
    {
        "name": "ガードストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与え、自身のDEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ガードブレイクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードスマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"]
        ]
    },
    {
        "name": "ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "Sp.パワーアシストA Ⅲ",
        "effect_detail": "味方1体のSp.ATKを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "特大"]
        ]
    },
    {
        "name": "ヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"]
        ]
    },
    {
        "name": "パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "パワーフォールA Ⅲ",
        "effect_detail": "敵1体のATKを特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "特大"]
        ]
    },
    {
        "name": "ガードアシストA Ⅲ",
        "effect_detail": "味方1体のDEFを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "特大"]
        ]
    },
    {
        "name": "スマッシュA Ⅱ",
        "effect_detail": "敵1体に特殊大ダメージを与える。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"]
        ]
    },
    {
        "name": "ガードアシストA Ⅱ",
        "effect_detail": "味方1体のDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "ストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与える。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"]
        ]
    },
    {
        "name": "ヒールB Ⅱ",
        "effect_detail": "味方1～2体のHPを回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"]
        ]
    },
    {
        "name": "ストライクA Ⅲ",
        "effect_detail": "敵1体に通常特大ダメージを与える。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"]
        ]
    },
    {
        "name": "スマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与える。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"]
        ]
    },
    {
        "name": "Sp.パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "スマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊特大ダメージを与える。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"]
        ]
    },
    {
        "name": "Sp.ガードアシストA Ⅱ",
        "effect_detail": "味方1体のSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ヒールB Ⅲ",
        "effect_detail": "味方1～2体のHPを大回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"]
        ]
    },
    {
        "name": "Sp.ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "パワーストライクA Ⅱ",
        "effect_detail": "敵1体に通常ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.パワーフォールA Ⅲ",
        "effect_detail": "敵1体のSp.ATKを特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "特大"]
        ]
    },
    {
        "name": "パワーアシストA Ⅲ",
        "effect_detail": "味方1体のATKを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "特大"]
        ]
    },
    {
        "name": "ヒールA Ⅲ",
        "effect_detail": "味方1体のHPを特大回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "特大"]
        ]
    },
    {
        "name": "ガードフォールA Ⅲ",
        "effect_detail": "敵1体のDEFを特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "特大"]
        ]
    },
    {
        "name": "パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"]
        ]
    },
    {
        "name": "ガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "Sp.ガードストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "ヒールスマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "Sp.ガードスマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードアシストA Ⅲ",
        "effect_detail": "味方1体のSp.DEFを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "特大"]
        ]
    },
    {
        "name": "マイトアシストA Ⅲ",
        "effect_detail": "味方1体のATKとDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "ガードストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のDEFをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "WパワーフォールA Ⅲ",
        "effect_detail": "敵1体のATKとSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "パワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "ガードスマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のDEFをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "ヒールストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "パワーストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "Sp.ガードバーストA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "ガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFを大アップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "WガードアシストA Ⅲ",
        "effect_detail": "味方1体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "パワーブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "中"]
        ]
    },
    {
        "name": "ガードブレイクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "ガードフォールC Ⅳ",
        "effect_detail": "敵1～3体のDEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "スマッシュD LG",
        "effect_detail": "敵2体に特殊大ダメージを与える。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"]
        ]
    },
    {
        "name": "ウォーターストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、このメモリアが編成されたリリィの水属性が多いほどダメージが増加。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["編成数(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.パワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.パワーヒールB Ⅲ",
        "effect_detail": "味方1～2体のHPを大回復する。さらに味方のSp.ATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["Sp.ATK↑", "小"]
        ]
    },
    {
        "name": "Sp.パワーブレイクA Ⅲ+",
        "effect_detail": "敵1体に通常大ダメージを与え、敵のSp.ATKを大ダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "WガードフォールA Ⅲ",
        "effect_detail": "敵1体のDEFとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "スマッシュC Ⅲ",
        "effect_detail": "敵1～3体に特殊ダメージを与える。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"]
        ]
    },
    {
        "name": "Sp.ガードヒールB Ⅲ",
        "effect_detail": "味方1～2体のHPを大回復する。さらに味方のSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "WパワーアシストA Ⅲ",
        "effect_detail": "味方1体のATKとSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "パワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKをダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"]
        ]
    },
    {
        "name": "ストライクC Ⅲ",
        "effect_detail": "敵1～3体に通常ダメージを与える。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"]
        ]
    },
    {
        "name": "ヒールストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "ガードヒールB Ⅲ",
        "effect_detail": "味方1～2体のHPを大回復する。さらに味方のDEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "ウィンドスマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、このメモリアが編成されたリリィの風属性が多いほどダメージが増加。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["編成数(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ガードスマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のDEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ガードストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のDEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ガードアシストD Ⅱ",
        "effect_detail": "味方2体のDEFをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードフォールA Ⅲ",
        "effect_detail": "敵1体のSp.DEFを特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "特大"]
        ]
    },
    {
        "name": "Sp.マイトアシストA Ⅲ",
        "effect_detail": "味方1体のSp.ATKとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ストライクD LG",
        "effect_detail": "敵2体に通常大ダメージを与える。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"]
        ]
    },
    {
        "name": "Sp.ガードスマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "パワーバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のATKをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["ATK↓", "中"]
        ]
    },
    {
        "name": "ストライクA Ⅳ",
        "effect_detail": "敵1体に通常超特大ダメージを与える。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "超特大"]
        ]
    },
    {
        "name": "ファイアスマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、このメモリアが編成されたリリィの火属性が多いほどダメージが増加。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["編成数(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "パワーフォールC Ⅳ",
        "effect_detail": "敵1～3体のATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"]
        ]
    },
    {
        "name": "ファイアストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、このメモリアが編成されたリリィの火属性が多いほどダメージが増加。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["編成数(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ガードストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "WガードアシストD LG",
        "effect_detail": "味方2体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ウォータースマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、このメモリアが編成されたリリィの水属性が多いほどダメージが増加。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["編成数(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ガードストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のSp.DEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のSp.DEFを大アップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "Sp.ガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "Sp.パワーブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のSp.ATKをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "Sp.ガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "パワーストライクA LG",
        "effect_detail": "敵1体に通常超特大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "超特大"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "スマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊超特大ダメージを与える",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "超特大"]
        ]
    },
    {
        "name": "Sp.マイトフォールA Ⅲ",
        "effect_detail": "敵1体のSp.ATKとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "パワーヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["ATK↑", "小"]
        ]
    },
    {
        "name": "ガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のDEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "ヒールE LG",
        "effect_detail": "味方2～3体のHPを回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"]
        ]
    },
    {
        "name": "Sp.パワーバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.ATKをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKとDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "マイトストライクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKとDEFをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "WパワーブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKとSp.ATKを小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "小"],
            ["Sp.ATK↓", "小"]
        ]
    },
    {
        "name": "パワーヒールB Ⅲ",
        "effect_detail": "味方1～2体のHPを大回復する。さらに味方のATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["ATK↑", "小"]
        ]
    },
    {
        "name": "パワーストライクA Ⅲ+",
        "effect_detail": "敵1体に通常大ダメージを与え、自身のATKを大アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "WガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ディファースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKとDEFを小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "風：ストライクC Ⅲ",
        "effect_detail": "敵1～3体に通常ダメージを与える。さらに味方がオーダースキル「風属性効果増加」を発動中は威力がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "WパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKとSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.パワーアシストC Ⅳ",
        "effect_detail": "味方1～3体のSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "ガードブレイクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、敵のDEFを大ダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "ガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "ガードアシストD Ⅲ",
        "effect_detail": "味方2体のDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "ガードフォールA Ⅳ",
        "effect_detail": "敵1体のDEFを超特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "超特大"]
        ]
    },
    {
        "name": "WガードフォールD LG",
        "effect_detail": "敵2体のDEFとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "ヒールスマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "WガードスマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のDEFとSp.DEFをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["DEF↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードフォールC Ⅳ",
        "effect_detail": "敵1～3体のSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "パワーアシストC Ⅳ",
        "effect_detail": "味方1～3体のATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.ガードバーストA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のSp.DEFを大ダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "Sp.パワーヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.ATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.ATK↑", "小"]
        ]
    },
    {
        "name": "マイトブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKとDEFを小ダウンさせる",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "小"],
            ["DEF↓", "小"]
        ]
    },
    {
        "name": "マイトブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKとDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "中"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "風：ガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ヒールストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA LG",
        "effect_detail": "敵1体に特殊超特大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "超特大"],
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "マイトストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKとDEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA Ⅲ+",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のSp.ATKを大アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "火：Sp.ガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.DEFを大アップさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.パワーアシストA Ⅳ",
        "effect_detail": "味方1体のSp.ATKを超特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "超特大"]
        ]
    },
    {
        "name": "水：Sp.パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "水：スマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与える。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "火：パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "パワーブレイクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、敵のATKをダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↓", "中"]
        ]
    },
    {
        "name": "WパワーバーストA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のATKとSp.ATKをダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["ATK↓", "中"],
            ["Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "風：Sp.ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFを大ダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ディファースマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKとDEFをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "風：パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "火：パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKを大アップさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ディファーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "ディファースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKとDEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ヒールスマッシュC Ⅲ",
        "effect_detail": "敵1～3体に特殊ダメージを与える。さらに自身のHPを回復する。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["自身回復", "中"]
        ]
    },
    {
        "name": "風：ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFを大ダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "火：ガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFを大アップする。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "風：Sp.パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "マイトフォールA Ⅲ",
        "effect_detail": "敵1体のATKとDEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "火：ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFを大ダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "ファイアスマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、このメモリアが編成されたリリィの火属性が多いほどダメージが増加。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["編成数(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "パワーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKを大アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.マイトフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "Sp.マイトスマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKとSp.DEFをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "WパワーブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKとSp.ATKをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "中"],
            ["Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "ヒールD Ⅳ",
        "effect_detail": "味方2体のHPを大回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"]
        ]
    },
    {
        "name": "Sp.ディファーストライクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKとSp.DEFをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "WパワーヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のATKとSp.ATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["ATK↑", "小"],
            ["Sp.ATK↑", "小"]
        ]
    },
    {
        "name": "Sp.ガードアシストD Ⅱ",
        "effect_detail": "味方2体のSp.DEFをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードアシストD Ⅲ",
        "effect_detail": "味方2体のSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "Sp.マイトスマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKとSp.DEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.マイトバーストA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のSp.ATKとSp.DEFをダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↓", "中"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "Sp.ガードヒールC Ⅲ+",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFをアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.パワーフォールC Ⅳ",
        "effect_detail": "敵1～3体のSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "水：ガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFを大アップする。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "WパワーアシストD LG",
        "effect_detail": "味方2体のATKとSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "WガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFとSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "マイトストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKとDEFを小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "WパワーバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のATKとSp.ATKを小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["ATK↓", "小"],
            ["Sp.ATK↓", "小"]
        ]
    },
    {
        "name": "闇：WパワーフォールA Ⅲ",
        "effect_detail": "敵1体のATKとSp.ATKを大ダウンさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.ATK↓", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "チャージストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与える。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "チャージヒールC Ⅱ",
        "effect_detail": "味方1～3体のHPを小回復する。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "小"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "パワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "チャージパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKをアップさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "チャージストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与える。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "Sp.パワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKをダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "チャージSp.パワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKをダウンさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "チャージスマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与える。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "闇：Sp.パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKを大アップさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "闇：パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "ガードヒールC Ⅲ+",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFをアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "チャージスマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与える。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "闇：WガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFとSp.DEFを大アップさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ガードバーストA Ⅴ",
        "effect_detail": "敵1体に特殊超特大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "超特大"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "ガードブレイクA Ⅴ",
        "effect_detail": "敵1体に通常超特大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "超特大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "火：Sp.パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKを大ダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKを大アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.パワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "チャージSp.パワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKをアップさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "闇：ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFを大ダウンさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "チャージヒールD Ⅱ",
        "effect_detail": "味方2体のHPを小回復する。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "小"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "光：WパワーアシストA Ⅲ",
        "effect_detail": "味方1体のATKとSp.ATKを大アップさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "チャージガードアシストC Ⅲ",
        "effect_detail": "味方1～3体のDEFをアップさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "Sp.パワーヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のSp.ATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.ATK↑", "小"]
        ]
    },
    {
        "name": "Sp.マイトバーストB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.ATKとSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↓", "中"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "チャージSp.ガードアシストC Ⅲ",
        "effect_detail": "味方1～3体のSp.DEFをアップさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "光：パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウィンドスマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、このメモリアが編成されたリリィの風属性が多いほどダメージが増加。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["編成数(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウォータースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、このメモリアが編成されたリリィの水属性が多いほどダメージが増加。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["編成数(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "光：WガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFとSp.DEFを大ダウンさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "パワーヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のATKを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["ATK↑", "小"]
        ]
    },
    {
        "name": "光：WガードフォールA Ⅲ",
        "effect_detail": "敵1体のDEFとSp.DEFを大ダウンさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "チャージパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKをダウンさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "光：パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKを大アップさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "ガードヒールB Ⅲ+",
        "effect_detail": "味方1～2体のHPを大回復する。さらに味方のDEFをアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["DEF↑", "中"]
        ]
    },
    {
        "name": "ウィンドストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、このメモリアが編成されたリリィの風属性が多いほどダメージが増加。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["編成数(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードヒールE LG",
        "effect_detail": "味方2～3体のHPを回復する。さらに味方のDEFとSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "光：Sp.ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFを大ダウンさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "光：ガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFを大アップさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "マイトブレイクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、敵のATKとDEFをダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↓", "中"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "光：WガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFとSp.DEFを大アップさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "ディファーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKとDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "チャージガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFをダウンさせる。バトル時間60秒経過ごとにスキル効果がアップし、600秒経過で最大になる。(対ヒュージは30秒/120秒、LB・ギガント級討伐ではその半分)",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["チャージ", "中"]
        ]
    },
    {
        "name": "Sp.ディファーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKとSp.DEFをアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "ウォータースマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、このメモリアが編成されたリリィの水属性が多いほどダメージが増加。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["編成数(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "水：Sp.パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKを大ダウンさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "水：パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "WパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKとSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "Sp.ディファーバーストB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のATKとSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["ATK↓", "中"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "Sp.ディファーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "マイトストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKとDEFを小アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "小"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "光：Sp.パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKを大ダウンさせる。さらに味方がオーダースキル「光属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["オーダー(光/効果アップ)", "中"]
        ]
    },
    {
        "name": "闇：Sp.パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKを大ダウンさせる。さらに味方がオーダースキル「闇属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["オーダー(闇/効果アップ)", "中"]
        ]
    },
    {
        "name": "ディファーブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のSp.ATKとDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["Sp.ATK↓", "中"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "ディファーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKとDEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "ガードブレイクD LG",
        "effect_detail": "敵2体に通常大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "マイトフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKとDEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["DEF↓", "大"]
        ]
    },
    {
        "name": "Sp.ガードフォールA Ⅳ",
        "effect_detail": "敵1体のSp.DEFを超特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "超特大"]
        ]
    },
    {
        "name": "風：スマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与える。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ダークパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKと闇属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["闇属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ダークガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと闇属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["闇属性防御力↓", "小"]
        ]
    },
    {
        "name": "ダークパワーストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、自身のATKと闇属性攻撃力を小アップさせる",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ダークパワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと闇属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ダークガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFと闇属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["闇属性防御力↓", "中"]
        ]
    },
    {
        "name": "Sp.ライトパワースマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、自身のSp.ATKと光属性攻撃力を小アップさせる",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.ATK↑", "小"],
            ["光属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ライトパワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと光属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["光属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ダークガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFと闇属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["闇属性防御力↑", "小"]
        ]
    },
    {
        "name": "ライトパワーストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、自身のATKと光属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↑", "小"],
            ["光属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ライトパワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと光属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["光属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ライトパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKと光属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["光属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ダークパワースマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、自身のSp.ATKと闇属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ダークパワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと闇属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ライトガードアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.DEFと光属性防御力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"],
            ["光属性防御力↑", "中"]
        ]
    },
    {
        "name": "Sp.ライトガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと光属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["光属性防御力↓", "小"]
        ]
    },
    {
        "name": "ライトパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKと光属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["光属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ダークガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと闇属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "小"],
            ["闇属性防御力↓", "小"]
        ]
    },
    {
        "name": "ダークパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKと闇属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["闇属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ライトガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと光属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "小"],
            ["光属性防御力↓", "小"]
        ]
    },
    {
        "name": "ダークガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFと闇属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["闇属性防御力↑", "小"]
        ]
    },
    {
        "name": "ライトパワーストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと光属性攻撃力を小アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "小"],
            ["光属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ガードアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.DEFをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ダークガードアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.DEFと闇属性防御力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"],
            ["闇属性防御力↑", "中"]
        ]
    },
    {
        "name": "ダークパワーブレイクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、敵のATKと闇属性攻撃力を小ダウンさせる",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↓", "小"],
            ["闇属性攻撃力↓", "小"]
        ]
    },
    {
        "name": "ダークパワーブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKと闇属性攻撃力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "小"],
            ["闇属性攻撃力↓", "小"]
        ]
    },
    {
        "name": "ダークガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のDEFと闇属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["闇属性防御力↑", "小"]
        ]
    },
    {
        "name": "パワーストライクE Ⅳ",
        "effect_detail": "敵2～3体に通常大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"]
        ]
    },
    {
        "name": "ガードヒールE Ⅲ",
        "effect_detail": "味方2～3体のHPを回復する。さらに味方のDEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "ライトガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFと光属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["光属性防御力↑", "小"]
        ]
    },
    {
        "name": "Sp.パワースマッシュE Ⅳ",
        "effect_detail": "敵2～3体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"]
        ]
    },
    {
        "name": "Sp.パワーフォールE Ⅳ",
        "effect_detail": "敵2～3体のSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "Sp.ライトパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKと光属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["光属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ダークパワースマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のSp.ATKと闇属性攻撃力を小アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.パワースマッシュA Ⅴ+",
        "effect_detail": "敵1体に特殊超特大ダメージを与え、自身のSp.ATKを大アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "超特大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.ダークパワースマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと闇属性攻撃力を小アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "小"],
            ["闇属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ガードアシストE Ⅳ",
        "effect_detail": "味方2～3体のSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "ダークガードアシストB Ⅱ",
        "effect_detail": "味方1～2体のDEFと闇属性防御力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "中"],
            ["闇属性防御力↑", "中"]
        ]
    },
    {
        "name": "Sp.ライトガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFと光属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["光属性防御力↑", "小"]
        ]
    },
    {
        "name": "Sp.ライトガードバーストB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、敵のSp.DEFと光属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.DEF↓", "小"],
            ["光属性防御力↓", "小"]
        ]
    },
    {
        "name": "Sp.ダークパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKと闇属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["闇属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ダークガードブレイクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、敵のDEFと闇属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["DEF↓", "小"],
            ["闇属性防御力↓", "小"]
        ]
    },
    {
        "name": "ライトパワーブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のATKと光属性攻撃力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↓", "小"],
            ["光属性攻撃力↓", "小"]
        ]
    },
    {
        "name": "Sp.ライトパワーバーストB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、敵のSp.ATKと光属性攻撃力を小ダウンさせる",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.ATK↓", "小"],
            ["光属性攻撃力↓", "小"]
        ]
    },
    {
        "name": "Sp.ライトパワーバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.ATKと光属性攻撃力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↓", "小"],
            ["光属性攻撃力↓", "小"]
        ]
    },
    {
        "name": "ライトパワーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと光属性攻撃力をアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["光属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ガードバーストD LG",
        "effect_detail": "敵2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "ウォーターパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKと水属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウォーターパワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、自身のSp.ATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワーヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.ATKと水属性攻撃力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、自身のSp.ATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.DEFと水属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"],
            ["水属性防御力↓", "中"]
        ]
    },
    {
        "name": "ウォーターパワーヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のATKと水属性攻撃力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ウォーターパワーストライクA Ⅳ",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "水拡：パワーアシストB Ⅳ",
        "effect_detail": "味方1～2体のATKを特大アップする。オーダースキル「水属性効果増加」を発動中は味方2体のATKを特大アップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "特大"],
            ["オーダー(水/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "Sp.ガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.DEFをダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと水属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["水属性防御力↓", "小"]
        ]
    },
    {
        "name": "ウォーターガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと水属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "小"],
            ["水属性防御力↓", "小"]
        ]
    },
    {
        "name": "WパワーアシストC Ⅳ",
        "effect_detail": "味方1～3体のATKとSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "ウォーターガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFと水属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["水属性防御力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFと水属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["水属性防御力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のSp.ATKと水属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウォーターパワーストライクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと水属性攻撃力をアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターガードバーストB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと水属性防御力をダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["水属性防御力↓", "中"]
        ]
    },
    {
        "name": "水：WガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFとSp.DEFを大アップする。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "ディファーアシストC Ⅳ",
        "effect_detail": "味方1～3体のSp.ATKとDEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["DEF↑", "大"]
        ]
    },
    {
        "name": "ウォーターパワーストライクA Ⅲ",
        "effect_detail": "敵1体に通常大ダメージを与え、自身のATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ウォーターパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のATKと水属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウォーターパワーストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、自身のATKと水属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↑", "小"],
            ["水属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと水属性攻撃力をアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "水：Sp.パワーアシストC Ⅳ",
        "effect_detail": "味方1～3体のSp.ATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウォーターパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のATKと水属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["水属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ディファーアシストC Ⅳ",
        "effect_detail": "味方1～3体のATKとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "Sp.ウォーターパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKと水属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "水拡：Sp.パワーフォールB Ⅳ",
        "effect_detail": "敵1～2体のSp.ATKを特大ダウンさせる。オーダースキル「水属性効果増加」を発動中は敵2体のSp.ATKを特大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "特大"],
            ["オーダー(水/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "水：パワーアシストC Ⅳ",
        "effect_detail": "味方1～3体のATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターガードバーストA Ⅲ",
        "effect_detail": "敵1体に特殊大ダメージを与え、敵のSp.DEFと水属性防御力を小ダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["水属性防御力↓", "小"]
        ]
    },
    {
        "name": "Sp.ウォーターガードバーストA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のSp.DEFと水属性防御力を小ダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.DEF↓", "小"],
            ["水属性防御力↓", "小"]
        ]
    },
    {
        "name": "WパワーフォールE LG",
        "effect_detail": "敵2～3体のATKとSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "風：WガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFとSp.DEFを大ダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウィンドパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のATKと風属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドパワースマッシュB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、自身のSp.ATKと風属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.ATK↑", "小"],
            ["風属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウィンドパワースマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと風属性攻撃力をアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドガードバーストB Ⅱ",
        "effect_detail": "敵1～2体に特殊ダメージを与え、敵のSp.DEFと風属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "中"],
            ["Sp.DEF↓", "小"],
            ["風属性防御力↓", "小"]
        ]
    },
    {
        "name": "Sp.ウィンドガードバーストB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと風属性防御力をダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "ライフアシストB Ⅱ",
        "effect_detail": "味方1～2体の最大HPをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["最大HP↑", "中"]
        ]
    },
    {
        "name": "ライフアシストB Ⅰ",
        "effect_detail": "味方1～2体の最大HPを小アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["最大HP↑", "小"]
        ]
    },
    {
        "name": "Sp.ウィンドパワースマッシュA Ⅳ",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと風属性攻撃力を小アップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "小"],
            ["風属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ウィンドガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと風属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["風属性防御力↓", "小"]
        ]
    },
    {
        "name": "ガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFをダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "ウィンドガードフォールC Ⅲ",
        "effect_detail": "敵1～3体のDEFと風属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "ウィンドパワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと風属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["風属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "風：パワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウィンドガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと風属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "小"],
            ["風属性防御力↓", "小"]
        ]
    },
    {
        "name": "ウィンドパワーストライクB Ⅱ",
        "effect_detail": "敵1～2体に通常ダメージを与え、自身のATKと風属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "中"],
            ["ATK↑", "小"],
            ["風属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "ウィンドパワーストライクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと風属性攻撃力をアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターガードフォールC Ⅲ",
        "effect_detail": "敵1～3体のSp.DEFと水属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"],
            ["水属性防御力↓", "中"]
        ]
    },
    {
        "name": "水：WパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKとSp.ATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウィンドガードブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと風属性防御力をダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "水：ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFを大ダウンさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウォーターガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFと水属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["水属性防御力↓", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターパワースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと水属性攻撃力をアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "WガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のDEFとSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "ガードブレイクE Ⅳ",
        "effect_detail": "敵2～3体に通常大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"]
        ]
    },
    {
        "name": "パワーアシストE Ⅳ",
        "effect_detail": "味方2～3体のATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.ウィンドパワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと風属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["風属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ガードフォールE Ⅳ",
        "effect_detail": "敵2～3体のSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "Sp.ウィンドガードフォールC Ⅲ",
        "effect_detail": "敵1～3体のSp.DEFと風属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "パワーストライクA Ⅴ+",
        "effect_detail": "敵1体に通常超特大ダメージを与え、自身のATKを大アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "超特大"],
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "風：パワーアシストD Ⅲ",
        "effect_detail": "味方2体のATKを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ガードライフアシストD Ⅱ",
        "effect_detail": "味方2体のSp.DEFと最大HPをアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.DEF↑", "中"],
            ["最大HP↑", "中"]
        ]
    },
    {
        "name": "ウォーターパワーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと水属性攻撃力をアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["水属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウォーターパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKと水属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["水属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKと水属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["水属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFと風属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["風属性防御力↑", "小"]
        ]
    },
    {
        "name": "パワーストライクA LG+",
        "effect_detail": "敵1体に通常超特大ダメージを与え、自身のATKを大アップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "超特大"],
            ["ATK↑", "大"]
        ]
    },
    {
        "name": "Sp.ウィンドパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKと風属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のSp.ATKと風属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウォーターガードブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと水属性防御力をダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["水属性防御力↓", "中"]
        ]
    },
    {
        "name": "風拡：Sp.パワーアシストB Ⅳ",
        "effect_detail": "味方1～2体のSp.ATKを特大アップさせる。オーダースキル「風属性効果増加」を発動中は味方2体のSp.ATKを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "特大"],
            ["オーダー(風/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "Sp.ウィンドパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKと風属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["風属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ウィンドパワーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと風属性攻撃力をアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ウィンドパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKと風属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["風属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドパワースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと風属性攻撃力をアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "水：パワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKを大ダウンさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドガードバーストA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、敵のSp.DEFと風属性防御力をダウンさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "ウィンドガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFと風属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["風属性防御力↑", "小"]
        ]
    },
    {
        "name": "ウィンドガードブレイクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、敵のDEFと風属性防御力をダウンさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "ファイアパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKと火属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと火属性防御力を小ダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "小"],
            ["火属性防御力↓", "小"]
        ]
    },
    {
        "name": "ファイアガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと火属性防御力を小ダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "小"],
            ["火属性防御力↓", "小"]
        ]
    },
    {
        "name": "WガードヒールD Ⅳ",
        "effect_detail": "味方2体のHPを大回復する。さらに味方のDEFとSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["DEF↑", "小"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "ウィンドガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFと風属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["風属性防御力↓", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと火属性攻撃力をアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ファイアパワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと火属性攻撃力を小アップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "小"],
            ["火属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ファイアパワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと火属性攻撃力を小アップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "小"],
            ["火属性攻撃力↑", "小"]
        ]
    },
    {
        "name": "Sp.ファイアガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.DEFと火属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"],
            ["火属性防御力↓", "中"]
        ]
    },
    {
        "name": "火：パワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKをアップさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードアシストD Ⅲ",
        "effect_detail": "味方2体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "火：Sp.パワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードフォールD Ⅲ",
        "effect_detail": "敵2体のDEFとSp.DEFを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "WパワーフォールD Ⅲ",
        "effect_detail": "敵2体のATKとSp.ATKを大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "風：Sp.ガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "WパワーアシストD Ⅲ",
        "effect_detail": "味方2体のATKとSp.ATKを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "風：ガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFをダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "リカバーヒールD Ⅳ",
        "effect_detail": "味方2体のHPを大回復する。さらに自身のMPを60回復する。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["MP回復", "60"]
        ]
    },
    {
        "name": "Sp.マイトスマッシュA Ⅴ+",
        "effect_detail": "敵1体に特殊超特大ダメージを与え、自身のSp.ATKとSp.DEFをアップさせる。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "超特大"],
            ["Sp.ATK↑", "中"],
            ["Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワースマッシュB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKと火属性攻撃力をアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のSp.ATKと火属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ファイアガードフォールB Ⅱ",
        "effect_detail": "敵1～2体のDEFと火属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "中"],
            ["火属性防御力↓", "中"]
        ]
    },
    {
        "name": "ウィンドパワーアシストB Ⅱ",
        "effect_detail": "味方1～2体のATKと風属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["風属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "ファイアパワーストライクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKと火属性攻撃力をアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のSp.ATKと火属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のSp.DEFと火属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["火属性防御力↑", "小"]
        ]
    },
    {
        "name": "ファイアガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復する。さらに味方のDEFと火属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["火属性防御力↑", "小"]
        ]
    },
    {
        "name": "ファイアパワーストライクA Ⅳ+",
        "effect_detail": "敵1体に通常特大ダメージを与え、自身のATKと火属性攻撃力をアップさせる。",
        "yakuwari": 1,
        "tag": [
            ["通常ダメージ", "特大"],
            ["ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードバーストB Ⅲ+",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFと火属性防御力をダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["火属性防御力↓", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のSp.ATKと火属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["火属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ファイアパワーアシストC Ⅲ",
        "effect_detail": "味方1～3体のATKと火属性攻撃力をアップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "中"],
            ["火属性攻撃力↑", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のSp.DEFと火属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["火属性防御力↑", "小"]
        ]
    },
    {
        "name": "ファイアガードブレイクB Ⅲ+",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFと火属性防御力をダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["火属性防御力↓", "中"]
        ]
    },
    {
        "name": "ファイアパワーフォールB Ⅱ",
        "effect_detail": "敵1～2体のATKと火属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["火属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "風：WパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKとSp.ATKを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["Sp.ATK↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "WガードアシストE LG",
        "effect_detail": "味方2～3体のDEFとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "火：WガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFとSp.DEFを大アップさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "火：Sp.ファイアパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のSp.ATKと火属性攻撃力をダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["火属性攻撃力↓", "中"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "ガードヒールD Ⅳ",
        "effect_detail": "味方2体のHPを大回復する。さらに味方のDEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["DEF↑", "小"]
        ]
    },
    {
        "name": "Sp.ガードヒールD Ⅳ",
        "effect_detail": "味方2体のHPを大回復する。さらに味方のSp.DEFを小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "大"],
            ["Sp.DEF↑", "小"]
        ]
    },
    {
        "name": "ウィンドパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のATKと風属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["風属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "風拡：パワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKをアップさせる。オーダースキル「風属性効果増加」を発動中は敵2体に通常大ダメージを与え、自身のATKをアップさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["オーダー(風/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "風拡：Sp.パワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。オーダースキル「風属性効果増加」を発動中は敵2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["オーダー(風/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "風：WガードアシストC Ⅳ",
        "effect_detail": "味方1～3体のDEFとSp.DEFを大アップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["Sp.DEF↑", "大"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "風：ウィンドパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のATKと風属性攻撃力をダウンさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["風属性攻撃力↓", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "風：Sp.ウィンドガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復し、Sp.DEFと風属性防御力を小アップする。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["風属性防御力↑", "小"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ファイアパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のSp.ATKと火属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "中"],
            ["火属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "ファイアガードヒールD Ⅲ",
        "effect_detail": "味方2体のHPを回復する。さらに味方のDEFと火属性防御力を小アップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["火属性防御力↑", "小"]
        ]
    },
    {
        "name": "ファイアパワーフォールC Ⅲ",
        "effect_detail": "敵1～3体のATKと火属性攻撃力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "中"],
            ["火属性攻撃力↓", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードフォールC Ⅲ",
        "effect_detail": "敵1～3体のSp.DEFと火属性防御力をダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "中"],
            ["火属性防御力↓", "中"]
        ]
    },
    {
        "name": "火拡：WガードアシストB Ⅳ",
        "effect_detail": "味方1～2体のDEFとSp.DEFを特大アップさせる。オーダースキル「火属性効果増加」を発動中は味方2体のDEFとSp.DEFを特大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "特大"],
            ["Sp.DEF↑", "特大"],
            ["オーダー(火/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "ウィンドパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKと風属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["風属性攻撃力↓", "大"]
        ]
    },
    {
        "name": "[風防]マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKと風属性防御力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["風属性防御力↑", "大"]
        ]
    },
    {
        "name": "Sp.ウィンドパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKと風属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["風属性攻撃力↓", "大"]
        ]
    },
    {
        "name": "[風防]Sp.マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKと風属性防御力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["風属性防御力↑", "大"]
        ]
    },
    {
        "name": "水拡：Sp.ファイアパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKと火属性攻撃力を大ダウンさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は敵2体のSp.ATKと火属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["火属性攻撃力↓", "大"],
            ["オーダー(水/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "ウォーターパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKと水属性攻撃力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["水属性攻撃力↑", "大"]
        ]
    },
    {
        "name": "水拡：Sp.ガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。オーダースキル「水属性効果増加」を発動中は敵2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["オーダー(水/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "Sp.ファイアパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKと火属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["火属性攻撃力↓", "大"]
        ]
    },
    {
        "name": "ファイアパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のATKと火属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["ATK↓", "大"],
            ["火属性攻撃力↓", "大"]
        ]
    },
    {
        "name": "風：パワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKをアップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "ウィンドガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFと風属性防御力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["風属性防御力↓", "大"]
        ]
    },
    {
        "name": "風：Sp.パワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKと風属性攻撃力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["風属性攻撃力↑", "大"]
        ]
    },
    {
        "name": "風：ウォーターガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復し、DEFと水属性防御力を小アップする。さらに味方がオーダースキル「風属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["DEF↑", "小"],
            ["水属性防御力↑", "小"],
            ["オーダー(風/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターパワーフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.ATKと水属性攻撃力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.ATK↓", "大"],
            ["水属性攻撃力↓", "大"]
        ]
    },
    {
        "name": "水拡：ガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFをダウンさせる。オーダースキル「水属性効果増加」を発動中は敵2体に通常大ダメージを与え、敵のDEFをダウンさせる。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["オーダー(水/対象範囲UP)", "2体"]
        ]
    },
    {
        "name": "火：ガードブレイクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、敵のDEFをダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["DEF↓", "中"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "火：Sp.ガードバーストB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ファイアガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFと火属性防御力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["火属性防御力↓", "大"]
        ]
    },
    {
        "name": "火：Sp.ウィンドガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復し、Sp.DEFと風属性防御力を小アップする。さらに味方がオーダースキル「火属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["風属性防御力↑", "小"],
            ["オーダー(火/効果アップ)", "中"]
        ]
    },
    {
        "name": "ファイアガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のDEFと火属性防御力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["DEF↓", "大"],
            ["火属性防御力↓", "大"]
        ]
    },
    {
        "name": "ファイアパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKと火属性攻撃力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["火属性攻撃力↑", "大"]
        ]
    },
    {
        "name": "Sp.ファイアパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKと火属性攻撃力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["火属性攻撃力↑", "大"]
        ]
    },
    {
        "name": "水：Sp.パワースマッシュB Ⅲ",
        "effect_detail": "敵1～2体に特殊大ダメージを与え、自身のSp.ATKをアップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.ATK↑", "中"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウォーターガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFと水属性防御力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["水属性防御力↓", "大"]
        ]
    },
    {
        "name": "水：パワーストライクB Ⅲ",
        "effect_detail": "敵1～2体に通常大ダメージを与え、自身のATKをアップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 2,
        "tag": [
            ["通常ダメージ", "大"],
            ["ATK↑", "中"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "ファイアガードアシストB Ⅲ",
        "effect_detail": "味方1～2体のDEFと火属性防御力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["DEF↑", "大"],
            ["火属性防御力↑", "大"],
        ]
    },
    {
        "name": "水：Sp.ファイアガードヒールC Ⅲ",
        "effect_detail": "味方1～3体のHPを回復し、Sp.DEFと火属性防御力を小アップする。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 7,
        "tag": [
            ["味方回復", "中"],
            ["Sp.DEF↑", "小"],
            ["火属性防御力↑", "小"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "水：Sp.ガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFを大ダウンさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "Sp.ウィンドガードフォールB Ⅲ",
        "effect_detail": "敵1～2体のSp.DEFと風属性防御力を大ダウンさせる。",
        "yakuwari": 6,
        "tag": [
            ["Sp.DEF↓", "大"],
            ["風属性防御力↓", "大"]
        ]
    },
    {
        "name": "ウィンドパワーアシストB Ⅲ",
        "effect_detail": "味方1～2体のATKと風属性攻撃力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["ATK↑", "大"],
            ["風属性攻撃力↑", "大"]
        ]
    },
    {
        "name": "Sp.マイトアシストE Ⅳ",
        "effect_detail": "味方2～3体のSp.ATKとSp.DEFを大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "[水攻火防]マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体の水属性攻撃力と火属性防御力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["水属性攻撃力↑", "大"],
            ["火属性防御力↑", "大"]
        ]
    },
    {
        "name": "Sp.ガードバーストE Ⅳ",
        "effect_detail": "敵2～3体に特殊大ダメージを与え、敵のSp.DEFをダウンさせる。",
        "yakuwari": 4,
        "tag": [
            ["特殊ダメージ", "大"],
            ["Sp.DEF↓", "中"],
        ]
    },
    {
        "name": "水：Sp.ウォーターパワースマッシュA Ⅳ+",
        "effect_detail": "敵1体に特殊特大ダメージを与え、自身のSp.ATKと水属性攻撃力をアップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 3,
        "tag": [
            ["特殊ダメージ", "特大"],
            ["Sp.ATK↑", "中"],
            ["水属性攻撃力↑", "中"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "水：Sp.パワーアシストD Ⅲ",
        "effect_detail": "味方2体のSp.ATKを大アップさせる。さらに味方がオーダースキル「水属性効果増加」を発動中は効果がアップする。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["オーダー(水/効果アップ)", "中"]
        ]
    },
    {
        "name": "[火防]Sp.マイトアシストB Ⅲ",
        "effect_detail": "味方1～2体のSp.ATKと火属性防御力を大アップさせる。",
        "yakuwari": 5,
        "tag": [
            ["Sp.ATK↑", "大"],
            ["火属性防御力↑", "大"]
        ]
    }
    /*
    ,
    {
        "name": "",
        "effect_detail": "",
        "yakuwari": ,
        "tag": [
            ["", ""],
            ["", ""]
        ]
    }
    */
]