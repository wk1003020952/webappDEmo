<template>
  <div>
    <div class="headers">
      <i @click="goback" class="iconfont icon-arrow1"></i>
      <form>
        <input placeholder="输入商家、商品名称" v-model="search_info"/>
        <i class="iconfont icon-search"></i>
        <a @click="searchs">搜索</a>
      </form>
    </div>
    <div v-if="!flag_list">
      <header>热门搜索</header>
      <section>
        <a v-for="(i,index) in biaoqian" :key="i" @click="searchs(index)">{{i}}</a>
      </section>
    </div>
    <ul  v-if="flag_list">
      <e-msite-shop-list v-if="searchlists" :p="sh" v-for="(sh,s) in searchlists" :key="s"></e-msite-shop-list>
    </ul>
  </div>
</template>

<script>
    import EMsiteShopList from "../components/public/EMsiteShopList";
    import {mapState} from 'vuex';
    export default {
      name: "ESearch",
      components: {EMsiteShopList},
      data(){
        return{
          search_info:'',
          flag_list:false,
          biaoqian:["黄焖鸡","汉堡","饺子","蛋糕","面","泡馍","香锅","炸鸡","米线","冒菜"],
          searchlists:[]
        }
      },
      computed:{
        ...mapState({
          shop:'ss',
        }),
      },
      methods:{
        goback(){
          this.$router.back();
        },
        searchs(){
          if (this.shop){
            this.flag_list=true;
            if (event.target.innerText!="搜索"){
              this.search_info=event.target.innerText
            }
            this.searchlists = this.shop.filter(sp=>sp.biaoq.indexOf(this.search_info)!=-1);
          }
        }
      }
    }
</script>

<style scoped lang="stylus">
div
  &>div.headers
    height .5rem
    line-height .5rem
    display flex
    padding 0 .08rem
    &>i
      width .35rem
      font-size .16rem
      font-weight 600
    form
      flex 1
      height:100%
      line-height .5rem
      i
        position absolute
        left .5rem
      input
        width 2.7rem
        height .28rem
        border none
        border-radius 4px
        padding-left .3rem
        background  #f8f8f8
      button
        width .45rem
        height .28rem
        padding 0
        font-size .16rem
        font-weight 600
        background-color white
        border none
  header
    padding .08rem .12rem
    font-size .16rem
    color: #666;
    font-weight: 700;
  section
    margin-top .1rem
    padding .08rem .12rem
    padding-right .5rem
    display flex
    flex-wrap wrap
    a
      margin-bottom .12rem
      margin-right .12rem
      display block
      background-color #f8f8f8
      padding .08rem
      border-radius 4px
      font-size .14rem
</style>
