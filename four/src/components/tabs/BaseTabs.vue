<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API' :Event="Event">
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-tabs></four-tabs>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseTabs",
        components: {PublickView, PublickCode},
        data(){
        return{
          sss:'<four-tabs></four-tabs>',
          userGuide:{
            name:'FourTabs'
          },
          API:[
            {
              param:'tabList',//参数
              explain:'左侧分类内容',//说明
              typeof:'Array',//类型
              defaultVal:'[\'tab1\', \'tab2\', \'tab3\', \'tab4\',\'tab5\', \'tab6\', \'tab7\', \'tab8\']',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'conList',//参数
              explain:'右侧内容',//说明
              typeof:'Array',//类型
              defaultVal:'[\'con1\', \'con2\',\'con3\',\'con4\',\'con5\',\'con6\',\'con7\',\'con8\']',//默认值
              versions:'1.0.5'//版本
            }
          ],
          Event:[
            {
              name:'fClcik',
              explain:'点击左侧tabs触发改变',
              cbParam:'index'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
