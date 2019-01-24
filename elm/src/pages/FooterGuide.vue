<template>
  <div class="viewCon">
    <router-view></router-view>
    <ul :class="{show:'/main/order'==$route.path}">
      <router-link tag="li" to="/main/msite" active-class="bgcolors">
        <i class="iconfont icon-waimai- "></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to="/main/find" active-class="bgcolors">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
      </router-link >
      <router-link tag="li" to="/main/order" active-class="bgcolors">
        <i class="iconfont icon-waimaidingdan0101"></i>
        <span>订单</span>
      </router-link >
      <router-link tag="li" to="/main/wode" active-class="bgcolors">
        <i class="iconfont icon-aui-icon-my"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "FooterGuide"
    }
</script>

<style scoped lang="stylus">
 .bgcolors
  color #0097ff
 .show
    display none
 .viewCon
   height: 100%
 ul
  position: fixed
  bottom:0
  left:0
  z-index:999
  display: flex
  justify-content center
  align-items center
  width: 100%
  height: .5rem
  border-top:2px solid #eee
  background:#fff
  li
    flex:1
    text-align center
    display: flex
    flex-direction: column
    justify-content:space-evenly
    color: #777
    .iconfont
        font-size: .2rem
    span
      display: block
      font-size:.12rem
      padding-top:3px


</style>
