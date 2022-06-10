var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', {title:"KCC tier 3 clg"});
});

router.post('/getLogin', function (req, res, next) {
    console.log(req.body);
    res.json({ "Name": req.body.Raja });
  });

module.exports = router;
