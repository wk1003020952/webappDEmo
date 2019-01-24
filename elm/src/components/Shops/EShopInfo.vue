<template>
  <div>
    <div>
      <h3>配送信息</h3>
      <p>由蜂鸟快送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</p>
      <p>配送费￥0.1元</p>
    </div>
    <div class="info_cons">
      <section class="active">
        <h3>活动与服务</h3>
        <p :class="supportClass[support.type]" v-for="(support,index) in info.supports">
          <span class="mini-tag">{{support.name}}</span>
          {{support.content}}
        </p>
        <p><span class="bao">保</span>该商户食品安全已由国泰产险承担,安全有保障</p>
      </section>
      <section class="shij">
        <h3>商家实景</h3>
        <img v-for="(pic,index) in info.pics" :key="index" :src="pic"/>
      </section>
      <section class="infos">
        <div>
          <h3>商家信息</h3>
          <p>{{info.description}}</p>
        </div>
        <ul>
          <li>
            <p>品类</p>
            <p>{{info.category}}</p>
          </li>
          <li>
            <p>商家电话</p>
            <p>{{info.phone}}</p>
          </li>
          <li>
            <p>地址</p>
            <p>{{info.address}}</p>
          </li>
          <li>
            <p>营业时间</p>
            <p>{{info.workTime}}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "EShopInfo",
    components: {},
    beforeCreate(){
      this.$store.dispatch('getShopInfo')
    },
    computed:{
      ...mapState({
        info:'info'
      })
    },
    data(){
      return {
        supportClass:['activity-green','activity-red','activity-orange'],
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  div
    padding .12rem
    padding-bottom .18rem
    h3
      font-size .16rem
      font-weight 600
      margin-bottom .15rem
    p
      color #666
      line-height 1.8
      &.activity-green{
        .mini-tag{
          background-color: rgb(112, 188, 70)
        }
      }
      &.activity-red{
        .mini-tag{
          background-color: rgb(240, 115, 115)
        }
      }
      &.activity-orange{
        .mini-tag{
          background-color: rgb(241, 136, 79)
        }
      }
  .bao
    border 1px solid black
    color #cccccc !important
  div.info_cons
    padding .12rem
    margin-bottom .5rem
    section
      padding-top .12rem
      padding-bottom .14rem
      h3
        font-size .16rem
        font-weight 600
        margin-bottom .15rem
    section.active
      p
        color #666
        line-height 1.8
        margin .06rem
        font-size .14rem
        span
          display inline-block
          color: #fff;
          padding 0 .02rem
          font-size .12rem
          border-radius 3px
          margin-right .12rem

    section.shij
      img
        display inline-block
        width 100%
        margin-bottom: .1rem
    section.infos
      &>div
        bottom-border-1px(#ccc)
        padding-bottom .14rem
      ul
        li
          display flex
          justify-content space-between
          bottom-border-1px(#eee)
          p
            padding .14rem 0


</style>
