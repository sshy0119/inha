var express = require('express');
var router = express.Router();

/* GET 카카오 page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

//지역검색
router.get('/local',function(req, res){ // route인 kakao는 생략 가능해서 /local
  res.render('index', { title: '지역검색', pageName:'kakao/local.ejs', info:info });
});


//블로그검색
router.get('/blog',function(req, res){ // route인 kakao는 생략 가능해서 /local
  res.render('index', { title: '블로그검색', pageName:'kakao/blog.ejs' });
});

//도서정보 페이지
router.get("/book/info", function(req, res, next){
  const title=req.query.title; //req의 쿼리의 title에 들어가 있는 걸 title 변수 만들어서 넣고, 도서정보 별로 페이지 주소 바꿈.
  const thumbnail = req.query.thumbnail;
  const price = req.query.price;
  const authors = req.query.authors;
  const publisher = req.query.publisher;
  const isbn = req.query.isbn;
  const info = {title, thumbnail, price, authors, publisher, isbn};
  res.render('index', {title:'도서정보', pageName:'kakao/info.ejs', info});
});

module.exports = router;
// index를 출력하고, pageNam에 kakao/book.ejs를 줌.

