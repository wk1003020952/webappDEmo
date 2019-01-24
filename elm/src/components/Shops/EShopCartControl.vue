<template>
    <div class="cartcontrol">
      <transition name="move">
        <div class="iconfont icon-jian-tianchong" v-if="food.count" @click="updataFoodCount(false)"></div>
      </transition>
      <div class="cart-count" v-if="food.count">{{food.count}}</div>
      <div class="iconfont icon-jia" @click="updataFoodCount(true)"></div>
    </div>
</template>

<script>
    export default {
      props:{food:Object},
      methods:{
        updataFoodCount(isAdd){
          this.$store.dispatch('updataFoodCount',{isAdd,food:this.food})
        }
      },
      name: "EShopCartControl",

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    position: relative
    z-index:2
    font-size: 0
    display: flex
    justify-content: space-around
    align-items:center
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-jian-tianchong
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      width: 12px
      line-height: 24px
      text-align: center
      font-weight: bold
      font-size: 18px
      padding-right: .05rem
      color: rgb(147, 153, 159)
    .icon-jia
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
