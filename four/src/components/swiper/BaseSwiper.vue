<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-swiper style="margin-top: 50px">
        <div class="cons swiper-slide" slot="swiper-con" style="background-color: #00a0dc"></div>
        <div class="cons swiper-slide" slot="swiper-con" style="background-color: #00b43c"></div>
        <div class="cons swiper-slide" slot="swiper-con" style="background-color: #02a774"></div>
      </four-swiper>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseSwiper",
        components: {PublickView, PublickCode},
        data(){
          return{
            sss:'<four-swiper>\n' +
                    '<div class="cons swiper-slide" slot="swiper-con" style="background-color: #00a0dc"></div>\n' +
                    '<div class="cons swiper-slide" slot="swiper-con" style="background-color: #00b43c"></div>\n' +
                    '<div class="cons swiper-slide" slot="swiper-con" style="background-color: #02a774"></div>\n' +
                '</four-swiper>',
            title:{
              txt:'Swiper 轮播',
              content:''
            },
            userGuide:{
              name:'FourSwiper'
            },
            API:[
              {
                param:'slot',//参数
                explain:'自定义插槽',//说明
                typeof:'-',//类型
                defaultVal:'swiper',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'swiper-pagination',//参数
                explain:'是否需要分页器',//说明
                typeof:'boolean',//类型
                defaultVal:'true',//默认值
                versions:'1.0.5'//版本

              },
              {
                param:'cons swiper-slide',//参数
                explain:'插槽类名',//说明
                typeof:'-',//类型
                defaultVal:'cons swiper-slide',//默认值
                versions:'1.0.5'//版本
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
