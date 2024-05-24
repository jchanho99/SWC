var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const filePath = path.join(__dirname, '..', 'views', 'index.html')
    res.sendFile(filePath);
});

module.exports = router;
