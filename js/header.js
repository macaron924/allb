function getPathPrefix(depth) {
    let string = "./";
    for (let i = 0; i < depth; i++) {
        string += "../";
    }
    return string;
}

// ポップアップを閉じる関数（ストレージ保存なし・画面上のみ非表示）
function closeNoticeToast() {
    const toast = document.getElementById('notice-toast');
    if (toast) toast.style.display = 'none';
}

function writeHeader(depth) {
    const path_prefix = getPathPrefix(depth);
    let subtitle = "";
    if (depth == 0) subtitle = "<h3>―マカロンのラスバレまとめサイト―</h3>";

    // 現在のページが新キャラ検索ページかどうか判定
    const isIllustPage = window.location.pathname.includes('/memoria/memoria_chara_new');

    let toastHtml = "";
    if (!isIllustPage) {
        toastHtml = `
        <!-- ▼ お知らせポップアップ ▼ -->
        <div id="notice-toast" style="
            display: none;
            position: fixed;
            bottom: 24px;
            right: 24px;
            max-width: 500px;
            width: calc(100% - 48px);
            background: #ffffff;
            border: 3px solid #ff80ab;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            padding: 20px 24px;
            z-index: 9999;
            font-family: sans-serif;
            box-sizing: border-box;
        ">
            <!-- 閉じるボタン -->
            <button onclick="closeNoticeToast()" style="
                position: absolute;
                top: 8px;
                right: 12px;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #888;
                padding: 4px 8px;
                line-height: 1;
            ">×</button>

            <!-- タイトル -->
            <div style="font-weight: bold; color: #d81b60; font-size: 1.6rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>📢</span> サイト更新について
            </div>

            <!-- 本文 -->
            <p style="margin: 0 0 16px 0; font-size: 1.4rem; color: #333; line-height: 1.6;">
                当サイトはデータの更新を休止中ですが、<br>
                <strong>★5メモリアキャラ検索</strong> のみ更新を再開しています！
            </p>

            <!-- 誘導ボタン -->
            <a href="${path_prefix}memoria/memoria_chara_new/" style="
                display: block;
                background: #e91e63;
                color: #ffffff;
                text-align: center;
                text-decoration: none;
                padding: 14px 16px;
                border-radius: 8px;
                font-size: 1.4rem;
                font-weight: bold;
            ">イラスト検索はこちら →</a>
        </div>
        <style>
        @media (max-width: 600px) {
            #notice-toast {
                right: 16px !important;
                left: 16px !important;
                width: auto !important;
                max-width: none !important;
                bottom: 16px !important;
                padding: 16px !important;
            }
            #notice-toast div {
                font-size: 1.3rem !important;
            }
            #notice-toast p {
                font-size: 1.15rem !important;
            }
            #notice-toast a {
                font-size: 1.15rem !important;
                padding: 12px !important;
            }
        }
        </style>
        `;
    }

    document.body.insertAdjacentHTML("beforeend", `
    <header>
    <h1><a href="${path_prefix}">はっぴーゆにこーん☆</a></h1>${subtitle}
    <div class="openbtn"><span></span><span></span><span></span></div>
    <nav id="g-nav">
        <div id="g-nav-list">
            <ul>
                <li><a href="${path_prefix}"><h1>Top</h1></a></li>
                <br><hr><br>
                <!-- ▼ 新設のキャラ検索リンク ▼ -->
                <li><a href="${path_prefix}memoria/memoria_chara_new/"><h1 style="color: #e91e63;">★5メモリアキャラ検索（更新中）</h1></a></li>
                <br><hr><br>
                <li><a href="${path_prefix}memoria/"><h1>memoria</h1></a></li>
                <li><a href="${path_prefix}costume/"><h1>costume</h1></a></li>
                <li><a href="${path_prefix}charm/"><h1>charm</h1></a></li>
                <li><a href="${path_prefix}order/"><h1>order</h1></a></li>
                <li><a href="${path_prefix}gacha/"><h1>gacha</h1></a></li>
                <li><a href="${path_prefix}exchange/"><h1>exchange</h1></a></li>
                <li><a href="${path_prefix}legendary/"><h1>legendary</h1></a></li>
                <li><a href="${path_prefix}other/"><h1>other</h1></a></li>
                <li><a href="${path_prefix}contact/"><h1>お問い合わせ</h1></a></li>
            </ul>
        </div>
    </nav>
    <a href="#" class="page_top_btn">▲</a>
    </header>
    ${toastHtml}
    `);

    // 新キャラ検索ページ以外なら毎回0.5秒後に表示
    if (!isIllustPage) {
        setTimeout(() => {
            const toast = document.getElementById('notice-toast');
            if (toast) toast.style.display = 'block';
        }, 500);
    }
}
