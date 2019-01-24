<template>
    <div>
      <e-public-header>
        <i @click="goBack" slot="left" class="iconfont icon-arrow1"></i>
        <span slot="cen" class="tit">确认订单</span>
      </e-public-header>
      <section class="peis1">
        <p>订单配送至</p>
        <h3>高新六路52号立人科技园<i class="iconfont icon-arrow-right"></i></h3>
        <span>王(先生) 123456789</span>
        <ul class="us">
          <li><span>送达时间</span><span class="cor">尽快送达(10:33送达)<i class="iconfont icon-arrow-right"></i></span></li>
          <li><span>支付方式</span><span class="cor">在线支付</span></li>
        </ul>
      </section>
      <div class="order">
        <h3>{{$route.query.name}}</h3>
        <ul>
          <li v-if="cartInfo" v-for="(i,index) in cartInfo" :key="index">
            <div>
              <img :src="i.image"/>
              <span>{{i.name}}</span>
            </div>
            <span class="num">x{{i.count}}</span>
            <span class="pirce">¥{{i.price}}</span>
          </li>
          <li>
            <div>
              <span>配送费</span>
            </div>
            <span class="pirce">¥{{$route.query.pei}}</span>
          </li>
        </ul>
      </div>
      <footer>
        <div v-if="totalPrice">¥{{countpirce}}</div>
        <button>去支付</button>
      </footer>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex';
    import EPublicHeader from "../components/public/EPublicHeader";
    export default {
        name: "EOrder",
      components: {EPublicHeader},
      computed:{
        ...mapState({
          cartInfo:"cartFoods"
        }),
        ...mapGetters({
          totalPrice:"totalPrice"
        }),
        countpirce(){
          return parseInt(this.totalPrice)+parseInt(this.$route.query.pei)
        }
      },
      methods:{
        goBack(){
          this.$router.back();
        },
      }
    }
</script>

<style scoped lang="stylus">
  .cor
    color #2395ff
  @import "../common/stylus/mixins.styl"
  section.peis1
    background-image: linear-gradient(90deg,#0af,#0085ff)
    color white
    padding-bottom .1rem
    p
      color: hsla(0,0%,100%,.8);
      padding .12rem
      padding-bottom 0
    h3
      padding 0 .12rem
      margin .14rem 0
      font-size 22px
      font-weight 600
     span
       padding .12rem
       padding-top  0
    ul.us
      width 95%
      margin 0 auto
      margin-top .12rem
      background-color white
      li
        color #2b3131
        display flex
        align-items: center;
        justify-content space-between
        bottom-border-1px(#eee)
        padding .14rem 0
      li:last-child
        bottom-border-1px(white)
        span
          font-size .15rem

  div.order
    padding .12rem
    margin-bottom .48rem
    h3
      bottom-border-1px(#ccc)
      line-height 2
      color #333
      padding .03rem 0 .06rem
      font-size .16rem
      font-weight 600
    ul
      li
        display flex
        justify-content space-between
        align-items center
        padding .08rem 0
        bottom-border-1px(#eee)
        &>div
          display flex
          align-items center
          width 50%
          line-height .45rem
          span
            display inline-block
          img
            margin-right .05rem
            display inline-block
            width .4rem
            height .4rem

        span.pirce
          font-weight 600
          font-size .16rem

  footer
    position fixed
    bottom 0
    left 0
    width 100%
    display flex
    height .48rem
    div
      padding-left .12rem
      line-height .48rem
      font-size .16rem
      flex 1
      background-color #3c3c3c
      color white
    button
      background-color #00e067
      border 0
      width .75rem
</style>
