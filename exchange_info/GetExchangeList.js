$(".category").click(function () {//タイトル要素をクリックしたら
	let findElm = $(this).next(".content");//直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass('close');// closeクラスを付与
	$(this).toggleClass('close');// 自身にもcloseクラスを付与
});

for (let i = 0; i < exchangeDataJson.length; i++) {
    content = `
    <div class="flex_medal-item">
        <table>
            <tr><td><a href="./content/?index=${exchangeDataJson[i]['index']}"><img src="../images/item/${exchangeDataJson[i]['index']}.png"></a></td>
                <td><a href="./content/?index=${exchangeDataJson[i]['index']}">${exchangeDataJson[i]['name']}</a></td></tr>
        </table>
    </div>
    `;

    switch (exchangeDataJson[i]['type']) {
        case "ボーナスメダル":
            document.getElementById('bonus-medal').insertAdjacentHTML('beforeend', content);
            break;
        case "メモリア引換券":
            document.getElementById('memoria-ticket').insertAdjacentHTML('beforeend', content);
            break;
        case "衣装引換券":
            document.getElementById('costume-ticket').insertAdjacentHTML('beforeend', content);
            break;
        case "イベントガチャスペシャル交換券":
            document.getElementById('event-gacha-sp-ticket').insertAdjacentHTML('beforeend', content);
            break;
        default:
            document.getElementById('exchange-list').insertAdjacentHTML('beforeend', content);
    }
}

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('error',() => {
        image.setAttribute('src', '../images/no-image.png');
    });
});