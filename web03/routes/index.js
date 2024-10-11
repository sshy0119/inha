var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
});

module.exports = router;

//모든 파일이 처음에 index.js를 찾아서, index.js 는 있어야 함.