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
      <four-search @show="show" @curClick="changeCur" :searchList="searchList"></four-search>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseSearch",
        components: {PublickView, PublickCode},
        methods:{
          /**
           * input触发的input事件
           * @param a
           */
          show(a){
            console.log("input事件触发，keyWord=",a)
          },
          /**
           * click搜索出来的list其中的li
           * @param value
           */
          changeCur(value) {
            console.log(`当前点击的select值是：${value}`)
          }
        },
        data(){
          return{
            searchList:['草船借箭', '大富翁', '测试数据','草屋','西安交大','测试电路','王路'],
            aaa:
              ' data(){\n' +
                '       return{\n' +
                '       searchList:[\'草船借箭\', \'大富翁\', \'测试数据\',\'草屋\',\'西安交大\',\'测试电路\',\'王路\'],\n' +
              ' }\n' +
              ' methods:{\n' +
              '          /**\n' +
              '           * input触发的input事件\n' +
              '           * @param a\n' +
              '           */\n' +
              '          show(a){\n' +
              '            console.log("input事件触发，keyWord=",a)\n' +
              '          },\n' +
              '          /**\n' +
              '           * click搜索出来的list其中的li\n' +
              '           * @param value\n' +
              '           */\n' +
              '          changeCur(value) {\n' +
              '            console.log(`当前点击的select值是：${value}`)\n' +
              '          }\n' +
              '        },'
            ,
            sss:'<four-search ' +
              '@show="show" ' +
              '@curClick="changeCur" ' +
              ':searchList="searchList">' +
              '</four-search>',
            userGuide:{
              name:'FourMessageBox'
            },
            API:[
              {
                param:'searchList',//参数
                explain:'搜索的数据',//说明
                typeof:'array',//类型
                defaultVal:'null',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'iconSearch',//参数
                explain:'字体图标',//说明
                typeof:'string',//类型
                defaultVal:'-',//默认值
                versions:'1.0.5'//版本
              },
              {
                param:'placeholderTxt',
                explain:'placeholder',//说明
                typeof:'string',//类型
                defaultVal:'输入关键词',//默认值
                versions:'1.0.5'//版本
              }
            ],
            Event:[
              {
                name:'show',//事件名
                explain:'左边点击时触发的事件',//说明
                cbParam:'input中的内容'//回调参数
              },
              {
                name:'changeCur',//事件名
                explain:'click搜索出来的list其中的li',//说明
                cbParam:'当前的li'//回调参数
              }

            ]
          }
        },
    }
</script>

<style scoped>

</style>
