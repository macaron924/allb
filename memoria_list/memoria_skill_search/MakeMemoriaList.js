$("#menu-open-btn").click(function () { // 絞り込み選択表示ボタンクリック時
    $(this).toggleClass("active");
    $("#filter-menu_content").toggleClass("active");
});

$("#exchange-menu-open-btn").click(function () { // 絞り込み選択表示ボタンクリック時
    $(this).toggleClass("active");
    $("#exchange-menu_content").toggleClass("active");
});

$("#exchange-category").change(function () {
    let val = this.value;
    getExchangeList(val);
});

function getExchangeList(val) {
    document.getElementById("exchange-select").innerHTML = "";
    let str = "";
    switch(val) {
        case "メダル":
            for (let i in exchangeDataJson) {
                if (exchangeDataJson[i]["type"] == "ボーナスメダル") {
                    str = `<option value="${exchangeDataJson[i]["index"]}">${exchangeDataJson[i]["name"]}</option>`;
                    document.getElementById("exchange-select").insertAdjacentHTML("beforeend", str);
                }
            }
        case "引換券":
            for (let i in exchangeDataJson) {
                if (exchangeDataJson[i]["type"].includes("メモリア")) {
                    str = `<option value="${exchangeDataJson[i]["index"]}">${exchangeDataJson[i]["name"]}</option>`;
                    document.getElementById("exchange-select").insertAdjacentHTML("beforeend", str);
                }
            }
    }
}

$(".select-btn").click(function () { // 選択ボタンクリック時
    $(this).toggleClass("active");
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
});

$("#dual-display").click(function () { // モード切替ボタンクリック時
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
});

$("select").change(function () { // プルダウンクリック時
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
    if (this.value == "") {
        $(this).next(".flex_btn-box").addClass("disable");
    } else {
        $(this).next(".flex_btn-box").removeClass("disable");
    }
});

$("#filter-btn").click(function () { // フィルターボタンクリック時
    $("#filter-menu").toggleClass("active");
});

$(".cost").click(function () {
    let val = this.value;
    for (let i = 0; i < costArray.length; i++) {
        if (val == costArray[i]) {
            costArray.splice(i, 1);
            return i;
        }
    }
    costArray.push(this.value);
    return -1;
});

$(".damage").click(function () {
    let val = this.value;
    for (let i = 0; i < damageSelection.length; i++) {
        if (val == damageSelection[i]) {
            damageSelection.splice(i, 1);
            return i;
        }
    }
    damageSelection.push(this.value);
    return -1;
});

$(".heal").click(function () {
    let val = this.value;
    for (let i = 0; i < healSelection.length; i++) {
        if (val == healSelection[i]) {
            healSelection.splice(i, 1);
            return i;
        }
    }
    healSelection.push(this.value);
    return -1;
});

$(".effect1").click(function () {
    let val = this.value;
    for (let i = 0; i < effect1Val.length; i++) {
        if (val == effect1Val[i]) {
            effect1Val.splice(i, 1);
            return i;
        }
    }
    effect1Val.push(this.value);
    return -1;
});

$(".effect2").click(function () {
    let val = this.value;
    for (let i = 0; i < effect2Val.length; i++) {
        if (val == effect2Val[i]) {
            effect2Val.splice(i, 1);
            return i;
        }
    }
    effect2Val.push(this.value);
    return -1;
});

$(".hojo1").click(function () {
    let val = this.value;
    for (let i = 0; i < hojo1Val.length; i++) {
        if (val == hojo1Val[i]) {
            hojo1Val.splice(i, 1);
            return i;
        }
    }
    hojo1Val.push(this.value);
    return -1;
});

$(".hojo2").click(function () {
    let val = this.value;
    for (let i = 0; i < hojo2Val.length; i++) {
        if (val == hojo2Val[i]) {
            hojo2Val.splice(i, 1);
            return i;
        }
    }
    hojo2Val.push(this.value);
    return -1;
});

