var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/select_explanation', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'explanation.html'));
});

router.get('/select_question', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'question.html'));
});

router.get('/chat_page', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'chat.html'));
});

module.exports = router;
