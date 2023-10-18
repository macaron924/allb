$(document).on('click', '.title', function() {//タイトル要素をクリックしたら
	$(this).parent().toggleClass('active');// 自身にもactiveクラスを付与
});

function openAll() {
    for (let i = 0; i < gachaLimitedList.length; i++) {
        gachaLimitedList[i]['group'].classList.add('active');
    }
}

function closeAll() {
    for (let i = 0; i < gachaLimitedList.length; i++) {
        gachaLimitedList[i]['group'].classList.remove('active');
    }
}