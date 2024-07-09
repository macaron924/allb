$(".select-btn").click(function () { // 絞り込み選択表示ボタンクリック時
    let elements = Array.from(document.getElementsByClassName(`select-btn`));
    elements.forEach(element => {
        element.classList.remove("active");
    });
    this.classList.add("active");
});

function yakuwariButtonPushAction(yakuwari) {

    if (yakuwari == 0) {
        let all = Array.from(document.getElementsByClassName("row"));
        all.forEach(element => {
            element.classList.remove("disable");
        });
    } else {
        let all = Array.from(document.getElementsByClassName("row"));
        all.forEach(element => {
            element.classList.add("disable");
        });
    
        let elements = Array.from(document.getElementsByClassName(`yakuwari_${yakuwari}`));
        elements.forEach(element => {
            element.classList.remove("disable");
        });
    }
}

// テーブル作成
function makeTable() {

    // table要素を生成
    let table = document.createElement("table");

    // ヘッダーを作成
    let tr = document.createElement("tr");
    // th要素を生成
    let thYakuwari = document.createElement("th");
    let thName = document.createElement("th");
    let thRange = document.createElement("th");
    let thContent = document.createElement("th");
    let thDetail = document.createElement("th");
    // th要素内にテキストを追加
    thName.textContent = "スキル名";
    thYakuwari.textContent = "役割";
    thRange.textContent = "効果範囲";
    thContent.textContent = "詳細（text）";
    thDetail.textContent = "詳細（icon）";
    // th要素をtr要素の子要素に追加
    tr.appendChild(thYakuwari);
    tr.appendChild(thName);
    tr.appendChild(thRange);
    tr.appendChild(thContent);
    tr.appendChild(thDetail);
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // 検索結果件数を保存する変数
    let resultCount = 0;

    // テーブル本体を作成
    for (let i in skillJson) {
        for (let j = 0; j < skillJson[i].length; j++) {

            // 検索結果件数カウント
            resultCount++;

            // tr要素を生成
            let tr = document.createElement("tr");
            tr.classList.add("row", `yakuwari_${parseInt(i)+1}`)
            // td要素を生成
            let tdYakuwari = document.createElement("td");
            let tdName = document.createElement("td");
            let tdRange = document.createElement("td");
            let tdContent = document.createElement("td");
            let tdDetail = document.createElement("td");
            // サムネ画像要素の追加
            let yakuwari_icon = document.createElement("img");
            yakuwari_icon.src = `../../images/icon/yakuwari_${parseInt(i)+1}.webp`;
            yakuwari_icon.className = "yakuwari_img";
            yakuwari_icon.loading = "lazy";
            // 役割アイコン
            tdYakuwari.appendChild(yakuwari_icon);
            // 範囲
            switch (true) {
                case skillJson[i][j]["name"].includes("A"):
                    tdRange.textContent = "1体";
                    break;
                case skillJson[i][j]["name"].includes("B"):
                    tdRange.textContent = "1～2体";
                    break;
                case skillJson[i][j]["name"].includes("C"):
                    tdRange.textContent = "1～3体";
                    break;
                case skillJson[i][j]["name"].includes("D"):
                    tdRange.textContent = "2体";
                    break;
                case skillJson[i][j]["name"].includes("E"):
                    tdRange.textContent = "2～3体";
                    break;
            }
            // スキル
            tdName.innerHTML = "<nobr>" + skillJson[i][j]["name"] + "</nobr><br>" + skillJson[i][j]["effect_detail"];
            tdName.classList.add("skill_name");
            let tag = skillJson[i][j]["tag"];
            let tag2 = skillJson[i][j]["tag2"];
            let str = "";
            let battle_icons = document.createElement("div");
            battle_icons.classList.add("battle_icons");
            for (let k = 0; k < tag.length; k++) {
                if (k != 0) str += "<br>";
                str += tag[k]["fx"];
                str += "・";
                str += tag[k]["val"];
                let iconName = "";
                switch (true) {
                    case tag[k]["fx"].includes("通常ダメージ") && i == 0:
                        iconName = "yakuwari_1";
                        break;
                    case tag[k]["fx"].includes("通常ダメージ") && i == 1:
                        iconName = "yakuwari_2";
                        break;
                    case tag[k]["fx"].includes("特殊ダメージ") && i == 2:
                        iconName = "yakuwari_3";
                        break;
                    case tag[k]["fx"].includes("特殊ダメージ") && i == 3:
                        iconName = "yakuwari_4";
                        break;
                    case tag[k]["fx"].includes("自身回復") || tag[k]["fx"].includes("味方回復"):
                        iconName = "yakuwari_7";
                        break;
                    case tag[k]["fx"].startsWith("ATK"):
                        iconName = "battle_atk";
                        break;
                    case tag[k]["fx"].startsWith("DEF"):
                        iconName = "battle_def";
                        break;
                    case tag[k]["fx"].startsWith("Sp.ATK"):
                        iconName = "battle_spatk";
                        break;
                    case tag[k]["fx"].startsWith("Sp.DEF"):
                        iconName = "battle_spdef";
                        break;
                    case tag[k]["fx"].startsWith("火攻"):
                        iconName = "battle_firepower";
                        break;
                    case tag[k]["fx"].startsWith("水攻"):
                        iconName = "battle_waterpower";
                        break;
                    case tag[k]["fx"].startsWith("風攻"):
                        iconName = "battle_windpower";
                        break;
                    case tag[k]["fx"].startsWith("光攻"):
                        iconName = "battle_lightpower";
                        break;
                    case tag[k]["fx"].startsWith("闇攻"):
                        iconName = "battle_darkpower";
                        break;
                    case tag[k]["fx"].startsWith("火防"):
                        iconName = "battle_fireguard";
                        break;
                    case tag[k]["fx"].startsWith("水防"):
                        iconName = "battle_waterguard";
                        break;
                    case tag[k]["fx"].startsWith("風防"):
                        iconName = "battle_windguard";
                        break;
                    case tag[k]["fx"].startsWith("光防"):
                        iconName = "battle_lightguard";
                        break;
                    case tag[k]["fx"].startsWith("闇防"):
                        iconName = "battle_darkguard";
                        break;
                }
                if (iconName !== "") {
                    let battle_icon_img = document.createElement("img");
                    battle_icon_img.src = `../../images/icon/${iconName}.webp`;
                    battle_icon_img.className = "battle_icon";
                    battle_icon_img.loading = "lazy";
                    let battle_icon_txt = document.createElement("p");
                    battle_icon_txt.style.fontWeight = "bold";
                    battle_icon_txt.style.writingMode = "vertical-rl";
                    switch (true) {
                        case tag[k]["fx"].includes("↑"):
                            battle_icon_txt.textContent = `▲${tag[k]["val"]}`;
                            battle_icon_txt.style.color = "red";
                            break;
                        case tag[k]["fx"].includes("↓"):
                            battle_icon_txt.textContent = `▼${tag[k]["val"]}`;
                            battle_icon_txt.style.color = "blue";
                            break;
                        default:
                            battle_icon_txt.textContent = tag[k]["val"];
                    }
                    let battle_icon = document.createElement("div");
                    battle_icon.appendChild(battle_icon_img);
                    battle_icon.appendChild(battle_icon_txt);
                    battle_icons.appendChild(battle_icon);
                }
            }
            tdDetail.appendChild(battle_icons);
            let battle_additional = document.createElement("div");
            battle_additional.classList.add("battle_additional");
            battle_additional.textContent = "";
            for (let i = 0; i < tag2.length; i++) {
                str += "<br>";
                str += tag2[i];
                battle_additional.innerHTML += `<br>${tag2[i]}`;
            }
            tdContent.innerHTML = str;
            tdDetail.appendChild(battle_additional);
            // td要素をtr要素の子要素に追加
            tr.appendChild(tdYakuwari);
            tr.appendChild(tdName);
            tr.appendChild(tdRange);
            tr.appendChild(tdContent);
            tr.appendChild(tdDetail);
            // tr要素をtable要素の子要素に追加
            table.appendChild(tr);
        }
    }
    // 生成したtable要素を追加する
    document.getElementById("maintable").replaceChildren(table);

    // 検索結果件数表示
    //document.getElementById("resultCount").replaceChildren(resultCount);
}

// データ取得
const skillJson = loadData("../../data/memoria_skill.json");
const hojoJson = loadData("../../data/memoria_hojo.json");
makeTable();
