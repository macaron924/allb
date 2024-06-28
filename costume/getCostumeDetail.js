function getCostumeDetailBox(id, depth) {
    let path = "";
    for (let i = 0; i < depth; i++) {
        path += "../";
    }
    
    // flexitemを生成
    let flexitem = document.createElement("div");
    flexitem.className = "flex_costumeDetail-item";

    // 画像
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = path + "images/costume/costume_" + id + ".webp";
    img.loading = "lazy";
    imgDiv.appendChild(img);

    // リンク
    let p = document.createElement("p");
    let link = document.createElement("a");
    link.href = `${path}costume/detail/?costumeID=${id}`;
    link.innerText = "詳細＞＞";
    p.appendChild(link);
    imgDiv.appendChild(p);

    // 詳細
    let detailDiv = document.createElement("div");

    let div1 = document.createElement("div");
    div1.innerHTML = costumeJson[id]["name"];
    detailDiv.appendChild(div1);
    
    let div2 = document.createElement("div");
    div2.innerHTML = yakuwariToString(costumeJson[id]["percent"]);
    detailDiv.appendChild(div2);
    
    let div3 = document.createElement("div");
    div3.innerHTML = parameterToString(costumeJson[id]["parameter"]);
    detailDiv.appendChild(div3);

    let div4 = document.createElement("div");
    div4.innerHTML = exToString(costumeJson[id]["ex"]);
    detailDiv.appendChild(div4);

    flexitem.appendChild(imgDiv);
    flexitem.appendChild(detailDiv);

    return flexitem;
}

function getCostumeDetailList(costumeArray, depth) {
    // boxを生成
    let box = document.createElement("div");
    box.className = "box";

    // 本体を作成
    for (let i in costumeArray) {

        // itemをboxの子要素に追加
        let item = getCostumeDetailBox(costumeArray[i], depth);
        box.appendChild(item);
    }

    return box;
}
