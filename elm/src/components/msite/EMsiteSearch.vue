<template>
    <div class="search">
      <router-link tag="a" to="/search"><i class="iconfont icon-search"></i><span>搜索饿了么商家、商品名称</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "EMsiteSearch"
    }
</script>

<style scoped lang="stylus">
  div.search
    padding 0 .12rem
    position fixed
    top .46rem
    width 100%
    a
      color #bdbdbd
      display block
      width 100%
      height .37rem
      text-align center
      line-height .37rem
      border-radius 3px
      background-color white
      font-size .15rem
      span
        margin-left .12rem

</style>
