<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e92ed131-a51b-4ccb-b525-43d15d03df88

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

自動部署到 GitHub Pages 的 workflow 已準備於 `.github/workflows/deploy.yml`。

### 設定步驟
1. 進入你的 GitHub 專案設定：**Settings > Pages**
2. 找到 **Build and deployment** 區塊，將 **Source** 改為 **GitHub Actions**。
3. （如果是部署到非根目錄，請記得修改 `vite.config.ts` 中的 `base` 屬性，例如 `base: '/你的儲存庫名稱/'`）
4. 以後每次推上 `main` (或 `master`) 分支，就會自動將 `dist` 打包並發佈。

## Notes
- **依賴套件**: 本專案不需要再額外安裝套件即可使用 GitHub Actions 的官方 actions 進行部署 (像是 `actions/deploy-pages`)。
- **.gitignore**: 已經更新設定，不含機密檔案 (如 `.env`)、本機環境設定 (`*.local`、`.vscode` 等) 與建置產生之快取/編譯資料夾 (`node_modules`、`dist`、`build`、`coverage` 等)。
