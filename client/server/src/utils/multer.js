var fs = require('fs');
var multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) { //指定硬盘的路径，文件保存的地方
//     cb(null, '../../public/upload')
//   },
//   filename: function (req, file, cb) {//指定文件名和拓展名
//     //originalname 文件名
//     var arr = file.originalname.split('.');
//     // cb(null, arr[0] + '.' + arr[1]);
//     cb(null, arr[0] + '-' + Date.now() + '.' + arr[1]);
//   }
// });

var createFolder = function(folder){
  try{
    fs.accessSync(folder);
  }catch(e){
    fs.mkdirSync(folder);
  }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    console.log('dddd',file.originalname.split('.')[1]);
    // const fileName = req.file.originalname.split('.')[1];
    cb(null, Date.now() + '.'+ file.originalname.split('.')[1] );
  }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

module.exports = upload;
