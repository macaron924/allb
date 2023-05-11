function makeTable() {

    // table要素を生成
    var table = document.createElement('table');
    
    // ヘッダーを作成
    var tr = document.createElement('tr');
    for (key in jsonCopy[0]) {
        // th要素を生成
        var th = document.createElement('th');
        // th要素内にテキストを追加
        th.textContent = key;
        // th要素をtr要素の子要素に追加
        tr.appendChild(th);
    }
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);
    
    // テーブル本体を作成
    for (var i = 0; i < jsonCopy.length; i++) {
        // tr要素を生成
        var tr = document.createElement('tr');
        // th・td部分のループ
        for (key in jsonCopy[0]) {
            // td要素を生成
            var td = document.createElement('td');
            // ステータスの項目ならstatusクラス(右寄せ)
            if (key == 'ATK' || key == 'Sp.ATK' 
            || key == 'DEF' || key == 'Sp.DEF' || 
            key == 'DEF+Sp.DEF' || key == 'total') {
                td.className = 'status';
            }
            // td要素内にテキストを追加
            td.textContent = jsonCopy[i][key];
            // 特性(その他以外)の項目ならcharacteristicクラス(中央寄せ)
            if (key == 'ATK特性' || key == 'Sp.ATK特性' 
            || key == 'DEF特性' || key == 'Sp.DEF特性') {
                td.className = 'characteristic';
                // バフの場合
                if (td.textContent.includes('▲')) { td.classList.add('buff') }
                // デバフの場合
                if (td.textContent.includes('▼')) { td.classList.add('debuff') }
            }
            // td要素をtr要素の子要素に追加
            tr.appendChild(td);
        }
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);
    }
    // 生成したtable要素を追加する
    document.getElementById('maintable').replaceChildren(table);
}

//jsonソート
function sort(mode) {
    
    if (mode == 'reset') {

        jsonCopy = JSON.parse(JSON.stringify(charmJson));

    } else if (mode.includes('実装日')) {

        function compare(a, b) {
            var r = 0;

            var date_aray_a = a['実装日'].split('/');
            var year_a = parseInt(date_aray_a[0]);
            var month_a = parseInt(date_aray_a[1]);
            var day_a = parseInt(date_aray_a[2]);

            var date_aray_b = b['実装日'].split('/');
            var year_b = parseInt(date_aray_b[0]);
            var month_b = parseInt(date_aray_b[1]);
            var day_b = parseInt(date_aray_b[2]);

            var reverse = 1;
            if (mode.includes('r')) { reverse = -1 }

            if( year_a < year_b ){ r = 1; }
            else if( year_a > year_b ){ r = -1; }
            else {

                if( month_a < month_b ){ r = 1; }
                else if( month_a > month_b ){ r = -1; }
                else {

                    if( day_a < day_b ){ r = 1; }
                    else if( day_a > day_b ){ r = -1; }

                }

            }

            return r * reverse;
        }
        jsonCopy.sort( compare );

    } else {

        function compare(a, b) {
            var r = 0;
            if( a[mode] < b[mode] ){ r = 1; }
            else if( a[mode] > b[mode] ){ r = -1; }
        
            return r;
        }
        jsonCopy.sort( compare );

    }

    renewNowSort(mode);
    makeTable();
}

function renewNowSort(mode) {
    var str = "";
    if (mode == "reset") {
        sortModeArray= [];
    } else {
        var indexSearchResult = existInArray(mode);
        if (existInArray(mode) >= 0) {
            sortModeArray.splice(indexSearchResult, 1)
        }
        sortModeArray.push(mode);
        var max = sortModeArray.length;
        for (var i = max - 1; i >= 0; i--) {
            if (i == max - 1) {
                str += sortModeArray[i];
            } else {
                str += " / ";
                str += sortModeArray[i];
            }
        }
    }
    document.getElementById('now-sort').textContent = str;
}

function existInArray(mode) {
    for (var i = 0; i < sortModeArray.length; i++) {
        if (mode == sortModeArray[i]) return i;
    }
    return -1;
}

// 初期化
var jsonCopy = JSON.parse(JSON.stringify(charmJson));
makeTable();
var sortModeArray = [];