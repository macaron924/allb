$(document).on('click', '.title', function() {//タイトル要素をクリックしたら
	let findElm = $(this).next(".flex_gacha-box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass('active');// activeクラスを付与
	$(this).toggleClass('active');// 自身にもactiveクラスを付与
});