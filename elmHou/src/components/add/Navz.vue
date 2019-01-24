<template>
  <div class="right">
     <div class="froms">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <el-form-item label="店铺名称" prop="name">
           <el-input v-model="ruleForm.name"></el-input>
         </el-form-item>
         <el-form-item label="详细地址" prop="region">
           <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
             <el-option label="西安市千峰" value="shanghai"></el-option>
             <el-option label="西安市南窑头" value="beijing"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="联系电话" prop="name1">
           <el-input v-model="ruleForm.name1"></el-input>
         </el-form-item>
         <el-form-item label="店铺简介" prop="name2">
           <el-input v-model="ruleForm.name2"></el-input>
         </el-form-item>
         <el-form-item label="店铺标语" prop="name3">
           <el-input v-model="ruleForm.name3"></el-input>
         </el-form-item>
         <el-form-item label="店铺分类" prop="name3">
           <div class="block">
             <span class="demonstration"></span>
             <el-cascader
               :options="options"
               v-model="selectedOptions"
               @change="handleChange">
             </el-cascader>
           </div>
         </el-form-item>
         <div >
         <label class="el-form-item__label" style="width: 100px;">店铺特点</label>

         <el-form-item label="即时配送" prop="delivery" class="left">
           <el-switch v-model="ruleForm.delivery"></el-switch>
         </el-form-item>
           <el-form-item label="品牌保证" prop="delivery" class="left">
             <el-switch v-model="ruleForm.delivery1"></el-switch>
           </el-form-item>
           <el-form-item label="新开店铺" prop="delivery" class="left">
             <el-switch v-model="ruleForm.delivery2"></el-switch>
           </el-form-item>
           <el-form-item label="配送费" prop="delivery" >
             <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
           </el-form-item>
           <el-form-item label="起送费" prop="delivery">
             <el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
           </el-form-item>
           <el-form-item label="营业时间" prop="name3">


             <el-time-select
               placeholder="起始时间"
               v-model="startTime"
               :picker-options="{ start: '05:30',step: '00:15',end: '18:30'}">
             </el-time-select>
             <el-time-select
               placeholder="结束时间"
               v-model="endTime"
               :picker-options="{start: '05:30',step: '00:15',end: '18:30',minTime: startTime}">
             </el-time-select>
           </el-form-item>
           <el-form-item label="上传店铺头像" prop="name3">
           <el-upload
             class="avatar-uploader"
             action="https://jsonplaceholder.typicode.com/posts/"
             :show-file-list="false"
             :on-success="handleAvatarSuccess"
             :before-upload="beforeAvatarUpload">
             <img v-if="imageUrl" :src="imageUrl" class="avatar">
             <i v-else class="el-icon-plus avatar-uploader-icon"></i>
           </el-upload>
         </el-form-item>
           <el-form-item label="上传店铺头像" prop="name3">
             <el-upload
               class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
               <img v-if="imageUrl" :src="imageUrl" class="avatar">
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
             </el-upload>
           </el-form-item>
           <el-form-item label="上传餐饮服务许可证" prop="name3">
             <el-upload
               class="avatar-uploader"
               action="https://jsonplaceholder.typicode.com/posts/"
               :show-file-list="false"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload">
               <img v-if="imageUrl" :src="imageUrl" class="avatar">
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
             </el-upload>
           </el-form-item>
         </div>

           <el-form-item label="店铺分类" prop="name3">
             <div class="block">
               <span class="demonstration"></span>
               <el-cascader
                 :options="option"
                 v-model="selectedOptions"
                 @change="handleChange">
               </el-cascader>
             </div>
           </el-form-item>

         <el-form-item>
           <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
         </el-form-item>

       </el-form>
     </div>
</div>
</template>

