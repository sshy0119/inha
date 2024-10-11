var express = require('express');
var router = express.Router();

/* GET 카카오 page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

//지역검색
router.get('/local',function(req, res){ // route인 kakao는 생략 가능해서 /local
  res.render('index', { title: '지역검색', pageName:'kakao/local.ejs' });
});


//블로그검색
router.get('/blog',function(req, res){ // route인 kakao는 생략 가능해서 /local
  res.render('index', { title: '블로그검색', pageName:'kakao/blog.ejs' });
});

module.exports = router;
// index를 출력하고, pageNam에 kakao/book.ejs를 줌.

