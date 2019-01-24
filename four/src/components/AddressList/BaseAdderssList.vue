<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API' :Event="Event">
      <div slot="code-html">
        <code v-text="sss">
        </code>
      </div>
      <div slot="code-js">
        <code v-text="aaa">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <four-address-edit :formInfo = 'formData' @save="onSave" @delete = "onDel" @change="onSwitch"></four-address-edit>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseAdderssList",
      components: {PublickView, PublickCode},
      data(){
        return{
          formData:[
            {label:'姓名',placeholderTxt: '收货人姓名',inputValue: '里斯'},
            {label:'电话',placeholderTxt: '收货人手机号',inputValue: '13544463324'},
            {label:'地区',placeholderTxt: '选择省市区',inputValue: '陕西省西安市高新区'},
            {label:'详细地址',placeholderTxt: '街道门牌、楼层房间号等信息',inputValue: '绿港22号楼3101'},
            {label:'邮政编码',placeholderTxt: '邮政编码',inputValue: '009900'},
          ],
          sss:'<four-address-edit \n' +
            ':formInfo = \'formData\'\n' +
            ' @save="onSave"\n ' +
            '@delete = "onDel"\n' +
            ' @change="onSwitch">\n' +
            '</four-address-edit>',
          aaa:'data(){\n' +
            '  return{\n' +
            '    formData:[\n' +
            '    {label:\'姓名\',placeholderTxt: \'收货人姓名\',inputValue: \'里斯\'},\n' +
            '    {label:\'电话\',placeholderTxt: \'收货人手机号\',inputValue: \'13544463324\'},\n' +
            '    {label:\'地区\',placeholderTxt: \'选择省市区\',inputValue: \'陕西省西安市高新区\'},\n' +
            '    {label:\'详细地址\',placeholderTxt: \'街道门牌、楼层房间号等信息\',inputValue: \'绿港22号楼3101\'},\n' +
            '    {label:\'邮政编码\',placeholderTxt: \'邮政编码\',inputValue: \'009900\'},\n' +
            '  ],\n}' +
            '}\n' +
            ' methods: {\n' +
            '    onSave(a) {\n' +
            '    console.log(a)\n' +
            '    },\n' +
            '    onDel(a) {\n' +
            '    console.log(a)\n' +
            '    },\n' +
            '    /**\n' +
            '     * a  是数组，一个是checked状态，一个是form表单数据\n' +
            '     * @param a\n' +
            '     */\n' +
            '     onSwitch(a) {\n' +
            '     console.log(a[0] + \'-----------\')\n' +
            '     console.log(a[1][0].label + \'-----------\')\n' +
            '        }\n' +
            '      }',
          userGuide:{
            name:'FourSwitch'
          },
          API:[
            {
              param:'formInfo',//参数
              explain:'默认的地址信息',//说明
              typeof:'Array',//类型
              defaultVal:'-',//默认值
              versions:'1.0.5'//版本
            },
          ],
          Event:[
            {
              name:'save',//事件名
              explain:'保存当前的信息',//说明
              cbParam:'一个是checked状态，一个是form表单数据'//回调参数
            },
            {
              name:'change',//事件名
              explain:'地址信息改变时触发',//说明
              cbParam:'一个是checked状态，一个是form表单数据'//回调参数
            },
            {
              name:'delete',//事件名
              explain:'删除当前的信息',//说明
              cbParam:'一个是checked状态，一个是form表单数据'//回调参数
            },
          ]
        }
      },
      methods: {
        onSave(a) {
          console.log(a)
        },
        onDel(a) {
          console.log(a)
        },
        /**
         * a  是数组，一个是checked状态，一个是form表单数据
         * @param a
         */
        onSwitch(a) {
          console.log(a[0] + '-----------')
          console.log(a[1][0].label + '-----------')
        }
      }
    }
</script>

<style scoped>

</style>
