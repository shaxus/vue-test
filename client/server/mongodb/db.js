const Mongolass = require('mongolass');
const mongolass = new Mongolass();
mongolass.connect('mongodb://localhost:27017/stu')// const mongolass = new Mongolass('mongodb://localhost:27017/test')

exports.AdminUser = mongolass.model('AdminUser',{
  name: { type: 'string', required: true },
  passwd: { type: 'string', required: true }
})

exports.AdminUser.index({_id:1}).exec();

exports.StudentUser = mongolass.model('StudentUser',{
  name: { type: 'string', required: true },
  age: { type: 'number', required: true  },
  sex:{type: 'string', required: true},
  email:{type:'string',required: true}
});

exports.StudentUser.index({_id:1}).exec();
