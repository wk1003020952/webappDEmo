<template>
      <div id="userPie"></div>
</template>

<script>
  import echarts from '../../../node_modules/echarts/dist/echarts.min' //引入echarts
  export default {
      name: "EIndexUserProfile",
      mounted(){
        // 基于准备好的dom，初始化echarts实例
        let pieEl = echarts.init(document.getElementById('userPie'))
        let pieElOption = {
            title : {
              text: '用户分布',
              // subtext: '2019年',
              x:'50%'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 10,
              top:30,
              data: ['北京','上海','深圳','杭州','其他']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['60%', '60%'],
                data:[
                  {value:335, name:'北京'},
                  {value:310, name:'上海'},
                  {value:234, name:'深圳'},
                  {value:135, name:'杭州'},
                  {value:1548, name:'其他'}
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
      }
        pieEl.setOption(pieElOption);

      }
    }
</script>

<style scoped lang="stylus">
  #userPie
    width:650px;
    height:500px
    margin-left:150px


</style>
