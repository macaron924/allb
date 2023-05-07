for (var i = 0; i < gachaTicketJson.length; i++) {
    content = `
    <div class="flex_ticket-item">
        <table>
            <tr><td rowspan="2"><a href="./ticket/?index=${gachaTicketJson[i]['index']}"><img src="../images/item/gacha-ticket_${gachaTicketJson[i]['index']}.png"></a></td>
                <td><a href="./ticket/?index=${gachaTicketJson[i]['index']}">${gachaTicketJson[i]['name']}</a></td></tr>
            <tr><td>※${gachaTicketJson[i]['lineup']['else'][0]['caption']}</td></tr>
        </table>
    </div>
    `;
    document.getElementById('gacha-ticket-list').insertAdjacentHTML('beforeend', content);
}

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('error',() => {
        image.setAttribute('src', '../images/no-image.png');
    });
});