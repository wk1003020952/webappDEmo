<template>
  <div style="height: 100%;display: flex;flex-direction: column;position: relative;" >
    <header>
      <e-msite-address @isShow="showAd"></e-msite-address>
      <transition name="ad">
        <e-msite-check-ad @isShow="showAd" v-show="show" class="checkAd"></e-msite-check-ad>
      </transition>
      <e-msite-search></e-msite-search>
    </header>
    <div class="contents">
      <e-swiper>
        <div v-if="data.swiper1_con" v-for="(sw1,index) in data.swiper1_con" :key="index" class="cons swiper-slide" slot="swiper-con">
          <router-link tag='a' :to="'/shoplist?id='+indexa" v-for="(a1,indexa) in sw1" :key="indexa">
            <img :src="'../../static/img/'+a1.imgpic"/>
            <span>{{a1.tit}}</span>
          </router-link>
        </div>
      </e-swiper>
      <div class="padd">
      <e-msite-supper-hui></e-msite-supper-hui>
      <e-msite-qiang v-if="data.qiang" :qiang="data.qiang"></e-msite-qiang>
      <e-swiper>
        <div class="swiper-slide" slot="swiper-con" v-if="data.sw2" v-for="(i,indexs) in data.sw2">
          <img width="100%" :src="'../../static/img/'+i"/>
        </div>
      </e-swiper>
      </div>
      <p class="tui">——<span>推荐商家</span>——</p>
      <e-msite-menu  @shuai="shuai" style="z-index: 30" ref="oo" :handleScroll="handleScroll" :fixbool="fixbool"></e-msite-menu>
      <div @click="hides" class="mask" v-if="shuais"></div>
      <ul class="lists">
        <e-msite-shop-list v-if="shops" :p="sh" v-for="(sh,s) in shops" :key="s"></e-msite-shop-list>
        <li v-show="scro" id="jia">加载中。。。</li>
        <li v-show="finished" style="text-align: center">没有更多了。。。</li>
      </ul>
      <e-go-top @aa="xx"></e-go-top>
    </div>
  </div>
</template>
<script>
    import EMsiteSearch from "../components/msite/EMsiteSearch";
    import ESwiper from "../components/public/ESwiper";
    import EMsiteSupperHui from "../components/msite/EMsiteSupperHui";
    import EMsiteQiang from "../components/msite/EMsiteQiang";
    import EMsiteMenu from "../components/public/EMsiteMenu";
    import EMsiteShopList from "../components/public/EMsiteShopList";
    import EGoTop from "../components/public/EGoTop";
    import EMsiteAddress from "../components/msite/EMsiteAddress";
    import EMsiteCheckAd from "../components/msite/EMsiteCheckAd";
    import Apis from '../api/index';
    import {mapState} from 'vuex';
    export default {
      name: "Msite",
      data() {
        return {
          sss:[],
          flags:false,
          data:{},
          fixbool: false,
          shuais: '',
          show: false,
        }
      },
      components: {
        EMsiteCheckAd,
        EMsiteAddress,
        EGoTop, EMsiteShopList, EMsiteMenu, EMsiteQiang, EMsiteSupperHui, ESwiper, EMsiteSearch
      },
      beforeCreate(){
        this.$store.dispatch('getShops');
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
        Apis.reqCategorys().then((data)=>{
          this.data = data
        });
      },
      computed:{
        ...mapState({
          shops:'ss',
          scro:'scro',
          finished:'finished'
        }),
      },
      methods: {
        showAd(){
          this.show = !this.show;
        },
        xx(){
          this.fixbool=false;
        },
        mo(e){e.preventDefault()},
        stop(){
          document.body.style.overflow='hidden';
          document.addEventListener("touchmove",this.mo,false);//禁止页面滑动
        },
        /***取消滑动限制***/
        move(){
          document.body.style.overflow='';//出现滚动条
          document.removeEventListener("touchmove",this.mo,false);
        },
        hides(event){
          this.shuais=false
          this.$refs.oo.num=false
          this.$refs.oo.shuai=false
          this.move();
        },
        shuai(childValue){
          this.shuais=childValue
        },
        handleScroll () { //改变元素#searchBar的top值
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var offsetTop = this.$refs.oo.$el.offsetTop;
          var scroTop=document.getElementById("jia").getBoundingClientRect().top;
          this.headshow=false;
          if(scrollTop>=337){
            this.fixbool=true
          }else if (scrollTop) {
            this.fixbool=false
          }
          if (scrollTop>=1200) {
            console.log(`scrollTop:${scrollTop}`)
            console.log('滚动事件中的>判断执行' + this.offsetTop(document.getElementById("jia")));
            console.log(`window.innerHeight:${window.innerHeight}`)
            if (window.innerHeight+scrollTop>this.offsetTop(document.getElementById("jia"))){
              this.$store.dispatch("addshops",{})
            }
          }
        },
        offsetTop(element){
              var actualTop = element.offsetTop;
              var current = element.offsetParent;
              while(current != null){
                actualTop += current.offsetTop + current.clientTop;
                current = current.offsetParent;
              }
              return actualTop;//注：是数据，没有单位
            }
       },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },
    }
</script>
<style scoped lang="stylus">
  .checkAd
    position: fixed
    top: 0
    left:0
  .ad-enter-active, .ad-leave-active {
    transition: left .5s;
  }
  .ad-enter,.ad-leave-to
    left:100%
  .mask
    background-color rgba(0,0,0,.5);
    width 100%
    height 100%
    position absolute
    top 0
    z-index 15
  header
    width 100%
    position fixed
    top 0
    z-index 999
    background-image: linear-gradient(90deg,#0af,#0085ff)
    height .9rem
  div.contents
    flex 1
    position relative
    z-index 20
    margin-top .8rem
    div.padd
      padding 0 .08rem
  ul.lists
    margin-bottom .65rem
    #jia
      text-align center
  p.tui
    text-align center
    height .36rem
    line-height .36rem
    color #999
    span
      font-size .16rem
      color #2b3131
      margin 0 .14rem
</style>
<style>
  .cons{
    width: 100%;
  }
  .swiper-pagination-bullet-active{
    opacity: 1 !important;
    background: #007aff !important;
  }
  .swiper-pagination-bullet {
    width: 14px ;
    height: 2px;
    display: inline-block;
    background: #000;
    opacity: .2;
    border-radius: 0}
</style>
