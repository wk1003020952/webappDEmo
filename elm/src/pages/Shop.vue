<template>
    <div class="shop">
      <e-shop-hearder></e-shop-hearder>
      <div ref="tabWrap" class="tab_wrap" :class="isFixed==true?'isFixed':''">
        <ul class="tabs flex flex_around">
          <router-link tag="li" active-class="curItem" class="tab_item"  to="/shop/goods">点餐</router-link>
          <router-link tag="li" active-class="curItem" class="tab_item" to="/shop/ratings">评价</router-link>
          <router-link tag="li" active-class="curItem" class="tab_item" to="/shop/info">商家</router-link>
        </ul>
      </div>
      <router-view/>
    </div>
</template>

<script>
    import EShopHearder from "../components/Shops/EShopHearder";
    export default {
      data(){
        return {
          isFixed:false
        }
      },
      methods: {
        //在methods监控滚动时间
        handeScroll(){
          this.$nextTick(()=>{
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let tab_wrapTop = this.$refs.tabWrap;
            // console.log(`${scrollTop}---------`)
            // console.log(tab_wrapTop.offsetTop)
            if(scrollTop>=265){
              this.isFixed = true
            }else {
              this.isFixed = false
            }
          })
        }
      },
      mounted(){
        this.$store.dispatch('getShopInfo')
        this.$store.dispatch('getShopRatings');
        window.addEventListener('scroll',this.handeScroll)
      },
      destroyed(){
        window.removeEventListener('scroll',this.handeScroll)
      },
      name: "Shop",
      components: {EShopHearder},

    }
</script>

<style lang="stylus">

.isFixed
  position: sticky
  top:0
  left:0
  width: 100%
  background #ffffff
  z-index:1
.tab_wrap
  padding:0 .15rem
ul.tabs
  width: 100%;
  height:.44rem
  line-height: .44rem
  border-bottom:1px solid #eee
  .tab_item
    height: 100%
    text-align: center
    font-size: .16rem
  .curItem
    font-weight: bold
    font-size: .16rem
    border-bottom 2px solid #00aaff
</style>
