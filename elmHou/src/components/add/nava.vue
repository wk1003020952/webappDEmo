<template>
  <div class="right" >
    <div class="froms" style="overflow: hidden">
          <p >选择食品种类</p>
           <div class="fromt">
             <el-form>
             <el-form-item label="详细地址" prop="region">
               <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                 <el-option label="不知道" value="shanghai"></el-option>
                 <el-option label="谁知道" value="beijing"></el-option>
                 <el-option label="我咋知道" value="beijing"></el-option>
                 <el-option label="e道" value="beijing"></el-option>
               </el-select>
             </el-form-item>
             </el-form>
           </div>
      <p style="margin-top:20px">选择食品</p>
            <div class="fromc">
              <el-form>
                <el-form-item label="食品名称" prop="name1">
                  <el-input v-model="ruleForm.name1"></el-input>
                </el-form-item>
                <el-form-item label="食品活动" prop="name2">
                  <el-input v-model="ruleForm.name2"></el-input>
                </el-form-item>
                <el-form-item label="食品详情" prop="name3">
                  <el-input v-model="ruleForm.name3"></el-input>
                </el-form-item>

              <el-form-item label="上传店铺图片" prop="name3">
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
              <el-form-item label="食品特点" prop="region">
                <el-select v-model="ruleForm.region1" placeholder="请选择活动区域">
                  <el-option label="新品" value="shanghai"></el-option>
                  <el-option label="招牌" value="beijing"></el-option>
                </el-select>
              </el-form-item>
                <el-form-item label="食品规格" prop="region" >
                  <el-radio v-model="radio" label="1" @change="ca(nam1)">单规格</el-radio>
                  <el-radio v-model="radio" label="2" @change="cd(nam1)">多规格</el-radio>
                </el-form-item>

                 <div v-if="cc">
                   <el-form-item label="配送费" prop="delivery" >
                     <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                   </el-form-item>
                   <el-form-item label="起送费" prop="delivery">
                     <el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                   </el-form-item>
                   <el-button type="primary">添加</el-button>
                 </div>
                 <div v-if="cb">
                   <el-button type="text" @click="dialogFormVisible = true"> <el-button type="primary">主要按钮</el-button></el-button>

                   <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                     <el-form :model="form">
                       <el-form-item label="活动名称" :label-width="formLabelWidth">
                         <el-input v-model="form.name" autocomplete="off"></el-input>
                       </el-form-item>
                       <el-form-item label="配送费" prop="delivery" >
                         <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                       </el-form-item>
                       <el-form-item label="起送费" prop="delivery">
                         <el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                       </el-form-item>

                     </el-form>

                     <div slot="footer" class="dialog-footer">

                       <el-button @click="dialogFormVisible = false">取 消</el-button>
                       <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                     </div>

                   </el-dialog>
                   <el-table
                     :data="tableData3" height="100" border style="width: 100%">
                     <el-table-column prop="date" label="日期" width="180">
                     </el-table-column>
                     <el-table-column prop="name" label="姓名" width="180">
                     </el-table-column>
                     <el-table-column prop="address" label="地址">
                     </el-table-column>
                   </el-table>

                 </div>

              </el-form>
            </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nava",
         data(){
          return{
            tableData3:[{
              data:"1",
              name:"1",
              address:"1",
            }],
            gridData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '120px',
            num1:"1",
            num2:"2",
            cc:true,
            cb:false,
            radio:"1",
            nam1:"1",
            nam2:"2",
            activeName: 'second',
            startTime: '',
            endTime: '',
            imageUrl: '',
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
              desc: '',

            },

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
        handleClick(tab, event) {
          console.log(tab, event);
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
        },
         ca(i){
             if(i=1){
               this.cc=true
               this.cb=false
             }
         },
        cd(i){
          if(i=1){
            this.cc=false
            this.cb=true
          }
        }

        }

    }
</script>

<style scoped>
  .right{float: right; width: 77%}
  .froms{margin: 20px auto 0;width: 70%;    margin-left: 16.66667%}
  .fromt{border: 1px solid #ccc; border-radius: 3px}
  p{text-align: center;margin-bottom:10px }
  .el-form{
    padding-left:60px ;
    margin-top: 10px;
  }
  .fromc{border: 1px solid #ccc; border-radius: 3px;}
</style>
<style>
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
    padding: 0 82px 0 0;width: 125%;
  }
 .el-button--primary{
   width: 150px;
   margin-left: 53px;
 }
  .el-input--suffix{
    width: 300%;
  }

  .el-input{width: 80%}
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
    line-height: 40px;
  }
</style>
