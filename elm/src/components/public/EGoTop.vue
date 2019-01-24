<template>
  <transition name="fade">
      <i v-if="go" class="iconfont icon-icon_zhiding " @click="gotop"></i>
  </transition>
</template>

<script>
    export default {
        name: "EGoTop",
        data(){
          return{
            go:false
          }
        },
        mounted(){
          window.addEventListener('scroll', this.handle)
        },
        methods:{
          handle(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>500){
              this.go=true
            }else {
              this.go=false
            }
          },
          gotop(){
            this.$emit("aa")
            document.documentElement.scrollTop = document.body.scrollTop = 0
          }
        }
    }
</script>

<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  i
    position fixed
    bottom 1rem
    right .12rem
    z-index 10
    font-size .35rem
    cursor pointer
</style>
