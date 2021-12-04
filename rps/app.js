const express = require('express');
var cookieParser = require('cookie-parser')
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cookieParser())
// ejs
app.set('view engine', 'ejs');
//Static Folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  var auth_user_info;
  var auth_user_token;

  if (req.cookies && req.cookies.auth_user_info) auth_user_info = JSON.parse(req.cookies.auth_user_info)
  if (req.cookies && req.cookies.auth_token) auth_user_token = JSON.parse(req.cookies.auth_token)

  if (req.cookies && req.signedCookies.auth_user_info) auth_user_info = JSON.parse(req.signedCookies.auth_user_info)
  if (req.cookies && req.signedCookies.auth_token) auth_user_token = JSON.parse(req.signedCookies.auth_token)

  let username, isLogined = false;

  if (!auth_user_info || !auth_user_token) return res.render("index", { username: username, isLogined: false, auth_user_token, auth_user_info });

  // console.log(auth_user_info, auth_user_token)
  username = auth_user_info.name, isLogined = true
  res.render("index", { username: username, isLogined: isLogined, auth_user_info: JSON.stringify(auth_user_info, null, 2), auth_user_token: JSON.stringify(auth_user_token, null, 2) });
});

app.listen(PORT, () => {
  console.log(`Server rumming on port ${PORT}`);
});
