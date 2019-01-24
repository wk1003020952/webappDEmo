<template>
    <div class="shop-header">
      <nav class="shop-nav" :style="{backgroundImage:`url(${info.bgImg})`}">
        <i @click="$router.back()" class="iconfont icon-arrow1"></i>
      </nav>
      <div class="shop-card">
        <div class="shop-log-img">
          <span>品牌</span>
          <img :src="info.avatar">
        </div>
        <div class="shop-content" @click="toggleShopShow">
          <h2>
            <span>{{info.name}}</span>
            <i class="iconfont icon-arrowright"></i>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">评分{{info.score}}</span>
            <span class="shop-message-detail">月售{{info.sellCount}}单</span>
            <span class="shop-message-detail">蜂鸟快送约{{info.deliveryTime}}分钟</span>
            <span class="shop-message-detail">距离{{info.distance}}</span>
          </div>
        </div>
        <div class="red-packet" @click="toggleRedShow">
          <div class="con">
            <em class="e"></em>
            <em class="m"></em>
            <p class="money">
              <span>￥8</span>
              <span>
                <span class="pic"></span>
                无门槛
              </span>
            </p>
            <p class="ling">领取</p>
          </div>
        </div>
        <div class="shop-discounts" v-if="info.supports" @click="toggleSupportShow">
          <div class="leftbox">
            <span class="mini-tag">{{info.supports[0].name}}</span>
            <span class="txt">满50{{info.supports[0].content}}</span>
          </div>
          <div class="rightbox">{{info.supports.length}}个优惠 <i class="iconfont icon-arrowdown-copy"></i></div>
        </div>
        <p class="shop-notice txt">
          公告：{{info.name}}公告：
          {{info.bulletin}}
        </p>
      </div>
      <transition name="fade">
        <div class="shop-brief-modal maskWrap" v-show="shopShow">
          <div class="shop-modal-content">
            <h2 class="content-title">
              <span class="mini-tag">品牌</span>
              <span class="content-name">{{info.name}}</span>
            </h2>
            <ul class="brief-modal-msg">
              <li><h3>{{info.score}}</h3><p>评分</p> </li>
              <li><h3>{{info.sellCount}}单</h3><p>月售</p></li>
              <li><h3>{{info.description}}</h3><p>约{{info.deliveryTime}}分钟</p></li>
              <li><h3>{{info.deliveryPrice}}元</h3><p>配送费</p></li>
              <li><h3>{{info.distance}}Km</h3><p>距离</p></li>
            </ul>
            <h3 class="brief-modal-title">公告</h3>
            <div class="brief-modal-notice">{{info.bulletin}}</div>
          </div>
          <div class="shop-modal-toggle">
            <i @click="toggleShopShow" class="iconfont icon-buoumaotubiao20"></i>
          </div>
          <div class="shop-modal-cover cover" @click="toggleShopShow"></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="shop-redPacket maskWrap" v-show="redPacket">
          <div class="redPacket-content">
            <div class="red-header">
              <h2>店铺专享红包</h2>
              <i @click="toggleRedShow" class="iconfont icon-guanbi"></i>
            </div>
            <div class="red-content">
              <div class="red-item">
                <h3 class="title">可领红包</h3>
                <div class="red-card">
                    <div class="card-left">
                      <div class="color-red">￥ <span class="big">10</span></div>
                      <div class="card-content">
                        <h4>满¥119可用</h4>
                        <p>限本店使用, 2019-05-31到期</p>
                      </div>
                    </div>
                    <div class="card-right">
                      <span @click="getRedPacket">领取</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="redPacket-cover cover"></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="activity-sheet maskWrap" v-show="supportShow">
          <div class="activity-sheet-content">
            <div class="activity-sheet-title">
              <h2>优惠活动</h2>
              <i @click="toggleSupportShow" class="iconfont icon-guanbi"></i>
            </div>
            <ul class="list">
              <li class="activity-item" v-for="(support,index) in info.supports" :key="index"
              :class="supportClass[support.type]">
                <span class="mini-tag">{{support.name}}</span>
                <span class="activity-content">{{support.content}}</span>
              </li>
            </ul>
          </div>
          <div class="activity-sheet-cover cover" @click="toggleSupportShow">
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
      name: "EShopHearder",
      data(){
        return {
          supportClass:['activity-green','activity-red','activity-orange'],
          shopShow:false,
          supportShow:false,
          redPacket:false,
        }
      },
      computed:{
        ...mapState(['info'])
      },
      methods:{
          toggleShopShow(){
            this.shopShow=!this.shopShow
          },
        toggleSupportShow(){
          this.supportShow=!this.supportShow
        },
        toggleRedShow(){
            this.redPacket=!this.redPacket
        },
        getRedPacket(){
            this.$toast(`领取红包成功！`);
        }
      },
      created(){}
    }
