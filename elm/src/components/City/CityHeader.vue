<template>
    <div  class="headerWrap">
      <e-public-header class="htop">
        <i @click="goBack" slot="left" class="iconfont icon-arrow1"></i>
        <span slot="cen" class="tit">城市选择</span>
      </e-public-header>
      <div class="hbtm hBg">
          <div class="searchBox">
            <i class="iconfont icon-search"></i>
            <input v-if="cityInfo" type="text" @input="isshow(keyword)"  v-model="keyword" placeholder="输入城市名或者拼音">
          </div>
      </div>
      <div ref="search" v-show="keyword"  class="search-content">
        <ul>
          <li v-for="(item,id) of list" :key="id" @click="cityClick(item.city)" class="search-item border-btm">
            <span>{{item.city}}</span>
          </li>
          <li v-show="noData" class="search-itme border-btm">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapMutations,mapState } from "vuex"
    import EPublicHeader from "../public/EPublicHeader";
    export default {
      name: "CityHeader",
      components: {EPublicHeader},
      props:[],
      data() {
        return {
          keyword: '',//获取文本框的值
        }
      },
      methods:{
        goBack(){
          this.$router.push("/")
        },
        cityClick(c){
          this.changeCity(c);
          this.$router.push("/")
        },
        isshow(a){
          this.$emit("show",a)
        },
      },
      computed:{
        ...mapState(["changeCity","cityInfo"]),
        noData(){
          if(this.list){
            return !this.list.length
          }
        },
        list(){
          let result=[];
          if(this.cityInfo){
            result = this.cityInfo.filter(val=>
              val.city.indexOf(this.keyword)!==-1 ||  val.short.indexOf(this.keyword)!==-1
            )
            return result
          }
        }
      },
      watch:{
      },
      created(){
        if(this.citylist){
          console.log(this.citylist)
          this.scroll = new BScroll(this.$refs.search,{click: true})
        }
      },
      mounted(){
      }
    }
</script>

<style lang="stylus">
$hbg=linear-gradient(90deg,#0af,#0085ff);
.headerWrap
  position: sticky
  top:0
  z-index:10
.htop
  position: fixed
  z-index:10
  width: 100%;
.hbtm
  position: fixed
  z-index:10
  top: .44rem
  width: 100%
  line-height: .5rem
  background: $hbg
  .searchBox
    display: inline-block
    width:85%
    height: .3rem
    line-height: .3rem
    padding-left: .15rem
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    border-radius: 100px
    background: #fff
    margin-left:50%
    transform translateX(-50%)
    &>.iconfont
      color: #777


.search-content
  width: 100%
  height: 100%
  position: absolute;
  top:.94rem
  left: 0
  ul
    width: 100%
    min-height: 110%
    background: #fff
    li
      line-height:.5rem;
      margin-left: 0.15rem;
      background: #fff;
      color: #666
      span
        width: 85%
        display: inline-block

</style>
