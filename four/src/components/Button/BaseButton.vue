<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-button size="big" bg="green" value="big" style="margin: 50px"></four-button>
      <four-button size="normal" bg="red" value="normal" style="margin: 50px"></four-button>
      <four-button style="margin: 50px"></four-button>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
        name: "BaseButton",
        components: {PublickView, PublickCode},
        data(){
          return{
            sss:'<four-button></four-button>\n\n' +
                '<four-button size="big" bg="green" value="big"></four-button>\n\n' +
                '<four-button size="normal" bg="red" value="normal"></four-button>\n',
            title:{
              txt:'Button 按钮',
              content:''
            },
            userGuide:{
              name:'FourButton'
            },
            API:[
              {
                param:'size',//参数
                explain:'按钮大小',//说明
                typeof:'string',//类型
                defaultVal:'big/normal/small',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'bg',//参数
                explain:'背景色',//说明
                typeof:'string',//类型
                defaultVal:'#ccc',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'value',//参数
                explain:'按钮内容',//说明
                typeof:'string',//类型
                defaultVal:'默认',//默认值
                versions:'1.0.5'//版本
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
