<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API' :Event="Event">
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-stepper  style="margin:40px 60px"></four-stepper>
      <four-stepper  style="margin:40px 60px" :step="2" :min="2" :max="10"></four-stepper>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
        name: "BaseStepper",
        components: {PublickView, PublickCode},
        data(){
        return{
          sss:'<four-stepper></four-stepper>\n\n' +
              '<four-stepper :step="2" :min="2" :max="10"></four-stepper>',
          userGuide:{
            name:'FourStepper'
          },
          API:[
            {
              param:'step',//参数
              explain:'步长',//说明
              typeof:'number',//类型
              defaultVal:'1',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'min',//参数
              explain:'最小值',//说明
              typeof:'number',//类型
              defaultVal:'0',//默认值
              versions:'1.0.5'//版本

            },
            {
              param:'max',//参数
              explain:'最大值',//说明
              typeof:'number',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            }
          ],
          Event:[
            {
              name:'change',
              explain:'当绑定值变化时触发的事件',
              cbParam:'当前组件的值'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
