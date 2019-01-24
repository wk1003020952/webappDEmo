<template>
    <div class="guide">
      <div class="guide-header">
        <h1 class="log" @click="goAdminIndex">
          <img src="../../static/img/log.jpg">
          <p>v1.1.6</p>
        </h1>
        <div class="menu">
          <ul class="menuUl">
            <router-link active-class="borders" tag="li" to="/kaifa" class="itemLi">组件</router-link>
            <router-link active-class="borders" tag="li" to="/anli" class="itemLi">案例</router-link>
          </ul>
        </div>
      </div>
      <nav ref="leftNav" class="test1">
        <ul class="generyType ">
          <li>
            <h2>开发指南</h2>
            <ul class="subType">
              <router-link tag="li" active-class="curLi" to="/kaifa" >起步</router-link>
            </ul>
          </li>
          <li>
            <h2>基础组件</h2>
            <ul class="subType">
              <router-link active-class="curLi" tag="li" to="/navBar">NavBar <span>导航栏</span></router-link>
              <router-link active-class="curLi" tag="li" to="/goTop" >GoTop<span>回到顶部</span></router-link>
              <router-link active-class="curLi" tag="li" to="/star">Star<span>星星评分</span></router-link>
              <router-link active-class="curLi" tag="li" to="/button">Button<span>按钮</span></router-link>
              <router-link active-class="curLi" tag="li" to="/swiper">Swiper<span>轮播</span></router-link>
              <router-link active-class="curLi" tag="li" to="/stepper">Stepper<span>步进器</span></router-link>
              <router-link active-class="curLi" tag="li" to="/loading">Loading<span>加载</span></router-link>
              <router-link active-class="curLi" tag="li" to="/input">Input<span>框</span></router-link>
              <router-link active-class="curLi" tag="li" to="/switch">Switch<span>按钮</span></router-link>
            </ul>
          </li>
          <li>
            <h2>业务组件</h2>
            <ul class="subType">
              <router-link active-class="curLi" tag="li" to="/message">Meassage-Box<span>消息框</span></router-link>
              <router-link active-class="curLi" tag="li" to="/search">Search-Box<span>搜索框</span></router-link>
              <router-link active-class="curLi" tag="li" to="/tabs">Tabs<span>选项卡</span></router-link>
              <router-link active-class="curLi" tag="li" to="/address">AddressEdit<span>地址编辑</span></router-link>
              <router-link active-class="curLi" tag="li" to="/addresslist">AddressList<span>地址列表</span></router-link>
            </ul>
          </li>
        </ul>
      </nav>
      <router-view class="wrapper"/>
    </div>
</template>

<script>
    export default {
      name: "FIndex",
      methods:{
        leftNav(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let rBox = document.getElementsByClassName("rBox")[0];
          if(scrollTop>= 65){
            this.$refs.leftNav.style.top = '0';
            rBox.style.top = '10px';
          }else{
            this.$refs.leftNav.style.top = '65px';
            rBox.style.top = '65px'
          }
        },
        goAdminIndex(){
          this.$router.push('/404ui')
        }
      },
      mounted(){
          window.addEventListener("scroll",this.leftNav);
      }
    }
</script>

<style lang="stylus">
  .test1::-webkit-scrollbar {
    width: 8px;
  }
  .test1::-webkit-scrollbar-track {
    background-color:red;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  .test1::-webkit-scrollbar-thumb {
    background-color:green;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
.guide
  width: 100%
  height: 100%
.guide-header
  height:65px
  line-height: 65px
  width: 100%
  background: #fff
  border-bottom: 1px solid #ddd
  display: flex
  justify-content: space-between
/*----------header----------*/
.log
  margin-left:30px
  display: flex
  img
    width:90px
    height:30px
    position: relative
    top: 30%
  p
    position: relative
    top:50%
    padding-left:20px
    font-size:16px
    color: #777
.menu
  height: 100%
  padding: 0 20px
  margin-right: 30px
  .menuUl
    display: flex
  .borders
    border-bottom: 2px solid #405060
  .itemLi
    margin 0 8px
    flex: 1
    height: 100%
    padding:0 15px
    font-size:18px
    cursor: pointer
/*--------------左侧nav样式------------*/
nav
  position: fixed;
  left: 0;
  top:70px;
  bottom: 0;
  z-index: 1;
  overflow-y: scroll;
  padding: 25px 20px 75px;
  min-width: 220px;
  max-width: 220px;
  border-right: 1px solid #f1f4f8;
  h2
    font-size 18px
    font-weight 600
    color #455a64
    line-height 2

  .subType
    line-height: 45px
    font-size: 16px
    span
      font-size: 14px
      color:rgba(69,90,100,.6);
    .curLi
    li:hover
      color: #0079f3
      cursor: pointer;
      span
        color:#0079f3


/*------------------右侧content------------*/
.wrapper
  display: flex
  padding-left: 220px
  padding-right:340px

</style>
