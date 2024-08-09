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

$(".select-btn.check-only").on("click", function () {
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        checkOnly = false;
    } else {
        checkOnly = true;
    }
});

$("#memoria-name").change(function () { // 名前入力変更時
    document.getElementById("filter-btn").className = "not-changed";
    document.getElementById("filter-btn").value = "未反映";
});

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

function nameFilter(memoriaName) {
    if (memoriaName.includes(filterName)) return true;
    return false;
}

function getExchangeList(val) {
    document.getElementById("exchange-select").innerHTML = "";
    let str = "";
    switch (val) {
        case "メダル":
            for (let i in exchangeDataJson["medal_bonus"]) {
                str = `<option value="${exchangeDataJson["medal_bonus"][i]["index"]}">${exchangeDataJson["medal_bonus"][i]["name"]}</option>`;
                document.getElementById("exchange-select").insertAdjacentHTML("beforeend", str);
            }
        case "引換券":
            for (let i in exchangeDataJson["exchange_memoria"]) {
                str = `<option value="${exchangeDataJson["exchange_memoria"][i]["index"]}">${exchangeDataJson["exchange_memoria"][i]["name"]}</option>`;
                document.getElementById("exchange-select").insertAdjacentHTML("beforeend", str);
            }
            for (let i in exchangeDataJson["exchange"]) {
                str = `<option value="${exchangeDataJson["exchange"][i]["index"]}">${exchangeDataJson["exchange"][i]["name"]}</option>`;
                document.getElementById("exchange-select").insertAdjacentHTML("beforeend", str);
            }
    }
}

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
    let list = null;
    switch (true) {
        case exchangeSelection.startsWith("medal_bonus"):
            list = exchangeDataJson["medal_bonus"];
            break;
        case exchangeSelection.startsWith("exchange_memoria"):
            list = exchangeDataJson["exchange_memoria"];
            break;
        case exchangeSelection.startsWith("exchange"):
            list = exchangeDataJson["exchange"];
            break;
    }
    for (let i in list) {
        if (list[i]["index"] == exchangeSelection) {
            for (let j in list[i]["lineup"]["memoria"]) {
                lineup = lineup.concat(list[i]["lineup"]["memoria"][j]["content"]);
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

function checkFilter(id, yakuwari) {
    check = document.getElementById(`check_${id}-${yakuwari}`).checked;
    return check;
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
function allFilter(id, memoriaName, zokusei, cost, legendary, yakuwari, skillArray, skillRefArray) {

    // checkフィルター
    if (checkOnly == true) {
        if (checkFilter(id, yakuwari) == false) return false;
    }

    // 名前フィルター
    if (nameFilter(memoriaName) == false) return false;

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

// 実行ボタン押すとフィルターする
function filter() {

    filterName = document.getElementById("memoria-name").value;

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

    for (let id in memoriaJsonCopy) {

        let existInLineup = true;
        if (exchangeSelection != "") {
            if (lineup.includes(parseInt(id))) {
                existInLineup = true;
            } else {
                existInLineup = false;
            }
        }

        for (let j = 0; j < memoriaJsonCopy[id]["skill"].length; j++) {

            // 対応tr参照
            const tr = memoriaJsonCopy[id]["tr"][j];

            if (existInLineup == false) {
                // 非表示
                tr.style.display = "none";
                continue;
            }

            let memoriaName = memoriaJsonCopy[id]["name"];
            let zokusei = memoriaJsonCopy[id]["zokusei"];
            let cost = memoriaJsonCopy[id]["cost"];
            let legendary = memoriaJsonCopy[id]["legendary"];
            let yakuwari = memoriaJsonCopy[id]["skill"][j]["yakuwari"];
            let skill = memoriaJsonCopy[id]["skill"][j]["name"];
            let skillRef = memoriaJsonCopy[id]["skillRef"][j];

            if (allFilter(id, memoriaName, zokusei, cost, legendary, yakuwari, skill, skillRef) == true) {
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
let checkOnly = false;
let filterName = "";
