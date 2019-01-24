<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-loading style="margin:60px 80px"></four-loading><br/>
      <four-loading color="#ccc" style="margin:60px 80px"></four-loading>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
        name: "BaseLoading",
        components: {PublickView, PublickCode},
        data(){
        return{
          sss:'<four-loading></four-loading>\n\n' +
              '<four-loading color="#ccc"></four-loading>',
          userGuide:{
            name:'FourLoading'
          },
          API:[
            {
              param:'color',//参数
              explain:'颜色',//说明
              typeof:'string',//类型
              defaultVal:'#1487FF',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'size',//参数
              explain:'大小',//说明
              typeof:'number',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
