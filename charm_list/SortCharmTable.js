//jsonソート
function sort(mode, sortOrder) {

    let reverse = 1;
    if (sortOrder == "asc") reverse = -1;

    let refArray = [];
    for (let i in charmJsonCopy) {
        refArray.push(charmJsonCopy[i]);
    }
    
    if (mode == "") {

        function compare(a, b) {
            let r = 0;
            if( a["index"] < b["index"] ){ r = 1; }
            else if( a["index"] > b["index"] ){ r = -1; }
        
            return r * reverse;
        }

        refArray.sort( compare );

    } else if (mode == "実装日") {

        function compare(a, b) {
            let r = 0;
        
            let date_aray_a = a["実装日"].split("/");
            let year_a = parseInt(date_aray_a[0]);
            let month_a = parseInt(date_aray_a[1]);
            let day_a = parseInt(date_aray_a[2]);
        
            let date_aray_b = b["実装日"].split("/");
            let year_b = parseInt(date_aray_b[0]);
            let month_b = parseInt(date_aray_b[1]);
            let day_b = parseInt(date_aray_b[2]);
        
            if( year_a < year_b ){ r = 1; }
            else if( year_a > year_b ){ r = -1; }
            else {
        
                if( month_a < month_b ){ r = 1; }
                else if( month_a > month_b ){ r = -1; }
                else {
        
                    if( day_a < day_b ){ r = 1; }
                    else if( day_a > day_b ){ r = -1; }
        
                }
        
            }

            return r * reverse;
        }

        refArray.sort( compare );

    } else if (mode == "メモリアスキル効果UP") {

        function compare(a, b) {
            let r = 0;
            if( a["特性"][modeSelection]["メモリアスキル効果UP"] < b["特性"][modeSelection]["メモリアスキル効果UP"] ){ r = 1; }
            else if( a["特性"][modeSelection]["メモリアスキル効果UP"] > b["特性"][modeSelection]["メモリアスキル効果UP"] ){ r = -1; }
        
            return r * reverse;
        }

        refArray.sort( compare );

    } else {

        function compare(a, b) {
            let r = 0;
            if( a[mode] < b[mode] ){ r = 1; }
            else if( a[mode] > b[mode] ){ r = -1; }
        
            return r * reverse;
        }

        refArray.sort( compare );
    }

    for (let i = 0; i < refArray.length; i++) {
        let tr = refArray[i]["trRef"];
        document.getElementById("maintable").getElementsByTagName("table")[0].tBodies[0].appendChild(tr);
    }
}

// 無し→desc desc→asc asc→desc
$(".sortEnabled").on("click", function() {
    let thisClass = $(this).attr("class");
    let thisVal = this.textContent;
    let sortEnabledElements = document.getElementsByClassName("sortEnabled");
    if (thisClass.includes("desc")) {
        for (let i = 0; i < sortEnabledElements.length; i++) {
            sortEnabledElements[i].classList.remove("asc");
            sortEnabledElements[i].classList.remove("desc");
        }
        $(this).addClass("asc");
        sort(thisVal, "asc");
        lastSort = thisVal;
        lastOrder = "asc";
    } else {
        for (let i = 0; i < sortEnabledElements.length; i++) {
            sortEnabledElements[i].classList.remove("asc");
            sortEnabledElements[i].classList.remove("desc");
        }
        $(this).addClass("desc");
        sort(thisVal, "desc");
        lastSort = thisVal;
        lastOrder = "desc";
    }
});

let lastSort = "";
let lastOrder = "asc";