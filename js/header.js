function getPathPrefix(depth) {
    var string = "./";
    for (var i = 0; i < depth; i++) {
        string += "../";
    }
    return string;
}

function writeHeader(depth) {
    const path_prefix = getPathPrefix(depth);
    var subtitle = "";
    if (depth == 0) subtitle = "<h3>―マカロンのラスバレまとめサイト―</h3>";
    
    document.body.insertAdjacentHTML("beforeend", `
    <header>
    <h1><a href="${path_prefix}">はっぴーゆにこーん☆</a></h1>${subtitle}
    <div class="openbtn"><span></span><span></span><span></span></div>
    <nav id="g-nav">
        <div id="g-nav-list"><!--ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除-->
            <ul>
                <li><a href="${path_prefix}"><h1>Top</h1></a></li>
                <br><hr><br>
                <li><a href="${path_prefix}memoria_list/"><h1>memoria</h1></a></li>
                <li><a href="${path_prefix}costume_list/"><h1>costume</h1></a></li>
                <li><a href="${path_prefix}charm_list/"><h1>charm</h1></a></li>
                <li><a href="${path_prefix}order_list/"><h1>order</h1></a></li>
                <li><a href="${path_prefix}gacha_info/"><h1>gacha</h1></a></li>
                <li><a href="${path_prefix}exchange_info/"><h1>exchange</h1></a></li>
                <li><a href="${path_prefix}other_info/"><h1>other</h1></a></li>
            </ul>
        </div>
    </nav>
    <a href="#" class="page_top_btn">▲</a>
    </header>
    `);
}