<script>

    export default {
        name: "Navz",
        data() {
          return {
            startTime: '',
            endTime: '',
            imageUrl: '',
            option:[{
              value:"满减优惠",
              label:"满减优惠"
            },
              {
                value:"优惠大酬宾",
                label:"优惠大酬宾"
              },
              {
                value:"新用户立减",
                label:"新用户立减"
              },
              {
                value:"进店lin'juan",
                label:"优惠大酬宾"
              },{
                value:"优惠大酬宾",
                label:"优惠大酬宾"
              }
            ],
            options: [{
              value: 'zhinan',
              label: '异国料理',
              children: [{
                value: 'shejiyuanze',
                label: '日韩料理',},
                {
                  value: 'shejiyuanze',
                  label: '西餐',},
                {
                  value: 'shejiyuanze',
                  label: '披萨意饼',},
                {
                  value: 'shejiyuanze',
                  label: '东南亚菜',}]

            },
          {
            value: 'zhinan',
              label: '异国料理',
            children: [{
              value: 'shejiyuanze',
              label: '简餐',},
              {
                value: 'shejiyuanze',
                label: '盖浇饭',},
              {
                value: 'shejiyuanze',
                label: '米粉面馆',},
              {
                value: 'shejiyuanze',
                label: '包子粥店',}]
          },
          {
            value: 'zhinan',
              label: '快餐便当',
            children: [{
              value: 'shejiyuanze',
              label: '日韩料理',},
              {
                value: 'shejiyuanze',
                label: '西餐',},
              {
                value: 'shejiyuanze',
                label: '披萨意饼',},
              {
                value: 'shejiyuanze',
                label: '东南亚菜',}]
          },
              {
                value: 'zhinan',
                label: '小吃夜宵',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理',},
                  {
                    value: 'shejiyuanze',
                    label: '西餐',},
                  {
                    value: 'shejiyuanze',
                    label: '披萨意饼',},
                  {
                    value: 'shejiyuanze',
                    label: '东南亚菜',}]
              },
              {
                value: 'zhinan',
                label: '果树生鲜',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理',},
                  {
                    value: 'shejiyuanze',
                    label: '西餐',},
                  {
                    value: 'shejiyuanze',
                    label: '披萨意饼',},
                  {
                    value: 'shejiyuanze',
                    label: '东南亚菜',}]
              },
              {
                value: 'zhinan',
                label: '商店超市',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理',},
                  {
                    value: 'shejiyuanze',
                    label: '西餐',},
                  {
                    value: 'shejiyuanze',
                    label: '披萨意饼',},
                  {
                    value: 'shejiyuanze',
                    label: '东南亚菜',}]
              },
              {
                value: 'zhinan',
                label: '鲜花蛋糕',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理',},
                  {
                    value: 'shejiyuanze',
                    label: '西餐',},
                  {
                    value: 'shejiyuanze',
                    label: '披萨意饼',},
                  {
                    value: 'shejiyuanze',
                    label: '东南亚菜',}]
              },
              {
                value: 'zhinan',
                label: '甜品饮品',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理',},
                  {
                    value: 'shejiyuanze',
                    label: '西餐',},
                  {
                    value: 'shejiyuanze',
                    label: '披萨意饼',},
                  {
                    value: 'shejiyuanze',
                    label: '东南亚菜',}],

              },




            ],
            selectedOptions: [],
            ruleForm: {
              name: '',
              name1:"",
              name2:"",
              name3:"",
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              delivery1: false,
              delivery2: false,
              type: [],
              resource: '',
              desc: ''
            },
            num1:"1",
            num2:"1",
            rules: {
              name: [
                { required: true, message: '请输入店铺名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],

              name1: [
                { required: true, message: '请输入联系电话', trigger: 'blur' },
                {
                  validator: function(rule, value, callback) {
                    var MobileRegex = /^(13[0-9]|147|15[0-9]|17[0-9]|18[0-9])\d{8}$/
                    if (!MobileRegex.test(value)) {
                      callback(new Error('手机号码格式不正确！'))
                    } else {
                      callback()
                    }
                  },
                  trigger: 'blur'
                }
              ],
              region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
              ],
              resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
            }
          };
        },

      methods: {
        onSubmit() {
          console.log('submit!');
        },

          handleChange(value) {
            console.log(value);
          },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }







    }
</script>

<style>
  .right{float: right; width: 77%}
  .froms{margin: 20px auto 0;width: 50%;    margin-left: 16.66667%}
   input{height: 36px;line-height: 36px}
  .flex{display: flex}
  .el-input-number__decrease {
    margin-left: 100%;
    -webkit-transform: translateX(-82px);
    -moz-transform: translateX(-82px);
    -ms-transform: translateX(-82px);
    -o-transform: translateX(-82px);
    transform: translateX(-82px);
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    border-left: 1px solid #dcdfe6 ;
  }
  .el-input-number .el-input__inner{
    padding: 0 82px 0 0
  }
</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.el-form-item__label{
  line-height: 25px;
}
</style>
