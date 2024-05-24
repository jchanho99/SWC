var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/select_explanation', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'select.html'));
});

router.get('/select_question', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'views', 'select.html'));
});

module.exports = router;
