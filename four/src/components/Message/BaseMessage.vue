<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API'>
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
      <div slot="code-js">
        <code v-text = 'aaa'>
        </code>
      </div>
    </publick-code>
    <publick-view>
      <button @click="aler1">alert提示框</button>
      <button @click="confirm1">confirm提示框</button>
      <button @click="prompt1">prompt提示框</button>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "../public/PublickCode";
    import PublickView from "../public/PublickView";
    import {MessageBox} from '404ui/packages/message-box'
    export default {
        name: "BaseMessage",
        components: {PublickView, PublickCode},
        data(){
        return{
          searchList:['草船借箭', '大富翁', '测试数据','草屋','西安交大','测试电路','王路'],
          sss:
            '      <button @click="aler1">alert提示框</button>\n\n' +
            '      <button @click="confirm1">confirm提示框</button>\n\n' +
            '      <button @click="prompt1">prompt提示框</button>',
          aaa:'  methods:{\n' +
            '          aler1(){\n' +
            '            MessageBox.alert("alert提示框")\n' +
            '          },\n\n' +
            '          confirm1(){\n' +
            '            MessageBox({\n' +
            '              title:\'title\',\n' +
            '              message:\'message\',\n' +
            '              showCancelButton:true\n' +
            '            })\n' +
            '          },\n\n' +
            '          prompt1(){\n' +
            '            MessageBox.prompt("title")\n' +
            '          }\n' +
            '        }',
          userGuide:{
            name:'FourMessageBox'
          },
          API:[
            {
              param:'title',//参数
              explain:'提示框的标题',//说明
              typeof:'string',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'message',//参数
              explain:'提示框的内容',//说明
              typeof:'string',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'showConfirmButton',//参数
              explain:'是否显示确认按钮',//说明
              typeof:'Boolean',//类型
              defaultVal:'true',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'confirmButtonText',//参数
              explain:'确认按钮的文本',//说明
              typeof:'string',//类型
              defaultVal:'确认',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'inputType',//参数
              explain:'输入框的类型',//说明
              typeof:'String',//类型
              defaultVal:'text',//默认值
              versions:'1.0.5'//版本
            },
            {
              param:'confirmButtonHighlight',//参数
              explain:'是否将确认按钮的文本加粗显示',//说明
              typeof:'Boolean',//类型
              defaultVal:'false',//默认值
              versions:'1.0.5'//版本
            }
          ]
        }
      },
        methods:{
          aler1(){
            MessageBox.alert("alert提示框")
          },
          confirm1(){
            MessageBox({
              title:'title',
              message:'message',
              showCancelButton:true
            })
          },
          prompt1(){
            MessageBox.prompt("title")
          }
        }
    }
</script>

<style scoped>
  button{
    cursor: pointer;
    width: 70%;
    height: 50px;
    margin: 30px 45px;
  }
</style>
