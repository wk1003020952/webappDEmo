<template>
    <div class="food" v-if="isShow">
      <div class="food-content">
        <div class="img-header">
          <img v-lazy="food.image">
          <!--<p class="foodplanel-desc">{{food.info}}</p>-->
          <div class="back" @click="toggleShow">
            <i class="iconfont icon-arrow1"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="delail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="bottom_wrap">
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="cartcontrol-warpper">
              <e-shop-cart-control :food="food"></e-shop-cart-control>
            </div>
          </div>
        </div>
      </div>
      <div class="food-cover" @click="toggleShow"></div>
    </div>
</template>

<script>
    import EShopCartControl from "./EShopCartControl";
    export default {
      name: "EShopGoodsFood",
      components: {EShopCartControl},
      props:{
        food:Object,
      },
      data(){
          return{
            isShow:false,
          }
      },
      computed:{},
      methods:{
        toggleShow(){
          this.isShow=!this.isShow;
        }
      },
      mounted(){},
      created(){}

    }
</script>

<style scoped lang="stylus">
.food{
  position: fixed
  top: 0;
  left:0
  width: 100%;
  height:100%
  z-index:101
  background #fff
  .food-content {
    position: absolute
    top 0
    left: 0
    .img-header {
      position relative
      .back {
        position absolute
        top: .2rem
        left: .2rem
        width .3rem
        height: .3rem
        text-align: center
        line-height: .3rem
        background:rgba(0,0,0,.5)
        color: #fff
        border-radius 50%
      }
    }
    .content{
      padding:0 .1rem
      .title{
        font-weight:700
        font-size:18px
        color: #333
        line-height 1.4
        margin:.1rem 0
      }
      .delail{
        margin-bottom:.1rem
        color: #777
        font-size 12px
      }
      .bottom_wrap{
        display: flex
        height: .4rem
        justify-content: space-between
        align-items center
      }
      .price{
        color: rgb(255, 83, 57)
        font-size:16px
        .now{
          font-size:20px
        }
        .old{
          text-decoration: line-through
          color #999
          font-size:12px
        }
      }

      .cartcontrol-warpper{
        color: rgb(35, 149, 255)
      }
    }
  }
  .food-cover{
    position: absolute
    top:0,
    right 0
    bottom: -.5rem
    left:0
    z-index 55
    background-color: rgba(0,0,0,.5)
  }

}
</style>
