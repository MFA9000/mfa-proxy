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
  console.log(req.cookies, req.signedCookies)
  var auth_user_info;
  var auth_user_token;

  if (req.cookies && req.cookies.auth_user_info) auth_user_info = req.cookies.auth_user_info
  if (req.cookies && req.cookies.auth_token) auth_user_token = req.cookies.auth_token

  if (req.cookies && req.signedCookies.auth_user_info) auth_user_info = req.signedCookies.auth_user_info
  if (req.cookies && req.signedCookies.auth_token) auth_user_token = req.signedCookies.auth_token

  let username, isLogined = false;

  if (!auth_user_info || !auth_user_token) isLogined = false

  console.log(auth_user_info, auth_user_token)
  username = auth_user_info.name, isLogined = true

  res.render("index", { username: username, isLogined: isLogined, auth_user_info: auth_user_info, auth_user_token: auth_user_token });
});

app.listen(PORT, () => {
  console.log(`Server rumming on port ${PORT}`);
});
