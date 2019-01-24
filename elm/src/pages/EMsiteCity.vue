<template>
  <div style="height: 100%;">
    <city-header @show="show"></city-header>
    <section v-show="!keyword">
      <city-list></city-list>
      <city-alphabet></city-alphabet>
    </section>
  </div>
</template>

<script>
    import {mapMutations,mapState,mapActions,mapGetters} from "vuex";
    import CityHeader from "../components/City/CityHeader";
    import CityList from "../components/City/CityList";
    import CityAlphabet from "../components/City/CityAlphabet";
    import CityApi from '../api/CityApi'
    export default {
      name: "EMsiteCity",
      components: {CityAlphabet, CityList, CityHeader},
      data(){
        return {
          keyword:'',
        }
      },
      computed:{　　
      },
      mounted(){

      },
      methods:{
        //接收字母的值并传递给list组件
        ...mapMutations(['alphabetChange']),
        show(a){
          console.log("事件触发")
         this.keyword = a;
        }

      },
      beforeCreate(){
        this.$store.dispatch("getCityInfo",(data)=>{
          // console.log(`${this.$store.state.cityInfo}`)
          this.cityInfo = data;
        });
        this.$store.dispatch("getLetter",(data)=>{
          // console.log(this.$store.state.letter)
          this.letter = data;
        });
        this.$store.dispatch("getHotCity",(data)=>{
          // console.log(this.$store.state.hotCity)
          this.hotCity = data;
        });
      },
    }
</script>

<style scoped lang="stylus">
section{
  height: 100%
  margin-bottom:.5rem;
  background: #f5f5f5
  position: relative
  top:.94rem
}

</style>
