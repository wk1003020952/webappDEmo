<template>
    <div class="echarts">
      <div id="main" :style="{width:'90%',height:'450px'}"></div>
    </div>
</template>

<script>
  import echarts from '../../../node_modules/echarts/dist/echarts.min' //引入echarts
  export default {
      name: "EIndexEcharts",
      data(){
        return{
          userData:''
        }
      },
      methods:{
      },
      mounted(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '用户走势图',
            subtext: '用户'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['新注册用户','新增订单','新增管理员']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              // saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2019-01-09','2019-01-10','2019-01-11','2019-01-12','2019-01-13','2019-01-14','2019-01-15']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name:'新注册用户',
              type:'line',
              data:[59, 54, 54, 49, 42, 33, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
              name:'新增订单',
              type:'line',
              data:[21, 103, 37, 35, 23, 19, 1],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
            {
            name:'新增管理员',
            type:'line',
            data:[98, 108, 93, 112, 100, 41, 25],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
          },
          }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      created(){

      }
    }
</script>

<style lang="stylus">
.echarts
  width: 90%
  height:450px

</style>
