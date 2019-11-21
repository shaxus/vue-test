const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建数据模型。指定字段类型。及长度。
//Schema ： 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


// Export the model 导出模块（模型）
//Model ： 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对（管理数据库属性、行为的类）
//Entity ： 由Model创建的实体，他的操作也会影响数据库
module.exports = mongoose.model('Product', ProductSchema);

// default 设置默认值
// get 调用处理方法，比如格式化字符串（处理方法）
// index 设置索引规则
// required 设置验证规则，正则表达式等
// select 设置属性是否总是在查询结果中出现bool
// set 可以修改传来的属性值，和get类似
// sparse 稀疏索引bool,与索引搭配使用
// unique 设置这个属性的值只出现一次，一般对索引设置
// validate 自定义验证规则（函数），用于对属性的值进行验证，false失败，true通过验证
// required 非空验证
// min/max 范围验证（边值验证）
// enum/match 枚举验证/匹配验证