</script>

<style lang="stylus">
.maskWrap{
  position: fixed
  top:0
  left:0
  right:0
  bottom: 0
  width: 100%
  height: 100%
  z-index:30
  display: flex
  flex-direction:column
  align-items:center
  &.fade-enter-active,&.fade-leave-active{
    -webkit-transition: opacity .5s
    -moz-transition: opacity .5s
    -ms-transition: opacity .5s
    -o-transition: opacity .5s
    transition: opacity .5s
  }
  &.fade-enter,&.fade-leave-to{
    opacity: 0;
  }
}
.cover{
  position: absolute
  top:0
  left: 0
  width: 100%
  height: 100%
  z-index 1
  background:rgba(0,0,0,.5)
}
.shop-header
  padding-top: 26.67vw
  position: relative
  border-bottom: 1px solid #eeeeee
  color: #333
.txt
  -ms-text-overflow: ellipsis
  text-overflow: ellipsis
  overflow: hidden
  white-space:nowrap
.shop-nav
  width: 100%;
  height: 100%
  position: absolute
  top: 0;
  .iconfont{
    position: relative
    top: .08rem
    left: .1rem
    color: #fff
    font-size:20px
    font-weight:700
  }

.shop-card
  padding: 0 .2rem
  padding-top:.3rem
  background: #fff
  display: flex
  flex-direction:column
  align-items: center
  position: relative
  border-top-left-radius:3px
  border-top-right-radius 3px
  .shop-log-img
    width: .75rem;
    height:.75rem
    background: #555
    position: absolute
    top:-35%;
    &>span{
      position: absolute
      top:0
      left:0
      background:linear-gradient(90deg,#fff100,#ffe339)
    }
    &>img{}
  .shop-content
    &>h2
      text-align: center
      line-height:1.2
      span
        height: 100%
        font-size:.24rem
        font-weight:700
    &>div
      margin-top:.1rem
      font-size:.08rem
      color: #666
  .red-packet
    height: .24rem
    line-height: .24rem
    margin-top: .1rem
    .con
      background: #ffe578
      color #594519
      padding-left: .07rem
      position: relative
      p
        display: inline-block
        padding: 0 .08rem
      em
        display: inline-block
        width:5px
        height:5px
        background: #fff
        position: absolute
        z-index 0
        right: .4rem
        transform:rotate(45deg)
      .e
        top:-2px
      .m
        bottom:-2px
  .shop-discounts
    width: 100%
    line-height:.13rem
    display: flex
    padding:.1rem .1rem 0
    .leftbox
      flex:1
      display: flex
      overflow: hidden
      align-items:center
      font-size:.1rem
      .mini-tag
        background: #f00
        margin-right:.05rem
        padding:.02rem .05rem
        white-space:nowrap
        -webkit-border-radius: 2px
        -moz-border-radius: 2px
        border-radius: 2px
        color: #fff
    .rightbox
      width:.65rem
      margin-left:.1rem
      color: #999
      font-size:.1rem
  .shop-notice
    width:100%
    padding:.1rem
    color: #999
    overflow: hidden
    font-size:.12rem
.shop-brief-modal{
  justify-content:center
  color: #333
  .shop-modal-content{
    background: #fff
    z-index:10
    width: 80%
    -webkit-border-radius: 5px
    -moz-border-radius: 5px
    border-radius: 5px
    padding:.3rem .2rem
    .content-title{
      line-height:1.4
      text-align: center
      .mini-tag{
        background:linear-gradient(90deg,#fff100,#ffe339)
      }
      .content-name{
        font-size:22px
        font-weight:700
      }
    }
    ul{
      display: flex
      justify-content center
      align-items start
      margin .2rem -.2rem
      li{
        flex: 1
        text-align: center
        h3{
          font-weight:700
          font-size:14px
          margin-bottom:5px
        }
        p{
          font-size 10px
          color: #999
          white-space:nowrap
        }
      }
    }
    .brief-modal-title{
      text-align: center
      font-size 12px
      color: #999
      margin-bottom: .2rem
    }
    .brief-modal-notice{
      font-size:12px
      line-height:1.56
      color: #333
      max-height:1.2rem
      overflow-y: auto
    }
  }
  .shop-modal-toggle{
    z-index:10
    margin-top: .3rem
    color:rgba(255,255,255,.5)
    .iconfont{
      font-size:30px
    }
  }
}
.shop-redPacket{
  color: #333
  .redPacket-content{
    position: absolute
    bottom: 0
    width: 100%
    height: 50%
    z-index:3
    background: #f5f5f5
    .red-header{
      position: relative
      line-height: .45rem
      h2{
        text-align: center
      }
      .iconfont{
        position: absolute
        right: .15rem
        top:0
      }
    }
    .red-content{
      padding:0 .15rem
      .red-item{
        &:befor,&:after{
          content: ''
          display: inline-block
          position: absolute
          right:1rem
          background: #ffffff
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          z-index:2
        }
        .title{
          font-weight:700
        }
        .red-card{
          height:1rem
          margin .1rem 0
          padding-left:.1rem
          background: #ffffff
          border-radius 5px
          border:1px solid #f5d9d5
          display: flex
          position: relative
          .card-left{
            flex:1
            display: flex
            align-items center
            .color-red{
              color: #ff5339
              white-space:nowrap
              .big{
                font-weight:700
                font-size:26px
              }
            }
            .card-content{
              margin-left:.2rem
              white-space:nowrap
              h4{
                font-size:14px
                font-weight:600
              }
              p{
                margin-top: .1rem
                font-size:10px
                color: #999
              }
            }
          }
          .card-right{
            width:1rem
            display: flex
            justify-content:center
            align-items:center
            line-height 2
            margin: .1rem 0
            border-left 1px dashed #eec2b7
            span{
              background: #ff5339
              padding:0 .15rem
              -webkit-border-radius: 15px
              -moz-border-radius: 15px
              border-radius: 15px
              color: #fff
            }
          }

        }
      }
    }
  }
}
.activity-sheet{
  .activity-sheet-content{
    position: absolute
    bottom: 0
    width: 100%
    z-index:3
    background: #f5f5f5
    padding:.1rem .1rem .2rem
    .activity-sheet-title{
      position: relative
      line-height: .45rem
      h2{
        text-align: center
      }
      .iconfont{
        position: absolute
        right: .15rem
        top:0
      }
    }
    .list{
      width: 90%
      margin:0 auto
      height:2rem
      overflow-y auto
      padding-top .05rem
      .activity-item{
        margin-bottom:.12rem
        line-height:1.2
        &.activity-green{
          .mini-tag{
            background-color: rgb(112, 188, 70)
          }
        }
        &.activity-red{
          .mini-tag{
            background-color: rgb(240, 115, 115)
          }
        }
        &.activity-orange{
          .mini-tag{
            background-color: rgb(241, 136, 79)
          }
        }
        .mini-tag{
          -webkit-border-radius: 2px
          -moz-border-radius: 2px
          border-radius: 2px
          width: 36px
          height: 18px
          color: #ffffff
          margin-right: .05rem
          padding:0 .05rem
        }

      }
    }
  }
}
</style>
