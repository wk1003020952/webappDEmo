<template>
  <div class="cityList">
    <div class="con">
      <section class="con1 curCity">
        <div class="curTit tit">当前城市</div>
        <div class="curContent">
          <div @click="cityClick(curCity)">
            {{curCity}}
          </div>
        </div>
      </section>
      <section class="con2 hotCity">
        <div class="hotTit tit">热门城市</div>
        <div class="hotContent ul">
          <div class="btn" v-if="hotCity" v-for="(item,id) in hotCity" :key="id" @click="cityClick(item.city)">
            {{item.city}}
          </div>
        </div>
      </section>
      <section class="con3 allCitys" ref="wrapper">
        <ul>
          <li class="con3_box" v-for="(item,index) in sortCity" :key="index" :ref="item.initial">
            <div class="listTit tit">{{item.initial}}</div>
            <div class="listCon cli" @click="cityClick(c.city)" v-for="(c,cid) in item.cityinfo" :key="cid">
              <span>{{c.city}}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>

</template>

<script>
  import BScroll from  'better-scroll'
  import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
    export default {
      name: "CityList",
      methods:{
        cityClick(city){
          console.log(1)
          this.changeCity(city)
          this.$router.push("/")
        },
        ...mapMutations(['changeCity']),
        _initScroll(){
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper,{click:true})
          }else {
            this.scroll.refresh()
          }
        }
      },
      computed:{
        ...mapState(["curCity","cityInfo","hotCity","letter","curLetter"]),
        ...mapGetters(['sortCity']),
      },
      watch:{
        curLetter(){
          if(this.curLetter){
            const ele = this.$refs[this.curLetter][0]
            // console.log(ele)
            this.$refs.wrapper.style.position = "fixed";
            this.$refs.wrapper.style.top = "1rem";
            this.scroll.scrollToElement(ele)
          }
        }
      },
      mounted(){
        setTimeout(()=>{
          this._initScroll();
        },100)
      },
    }
</script>

<style scoped lang="stylus">
.cityList
  width: 100%
  height: 100%
  overflow: hidden
.tit
  width: 100%
  height:.4rem
  line-height:.4rem
  padding-left:.2rem
  border-bottom:1px solid #ddd
  background: #f5f5f5
  color: #666
.ul
  width: 100%
  background: #fff
  line-height:.44rem
.btn
  display: inline-block
  padding:0 .05rem
  margin-left:.1rem
  background: #fefefe
  line-height: .3rem
  border:1px solid #dddddd
  border-radius 3px
.curContent
  height:.5rem
  line-height: .5rem
  background: #ffffff
  padding-left:.2rem

.allCitys{
  position: relative
  width:100%
  max-height:650px
  overflow: auto
}
.cli
  height:.5rem
  line-height:.5rem
  background: #fff
  span
    display: inline-block
    height: 100%
    width: 100%;
    border-bottom:1px solid #dddddd
    margin-left:.2rem
.cli:last-child
  span
    border:none
</style>
