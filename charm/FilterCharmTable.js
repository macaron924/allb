let categorySelection = [];
let getwaySelection = [];
let paramSelection = [];
let zokuseiSelection = [];
let checkOnly = false;

function checkFilter(index) {
    if (checkOnly == false) return true;
    check = document.getElementById(`check_${index}`).checked;
    return check;
}

function categoryFilter(category) {
    if (categorySelection.length == 0) return true;
    if (categorySelection.includes(category)) return true;
    return false;
}

function getwayFilter(getway) {
    if (getwaySelection.length == 0) return true;
    switch (true) {
        case getway["costume"].length > 0:
            if (getwaySelection.includes("特定衣装")) return true;
            break;
        case getway["str"].includes("ガチャ"):
            if (getwaySelection.includes("ガチャ")) return true;
            break;
        default:
            if (getwaySelection.includes("なし")) return true;
    }
    return false;
}

function zokuseiFilter(tokuseiList) {
    if (zokuseiSelection.length == 0) return true;
    for (let j in zokuseiSelection) {
        if (tokuseiList[zokuseiSelection[j]] == "") return false;
    }
    return true;
}

function paramFilter(tokuseiList) {
    if (paramSelection.length == 0) return true;
    switch (true) {
        case paramSelection.includes("ATK▲") && !tokuseiList["ATK"].includes("▲"):
            return false;
        case paramSelection.includes("ATK▼") && !tokuseiList["ATK"].includes("▼"):
            return false;
        case paramSelection.includes("Sp.ATK▲") && !tokuseiList["Sp.ATK"].includes("▲"):
            return false;
        case paramSelection.includes("Sp.ATK▼") && !tokuseiList["Sp.ATK"].includes("▼"):
            return false;
        case paramSelection.includes("DEF▲") && !tokuseiList["DEF"].includes("▲"):
            return false;
        case paramSelection.includes("DEF▼") && !tokuseiList["DEF"].includes("▼"):
            return false;
        case paramSelection.includes("Sp.DEF▲") && !tokuseiList["Sp.DEF"].includes("▲"):
            return false;
        case paramSelection.includes("Sp.DEF▼") && !tokuseiList["Sp.DEF"].includes("▼"):
            return false;
        case paramSelection.includes("回復▲") && !tokuseiList["回復量"].includes("アップ"):
            return false;
        default:
            return true;
    }
}

function filter() {
    for (let id in charmJsonCopy) {
        let judge = false;
        switch (true) {
            case checkFilter(id) == false:
                break;
            case categoryFilter(charmJsonCopy[id]["分類"]) == false:
                break;
            case getwayFilter(charmJsonCopy[id]["解放条件"]) == false:
                break;
            case zokuseiFilter(charmJsonCopy[id]["特性"][modeSelection]) == false:
                break;
            case paramFilter(charmJsonCopy[id]["特性"][modeSelection]) == false:
                break;
            default:
                judge = true;
        }

        if (judge == true) {
            charmJsonCopy[id]["trRef"].style.display = "";
        } else {
            charmJsonCopy[id]["trRef"].style.display = "none";
        }
    }
}

$(".select-btn.category").on("click", function () {
    let selection = categorySelection;
    let val = $(this).val();
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        $(this).removeClass("active");
        for (let i = 0; i < selection.length; i++) {
            if (selection[i] == val) {
                selection.splice(i, 1);
                break;
            }
        }
    } else {
        $(this).addClass("active");
        selection.push(val);
    }
    filter();
});

$(".select-btn.getway").on("click", function () {
    let selection = getwaySelection;
    let val = $(this).val();
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        $(this).removeClass("active");
        for (let i = 0; i < selection.length; i++) {
            if (selection[i] == val) {
                selection.splice(i, 1);
                break;
            }
        }
    } else {
        $(this).addClass("active");
        selection.push(val);
    }
    filter();
});

$(".select-btn.param").on("click", function () {
    let selection = paramSelection;
    let val = $(this).val();
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        $(this).removeClass("active");
        for (let i = 0; i < selection.length; i++) {
            if (selection[i] == val) {
                selection.splice(i, 1);
                break;
            }
        }
    } else {
        $(this).addClass("active");
        selection.push(val);
    }
    filter();
});

$(".select-btn.zokusei").on("click", function () {
    let selection = zokuseiSelection;
    let val = $(this).val();
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        $(this).removeClass("active");
        for (let i = 0; i < selection.length; i++) {
            if (selection[i] == val) {
                selection.splice(i, 1);
                break;
            }
        }
    } else {
        $(this).addClass("active");
        selection.push(val);
    }
    filter();
});

$(".select-btn.check-only").on("click", function () {
    let thisClass = $(this).attr("class");
    if (thisClass.includes("active")) {
        $(this).removeClass("active");
        checkOnly = false;
    } else {
        $(this).addClass("active");
        checkOnly = true;
    }
    filter();
});
