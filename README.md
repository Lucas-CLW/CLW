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
- 如果你還沒有這些檔案，可照以下方式準備：
  1. 在電腦上建立一個資料夾，名稱可以叫做 `my-interactive-resume`。
  2. 在這個資料夾裡再建立一個子資料夾 `JS Lesson 1`，把所有網站檔案都放在這裡。
  3. 進入 `JS Lesson 1` 後，新增三個部分：
     - `index.html`：主要的網頁檔，直接複製這個專案提供的內容貼進去即可。
     - `css` 資料夾：裡面放 `style.css`，負責顏色、字型、排版等外觀設定。
     - `js` 資料夾：裡面放 `index.js`，掌管按鈕、動畫等互動效果。
  4. 只要保持這個結構，瀏覽器或本機伺服器就能正確載入每個檔案，網站也會正常運作。

## 不用指令，直接在 GitHub 網站上傳檔案

1. **登入 GitHub**：打開 [github.com](https://github.com) 並登入你的帳號。
2. **建立新儲存庫**：右上角按「＋」→ **New repository**，輸入儲存庫名稱（例如 `my-interactive-resume`），其他選項先保持預設，按 **Create repository**。
3. **開啟上傳畫面**：進到剛建立好的儲存庫頁面，點綠色的 **<> Code** 按鈕旁邊的 **Add file** → **Upload files**。
4. **拖拉檔案上傳**：
   - 在電腦檔案總管把整個 `JS Lesson 1` 資料夾打開，選取裡面的所有東西（`index.html`、`css/`、`js/` 以及其他需要的檔案）。
   - 直接拖拉到瀏覽器的「Drag files here」區塊，或是按 **choose your files** 手動挑選。GitHub 會幫你保留 `css`、`js` 資料夾結構。
5. **確認檔案清單**：檢查畫面上出現的檔案名稱與資料夾是否完整無誤。
6. **寫上提交訊息**：往下滑到 **Commit changes**，在「Commit message」欄位輸入一句話，例如「upload interactive resume」。
7. **完成上傳**：按下下面的 **Commit changes** 按鈕。GitHub 會把剛剛拖進來的所有檔案一次上傳並建立版本紀錄。
8. **檢查結果**：上傳完成後，回到儲存庫首頁就能看到 `JS Lesson 1/` 資料夾與裡面的檔案。如果要調整內容，重複步驟 3～7 再上傳一次更新過的檔案即可。

> 小提醒：如果拖拉資料夾時沒有成功，可先在電腦上把 `JS Lesson 1` 壓縮成 ZIP，再在 **Upload files** 頁面右上角按 **choose your files** 選擇那個 ZIP 檔上傳。GitHub 會自動解壓並還原資料夾層級。
