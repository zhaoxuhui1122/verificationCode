//加载模块
const express = require("express");
const app = express() ;
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
//基础配置
//为了获取req.body里的数据
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

//service
const phone = require("./service/phone");
//定义请求借口
app.post("/phone",phone);
//启动服务
app.listen(port,function () {
	console.log("server start at",port) ;
})
