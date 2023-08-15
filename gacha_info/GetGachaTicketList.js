function defaultSort() {
    document.getElementById("default-sort-btn").className = "active";
    document.getElementById("date-sort-btn").className = "";
    for (var i = 0; i < gachaTicketJsonCopy.length; i++) {
        document.getElementById('gacha-ticket-list').appendChild(gachaTicketJsonCopy[i]['item']);
    }
}

function dateSort() {
    document.getElementById("default-sort-btn").className = "";
    document.getElementById("date-sort-btn").className = "active";
    for (var i = 0; i < dateSortedIndexArray.length; i++) {
        document.getElementById('gacha-ticket-list').appendChild(gachaTicketJsonCopy[dateSortedIndexArray[i]]['item']);
    }
}

function compare(a, b) {
    var dateAndTimeArray_a = gachaTicketJsonCopy[a]['lineup']['else'][0]['date'].split(' ');
    var date_aray_a = dateAndTimeArray_a[0].split('/');
    var year_a = parseInt(date_aray_a[0]);
    var month_a = parseInt(date_aray_a[1]);
    var day_a = parseInt(date_aray_a[2]);

    var dateAndTimeArray_b = gachaTicketJsonCopy[b]['lineup']['else'][0]['date'].split(' ');
    var date_aray_b = dateAndTimeArray_b[0].split('/');
    var year_b = parseInt(date_aray_b[0]);
    var month_b = parseInt(date_aray_b[1]);
    var day_b = parseInt(date_aray_b[2]);

    if( year_a < year_b ) return 1;
    if( year_a > year_b ) return -1;
    if( month_a < month_b ) return 1;
    if( month_a > month_b ) return -1;
    if( day_a < day_b ) return 1;
    if( day_a > day_b ) return -1;

    return 1;
}

var gachaTicketJsonCopy = JSON.parse(JSON.stringify(gachaTicketJson));
for (var i = 0; i < gachaTicketJsonCopy.length; i++) {
    gachaTicketJsonCopy[i]['item'] = ""; // flexitem参照先を追加
}

var dateSortedIndexArray = [];
for (var i = 0; i < gachaTicketJsonCopy.length; i++) {
    dateSortedIndexArray.push(i);
    var item = document.createElement('div');
    item.className = "flex_ticket-item"
    content = `
    <table>
        <tr><td rowspan="2"><a href="./ticket/?index=${gachaTicketJsonCopy[i]['index']}"><img src="../images/item/gacha-ticket_${gachaTicketJsonCopy[i]['index']}.png"></a></td>
            <td><a href="./ticket/?index=${gachaTicketJsonCopy[i]['index']}">${gachaTicketJsonCopy[i]['name']}</a></td></tr>
        <tr><td>※${gachaTicketJsonCopy[i]['lineup']['else'][0]['date']} ${gachaTicketJsonCopy[i]['lineup']['else'][0]['caption']}</td></tr>
    </table>
    `;
    item.innerHTML = content;
    //document.getElementById('gacha-ticket-list').appendChild(item);
    gachaTicketJsonCopy[i]['item'] = item;
}

dateSortedIndexArray.sort( compare );

defaultSort();

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('error',() => {
        image.setAttribute('src', '../images/no-image.png');
    });
});