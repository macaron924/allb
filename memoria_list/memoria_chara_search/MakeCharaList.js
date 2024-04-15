$(document).on("click", ".belong", function() {//タイトル要素をクリックしたら
	let findElm = $(this).next(".flex_btn-box"); // 直後のアコーディオンを行うエリアを取得し
	$(findElm).toggleClass("close"); // closeクラスを付与
	$(this).toggleClass("close"); // 自身にもcloseクラスを付与
});

$(document).on("click", "button.chara", function() { // 選択ボタンがクリックされたら
    $(this).toggleClass("active"); // 自身にactiveクラスを付与(色付け)
    let value = this.value;
    charaButtonPushAction(value);
});

function getChara(charaID) {
    for (let i in charaJson) {
        if (charaID == charaJson[i]["charaID"]) {
            let charaName = charaJson[i]["charaName"];
            if (charaJson[i]["specialSkill"] != "") return [charaName, false];
            return [charaName, true];
        }
    }
    return ["", true];
}

let charaList = document.createElement("div");
for (let i in charaBelongJson) {

    let caption = document.createElement("h3");
    caption.className = "belong";
    caption.innerHTML = `<span>▶</span> ${charaBelongJson[i]["belong"]}`;
    charaList.appendChild(caption);
    let buttonBox = document.createElement("div");
    buttonBox.className = "flex_btn-box";
    for (let j in charaBelongJson[i]["chara"]) {

        let [name, playable] = getChara(charaBelongJson[i]["chara"][j]);
        if (playable == false) continue;
    
        let buttonBoxItem = `<div class="flex_btn-item"><button class="chara" value="${charaBelongJson[i]["chara"][j]}"><img src="./../../images/chara/chara_${charaBelongJson[i]["chara"][j]}.webp"><p>${name}</p></button></div>`;
        buttonBox.insertAdjacentHTML("beforeend", buttonBoxItem);
    }
    charaList.appendChild(buttonBox);
}
document.getElementById("chara_list").appendChild(charaList);
