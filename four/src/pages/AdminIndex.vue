<template>
  <div class="all">
    <header>
      <div class="w">
        <div class="const-left l">
          <img @click="goIndex" src="../../static/img/log.jpg">
        </div>
        <div class="const-right r" >
          <ul>
            <li @click="goIndex">开始使用</li>
            <li><a href="https://github.com/wk1003020952/404ui-">GitHub</a></li>
            <li>开发者:404Team</li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <div class="w">
        <div class="const-center">
          <h1>404UI</h1>
          <p>基于Vue.js2.0的移动UI组件库</p>
        </div>
        <div class="box">
          <div class="one">Node</div>
          <div class="two">Vue</div>
          <div class="three">Webpack</div>
          <div class="four">404UI</div>
          <div class="five">Element</div>
          <div class="six">
            <a href="##"><img src="../../static/img/c5bc00ebf2b85be1ba9393a4e15db64c.png"/></a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import "../../static/css/swiper.min.css";
    export default {
        name: "AdminIndex",
      methods:{
        goIndex(){
          this.$router.push('/index')
        }
      }
      /*mounted(){
        var swiper = new Swiper('.swiper-container',{
          effect : 'cube',
          autoplay:true,
          delay:1000,
          observer:true,
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 50,
            shadowScale: 0.9
          },
        })
      }*/
    }
</script>

<style  lang="stylus">
  .all{
    width: 100%;
    height: 100%;
    background:url("../../static/img/veer-152382107.jpg");
    background-size cover
  }
  header{
    width: 100%;
    height:60px;
    background: #fff
    border-bottom: 1px solid #000;
  }
  header .w{
    height:100%;
  }
  header .w .const-left{
    height: 100%;
    width: 300px;
    text-align: center
    background-size: cover;
    background-position: center;
    cursor: pointer;
    overflow: hidden
    img{
      width:180px
      padding:2px 0
    }
  }
  header .w .const-right{
    height:100%;
    width: 400px;
  }
  header .w .const-right ul {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  header .w .const-right ul li{
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-radius: 30px;
    width: 120px;
    text-align: center;
    border: 1px solid #ccc;
    color: #222;
  }
  header .w .const-right ul li:hover{
    background-color:#1980fe;
    color: #fff;
    cursor: pointer;
  }
  main{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  main .const-center{
    width: 500px;
    height:120px;
    margin:15px auto;
  }
  main .const-center h1{
    font-size: 50px;
    color: #222;
    text-align: center;
    font-weight: 100;
  }
  main .const-center p{
    font-size: 30px;
    color: #999;
    text-align: center;
  }
  footer{
    width: 100%;
    height: 100px;
    background-color: pink;
  }
  @keyframes rotate{
    0%{
      transform:rotateX(0deg) rotateY(0deg);
    }
    100%{
      transform:rotateX(360deg) rotateY(360deg);
    }
  }
  .box{
    margin:0 auto;
    width:260px;
    height:260px;
    position:relative;
    transform-style: preserve-3d;
    transform:rotateX(-45deg) rotateY(-45deg);
    animation:rotate 5s infinite linear;
  }
  .box>div{
    width:100%;
    height:100%;
    text-align:center;
    line-height:260px;
    font-weight:bold;
    color:#FFFFFF;
    border:1px solid #FFFFFF;
    font-size: 60px;
    position:absolute;
    top:0;
    left:0;
    /*  transition:transform 5s ease-in; */
  }
  .one{
    transform:translateX(150px) rotateY(90deg);
    background:rgba(128, 0, 128, 0.5);
    opacity:.5;
  }
  .two{
    transform:translateX(-150px) rotateY(-90deg);
    background:rgba(255, 0, 255, 0.5);
    opacity:.5;
  }
  .three{
    transform:translateZ(-150px);
    background:rgba(255, 153, 204, 0.5);
    opacity:.5;
  }
  .four{
    transform:translateZ(150px);
    background:rgba(0, 204, 255, 0.5);
    opacity:.5;
  }
  .five{
    transform:translateY(-150px) rotateX(90deg);
    background:rgba(153, 204, 255, 0.5);
    opacity:.5;
  }
  .six{
    transform:translateY(150px) rotateX(-90deg);
    background:rgba(153, 204, 255, 0.1);
    opacity:.5;
    &>a{
      &>img{
        display: block;
        width: 260px;
        height: 260px;
      }
    }
  }
</style>
