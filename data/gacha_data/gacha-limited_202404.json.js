const gachaLimited202404 = [
    {
        "start": "2024/4/1(月) 12:00",
        "finish": "2024/4/3(水) 23:59",
        "type": "マンデーボーナスガチャ",
        "medal": "medal_bonus_202404",
        "gacha": [
            {
                "index": "20240401_1",
                "name": "マンデーボーナスガチャ",
                "big_banner": true,
                "bonus": {
                    "notice": [
                        { "text": "11回ガチャ1回限定", "item": [] },
                        { "text": "ガチャを引くと", "item": [ { "index": "medal", "value": 200}, { "index": "skip-ticket", "value": 300 }, { "index": "goggle-3", "value": 5 } ] }
                    ],
                    "table_header": [],
                    "table_content": []
                },
                "lineup": {
                    "total_ratio": [5],
                    "notice": ["★5メモリアは半年以内追加のみ"],
                    "pu": [],
                    "else": { "caption": "ピックアップ無し", "content": [732, 733, 741, 742, 746, 747, 752, 753, 759, 760, 767, 768] }
                }
            }
        ]
    },
]

gachaLimitedList.push( { "ref": gachaLimited202404, "index": 202404, "active": true, "group": "" } );