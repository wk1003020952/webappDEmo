<template>
    <div class="qiang">
      <section>
        <h3>{{qiang.q1.h3}}</h3>
        <p>{{qiang.q1.p1}}</p>
        <p class="qia">{{qiang.q1.p2}}<i class="iconfont icon-arrow-right"></i></p>
        <img v-lazy ="'../../../static/img/'+qiang.q1.pic"/>
      </section>
      <section>
        <h3>{{qiang.q2.h3}}</h3>
        <p>{{qiang.q2.p1}}</p>
        <p class="qia"><span>{{qiang.q2.p2}}人</span>正在抢<i class="iconfont icon-arrow-right"></i></p>
        <img v-lazy="'../../../static/img/'+qiang.q2.pic"/>
      </section>
    </div>
</template>

<script>
    export default {
        props:["qiang"],
        name: "EMsiteQiang",
    }
</script>

<style scoped lang="stylus">
  div.qiang
    width 100%
    display flex
    justify-content space-around
    margin-top .03rem
    margin-bottom .03rem
    section
      width 49%
      padding .14rem 0 0 .12rem
      background-color #f4f4f4
      p
        font-size .14rem
        color #777
      p.qia
        color #af8260
        margin-top .08rem
        i
          font-size .12rem
      img
        display inline-block
        width 1.2rem
        float right
     section:nth-child(2)
        h3
          color #e81919
       p.qia
        color #3c3c3c
        span
          color #e81919

</style>
