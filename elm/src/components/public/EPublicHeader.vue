<template>
  <div>
    <div class="header_bar">
      <slot name="left" class="iconfont"></slot>
      <slot name="cen" class="tit"></slot>
      <slot name="right" class="increat"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EPublicHeader"
    }
</script>

<style lang="stylus">
.header_bar
  height:.44rem
  line-height: .44rem
  background:linear-gradient(90deg,#0af,#0085ff)
  padding:0 .1rem
  color: #fff
  position: relative
  overflow: hidden
  &>.iconfont
    position: absolute
    left:15px
    font-size:20px
    z-index:10
  &>.tit
    width: 100%
    height: 100%
    position: absolute
    left: 0
    top: 0
    text-align: center
    font-size:18px
  &>.increat
    position: absolute
    right:15px
</style>