// 実行ボタンを押した時
function runButtonPushAction() {

    document.getElementById("filter-btn").value = "実行中...";

    // 現在の条件選択を読み取り
    effectSelectionArray = [];
    hojoSelectionArray = [];
    modeSelection = parseInt(document.getElementById("mode").value);
    dualDisplay = document.getElementById("dual-display").checked;
    effectSelectionArray.push([document.getElementById("effect1-type").value, effect1Val]);
    effectSelectionArray.push([document.getElementById("effect2-type").value, effect2Val]);
    effectUpSelection = document.getElementById("effect-up").value;
    hojoSelectionArray.push([document.getElementById("hojo1-type").value, hojo1Val]);
    hojoSelectionArray.push([document.getElementById("hojo2-type").value, hojo2Val]);
    
    exchangeSelection = document.getElementById("exchange-select").value;

    skillFilter(); // スキル側のフィルター実行
    hojoFilter(); // 補助スキル側のフィルター実行
    filter();
    document.getElementById("filter-btn").className = "";
    document.getElementById("filter-btn").value = "反映済み";
}

function getExchangeLineup() {
    let lineup = [];
    for (let i in exchangeDataJson) {
        if (exchangeDataJson[i]["index"] == exchangeSelection) {
            for  (let j in exchangeDataJson[i]["lineup"]["memoria"]) {
                lineup = lineup.concat(exchangeDataJson[i]["lineup"]["memoria"][j]["content"]);
            }
        }
    }
    return lineup;
}

function zokuseiButtonPushAction(zokusei) {
    for (let i = 0; i < zokuseiArray.length; i++) {
        if (zokusei == zokuseiArray[i]) {
            zokuseiArray.splice(i, 1);
            return i;
        }
    }
    zokuseiArray.push(zokusei);
    return -1;
}

function legendaryButtonPushAction(legendary) {
    for (let i = 0; i < legendaryArray.length; i++) {
        if (legendary == legendaryArray[i]) {
            legendaryArray.splice(i, 1);
            return i;
        }
    }
    legendaryArray.push(legendary);
    return -1;
}

function yakuwariButtonPushAction(yakuwari) {
    for (let i = 0; i < yakuwariArray.length; i++) {
        if (yakuwari == yakuwariArray[i]) {
            yakuwariArray.splice(i, 1);
            return i;
        }
    }
    yakuwariArray.push(yakuwari);
    return -1;
}

function rangeButtonPushAction(range) {
    for (let i = 0; i < rangeArray.length; i++) {
        if (range == rangeArray[i]) {
            rangeArray.splice(i, 1);
            return i;
        }
    }
    rangeArray.push(range);
    return -1;
}

function costFilter(cost) {
    if (costArray.length == 0) return true;
    for (let i = 0; i < costArray.length; i++) {
        if (cost == costArray[i]) return true;
    }
    return false;
}

function zokuseiFilter(zokusei) {
    if (zokuseiArray.length == 0) return true;
    for (let i = 0; i < zokuseiArray.length; i++) {
        if (zokusei == zokuseiArray[i]) return true;
    }
    return false;
}

function legendaryFilter(legendary) {
    if (legendaryArray.length == 0) return true;
    for (let i = 0; i < legendaryArray.length; i++) {
        if (legendary == legendaryArray[i]) return true;
    }
    return false;
}

function yakuwariFilter(yakuwari) {
    if (yakuwariArray.length == 0) return true;
    for (let i = 0; i < yakuwariArray.length; i++) {
        if (yakuwari == yakuwariArray[i]) return true;
    }
    return false;
}

function rangeFilter(skillName) {
    if (rangeArray.length == 0) return true;
    for (let i = 0; i < rangeArray.length; i++) {
        if (skillName.includes(rangeArray[i])) return true;
    }
    return false;
}

function damageFilter(skillInfo) {
    if (damageSelection.length == 0) return true;
    let tag = skillInfo["tag"];
    for (let i = 0; i < tag.length; i++) {
        if (tag[i]["fx"].includes("ダメージ")) {
            if (damageSelection.includes(tag[i]["val"])) return true;
            else return false;
        }
    }
    return false;
}

function healFilter(skillInfo) {
    if (healSelection.length == 0) return true;
    let tag = skillInfo["tag"];
    for (let i = 0; i < tag.length; i++) {
        if (tag[i]["fx"].includes("回復")) {
            if (healSelection.includes(tag[i]["val"])) return true;
            else return false;
        }
    }
    return false;
}

