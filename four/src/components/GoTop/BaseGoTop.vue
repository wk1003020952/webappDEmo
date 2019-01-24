<template>
    <div>
      <publick-code :userGuide="userGuide" :API='API'>
        <div slot="code-html">
          <code v-text = 'vvv'>
          </code>
        </div>
      </publick-code>
      <publick-view>
        <four-go-top txt="返回" scrolT="100" style="top: 50%;right: 10%">
        </four-go-top>
      </publick-view>
    </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
      name: "BaseGoTop",
      components: {PublickView, PublickCode},
      data(){
        return{
          vvv:'<four-go-top txt="返回" scrolT="100">\n' +
              '</four-go-top>',
          title:{
            txt:'BaseGoTop回到顶部组件',
            content:''
          },
          userGuide:{
            name:'FourGoTop'
          },
          API:[
            {
              param:'txt',//参数
              explain:'文字',//说明
              typeof:'string',//类型
              defaultVal:'null',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'slot',//参数
              explain:'自定义插槽',//说明
              typeof:'-',//类型
              defaultVal:'go_T',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'scrolT',//参数
              explain:'滚动到多少距离出现',//说明
              typeof:'number',//类型
              defaultVal:'700',//默认值
              versions:'1.0.5'//版本
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
