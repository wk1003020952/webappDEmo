<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API' :Event="Event">
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
      <div slot="code-js">
        <code v-text="aaa"></code>
      </div>
    </publick-code>
    <publick-view>
      <four-switch style="margin: 100px 110px" activeColor="red" inactiveColor="black"></four-switch>
      <four-switch style="margin: 0 110px" @change="checkeds"></four-switch>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseSwitch",
      components: {PublickView, PublickCode},
      data(){
        return{
          sss:'<four-switch activeColor="red" inactiveColor="black">' +
            '</four-switch>\n\n' +
            '<four-switch>' +
            '</four-switch>',
          aaa:'  methods:{\n' +
            '        checkeds(checked){\n' +
            '          console.log(checked)\n' +
            '        }\n' +
            '      }',
          userGuide:{
            name:'FourSwitch'
          },
          API:[
            {
              param:'activeColor',//参数
              explain:'自定义选中颜色',//说明
              typeof:'string',//类型
              defaultVal:'deepskyblue',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'inactiveColor',//参数
              explain:'自定义未选中颜色',//说明
              typeof:'string',//类型
              defaultVal:'white',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'size',//参数
              explain:'按钮大小',//说明
              typeof:'number',//类型
              defaultVal:'60',//默认值
              versions:'1.0.5'//版本
            }
          ],
          Event:[
            {
              name:'change',//事件名
              explain:'点击按钮触发的change事件',//说明
              cbParam:'当前是否选中'//回调参数
            },
          ]
        }
      },
      methods:{
        checkeds(checked){
          console.log(checked)
        }
      }
    }
</script>

<style scoped>

</style>
