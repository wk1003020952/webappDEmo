<template>
    <div class="d">
        <img src="../../static/img/wode/login.png"/>
        <div class="d1">
          <input  type="text" placeholder="手机号" maxlength="11" @blur="zheng(0)" v-model="userinfo.username"/>
          <input  type="password" placeholder="密码" maxlength="12" @blur="zheng(1)" v-model="userinfo.password"/>
        </div>
          <p>
            新用户登录即自动注册，并表示已同意
            <span>《用户服务协议》</span>
          </p>
          <button class="btn2"  @click="check">登录</button>
      <a href="##">关于我们</a>
    </div>
</template>
<script>
  import {Toast} from 'vant';
  import Apis from '../api/index';
    export default {
      name: "ELogin",
      components:{
        [Toast.name]:Toast
      },
      data(){
          return{
              userinfo:{
                username:'',
                password:''
              },
              commit:false
          }
      },
      methods:{
        zheng(i){
          var uPattern=/^1[34578]\d{9}$/;
          var pPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,12}$/;
          switch (i) {
            case 0: if(!uPattern.test(this.userinfo.username)){
              Toast("手机号码格式不正确");
              this.commit=false;
            }else {
              this.commit=true;
            }break;
            case 1:  if (!pPattern.test(this.userinfo.password)){
              Toast("密码最少6位，包括至少一个字母，数字，特殊字符");
              this.commit=true;
            }else {
              this.commit=true;
            } break;
          }
        },
        check(){
         if (this.commit){
           if (this.userinfo.username=="" || this.userinfo.password==""){
             Toast("手机号码或密码不能为空");
           }else {
             //验证成功，发送请求
              Toast.loading({
                 mask: true,
                 message: '登陆中...'
              });
             Apis.reqLogin(this.userinfo).then((data)=>{
               console.log(data);
               if (data==1){
                 Toast.success('登陆成功');
                 if(!window.localStorage){
                   Toast('您的浏览器不支持localStorage')
                 }else{
                   localStorage.setItem('users',JSON.stringify(this.userinfo.username));
                 }
                 this.$router.back();
               }else if (data==0){
                 Toast.fail('用户名或密码错误');
               }
             })
           }
         }else {
           return false
         }
        }
      }
    }
</script>

<style scoped lang="stylus">
  .d{
    padding:.39rem .37rem 2.79rem .37rem;
    &>img{
      margin-left: .81rem;
    }
    &>.d1{
      position: relative;
      margin-top: .16rem;
      height: .48rem;
      font-size: 14px;
      background: #fff;
      &>input{
        width: 100%;
        height: 100%;
        left: 0;
        padding-left: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #333;
        margin-bottom: .16rem;
      }
      &>.btn1{
        position: absolute;
        padding: 0;
        border-radius: 6px;
        color: #ccc;
        background: transparent;
        text-align: center;
        font-size: 14px;
        border: 0;
        outline: none;
        top: .14rem;
        right: .1rem;
      }
    }
    &>p{
        margin-top: .81rem;
        font-size: 14px;
        line-height 1.8
      &>span{
        color: #2395ff;
      }
    }
    &>.btn2{
      display: block;
      width: 100%;
      height: 42px;
      margin-top: 30px;
      border-radius: 4px;
      background: #4cd96f;
      color: #fff;
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      line-height: 42px;
      outline: none;
      border: 0;
    }
    &>a{
      margin-top: 20px;
      text-align: center;
      color: #999;
      display: block;
      font-size: 12px;
    }
  }
</style>
