var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// 로그인 라우터 (아래 줄에 /는 user가 생략된 상태)
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName:'users/login.ejs' });
});

// 회원가입 라우터
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName:'users/join.ejs' });
});

// 장바구니 라우터
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName:'users/cart.ejs' });
});

module.exports = router;
