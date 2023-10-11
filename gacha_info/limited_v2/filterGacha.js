let gachaTypeSelection = [];

function removeType(type) {
    for (let i = 0; i < gachaTypeSelection.length; i++) {
        if (gachaTypeSelection[i] == type) {
            gachaTypeSelection.splice(i, 1);
            break;
        }
    }
}

function filter() {

    // 検索結果件数を保存する変数
    let resultCount = 0;

    for (let i = 0; i < gachaBoxList.length; i++) {
        const thisType = gachaBoxList[i]['type'];
        const ref = gachaBoxList[i]['ref'];

        // 表示
        if (gachaTypeSelection.length == 0) {
            ref.style.display = '';
            resultCount++;
            continue;
        }
        
        for (let j = 0; j < gachaTypeSelection.length; j++) {
            if (gachaTypeSelection[j] == thisType) {
                // 検索結果件数カウント
                resultCount++;
                // 表示
                ref.style.display = ''
                break;
            }
            // 非表示
            ref.style.display = 'none'
        }
    }
    
    // 検索結果件数表示
    document.getElementById('resultCount').replaceChildren(resultCount);
}

$('input').on('click', function() {//タイトル要素をクリックしたら
	let type = $(this).val();//直後のアコーディオンを行うエリアを取得し
    let thisClass = $(this).attr('class');
    if (thisClass == 'select-btn active') {
        $(this).removeClass('active')
        //alert('remove');
        removeType(type);
    } else {
        $(this).addClass('active')
        //alert('add');
        gachaTypeSelection.push(type)
    }
    //console.log(gachaTypeSelection);
    filter();
});