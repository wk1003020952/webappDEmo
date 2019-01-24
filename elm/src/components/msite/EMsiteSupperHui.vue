<template>
    <div class="supper">
      <img src="../../../static/img/4dd212d831becab6e3ebd484c0941jpeg.jpeg"/>
      <span class="s1">超级会员</span>
      ·
      <span>每月领20元红包</span>
      <a>立即开通<i class="iconfont icon-arrow-right"></i></a>
    </div>
</template>

<script>
    export default {
        name: "EMsiteSupperHui"
    }
</script>

<style scoped lang="stylus">
  div.supper
    background-color #f3dda0
    height .4rem
    line-height .4rem
    border-radius 5px
    padding-left .16rem
    padding-right .1rem
    img
      width .17rem
      display inline-block
    span.s1
      font-weight 600
      font-size .15rem
      color #644f1b
      margin-left .08rem
    span:nth-child(3)
      font-size .12rem
      color #644f1b
    a
      float right
      font-size .12rem
      color: #644f1b;
      i
        font-size .12rem

</style>
