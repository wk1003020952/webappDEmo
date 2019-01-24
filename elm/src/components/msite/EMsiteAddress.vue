<template>
    <div class="address_wrap">
      <div @click="show" class="curLocation">
        <i class="iconfont icon-address"></i>
        <span class="text ellipsis" v-show="curCity">{{curCity}}</span>
        <span class="iconfont icon-arrowdown-copy"></span>
      </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
      name: "EMsiteAddress",
      props:[],
      data(){
          return {
          }
      },
      computed:{
        ...mapState(['curCity']),
      },
      methods:{
        show(){
          this.$emit("isShow")
        }
      },
      filters:{}
    }
</script>

<style scoped lang="stylus">
.address_wrap
  position: fixed
  top:0
  left:0
  width: 100%
  height:.45rem
  line-height: .45rem
  background-image: linear-gradient(90deg,#0af,#0085ff)
.curLocation
  padding:.05rem 0 0 .1rem
  width: 60%
  color: #fff
  overflow: hidden
  display: flex
  .text
    max-width:80%
    font-size:.18rem
    font-weight:bold
    white-space:nowrap
    overflow: hidden
    -ms-text-overflow: ellipsis
    text-overflow: ellipsis
    margin:0 2px
  .iconfont
    font-weight:bold
</style>
