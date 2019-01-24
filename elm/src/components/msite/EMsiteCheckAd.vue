<template>
    <div class="checkAd">
      <e-public-header class="top">
        <i slot="left" @click="goBack" class="iconfont icon-arrow1"></i>
        <span slot="cen" class="tit">选择收货地址</span>
        <div @click="goIncreat" slot="right" class="increat">新增地址</div>
      </e-public-header>

      <div class="sbar flex flex_center">
        <div @click="goCity" class="sLeft flex1 text-center">
          <span v-show="curCity">{{curCity}}</span>
          <i class="iconfont icon-arrowdown-copy"></i>
        </div>
        <div class="sRight flex4">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="请输入地址">
        </div>
      </div>
      <section></section>
      <section></section>
      <section></section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import EPublicHeader from "../public/EPublicHeader";
    export default {
      name: "EMsiteCheckAd",
      components: {EPublicHeader},
      props:["show"],
      data(){
        return {
          city:false
        }
      },
      methods:{
        goBack(){
          this.$emit("isShow")
        },
        goIncreat(){
          this.$router.push('/increat')
        },
        goCity(){
          this.$router.push('/emsitecity')
          // this.city=!this.city;
        }
      },
      computed:{
        ...mapState(['curCity'])
      }
    }
</script>

<style lang="stylus">
  .checkAd
    z-index:1000
    width: 100%
    height:100%
    background: #f4f4f4
    overflow: auto
    .top
      color: #fff
      .iconfont
        font-size:.22rem
      .tit
        font-size:.18rem
      .increat
        font-size:.16rem

  .sbar
    height:.56rem
    width: 100%
    background: #fff
    padding:0 .15rem
    .sRight
      height: .36rem
      line-height: .36rem
      padding-left:.1rem
      background: #f4f4f4
</style>
