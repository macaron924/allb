// 役割をもとに探索する対象を限定するための関数
function getSkillsFromYakuwari(yakuwari) {
    let skillJson = skillJsonCopy[yakuwari - 1];
    return skillJson;
}

// 役割とスキル名をもとに情報を取得
function getSkillInfoFromName(yakuwari, skillName) {
    let skillJson = getSkillsFromYakuwari(yakuwari); // 役割をもとに探索する対象を限定する
    if (skillJson == "") return "";
    for (let i = 0; i < skillJson.length; i++) { // 名前が一致するスキルを探す
        if (skillName == skillJson[i]["name"]) return skillJson[i]; // 名前が一致したらそれを返す
    }
    return "";
}

// 頭文字と補助スキル名をもとに情報を取得
function getHojoSkillInfoFromName(skillName) {
    let hojoJson;
    let hojoPrefix = skillName[0];
    switch (hojoPrefix) { // 頭文字をもとに探索する対象を限定する
        case "攻":
            hojoJson = hojoJsonCopy[0];
            break;
        case "援":
            hojoJson = hojoJsonCopy[1];
            break;
        case "回":
            hojoJson = hojoJsonCopy[2];
            break;
        case "コ":
            hojoJson = hojoJsonCopy[3];
            break;
        default:
            hojoJson = "";
    }
    for (let i = 0; i < hojoJson.length; i++) { // 名前が一致するスキルを探す
        if (skillName == hojoJson[i]["name"]) return hojoJson[i]; // 名前が一致したらそれを返す
    }
    return "";
}

