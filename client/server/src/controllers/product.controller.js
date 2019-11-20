const Product = require('../models/product.model');


//exports.xxxx 实例化具体对象。给model.export 传送属性。
//创建集合（文档），并插入起始数据。
exports.product_create = function (req, res, next) {

    let payload  = {
        name: req.body.name,
        price: req.body.price
    }

    let product = new Product(
        payload
    );

    //插入数据，根据id(如果有，则更新，没有则新插入一条数据。插入和更新功能。)
    // （可以看到决定是插入一个文档还是更新，取决于_id参数）
    //insert 插入数据。如果id存在则会报错（ org.springframework.dao.DuplicateKeyException）
    product.save(function (err) {
        if (err) {
            return next(err);  //异常处理中间件 next()
        }
        res.send('Product Created successfully')  //发送res响应。
    });
};

exports.product_details = function (req, res) {
    //根据id查询数据。
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.product_update = function (req, res) {
    //根据id先查询再更新。
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    //根据id查询再删除。
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    //测试。
    res.send('Greetings from the Test controller!');
};