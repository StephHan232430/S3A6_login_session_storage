const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const login = require('./login')
const session = require('express-session')  // 載入express-session
const app = express()
const port = 3000

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// 設置session參數
app.use(session({
  secret: 'shhhh',  // 設定計算hash用字串
  resave: true,  // 即便session沒做任何更改也強制每次都保存
  saveUninitialized: false,  // 不儲存剛被建立而沒被修改過的session，設false可降低伺服器儲存負擔並符合法規
  // cookie十秒後過期
  cookie: {
    maxAge: 10000
  }
}))

// 路由設定
// 若session內沒有user屬性，即未登入過，不傳變數直接渲染index.hbs; 若有user屬性，則將屬性存為matchedItem後傳至index.hbs進行渲染
app.get('/', (req, res) => {
  let logInUser = req.session.user
  if (logInUser) {
    res.render('index', { matchedItem: logInUser })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  const info = req.body
  let matchedItem = login(info.email, info.password)
  let error = null
  if (matchedItem === 'Username/Password 錯誤') {
    error = matchedItem
    matchedItem = false
    res.render('index', { info, error })
  } else {
    req.session.user = matchedItem  // 確認帳密正確者，存入session的user屬性
    res.render('index', { matchedItem })
  }
})

app.listen(port, () => {
  console.log(`port ${port} is on!`)
})