const url = require('url');
const userdb = require('./db/userdb');

module.exports=function(req,res){
    console.log("进入login.js");
    //1、接收参数
    let urlObj = url.parse(req.url,true);
    console.log(urlObj.query.username);
    console.log(urlObj.query.password);
    //2、处理
    userdb.getuser({"phone":urlObj.query.username,"pwd":urlObj.query.password},function(data){
        //3、响应
        //console.log("得到了条数："+data);
        res.statusCode=200;
        res.setHeader("Content-type","text/html;charset=utf-8");
        if(data.length>0){
            res.write('1');
        }else{
            res.write('0');
        }
        res.end();
    });


}