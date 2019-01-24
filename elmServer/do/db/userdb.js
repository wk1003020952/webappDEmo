/*此文件是针对集合goodslists的所有数据库操作*/
const mongoose = require('mongoose');
const dbconfig = require('./dbconfig');

//定义模板(定义一个JavaScript对象)
let goodsListsSchema = new mongoose.Schema({
    'phone':String,
    'pwd':String
});

//定义模型（把模板对象和集合连接起来）
let goodslistsModel = mongoose.model("users",goodsListsSchema);
module.exports = {
    //增
    adduser:function(condation,func){
        mongoose.connect(dbconfig.connstr,{ useNewUrlParser: true }).then(
            function () {
                goodslistsModel.insert(condation, (err, data) => {
                    console.log(data);
                });
            }
        );
    },



    //删



    //改



    //查
    getuser:function(condation,func) {
        //2、处理(连接数据库)
        mongoose.connect(dbconfig.connstr, { useNewUrlParser: true }).then(
            function(){
                //1）、查询
                console.log("数据库连接成功")
                goodslistsModel.find(condation,(err,data)=>{
                    mongoose.disconnect();
                    if(err){
                        func(err);
                    }else{
                        console.log(data)
                        func(data);
                    }
                });
            }
        );
    }
}
