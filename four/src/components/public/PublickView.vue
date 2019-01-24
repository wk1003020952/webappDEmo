<template>
  <aside class="rBox" ref="bgImg">
    <div class="bgImg" >
      <img src="../../../static/img/phone.gif" >
      <div class="contshow">
        <slot></slot>
      </div>
    </div>
  </aside>
</template>

<script>
    export default {
      name: "PublickView",
      methods:{
      },
      mounted(){
      }
    }
</script>

<style lang="stylus">
.rBox
  width:350px
  padding-right 35px
  position: fixed
  right:0
.bgImg
  position: relative
  top:30px
  width:320px
  height:555px
  overflow: hidden
  &>img
    width:340px
    height: 100%
    position: absolute
    left:0
    right:0
    -webkit-border-radius: 50px
    -moz-border-radius: 50px
    border-radius: 50px
  .contshow
    width:87%
    height:550px
    position: absolute
    top:60px
    left:18px
</style>
