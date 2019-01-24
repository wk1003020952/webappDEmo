const http=require('http');
const url=require('url');
const path=require('path');
const router=require('./router');


const serverObj=http.createServer((req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "text/html");

    if (req.url!='/favicon.ico'){
        let urlObj=url.parse(req.url);
        let urlStr=urlObj.pathname.substring(1);
        let extname=path.extname(urlStr).substring(1);
        console.log("extname="+extname);
        try {
            router[extname](req,res,urlStr);
        }catch (e) {
            router["error"](req,res);
        }
    }
});
//2、监听
serverObj.listen(706,'localhost',()=>{
    console.log('706服务器等待中……');
});