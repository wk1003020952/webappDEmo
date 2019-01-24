const url=require("url");
const userdb=require("./db/userdb");

module.exports=function (req,res) {
    console.log("进入register.js");
    let urlObj=url.parse(req.url,true);
    userdb.getuser({"userid":urlObj.query.phone},function (data) {
       console.log(data);
        res.statusCode=200;
        res.setHeader("Content-type","text/html;charset=utf-8");
        if (data.length>=1){
            res.write("1");
        } else {
            res.write("0")
        }
        res.end();
    });
}
