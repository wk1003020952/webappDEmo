<template>
  <div class="all">
    <header>
      <div>
        <router-link to="/login">
          <img src="../../static/img/wode/1.png"/>
          <div>
            <p style="font-size: .16rem">{{username || '登录/注册'}}</p>
            <p v-if="!username"><span>登录后享受更多特权</span><i class="iconfont icon-arrow-right"></i></p>
          </div>
        </router-link>
      </div>
    </header>
    <main>
      <ul>
        <li>
          <a href="##">
            <span></span>
            <span>钱包</span>
          </a>
        </li>
        <li>
          <a href="##">
            <span></span>
            <span>红包</span>
          </a>
        </li>
        <li>
          <a href="##">
            <span></span>
            <span>金币</span>
          </a>
        </li>
      </ul>
      <router-link tag="div" to="/wode/address" class="d1">
        <a href="##">
          我的地址
          <span></span>
        </a>
      </router-link>
      <div class="d2">
        <router-link to="/money">
          金币商城
          <span></span>
        </router-link>
        <router-link to="/money">
          分享拿10元现金
          <span></span>
        </router-link>
      </div>
      <div class="d3">
        <a href="##">
          我的客服
          <span></span>
        </a>
        <a href="##">
          下载饿了么APP
          <span></span>
        </a>
      </div>
      <a href="##">规则中心</a>
      <van-button @click="loginout" v-if="username" size="large" type="danger" style="margin-top: .5rem">退出</van-button>
    </main>
  </div>
</template>
<script>
    import { Button,Dialog  } from 'vant';
    export default {
      name: "Ewode",
      components:{
        [Button.name]:Button,
        [Dialog.name]:Dialog
      },
      data(){
        return{
          username:""
        }
      },
      mounted(){
        if(!window.localStorage){
          alert('浏览器不支持localStorage');
        }else{
          var data1 = localStorage.getItem('users');
          console.log(data1);
          this.username = data1;
        }
      },
      methods:{
        loginout(){
          Dialog.confirm({
            message: '您确认要退出吗？'
          }).then(() => {
            localStorage.removeItem('users');
            this.username="";
          }).catch(() => {
          });
        }
      },
    }
</script>

<style scoped lang="stylus">
  div.all
    width 100%
    height 100%
    background-color #f5f5f5
    header{
      height: 1.1rem;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      &>div{
        height: 1.1rem;
        &>a{
          display: flex;
          height: 1.1rem;
          align-items: center;
          &>img{
            margin-left: .15rem;
            width:.6rem;
            height:.6rem;
          }
          &>div{
            margin-left: .18rem;
            position: relative;
            &>p:nth-child(1){
              font-size: 20px;
              font-weight: bold;
              color: #fff;
              padding-top: .14rem;
            }
            &>p:nth-child(2){
              font-size: 12px;
              color: #FFFFFF;
              background: url("../../static/img/wode/phone.png") no-repeat;
              background-size: .08rem .11rem;
              padding-left: .1rem;
              background-position-y: .13rem;
              line-height: .37rem;
            }
            &>span{
              display: inline-block;
              width:.07rem;
              height:.11rem;
              background: url("../../static/img/wode/tjiantou.png") no-repeat;
              position: absolute;
              top: .33rem;
              right: -2.11rem;
            }
          }
        }
      }
    }
    main{
      &>ul{
        background: #FFFFFF;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #CCCCCC;
        &>li{
          flex: 1;
        }
        &>li:nth-child(1){
          &>a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: .17rem 0;
            &>span:nth-child(1){
              display:block;
              width: .27rem;
              height: .27rem;
              background: url("../../static/img/wode/2.png") no-repeat;
              background-size: .27rem .27rem;
            }
            &>span:nth-child(2){
              display: block;
              font-size: 12px;
              padding-top: .03rem;
              font-weight: bold;
            }
          }
        }
        &>li:nth-child(2){
          &>a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: .17rem 0;
            border-left: 1px solid #CCCCCC;
            border-right: 1px solid #CCCCCC;
            &>span:nth-child(1){
              display:block;
              width: .27rem;
              height: .27rem;
              background: url("../../static/img/wode/3.png") no-repeat;
              background-size: .27rem .27rem;
            }
            &>span:nth-child(2){
              display: block;
              font-size: 12px;
              padding-top: .03rem;
              font-weight: bold;
            }
          }
        }
        &>li:nth-child(3){
          &>a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: .17rem 0;
            &>span:nth-child(1){
              display:block;
              width: .27rem;
              height: .27rem;
              background: url("../../static/img/wode/4.png") no-repeat;
              background-size: .27rem .27rem;
            }
            &>span:nth-child(2){
              display: block;
              font-size: 12px;
              padding-top: .03rem;
              font-weight: bold;
            }
          }
        }
      }
      &>.d1{
        margin: .15rem 0;
        padding: .12rem 0;
        background: #FFFFFF;
        &>a{
          display: block;
          background: url("../../static/img/wode/5.png") no-repeat;
          background-position-x: .15rem;
          padding-left: .43rem;
          position: relative;
          &>span{
            display: block;
            width:.07rem;
            height: .11rem;
            background: url("../../static/img/wode/jiantou.png") no-repeat;
            position: absolute;
            top: .08rem;
            right: .2rem;
          }
        }
      }
      &>.d2{
        margin: .15rem 0;
        background: #FFFFFF;
        &>a:nth-child(1){
          padding: .13rem 0;
          display: block;
          background: url("../../static/img/wode/6.png") no-repeat .15rem .15rem;
          padding-left: .43rem;
          position: relative;
          &>span{
            display: block;
            width:.07rem;
            height: .11rem;
            background: url("../../static/img/wode/jiantou.png") no-repeat;
            position: absolute;
            top: .18rem;
            right: .2rem;
          }
        }
        &>a:nth-child(2){
          padding: .13rem 0;
          display: block;
          background: url("../../static/img/wode/7.png") no-repeat .15rem .15rem;
          padding-left: .43rem;
          position: relative;
          &>span{
            display: block;
            width:.07rem;
            height: .11rem;
            background: url("../../static/img/wode/jiantou.png") no-repeat;
            position: absolute;
            top: .18rem;
            right: .2rem;
          }
        }
      }
      &>.d3{
        margin: .15rem 0;
        background: #FFFFFF;
        &>a:nth-child(1){
          padding: .13rem 0;
          display: block;
          background: url("../../static/img/wode/8.png") no-repeat .15rem .15rem;
          padding-left: .43rem;
          position: relative;
          &>span{
            display: block;
            width:.07rem;
            height: .11rem;
            background: url("../../static/img/wode/jiantou.png") no-repeat;
            position: absolute;
            top: .18rem;
            right: .2rem;
          }
        }
        &>a:nth-child(2){
          padding: .13rem 0;
          display: block;
          background: url("../../static/img/wode/9.png") no-repeat .15rem .15rem;
          padding-left: .43rem;
          position: relative;
          &>span{
            display: block;
            width:.07rem;
            height: .11rem;
            background: url("../../static/img/wode/jiantou.png") no-repeat;
            position: absolute;
            top: .18rem;
            right: .2rem;
          }
        }
      }
      &>a{
        display: block;
        width: 100%;
        text-align: center;
        color: #7dbefa;
        font-size: 12px;
      }
    }
</style>
