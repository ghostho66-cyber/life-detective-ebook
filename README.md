# 生活小偵探｜互動學習電子書

依據低視能訓練教案設計的繁體中文互動電子書。八項活動全部可操作，支援電腦、平板與手機。

- 正式網站：https://daily-life-detective-ebook-nov26.fox702971.chatgpt.site
- GitHub Pages：https://ghostho66-cyber.github.io/life-detective-ebook/
- 儲存庫：https://github.com/ghostho66-cyber/life-detective-ebook

## 八項活動

1. 表情小偵探：二至四選一、生活情境。
2. 生活標誌站：標誌辨認、相似標誌、實地尋找清單。
3. 中文字配對：圖片與詞語配對、純文字辨認。
4. 我想講：點選圖字卡排列飲水、如廁、休息與求助句子。
5. 標誌記憶盒：二至三張卡、五秒觀察／手動收起。
6. 詞語記憶盒：記憶及自行收拾詞卡。
7. 估估我係邊個：二分之一／三分之二局部標誌配對。
8. 手指畫畫屋：直、橫、斜、折筆畫及「一、十、人、口」。

另有求助圖字卡、自評、匿名紀錄匯出、字級調整、高對比及專注模式。朗讀使用裝置語音，優先粵語。每部裝置各自儲存進度，沒有雲端同步。

## 網站與版本

根目錄為可直接部署的靜態網站，無需安裝套件或建置。GitHub Pages 使用 main 分支根目錄部署。此版本與上列正式網站的 Sites v1 執行檔相同；分享按鈕及 QR code 採用原正式網址。

`source-backup-v1.zip` 保存完整專案結構、使用說明及測試。解壓後以 `node --test tests/core.test.mjs` 執行核心測試，5/5 通過。`release-manifest.json` 記錄版本及執行檔雜湊。

更新網站時修改根目錄 HTML/JS/CSS 並提交，GitHub Pages 會自動重新發布。原正式網站由 Sites 獨立部署，兩者後續更新不會自動同步。

公開內容不含原教案姓名、校名、座位或原始 PDF。實地活動、實物練習和成人協助須由老師或照顧者陪同。
