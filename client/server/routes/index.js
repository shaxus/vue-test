var express = require('express');
var router = express.Router();
var upload = require('../src/utils/multer');
var createToken = require('../middleware/createToken');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('5555');
});

router.get('/api/test',function (req, res, next) {
  console.log(req);
  res.send('true');
});

router.post('/api/upload',upload.single('shaxu'),function (req, res, next) {
  const file = req.file;
  console.log(req.headers);
  console.log(req.file);
  res.send({error:0,});
});

/**
 * 用户注册
 * */
router.post('/register',function (req, res, next) {
  const user = req.body;
  console.log(user);
  res.send({code:200});
});
/**
 * 用户登录
 * */
router.post('/login',function (req, res, next) {
  const user = req.body;
  console.log(user);
  res.send({code:200,token:createToken(user.name)});
});

module.exports = router;