// タグからアイコン(スキル)
function skillTagToIcon(tag, tag2, yakuwari) {
    let tdDetail = document.createElement("td");
    let battle_icons = document.createElement("div");
    battle_icons.classList.add("battle_icons");
    for (let k = 0; k < tag.length; k++) {
        let iconName = "";
        switch (true) {
            case tag[k]["fx"].includes("通常ダメージ") && yakuwari == 1:
                iconName = "yakuwari_1";
                break;
            case tag[k]["fx"].includes("通常ダメージ") && yakuwari == 2:
                iconName = "yakuwari_2";
                break;
            case tag[k]["fx"].includes("特殊ダメージ") && yakuwari == 3:
                iconName = "yakuwari_3";
                break;
            case tag[k]["fx"].includes("特殊ダメージ") && yakuwari == 4:
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
            case tag[k]["fx"].startsWith("最大HP"):
                iconName = "battle_lifeassist";
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
                    battle_icon_txt.textContent = `▲ ${tag[k]["val"]}`;
                    battle_icon_txt.style.color = "red";
                    break;
                case tag[k]["fx"].includes("↓"):
                    battle_icon_txt.textContent = `▼ ${tag[k]["val"]}`;
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
        battle_additional.innerHTML += `<br>${tag2[i]}`;
    }
    tdDetail.appendChild(battle_additional);

    return tdDetail;
}

// タグから文字列に(スキル)
function skillTagToString(tag, tag2) {
    let str = "";
    for (let i = 0; i < tag.length; i++) {
        if (i != 0) str += "<br>";
        str += tag[i]["fx"];
        str += "・";
        str += tag[i]["val"];
    }
    for (let i = 0; i < tag2.length; i++) {
        str += "<br>";
        str += tag2[i];
    }
    return str;
}

// スキル詳細を生成
function createSkillDetailFromName(tag, tag2, yakuwari) {
    if (tag == "") return "";
    //return skillTagToString(tag, tag2);
    return skillTagToIcon(tag, tag2, yakuwari);
}
/*
function createSkillDetailFromName(tag, tag2) {
    if (tag == "") return "";
    return skillTagToString(tag, tag2);
}*/

// タグから文字列に(補助)
function hojoTagToString(tag) {
    let str = "";
    for (let i = 0; i < tag.length; i++) {
        if (i != 0) str += "<br>";
        for (let j = 0; j < tag[i].length; j++) {
            if (tag[i][j] == "") continue;
            if (j != 0) str += "・";
            str += tag[i][j];
        }
    }
    return str;
}

// 補助スキル詳細を生成
function createHojoSkillDetailFromName(tag) {
    if (tag == "") return "";
    return hojoTagToString(tag);
}

// テーブル作成
function makeTable() {

    // table要素を生成
    let table = document.createElement("table");

    // ヘッダーを作成
    let tr = document.createElement("tr");
    // th要素を生成
    let thId = document.createElement("th");
    let thName = document.createElement("th");
    let thYakuwari = document.createElement("th");
    let thVshuge = document.createElement("th");
    let thLm = document.createElement("th");
    let thHojo = document.createElement("th");
    // 各スキル列のclass
    thVshuge.className = "vshugeRow";
    thVshuge.colSpan = 2;
    thLm.className = "lmRow";
    thLm.colSpan = 2;
    thHojo.className = "hojoRow";
    thHojo.colSpan = 2;
    // th要素内にテキストを追加
    thId.textContent = "画像";
    thName.textContent = "メモリア名";
    thYakuwari.textContent = "役割";
    thVshuge.textContent = "対ヒュージスキル";
    thLm.textContent = "レギオンマッチスキル";
    thHojo.textContent = "レギオンマッチ補助スキル";
    // th要素をtr要素の子要素に追加
    tr.appendChild(thId);
    tr.appendChild(thName);
    tr.appendChild(thYakuwari);
    tr.appendChild(thVshuge);
    tr.appendChild(thLm);
    tr.appendChild(thHojo);
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    // 検索結果件数を保存する変数
    let resultCount = 0;

    // テーブル本体を作成
    let ids = Object.keys(memoriaJsonCopy);
    for (let i = (ids.length - 1); i >= 0; i--) {
        let id = ids[i];
        for (let j = 0; j < memoriaJsonCopy[id]["skill"].length; j++) {

            let skill = memoriaJsonCopy[id]["skill"][j];
            let skill_names = skill["name"];
            let skill_yakuwari = skill["yakuwari"];

            // 検索結果件数カウント
            resultCount++;

            // tr要素を生成
            let tr = document.createElement("tr");
            // td要素を生成
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdVshugeName = document.createElement("td");
            let tdVshugeDetail = document.createElement("td");
            let tdLmName = document.createElement("td");
            let tdLmDetail = document.createElement("td");
            let tdHojoName = document.createElement("td");
            let tdHojoDetail = document.createElement("td");
            // check
            let check = document.createElement("input");
            check.type = "checkbox";
            check.className = "check";
            check.id = `check_${id}-${skill_yakuwari}`;
            tdId.appendChild(check);
            // サムネ画像要素の追加
            let img = document.createElement("img");
            img.src = "../../images/memoria/memoria_" + id + ".webp";
            img.className = "memoria_img";
            img.loading = "lazy";
            let yakuwari_icon = document.createElement("img");
            yakuwari_icon.src = "../../images/icon/yakuwari_" + skill_yakuwari + ".webp";
            yakuwari_icon.className = "yakuwari_img";
            yakuwari_icon.loading = "lazy";
            // 画像
            tdId.appendChild(img);
            // 役割アイコン
            tdId.appendChild(yakuwari_icon);
            // リンク
            let p = document.createElement("p");
            let link = document.createElement("a");
            link.href = `../../memoria/detail/?memoriaID=${id}`;
            link.innerText = "詳細＞＞";
            p.appendChild(link);
            tdId.appendChild(p);
            // メモリア名
            tdName.textContent = memoriaJsonCopy[id]["name"];
            // 対ヒュージスキル
            let vshuge_name = skill_names[0];
            let vshuge = getSkillInfoFromName(skill_yakuwari, vshuge_name);
            //tdVshugeName.classList.add("skill_name");
            if (vshuge == "") {
                tdVshugeName.innerHTML = "<nobr>" + vshuge_name + "</nobr><br>" + "";
                tdVshugeDetail.innerHTML = "";
            } else {
                tdVshugeName.innerHTML = "<nobr>" + vshuge_name + "</nobr><br>" + vshuge["effect_detail"];
                //tdVshugeDetail.innerHTML = createSkillDetailFromName(vshuge["tag"], vshuge["tag2"]);
                tdVshugeDetail = createSkillDetailFromName(vshuge["tag"], vshuge["tag2"], skill_yakuwari);
            }
            // レギマスキル
            let lm_name = skill_names[1];
            let lm = getSkillInfoFromName(skill_yakuwari, lm_name);
            //tdLmName.classList.add("skill_name");
            if (lm == "") {
                tdLmName.innerHTML = "<nobr>" + lm_name + "</nobr><br>" + "";
                tdLmDetail.innerHTML = "";
            } else {
                tdLmName.innerHTML = "<nobr>" + lm_name + "</nobr><br>" + lm["effect_detail"];
                //tdLmDetail.innerHTML = createSkillDetailFromName(lm["tag"], lm["tag2"]);
                tdLmDetail = createSkillDetailFromName(lm["tag"], lm["tag2"], skill_yakuwari);
            }
            // 補助スキル
            let hojo_name = skill_names[2];
            let hojo = getHojoSkillInfoFromName(hojo_name);
            //tdHojoName.classList.add("skill_name");
            if (hojo == "") {
                tdHojoName.innerHTML = "<nobr>" + hojo_name + "</nobr><br>" + "";
                tdHojoDetail.innerHTML = "";
            } else {
                tdHojoName.innerHTML = "<nobr>" + hojo_name + "</nobr><br>" + hojo["effect_detail"];
                tdHojoDetail.innerHTML = createHojoSkillDetailFromName(hojo["tag"]);
            }
            // 各スキル列のclass
            tdVshugeName.className = "vshugeRow skill_name";
            tdVshugeDetail.className = "vshugeRow";
            tdLmName.className = "lmRow skill_name";
            tdLmDetail.className = "lmRow";
            tdHojoName.className = "hojoRow skill_name";
            tdHojoDetail.className = "hojoRow";
            // td要素をtr要素の子要素に追加
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdVshugeName);
            tr.appendChild(tdVshugeDetail);
            tr.appendChild(tdLmName);
            tr.appendChild(tdLmDetail);
            tr.appendChild(tdHojoName);
            tr.appendChild(tdHojoDetail);
            // tr要素をtable要素の子要素に追加
            table.appendChild(tr);

            memoriaJsonCopy[id]["skillRef"].push([vshuge, lm, hojo]);
            memoriaJsonCopy[id]["tr"].push(tr);
        }
    }
    // 生成したtable要素を追加する
    document.getElementById("maintable").replaceChildren(table);

    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);
}

// データ取得
const exchangeDataJson = loadData("../../data/exchange_data.json");
const memoriaJson = loadData("../../data/memoria_data.json");
const skillJson = loadData("../../data/memoria_skill.json");
const hojoJson = loadData("../../data/memoria_hojo.json");

// 初期化
let memoriaJsonCopy = JSON.parse(JSON.stringify(memoriaJson));
for (let id in memoriaJsonCopy) {
    memoriaJsonCopy[id]["skillRef"] = []; // スキル参照先を追加
    memoriaJsonCopy[id]["tr"] = []; // tr参照先を追加
}

let skillJsonCopy = JSON.parse(JSON.stringify(skillJson));
for (let i = 0; i < skillJsonCopy.length; i++) {
    for (let j = 0; j < skillJsonCopy[i].length; j++) skillJsonCopy[i][j]["filter"] = true;
}

let hojoJsonCopy = JSON.parse(JSON.stringify(hojoJson));
for (let i = 0; i < hojoJsonCopy.length; i++) {
    for (let j = 0; j < hojoJsonCopy[i].length; j++) hojoJsonCopy[i][j]["filter"] = true;
}

makeTable();
