const express = require("express");
const Router = express.Router();
const Controller = require("./Controller")


// 组装路由
Router.get("/one",Controller.one)
Router.get("/two",Controller.two)
Router.get("/three",Controller.three)
Router.get("/four",Controller.four)
Router.get("/map",Controller.map)

module.exports = Router;