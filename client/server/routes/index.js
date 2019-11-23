var express = require('express');
var router = express.Router();

var multer=require('../src/utils/multer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/test',function (req, res, next) {
  console.log(req);
  res.send('true');
});

router.post('/api/test2',function (req, res, next) {
  const name = req.body.name;
  const age = req.body.age;
  console.log(name,age);
  console.log(name,age);
  res.send('false');
});

router.post('/api/upload',multer.array('file',5),function (req, res, next) {
  console.log('成功');
  res.send({error:0,res:req.files});
});

module.exports = router;
