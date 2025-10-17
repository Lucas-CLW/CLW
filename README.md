# My Interactive Résumé

This repository contains the assets for an interactive résumé experience located in [`JS Lesson 1/`](JS%20Lesson%201/).

## 確認網頁可以運行

1. 在專案根目錄啟動一個簡易的本機伺服器：
   ```bash
   python3 -m http.server 8080 --directory "JS Lesson 1"
   ```
2. 開啟瀏覽器造訪 [http://localhost:8080](http://localhost:8080)，即可看到互動式履歷頁面。
3. 若要停止伺服器，回到終端機按下 `Ctrl + C`。

> 若開發環境沒有 Python，也可以選擇任何靜態伺服器工具（例如 `npx serve "JS Lesson 1"` 或使用 VS Code 的 Live Server 擴充功能）。

## 附註

- 所有樣式、互動與素材皆位於 `JS Lesson 1/` 目錄底下，包含 `index.html`、`css/style.css` 以及 `js/index.js`。
- 如需調整內容，可直接修改對應檔案並重新整理瀏覽器驗證結果。
