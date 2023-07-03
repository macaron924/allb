for (var i = 0; i < exchangeMedalBonusJson.length; i++) {
    content = `
    <div class="flex_ticket-item">
        <table>
            <tr><td><a href="./medal/?index=${exchangeMedalBonusJson[i]['index']}"><img src="../images/item/medal_bonus_${exchangeMedalBonusJson[i]['index']}.png"></a></td>
                <td><a href="./medal/?index=${exchangeMedalBonusJson[i]['index']}">${exchangeMedalBonusJson[i]['name']}</a></td></tr>
        </table>
    </div>
    `;
    document.getElementById('bonus-medal-list').insertAdjacentHTML('beforeend', content);
}

for (var i = 0; i < exchangeTicketMemoriaJson.length; i++) {
    content = `
    <div class="flex_ticket-item">
        <table>
            <tr><td><a href="./ticket-memoria/?index=${exchangeTicketMemoriaJson[i]['index']}"><img src="../images/item/exchange_${exchangeTicketMemoriaJson[i]['index']}.png"></a></td>
                <td><a href="./ticket-memoria/?index=${exchangeTicketMemoriaJson[i]['index']}">${exchangeTicketMemoriaJson[i]['name']}</a></td></tr>
        </table>
    </div>
    `;
    document.getElementById('memoria-ticket-list').insertAdjacentHTML('beforeend', content);
}

for (var i = 0; i < exchangeTicketCostumeJson.length; i++) {
    content = `
    <div class="flex_ticket-item">
        <table>
            <tr><td><a href="./ticket-costume/?index=${exchangeTicketCostumeJson[i]['index']}"><img src="../images/item/exchange_${exchangeTicketCostumeJson[i]['index']}.png"></a></td>
                <td><a href="./ticket-costume/?index=${exchangeTicketCostumeJson[i]['index']}">${exchangeTicketCostumeJson[i]['name']}</a></td></tr>
        </table>
    </div>
    `;
    document.getElementById('costume-ticket-list').insertAdjacentHTML('beforeend', content);
}

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('error',() => {
        image.setAttribute('src', '../images/no-image.png');
    });
});