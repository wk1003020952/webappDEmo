<template>
    <div class="shopCart">
      <div class="cart">
        <div class="content">
          <div class="content-left" @click="toggleShow">
            <div class="logo-wrapper">
              <div class="logo" :class="{'heightLight':totalCount}">
                <i class="iconfont icon-gouwuche-copy" :class="{'heightLight':totalCount}"></i>
              </div>
              <div class="num" v-if="totalCount">{{totalCount}}</div>
            </div>
            <div class="price" :class="{'heightLight': totalCount}">￥{{totalPrice}}</div>
            <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
          </div>
          <div class="content-right">
            <div class="pay" :class="payClass" @click="goOrder">{{payText}}</div>
          </div>
        </div>
        <transition name="move">
          <div class="shopList" v-show="listShow">
            <div class="listHeader">
              <h1 class="title">已选商品</h1>
              <span class="empty iconfont icon-laji2" @click="clearCart">清空</span>
            </div>
            <div class="list-content" ref="listContent">
              <ul>
                <li class="food" v-if="cartFoods" v-for="(food,index) in cartFoods" :key="index">
                  <span class="name">{{food.name}}</span>
                  <div class="price">￥{{food.price}}</div>
                  <div class="cartControl">
                    <e-shop-cart-control :food="food"></e-shop-cart-control>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div class="list-mask" v-show="listShow"  @click="toggleShow"></div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {MessageBox} from 'mint-ui'
    import {mapState,mapGetters} from 'vuex'
    import EShopCartControl from "./EShopCartControl";
    import actions from "../../store/actions";

    export default {
      data(){
        return{
          isShow:false
        }
      },
      computed:{
        ...mapState(['cartFoods','info']),
        ...mapGetters(['totalCount','totalPrice']),
        payClass(){

          const {totalPrice} = this;
          const {minPrice} = this.info
          // console.log(minPrice)
          return totalPrice >= minPrice ? 'enough':'not-enough'
        },
        payText(){
          // console.log(this)
          const {totalPrice} = this;
          const {minPrice} = this.info;
          if(totalPrice===0){
            return `￥${minPrice}元起送`
          }else if(totalPrice<minPrice){
            return `还差￥${minPrice-totalPrice}元起送`
          }else{
            return `去结算`
          }
        },
        listShow(){
          //如果总数量为零，直接不显示
          if(this.totalCount===0){
            this.isShow=false
            return false
          }
          if(this.isShow){
            this.$nextTick(()=>{
              // 实现BScroll的实例是一个单例
              if(!this.scroll){
                this.scroll = new BScroll(this.$refs.listContent,{click:true})
              }else {
                this.scroll.refresh()// 让滚动条刷新一下: 重新统计内容的高度
              }
            })
          }
          return this.isShow
        }
      },
      methods:{
        toggleShow(){
          // 只有当总数量大于0时切换
          if(this.totalCount>0){
            this.isShow = !this.isShow
          }
        },
        clearCart(){
          MessageBox.confirm('确定清空购物车吗？').then(action =>{
            this.$store.dispatch('clearCart')
          })
        },
        goOrder(){
          console.log(event.target.innerText)
          if (event.target.innerText=="去结算"){
            this.$router.push("/main/order?pei="+this.info.deliveryPrice+"&name="+this.info.name);
          }else {
            return
          }
        }
      },

      name: "EShopCart",
      components: {EShopCartControl}
    }
</script>

<style scoped lang="stylus">
.cart
  position: fixed
  left:0
  bottom:0
  background:rgba(0,0,0,.5)
  width: 100%
  height:.5rem
  z-index:20
  .content{
    display: flex
    height: 100%
    background: #141d27
    font-size:0
    color: rgba(255, 255, 255, 0.4)
    .content-left{
      flex:1
      position: relative
      padding-left:80px
      .logo-wrapper{
        position: absolute
        top: -12px
        left:12px
        width:56px
        height:56px
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        background: #141d27
        .logo{
          width: 100%
          height: 100%
          text-align: center
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          background: #363636
          &.heightLight{
            border 5px solid #363636
            background: #3190e8
          }
          .icon-gouwuche-copy{
            line-height: .56rem
            font-size:24px
            color: #80858a
            &.heightLight{
              line-height: .47rem
              color:#fff
            }
          }
        }
        .num{
          position: absolute
          top:0
          right:0
          background: #f40
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          width:16px
          height: 16px
          line-height: 16px
          text-align: center
          color: #fff
          font-size:9px
          -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,.4)
          -moz-box-shadow: 0 4px 8px 0 rgba(0,0,0,.4)
          box-shadow: 0 4px 8px 0 rgba(0,0,0,.4)
        }
      }
      .price{
        display: inline-block
        vertical-align: top
        margin-top:5px
        padding-right: 12px
        line-height:24px
        font-weight:700
        font-size:16px
        color: #fff
        &.heightLight{
          color: #fff
        }
      }
      .desc{
        vertical-align: bottom
        font-size:10px
      }
      
    }
    .content-right{
      flex: 0 0 105px
      width 105px
      .pay{
        height: .5rem
        line-height: .5rem
        text-align: center
        font-size:16px
        font-weight:700
        color: #fff
        &.enough{
          background: #00b43c
        }
        &.not-enough{
          background: #2b333b
        }
      }
    }
  }
  .shopList{
    position: absolute
    top:0
    left:0
    width: 100%
    z-index: -1
    -webkit-transform: translateY(-100%)
    -moz-transform: translateY(-100%)
    -ms-transform: translateY(-100%)
    -o-transform: translateY(-100%)
    transform: translateY(-100%)
    &.move-enter-active,&.move-leave-active{
      transition all .5s
    }
    &.move-enter,&.move-leave--to{
      transform translateY(0)
    }
    .listHeader{
      height:.4rem
      line-height:.4rem
      padding: 0 .18rem
      background: #f3f5f7
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      display: flex
      justify-content:space-between
      .title{
        font-size:14px
        color:rgb(7,17,27)
      }
      .empty{
        font-size:12px
        color:rgb(0,160,220)
      }
    }
    .list-content{
      padding:0 .18rem
      overflow: hidden
      background: #ffffff
      max-height:2.2rem
      .food{
        position: relative
        padding:12px 0
        bottom-border-1px (rgba(7,17,27,.1))
        .name{
          line-height:24px
          font-size:14px
          color rgb(7,17,27)
        }
        .price{
          position: absolute
          right:90px
          bottom:12px
          line-height:24px
          font-size:14px
          font-weight:700
          color:rgb(240,20,20)
        }
        .cartControl{
          position: absolute
          right:0
          bottom:6px
        }
      }
    }
  }
.list-mask{
  position: fixed
  top:0
  left:0
  width: 100%
  height: 100%
  z-index: 10
  backdrop-filter blur(10px)
  opacity: 1
  background:rgba(7, 17, 27, 0.6)
  &.fade-enter-active,&.fade-leave-active{
    -webkit-transition: all .5s
    -moz-transition: all .5s
    -ms-transition: all .5s
    -o-transition: all .5s
    transition: all .5s
  }
  &.fade-enter,&fade-leave-to{
    opacity:0
    background:rgba(7, 17, 27, 0)
  }
}
</style>
