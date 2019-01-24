<template>
  <div class="hello">
    <four-start :score="4.5" :size="24"> </four-start><br/>
    <four-start :score="3.5" :size="36"></four-start><br/>
    <four-start :score="5" :size="48" ></four-start>

    <four-search @show="show" @curClick="changeCur" :searchList="searchList"></four-search>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      searchList: ['草船借箭', '大富翁', '测试数据', '草屋', '西安交大', '测试电路', '王路'],
    }
  },
    methods:{
      /**
       * input触发的input事件
       * @param a
       */
      show(a){
        console.log("input事件触发，keyWord=",a)
      },
      /**
       * click搜索出来的list其中的li
       * @param value
       */
      changeCur(value) {
        console.log(`当前点击的select值是：${value}`)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
