var express = require("express");
const Router = require('./router/index')
var app = express();

// 设置跨域
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})


//设置路由
app.use("/api", Router)


app.listen(8880)
console.log("启动8888端口");
