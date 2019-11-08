# 登入功能(2)

學期3 A5:登入功能(2)

## 功能列表

- 可輸入email帳號和密碼。
- 點擊“Sign in”按鈕後，若帳號、密碼皆無誤，顯示歡迎頁面; 若其中一項與記錄不符，則於登入頁面顯示警語。
- 10秒內重整頁面可不必輸入帳密，超過10秒則需重新輸入帳密。

## 安裝流程
1. 開啟terminal，將此專案clone至本機

```
git clone https://github.com/StephHan232430/S3A6_login_session_storage.git
```

2. 進入專案資料夾

```
cd S3A6_login_session_storage
```

3. 安裝專案所需套件

```
npm install
```

4. 執行專案

```
npm run dev
```

5. 於瀏覽器網址列輸入http://localhost:3000/

## 使用工具

- 開發環境：[Visual Studio Code v1.39.2](https://code.visualstudio.com/)
- 開發框架：[Express v4.17.1](https://expressjs.com/zh-tw/)
- 模板引擎：[Express-Handlebars v3.1.0](https://github.com/ericf/express-handlebars)
- 執行環境：[Node.js v12.13.0](https://nodejs.org/en/)