<template>
    <div class="letterwrap flexCol">
      <span @click="alphabetChange(item)" v-for="(item,id) in letter" :key="id">{{item}}</span>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "CityAlphabet",
      props:[],
      methods:{
        /**
         * 点击事件触发change事件
         */
        ...mapMutations(["alphabetChange"])
      },
      computed:{
        ...mapState(['letter','cityInfo'])
      }
    }
</script>

<style scoped lang="stylus">
.letterwrap
  position: fixed
  right:.15rem
  top: 50%
  transform:translateX(-50%)
  margin-top:-50%
  width:20px
  color: #999
  text-align: center
  span
    width: 100%
    height:.2rem
</style>