function effectFilter(skillInfo) {
    let tag = skillInfo["tag"];
    let trueCount = 0;
    for (let j = 0; j < effectSelectionArray.length; j++) {
        if (effectSelectionArray[j][0] == "") {
            trueCount++;
            continue;
        }
        for (let i = 0; i < tag.length; i++) {
            switch (true) {
                case effectSelectionArray[j][0] != tag[i]["fx"]:
                    continue;
                case effectSelectionArray[j][1].length == 0:
                    trueCount++;
                    break;
                case effectSelectionArray[j][1].includes(tag[i]["val"]):
                    trueCount++;
                    break;
                default:
                    continue;
            }
        }
    }
    if (trueCount == effectSelectionArray.length) return true;
    return false;
}

function effectUpFilter(skillInfo) {
    if (effectUpSelection == "") return true;
    let tag = skillInfo["tag2"];
    for (let i = 0; i < tag.length; i++) {
        if (tag[i] == effectUpSelection) {
            return true;
        }
    }
    return false;
}

// 各補助スキルの効果が条件に合うかどうかを判定する関数
function hojoEffectFilter(hojoInfo) {
    let tag = hojoInfo["tag"];
    for (let j = 0; j < hojoSelectionArray.length; j++) {
        let flag = false;
        if (hojoSelectionArray[j][0] == "") {
            flag = true;
        }
        for (let i = 0; i < tag.length; i++) {
            switch (true) {
                case hojoSelectionArray[j][0] != tag[i][1]:
                    continue;
                case hojoSelectionArray[j][1].length == 0:
                    flag = true;
                    break;
                case hojoSelectionArray[j][1].includes(tag[i][2]):
                    flag = true;
                    break;
                default:
                    continue;
            }
        }
        if (flag == false) return false;
    }
    return true;
}

// 各補助スキルが条件に合うかどうかを判定し保持
function hojoFilter() {
    for (let i = 0; i < hojoJsonCopy.length; i++) {
        let hojoJson = hojoJsonCopy[i];
        for (let j = 0; j < hojoJson.length; j++) {
            let hojoInfo = getHojoSkillInfoFromName(hojoJson[j]["name"]);
            if (hojoEffectFilter(hojoInfo) == false) { // 補助スキル効果のフィルター
                hojoJson[j]["filter"] = false;
            } else {
                hojoJson[j]["filter"] = true;
            }
        }
    }
}

// 役割をもとに探索する対象を限定するための関数
function getSkillsFromYakuwari(yakuwari) {
    let skillJson = skillJsonCopy[yakuwari - 1];
    return skillJson;
}

// 選択してる役割のスキルのみ、各スキルが条件に合うかどうかを判定し保持
function skillFilter() {
    let yakuwariArray_copy;
    if (yakuwariArray.length == 0) {
        yakuwariArray_copy = [1, 2, 3, 4, 5, 6, 7];
    } else {
        yakuwariArray_copy = yakuwariArray;
    }
    for (let i = 0; i < yakuwariArray_copy.length; i++) {
        let skillJson = getSkillsFromYakuwari(yakuwariArray_copy[i]); // 役割をもとに探索する対象を限定する
        if (skillJson == "") break;

        for (let j = 0; j < skillJson.length; j++) {
            let skillInfo = getSkillInfoFromName(yakuwariArray_copy[i], skillJson[j]["name"]);
            if (damageFilter(skillInfo) == false) { // ダメージ種別と大きさのフィルター
                skillJson[j]["filter"] = false;
                continue;
            }
            if (healFilter(skillInfo) == false) { // 回復種別(自身か味方か)と大きさのフィルター
                skillJson[j]["filter"] = false;
                continue;
            }
            if (effectFilter(skillInfo) == false) { // バフ・デバフ種別と大きさのフィルター
                skillJson[j]["filter"] = false;
                continue;
            }
            if (effectUpFilter(skillInfo) == false) { // 効果量・範囲アップの種別フィルター
                skillJson[j]["filter"] = false;
                continue;
            }
            skillJson[j]["filter"] = true; // 全部クリアの場合だけ真
        }
    }
}

