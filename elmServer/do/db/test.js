const userdb = require("./userdb")

userdb.getuser({ "phone" : "15291790811",
    "pwd" : "wk123456*"},data=>{
      console.log(data)
})