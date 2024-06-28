$(document).on("click", ".belong", function () {//タイトル要素をクリックしたら
    let findElm = $(this).next(".flex_btn-box"); // 直後のアコーディオンを行うエリアを取得し
    $(findElm).toggleClass("close"); // closeクラスを付与
    $(this).toggleClass("close"); // 自身にもcloseクラスを付与
});

function getChara(id) {
    let charaName = charaJson[id]["charaName"];
    return [charaName, charaJson[id]["charaJump"]];
}

let charaList = document.createElement("div");
for (let i in charaBelongJson) {

    if (charaBelongJson[i]["playable"] == false) continue;

    let caption = document.createElement("h3");
    caption.className = "belong";
    caption.innerHTML = `<span>▶</span> ${charaBelongJson[i]["belong"]}`;
    charaList.appendChild(caption);
    let buttonBox = document.createElement("div");
    buttonBox.className = "flex_btn-box";
    for (let j in charaBelongJson[i]["chara"]) {

        let [name, jump] = getChara(charaBelongJson[i]["chara"][j]);
        if (jump == "") continue;

        let buttonBoxItem = `<div class="flex_btn-item"><a href=#${jump} class="chara" value="${jump}"><img src="./../../images/chara/chara_${charaBelongJson[i]["chara"][j]}.webp"><p>${name}</p></a></div>`;
        buttonBox.insertAdjacentHTML("beforeend", buttonBoxItem);
    }
    charaList.appendChild(buttonBox);
}
document.getElementById("chara_list").appendChild(charaList);
