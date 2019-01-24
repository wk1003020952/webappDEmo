<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot name ="swiper-con"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import '../../../node_modules/swiper/dist/css/swiper.min.css'
    import Swiper from '../../../node_modules/swiper/dist/js/swiper.min'
    export default {
        name: "ESwiper",
        updated(){
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:{
              stopOnLastSlide:true,
              delay:1500,
              disableOnInteraction: false,
            },
            //observer:true,//修改swiper自己或子元素时，自动初始化swiper
            //observeParents:true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
          }
    }
</script>

<style scoped lang="stylus">
div.cons
    height 2rem
    padding 0 .1rem
    display: flex
    flex-wrap wrap
    justify-content space-between
    text-align center
    a
      width 18%
      padding .05rem .03rem
      margin-top .1rem
      display flex
      align-items center
      flex-direction column
      img
        width .45rem
        display inline-block
      span
        font-size .14rem
</style>
