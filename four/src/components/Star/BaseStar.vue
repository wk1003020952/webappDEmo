<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-start :score="4.5" :size="24" style="margin:30px 45px"> </four-start><br/>
      <four-start :score="3.5" :size="36" style="margin:30px 45px" ></four-start><br/>
      <four-start :score="5" :size="48" style="margin:30px 45px"></four-start><br/>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
        name: "BaseStar",
        components: {PublickView, PublickCode},
        data(){
          return{
            sss:
              '      <four-start :score="4.5" :size="24"> </four-start>\n' +
              '      <four-start :score="3.5" :size="36"></four-start>\n' +
              '      <four-start :score="5" :size="48" ></four-start>',
            title:{
              txt:'Star 星星评分',
              content:''
            },
            userGuide:{
              name:'FourStar'
            },
            API:[
              {
                param:'score',//参数
                explain:'评分',//说明
                typeof:'number',//类型
                defaultVal:'null',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'size',//参数
                explain:'星星大小',//说明
                typeof:'number',//类型
                defaultVal:'48/36/24',//默认值
                versions:'1.0.5'//版本
              },
            ]
          }
        }
    }
</script>

<style scoped>

</style>
