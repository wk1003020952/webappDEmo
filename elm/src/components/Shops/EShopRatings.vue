<template>
  <div>
    <div class="header">
      <div class="score">
        <h3>4.8</h3>
        <p>
          <span>商家评分</span>
          <star :score="4.8" :size="24"></star>
        </p>
      </div>
      <div class="weidao">
        <p class="p1">味道</p>
        <span class="s1">4.7</span>
      </div>
      <div class="baoz">
        <p class="p1">包装</p>
        <span  class="s1">4.8</span>
      </div>
      <div class="peis">
        <p class="p1">配送</p>
        <span  class="s1">4.9</span>
      </div>
    </div>
    <div class="rat_con">
      <section class="rat_navs">
        <a class="bgcolors">全部<span>1341</span></a>
        <a>满意<span>1269</span></a>
        <a>不满意<span>35</span></a>
        <a>有图<span>18</span></a>
        <a>味道好<span>121</span></a>
        <a>不好吃<span>11</span></a>
      </section>
      <ul>
        <li v-for="(rat,index) in ratings" :key="index">
          <img :src="rat.avatar"/>
          <div>
            <p>{{rat.username}}<span class="time">{{rat.rateTime | data-format}}</span></p>
            <star :score="rat.score" :size="24" style="margin-top: .08rem"></star>
            <div class="rat_cons">
              <p>{{rat.text}}</p>
              <img src=""/>
            </div>
          </div>
        </li>
        <li style="justify-content: center">没有更多了。。。</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import Star from "../public/Star/Star";
  export default {
    name: "EShopRatings",
    components: {Star},
    data(){
      return{
      }
    },
    beforeCreate(){
      this.$store.dispatch('getShopRatings')
    },
    beforeMount(){

    },
    computed:{
      ...mapState({
        ratings:'ratings'
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  div.header
    display flex
    justify-content space-around
    padding .12rem  0  .18rem .2rem
    &>div
      span.s1
        font-size .22rem
        color #666
      p.p1
        margin-bottom .06rem
    div.peis
      padding 0 .2rem
      border-left 1px solid #cccccc
    div.score
      display flex
      h3
        font-size .4rem
        color #ff6000
      p
        margin-left .18rem
        span
          display block
          margin .06rem 0

  .bgcolors
    color white !important
    background-color #0097ff !important
  div.rat_con
    padding .12rem
    margin-bottom .5rem
    section.rat_navs
      bottom-border-1px(#ccc)
      a
        display inline-block
        margin-bottom .1rem
        margin-right .06rem
        background-color #ebf5ff
        color #6d7885
        padding .06rem .08rem

    ul
      li
        bottom-border-1px(#eee)
        padding .12rem 0
        display flex
        &>img
          width .35rem
          height .35rem
          border-radius 50%
          margin-right .2rem
        &>div
          flex 1
          display flex
          flex-direction column
          span.time
            float right
            color #ccc
            font-size .12rem
          div.rat_cons
            margin .08rem 0
            p
              line-height 1.8
</style>
