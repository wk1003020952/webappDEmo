<template>
    <div>
      <publick-code :Event="Event" :API='API' :userGuide="userGuide">
        <div slot="code-html">
          <code v-text = 'vvv'>
          </code>
        </div>
        <div slot="code-js">
          <code v-text = 'sss'>
          </code>
        </div>
      </publick-code>
      <publick-view>
        <four-nav-bar title="nav_bar" lefts="返回" increat="更多" @left_click="xx1" @right_click="xx2" style="margin-top: 50px">
        </four-nav-bar>
        <four-nav-bar title="nav_bar" style="margin-top: 50px">
          <span slot="left" class="lefts"></span>
          <span slot="right" class="increat"></span>
        </four-nav-bar>
      </publick-view>
    </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    export default {
      name: "BaseNavBar",
      components: { PublickView, PublickCode},
      data(){
        return{
          sss:'export default {\n' +
            '  methods:{\n' +
            '    xx1(){\n' +
            '      alert("111")\n' +
            '    },\n' +
            '    xx2(){\n' +
            '      alert("222")\n' +
            '    }\n' +
            '  }\n' +
            '}',
          vvv:'<four-nav-bar title="nav_bar" lefts="返回" increat="更多" @left_click="xx1" @right_click="xx2">\n' +
              '</four-nav-bar>\n\n' +
              '<four-nav-bar title="nav_bar">\n' +
                  '<span slot="left" class="lefts"></span>\n' +
                  '<span slot="right" class="increat"></span>\n' +
             '</four-nav-bar>',
          title:{
            content:''
          },
          userGuide:{
            name:'FourNavBar'
          },
          API:[
            {
              param:'title',//参数
              explain:'中间标题',//说明
              typeof:'String',//类型
              defaultVal:'标题',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'lefts',//参数
              explain:'左边文字',//说明
              typeof:'String',//类型
              defaultVal:'left',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'increat',//参数
              explain:'右边文字',//说明
              typeof:'String',//类型
              defaultVal:'right',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'slot',//参数
              explain:'自定义左右插槽',//说明
              typeof:'-',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            },
          ],
          Event:[
            {
              name:'left_click',//事件名
              explain:'左边点击时触发的事件',//说明
              cbParam:'-'//回调参数
            },
            {
              name:'right_click',//事件名
              explain:'右边点击时触发的事件',//说明
              cbParam:'-'//回调参数
            }

          ]
        }
      },
      methods:{
        xx1(){
          alert("111")
        },
        xx2(){
          alert("222")
        }
      }
    }
</script>

<style lang="stylus">
</style>
