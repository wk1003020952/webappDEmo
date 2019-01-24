<template>
   <li  class="consli">
     <router-link tag="div" to="/shop" class="con">
       <div class="left_pic">
         <img v-lazy="p.img"/>
       </div>
       <div class="right_con">
         <div class="top">
           <h2>{{p.name}}</h2>
           <p class="shou"><star style="margin-top: .03rem;margin-right: .03rem" :size="24" :score="p.pingfeng"></star>4.2<span>月售{{p.danshu}}单</span></p>
           <p class="pirce">
             <span class="song">￥{{p.qisong}}起送</span>
             <span>配送费￥{{p.peisong}}</span>
             <span>{{p.juli}} | {{p.time}}</span>
           </p>
           <p class="detal">
             <a v-for="a in p.biaoq">{{a}}</a>
           </p>
         </div>
         <div class="bo">
           <ul :class="{heights:flag}">
              <li v-for="(l,index) in p.active" :key="index">
                <span :class="[l.bg]">{{l.man}}</span>
                <span>{{l.tits}}</span>
              </li>
           </ul>
           <a @click="show">4个活动<i class="iconfont icon-arrowdown-copy"></i></a>
         </div>
       </div>
     </router-link>
   </li>
</template>

<script>
    import Star from "./Star/Star";
    export default {
      components: { Star},
      props:["p"],
        data(){
          return{
            flag:false
          }
        },
      name: "EMsiteShopList",
      methods:{
        show(){
          this.flag=!this.flag
        }
      }
    }
</script>

<style scoped lang="stylus">
  .heights
     height auto !important
  .jian
    background-color: rgb(240, 115, 115);
  .sho
    background-color: rgb(112, 188, 70);
  li.consli
    width 100%
    padding .1rem 0 .18rem
    border-top 1px solid #eee
    div.con
      padding 0 .12rem
      display flex
      div.left_pic
        width .85rem
        img
          width 100%
          border 1px solid rgba(0,0,0,.08)
          border-radius 4px
      div.right_con
        padding-left .1rem
        flex 1
        div.top
          p
            color #666
            font-size .12rem
            margin .1rem 0
          p.shou
            margin .06rem 0
            span
              margin-left .06rem
          p.pirce
            color #cccccc
            span
              color #666
            span:last-child
              float right
              color #999
          p.detal
            margin-top .12rem
            a
              border 1px solid #eee
              margin-right .06rem
              padding .02rem .04rem
        div.bo
          display: flex
          width: 100%
          justify-content: space-between
          margin-top:.13rem
          ul
            flex 1
            height .5rem
            overflow hidden
            li
              margin-bottom .1rem
              width: 100%;
              overflow: hidden
              text-overflow:ellipsis
              height: 18px
              line-height: 18px
              span:nth-child(1)
                width: .14rem
                font-size .12rem
                padding .01rem .02rem
                border-radius 3px
                color white
          a
            width .6rem
            font-size .12rem
            color #999
            line-height 1.5
</style>
