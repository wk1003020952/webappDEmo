<template>
  <div>
    <publick-code :userGuide="userGuide" :API='API' :Event="Event">
      <div slot="code-js">
        <code v-text="aaa">
        </code>
      </div>
    </publick-code>
    <publick-view>
      <Addresslist></Addresslist>
    </publick-view>
  </div>
</template>

<script>
  import PublickCode from "../public/PublickCode";
  import PublickView from "../public/PublickView";
    export default {
        name: "BaseAddressLi",
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
          sss:' <Addresslist></Addresslist>',
          userGuide:{
            name:'FourAddressList'
          },
          API:[
            {
              param:'addressInfo',//参数
              explain:'每条地址的信息',//说明
              typeof:'Array',//类型
              defaultVal:'addressInfo',//默认值
              versions:'1.0.5'//版本
            },
          ],
          Event:[
            {
              name:'add',//事件名
              explain:'增加信息',//说明
              cbParam:'一个是checked状态，一个是form表单数据'//回调参数
            },
          ]
        }
      },
    }
</script>

<style scoped>

</style>
