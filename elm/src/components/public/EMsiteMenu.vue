<template>
  <div :class="{fix:fixbool}" class="munus">
    <ul class="tabs" >
      <li @click="show(0)">综合排序<i class="iconfont icon-arrowdown-copy"></i>
      </li>
      <li @click="show(1)">品质联盟</li>
      <li @click="show(2)">距离最近</li>
      <li @click="show(3)">筛选<i class="iconfont icon-guolv"></i></li>
    </ul>
    <div v-if="num" class="paixu">
      <a>综合排序</a>
      <a>好评优先</a>
      <a @click="show(4)">销量最高</a>
      <a>起送价最低</a>
      <a>配送最快</a>
      <a>配送费最低</a>
      <a>人均从低到高</a>
      <a>通用排序</a>
    </div>
    <div v-if="shuai" class="shuai">
      <section>
        <p>商家服务(可多选)</p>
        <a>
          <img src="../../../static/img/45d2f6ff0dbeef3a78ef0e4e90abapng.png"/>
          蜂鸟专送
        </a>
        <a>
          <img src="../../../static/img/417ba499b9ef8240b8014a453bf30png.png"/>
          品牌商家
        </a>
        <a>
          <img src="../../../static/img/ded991df780906f7471128a226104png.png"/>
          新店
        </a>
        <a>
          <img src="../../../static/img/444d002a94325c5dff004fb3b9505png.png"/>
          食安保
        </a>
        <a>
          <img src="../../../static/img/5668ffc03151826f95b75249bea31png.png"/>
          开发票
        </a>
      </section>
      <a>清空</a>
      <a class="btn">确定</a>
    </div>
  </div>
</template>

<script>
    export default {
      props:["fixbool","handleScroll"],
      name: "EMsiteMenu",
      data(){
        return{
          num:false,
          shuai:false
        }
      },
      methods:{
              mo(e){e.preventDefault()},
              stop(){
              document.body.style.overflow='hidden';
              document.addEventListener("touchmove",this.mo,false);//禁止页面滑动
              },
            /***取消滑动限制***/
              move(){
                document.body.style.overflow='';//出现滚动条
                document.removeEventListener("touchmove",this.mo,false);
            },
            show(i){
              console.log(`触发点击：${i}`)
              this.$store.dispatch('filtershops',i);
              window.scrollTo(0,558);
                if (i===0){
                  this.shuai=false
                  this.num=!this.num
                  this.$emit("shuai",this.num)
                  if (this.num===false){
                    this.move();
                  }else if (this.num===true) {
                    this.stop();
                  }
                }else if (i===3){
                  this.num=false
                  this.shuai=!this.shuai
                  this.$emit("shuai",this.shuai)
                  if (this.shuai===false){
                    this.move();
                  }else if (this.shuai===true) {
                    this.stop();
                  }
                } if (i===4){
                this.shuai=false
                this.num=!this.num
                this.$emit("shuai",this.num)
                if (this.num===false){
                  this.move();
                }else if (this.num===true) {
                  this.stop();
                }
              }
           },
      },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped lang="stylus">
  .munus
    width 100%
    position relative
  .fix
    position fixed !important;
    top .9rem
    border-bottom 1px solid #eee
  ul.tabs
    padding 0 .12rem
    width 100%
    background-color white
    display flex
    justify-content space-between
    height .4rem
    z-index 30
    line-height .4rem
    li
      font-size .16rem
  div.paixu
    border-top 1px solid #cccccc
    position absolute
    top .4rem
    background-color white
    width 100%
    padding-left .14rem
    a
      display block
      color black
      font-size .15rem
      margin .2rem 0
  div.shuai
    border-top 1px solid #cccccc
    width 100%
    background-color white
    font-size .14rem
    &>a
      font-size .16rem
      width 49%
      height .44rem
      display inline-block
      text-align center
      line-height .44rem
      color #cccccc
      border-top 1px solid #ccc
     a.btn
      background-color #00d762
      color white
    section
      padding 0 .12rem
      margin-bottom .12rem
      img
        display inline-block
        width .13rem
      p
        margin .1rem 0
      a
        text-align center
        background-color #fafafa
        display inline-block
        width 30%
        height .35rem
        line-height .35rem
        margin .06rem .03rem
</style>
