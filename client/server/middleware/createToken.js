var jwt = require('jsonwebtoken')
const secret = 'shaxu'
module.exports = function (name){
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+1);//有效期设置为七天
    const token = jwt.sign({
        name:name,
        exp:parseInt(expiry.getTime()/1000)//除以1000以后表示的是秒数
    },secret)
    return token;
  }