// 個別の条件をまとめて真偽を返す関数
function allFilter(zokusei, cost, legendary, yakuwari, skillArray, skillRefArray) {

    // まずレジェンダリーでフィルター
    if (legendaryFilter(legendary) == false) return false;

    // 属性でフィルター
    if (zokuseiFilter(zokusei) == false) return false;

    // コストでフィルター
    if (costFilter(cost) == false) return false;

    // 役割でフィルター
    if (yakuwariFilter(yakuwari) == false) return false;

    // スキル効果範囲
    let skillName = skillArray[modeSelection];
    if (rangeFilter(skillName) == false) return false;

    // スキル効果内容
    let skillInfo = skillRefArray[modeSelection]; // スキル情報取得
    if (skillInfo["filter"] == false) return false; // スキル側のfilter参照して偽なら偽
    
    // レギマモードのとき補助スキルも
    if (modeSelection == 1) {
        let hojoInfo = skillRefArray[2]; // 補助スキル情報取得
        if (hojoInfo["filter"] == false) return false; // 補助スキル側のfilter参照して偽なら偽
    }

    // 全ての条件をクリアした場合のみ真
    return true;
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
    let hojoPrefix = skillName[0]
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
function createSkillDetailFromName(tag, tag2) {
    if (tag == "") return "";
    return skillTagToString(tag, tag2);
}

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

// 実行ボタン押すとフィルターする
function filter() {

    if (dualDisplay == true) {
        document.getElementById("maintable").className = "all";
    } else {
        switch (modeSelection) {
            case 0:
                document.getElementById("maintable").className = "vshuge";
                break;
            case 1:
                document.getElementById("maintable").className = "lm";
                break;
            default:
                document.getElementById("maintable").className = "all";
        }
    }

    // 検索結果件数を保存する変数
    let resultCount = 0;
    let lineup = getExchangeLineup();

    for (let i = 0; i < memoriaJsonCopy.length; i++) {

        let existInLineup = true;
        if (exchangeSelection != "") {
            if (lineup.includes(memoriaJsonCopy[i]["id"])) {
                existInLineup = true;
            } else {
                existInLineup = false;
            }
        }

        for (let j = 0; j < memoriaJsonCopy[i]["skill"].length; j++) {
    
            // 対応tr参照
            const tr = memoriaJsonCopy[i]["tr"][j];

            if (existInLineup == false) {
                // 非表示
                tr.style.display = "none";
                continue;
            }

            let zokusei = memoriaJsonCopy[i]["zokusei"];
            let cost = memoriaJsonCopy[i]["cost"];
            let legendary = memoriaJsonCopy[i]["legendary"];
            let yakuwari = memoriaJsonCopy[i]["skill"][j]["yakuwari"];
            let skill = memoriaJsonCopy[i]["skill"][j]["name"];
            let skillRef = memoriaJsonCopy[i]["skillRef"][j];
    
            if (allFilter(zokusei, cost, legendary, yakuwari, skill, skillRef) == true) {
                // 検索結果件数カウント
                resultCount++;
                // 表示
                tr.style.display = "";
            } else {
                // 非表示
                tr.style.display = "none";
            }
        }
    }

    // 検索結果件数表示
    document.getElementById("resultCount").replaceChildren(resultCount);
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
    thId.textContent = "サムネイル";
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
    for (let i = (memoriaJsonCopy.length - 1); i >= 0; i--) {
        for (let j = 0; j < memoriaJsonCopy[i]["skill"].length; j++) {

            let skill = memoriaJsonCopy[i]["skill"][j];
            let skill_names = skill["name"];
            let skill_yakuwari = skill["yakuwari"];

            // 検索結果件数カウント
            resultCount++;

            // tr要素を生成
            let tr = document.createElement("tr");
            // td要素を生成
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdYakuwari = document.createElement("td");
            let tdVshugeName = document.createElement("td");
            let tdVshugeDetail = document.createElement("td");
            let tdLmName = document.createElement("td");
            let tdLmDetail = document.createElement("td");
            let tdHojoName = document.createElement("td");
            let tdHojoDetail = document.createElement("td");
            // 各スキル列のclass
            tdVshugeName.className = "vshugeRow";
            tdVshugeDetail.className = "vshugeRow";
            tdLmName.className = "lmRow";
            tdLmDetail.className = "lmRow";
            tdHojoName.className = "hojoRow";
            tdHojoDetail.className = "hojoRow";
            // サムネ画像要素の追加
            let img = document.createElement("img");
            img.src = "../../images/memoria/memoria_" + memoriaJsonCopy[i]["id"] + ".jpg";
            img.className = "memoria_img";
            img.loading = "lazy";
            let yakuwari_icon = document.createElement("img");
            yakuwari_icon.src = "../../images/icon/yakuwari_" + skill_yakuwari + ".jpg";
            yakuwari_icon.className = "yakuwari_img";
            yakuwari_icon.loading = "lazy";
            // 画像
            tdId.appendChild(img);
            // メモリア名
            tdName.textContent = memoriaJsonCopy[i]["name"];
            // 役割アイコン
            tdYakuwari.appendChild(yakuwari_icon);
            // 対ヒュージスキル
            let vshuge_name = skill_names[0];
            let vshuge = getSkillInfoFromName(skill_yakuwari, vshuge_name);
            tdVshugeName.classList.add("skill_name");
            if (vshuge == "") {
                tdVshugeName.innerHTML = "<nobr>" + vshuge_name + "</nobr><br>" + "";
                tdVshugeDetail.innerHTML = "";
            } else {
                tdVshugeName.innerHTML = "<nobr>" + vshuge_name + "</nobr><br>" + vshuge["effect_detail"];
                tdVshugeDetail.innerHTML = createSkillDetailFromName(vshuge["tag"], vshuge["tag2"]);
            }
            // レギマスキル
            let lm_name = skill_names[1];
            let lm = getSkillInfoFromName(skill_yakuwari, lm_name);
            tdLmName.classList.add("skill_name");
            if (lm == "") {
                tdLmName.innerHTML = "<nobr>" + lm_name + "</nobr><br>" + "";
                tdLmDetail.innerHTML = "";
            } else {
                tdLmName.innerHTML = "<nobr>" + lm_name + "</nobr><br>" + lm["effect_detail"];
                tdLmDetail.innerHTML = createSkillDetailFromName(lm["tag"], lm["tag2"]);
            }
            // 補助スキル
            let hojo_name = skill_names[2];
            let hojo = getHojoSkillInfoFromName(hojo_name);
            tdHojoName.classList.add("skill_name");
            if (hojo == "") {
                tdHojoName.innerHTML = "<nobr>" + hojo_name + "</nobr><br>" + "";
                tdHojoDetail.innerHTML = "";
            } else {
                tdHojoName.innerHTML = "<nobr>" + hojo_name + "</nobr><br>" + hojo["effect_detail"];
                tdHojoDetail.innerHTML = createHojoSkillDetailFromName(hojo["tag"]);
            }
            // td要素をtr要素の子要素に追加
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdYakuwari);
            tr.appendChild(tdVshugeName);
            tr.appendChild(tdVshugeDetail);
            tr.appendChild(tdLmName);
            tr.appendChild(tdLmDetail);
            tr.appendChild(tdHojoName);
            tr.appendChild(tdHojoDetail);
            // tr要素をtable要素の子要素に追加
            table.appendChild(tr);
            
            memoriaJsonCopy[i]["skillRef"].push([vshuge, lm, hojo]);
            memoriaJsonCopy[i]["tr"].push(tr);
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
for (let i = 0; i < memoriaJsonCopy.length; i++) {
    memoriaJsonCopy[i]["skillRef"] = []; // スキル参照先を追加
    memoriaJsonCopy[i]["tr"] = []; // tr参照先を追加
}

let skillJsonCopy = JSON.parse(JSON.stringify(skillJson));
for (let i = 0; i < skillJsonCopy.length; i++) {
    for (let j = 0; j < skillJsonCopy[i].length; j++) skillJsonCopy[i][j]["filter"] = true;
}

let hojoJsonCopy = JSON.parse(JSON.stringify(hojoJson));
for (let i = 0; i < hojoJsonCopy.length; i++) {
    for (let j = 0; j < hojoJsonCopy[i].length; j++) hojoJsonCopy[i][j]["filter"] = true;
}

let modeSelection = 1;
let dualDisplay = true;
let costArray = []
let zokuseiArray = [];
let legendaryArray = [];
let yakuwariArray = [];
let rangeArray = [];
let damageSelection = [];
let healSelection = [];
let effectSelectionArray = [];
let effectUpSelection = "";
let hojoSelectionArray = [];
let effect1Val = [];
let effect2Val = [];
let hojo1Val = [];
let hojo2Val = [];
let exchangeSelection = "";
makeTable();
