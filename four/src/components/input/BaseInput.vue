<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-input-box label="文本框" style="margin: 100px 50px"></four-input-box>
      <four-input-box label="密码框" inputType="password" style="margin: 100px 50px"></four-input-box>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseInput",
        components: {PublickView, PublickCode},
        data(){
        return{
          sss:
            ' <four-input-box label="文本框"></four-input-box>\n' +
            ' <four-input-box label="密码框" inputType="password"></four-input-box>',
          userGuide:{
            name:'FourInputBox'
          },
          API:[
            {
              param:'label',//参数
              explain:'文本',//说明
              typeof:'string',//类型
              defaultVal:'姓名',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'inputType',//参数
              explain:'input框的类型',//说明
              typeof:'string',//类型
              defaultVal:'text',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'inputValue',//参数
              explain:'input框的默认值',//说明
              typeof:'string',//类型
              defaultVal:'null',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'inputPlaceholder',//参数
              explain:'input框的placeholder',//说明
              typeof:'string',//类型
              defaultVal:'请输入姓名',//默认值
              versions:'1.0.5'//版本
            }
          ],
        }
      }
    }
</script>

<style scoped>

</style>
