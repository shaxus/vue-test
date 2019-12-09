var AdminUser = require('../mongodb/db').AdminUser;
var StudentUser = require('../mongodb/db').StudentUser;
module.exports = {
  create:function (user){
    return StudentUser.create(user).exec();
  },
  //根据用户姓名查找
  getUserByName:function (name){
    return StudentUser.findOne({name:name}).exec();
  },

  // 获取所有学术信息
  getAllStudentInfo:function (classify){
    return StudentUser.find()
      .addCreateAt()
      .sort({_id:-1})
      .exec();
  },

  // 编辑用户信息
  updateStudentInfo:function (postId,data){
    return StudentUser.update({_id:postId},{$set:data}).exec()
  },
  // 删除用户信息
  deleteStudentInfo:function(classId){
    return StudentUser.remove({_id:classId}).exec();
  },

  createAmin:function (user) {
    return AdminUser.create(user).exec();
  }
}
