const oneData = require('../mock/one.json')
const twoData = require('../mock/two.json')
const threeData = require('../mock/three.json')
const fourData = require('../mock/four.json')
const mapData = require("../mock/china.json")
class Controller {
    async one(req,res){
        await res.send({msg:"第一个接口",chartOne: oneData});
    }

    async two(req,res){
        await res.send({msg:"我是two的路由地址",chartTwo:twoData});
    }

    async three(req,res){
        await res.send({msg:"我是three的路由地址",chartThree:threeData});
    }

    async four(req,res){
        await res.send({msg:"第四个接口",chartFour: fourData});
    }

    async map(req,res){
        res.send({msg:"我是地图的路由地址",chinaData:mapData});
    }

    
}

module.exports = new Controller();