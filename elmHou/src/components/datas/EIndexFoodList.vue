<template>
<div>
  <el-table
    border :row-style="rowcss" :cell-style="cellcss" :header-cell-style="headercss"
    :data="curPageData"
    style="width: 90%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ props.row.shopName }}</span>
          </el-form-item>
          <el-form-item label="食品ID">
            <span>{{ props.row.foodId }}</span>
          </el-form-item>
          <el-form-item label="店铺ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.assess }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.shopAddress }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="食品分类">
            <span>{{ props.row.foodCategory }}</span>
          </el-form-item>
          <el-form-item label="月销量">
            <span>{{ props.row.sellCount }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="食品名" prop="name"></el-table-column>
    <el-table-column label="食品介绍" prop="jieshao" >
    </el-table-column>
    <el-table-column label="评分" prop="assess">
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="180px">
      <template slot-scope="scope">
        <el-button size="mini"
          @click="handleEdit(scope.$index, scope.row,scope)">
          编辑
        </el-button>
        <el-button size="mini" type="danger"
                   @click="handleDelete(scope.$index, scope.row)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination
      style="margin-top: 20px"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :pager-count="5"
      layout="total,sizes,prev, pager, next,jumper"
      :current-page.sync="currentPage1"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :total="shiitem.length">
    </el-pagination>
  </div>
  <el-dialog title="修改食品信息" :visible.sync="dialogVisible" width="50%">
    <el-form :model="form">
      <el-form-item label="食品名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="食品介绍" :label-width="formLabelWidth">
        <el-input v-model="form.jieshao" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="食品分类" :label-width="formLabelWidth">
        <el-select v-model="form.foodCategory" placeholder="面食">
          <el-option label="面食" value="mainshi"></el-option>
          <el-option label="西餐" value="xican"></el-option>
          <el-option label="美食" value="meishi"></el-option>
          <el-option label="汉堡" value="hanbao"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="食品图片" :label-width="formLabelWidth">
        <img :src="form.img" >
      </el-form-item>
    </el-form>
    <el-table v-if="editData" :data="editData" :row-style="rowcss" :cell-style="cellcss" background>
      <el-table-column label="规格" prop="size"></el-table-column>
      <el-table-column label="包装费" prop="packExpense"></el-table-column>
      <el-table-column label="价格" prop="price"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger"
                     @click="editDelete(scope.$index,scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="towDialog">添加规格</el-button>

    <el-dialog  width="50%" title="添加规格":visible.sync="innerVisible" append-to-body>
      <el-form :model="innerform">
        <el-form-item label="规格" prop="size" :label-width="formLabelWidth"
          :rules="{ required: true, message: '请输入规格', trigger: 'blur' }">
          <el-input v-model="innerform.size"></el-input>
        </el-form-item>
        <el-form-item label="包装费" :label-width="formLabelWidth">
          <el-input-number v-model="innerform.packExpense" :min="1" :max="10000" controls-position="right"></el-input-number>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input-number v-model="innerform.price" :min="1" :max="10000" controls-position="right"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitinnerData">确 定</el-button>
      </span>
    </el-dialog>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitData">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
    export default {
      name: "EIndexFoodList",
      data() {
        return {
          /*初始数据*/
          shiitem:[
            {
              "name":"呜呜呜",
              "foodId":"1830",
              "jieshao":"1111",
              "assess":"4.8",
              "sellCount":812,
              "shopName":"模范店铺",
              "shopId":110,
              "shopAddress":"广东省广州市越秀区中山五路219号华联购物中心F1 ",
              "foodCategory":"美食、快餐、面条",
              "img":'../../../static/img/timg(1).jpg'
            },
            {"name":"水果","foodId":"1830","jieshao":"12","assess":"4.8","sellCount":812,"shopName":"模范店铺",    "shopId":110,
              "shopAddress":"西安市雁塔区华联购物中心F1 ",
              "foodCategory":"美食、快餐、面条"
            },
            {"name":"世界上最好吃的水果","jieshao":"1111","assess":"4.3"},
            {"name":"驱动器","jieshao":"","assess":"5"},
            {"name":"油条","jieshao":"1111","assess":"4.9"},
            {"name":"133","jieshao":"1111","assess":"4.8"},
            {"name":"ad","jieshao":"啊大大","assess":"4.4"},
            {"name":"墨鱼小丸子","jieshao":"","assess":"4.5"},
            {"name":"芒果","jieshao":"","assess":"4.9"},
            {"name":"打卤面","jieshao":"好吃不贵","assess":"4.9"},
            {"name":"鱼丸面","jieshao":"1要休息好","assess":"4.4"},
            {"name":"炸鸡腿会","jieshao":"好吃","assess":"4.1"},
            {"name":"松前月下","jieshao":"松前月下","assess":"4.6"},
            {"name":"炸鸡","jieshao":"炸鸡","assess":"5"},
            {"name":"葱烧爱迪生","jieshao":"321","assess":"4.5"},
            {"name":"12","jieshao":"121","assess":"4.8"},
            {"name":"1","jieshao":"","assess":"4.6"},
            {"name":"1","jieshao":"1","assess":"4.4"},
            {"name":"333","jieshao":"","assess":"4.2"},
            {"name":"345345","jieshao":"","assess":"4.2"},
            {"name":"呜呜呜","jieshao":"1111","assess":"4.8"},
            {"name":"水果","jieshao":"12","assess":"4.8"},
            {"name":"世界上最好吃的水果","jieshao":"1111","assess":"4.3"},
            {"name":"驱动器","jieshao":"","assess":"5"},
            {"name":"油条","jieshao":"1111","assess":"4.9"},
            {"name":"133","jieshao":"1111","assess":"4.8"},
            {"name":"ad","jieshao":"啊大大","assess":"4.4"},
            {"name":"墨鱼小丸子","jieshao":"","assess":"4.5"},
            {"name":"芒果","jieshao":"","assess":"4.9"},
            {"name":"打卤面","jieshao":"好吃不贵","assess":"4.9"},
            {"name":"鱼丸面","jieshao":"1要休息好","assess":"4.4"},
            {"name":"炸鸡腿会","jieshao":"好吃","assess":"4.1"},
            {"name":"松前月下","jieshao":"松前月下","assess":"4.6"},
            {"name":"炸鸡","jieshao":"炸鸡","assess":"5"},
            {"name":"葱烧爱迪生","jieshao":"321","assess":"4.5"},
            {"name":"12","jieshao":"121","assess":"4.8"},
            {"name":"1","jieshao":"","assess":"4.6"},
            {"name":"1","jieshao":"1","assess":"4.4"},
            {"name":"333","jieshao":"","assess":"4.2"},
            {"name":"345345","jieshao":"","assess":"4.2"},
            {"name":"呜呜呜","jieshao":"1111","assess":"4.8"},
            {"name":"水果","jieshao":"12","assess":"4.8"},
            {"name":"世界上最好吃的水果","jieshao":"1111","assess":"4.3"},
            {"name":"驱动器","jieshao":"","assess":"5"},
            {"name":"油条","jieshao":"1111","assess":"4.9"},
            {"name":"133","jieshao":"1111","assess":"4.8"},
            {"name":"ad","jieshao":"啊大大","assess":"4.4"},
            {"name":"墨鱼小丸子","jieshao":"","assess":"4.5"},
            {"name":"芒果","jieshao":"","assess":"4.9"},
            {"name":"打卤面","jieshao":"好吃不贵","assess":"4.9"},
            {"name":"鱼丸面","jieshao":"1要休息好","assess":"4.4"},
            {"name":"炸鸡腿会","jieshao":"好吃","assess":"4.1"},
            {"name":"松前月下","jieshao":"松前月下","assess":"4.6"},
            {"name":"炸鸡","jieshao":"炸鸡","assess":"5"},
            {"name":"葱烧爱迪生","jieshao":"321","assess":"4.5"},
            {"name":"12","jieshao":"121","assess":"4.8"},
            {"name":"1","jieshao":"","assess":"4.6"},
            {"name":"1","jieshao":"1","assess":"4.4"},
            {"name":"333","jieshao":"","assess":"4.2"},
            {"name":"345345","jieshao":"","assess":"4.2"},
            {"name":"呜呜呜","jieshao":"1111","assess":"4.8"},
            {"name":"水果","jieshao":"12","assess":"4.8"},
            {"name":"世界上最好吃的水果","jieshao":"1111","assess":"4.3"},
            {"name":"驱动器","jieshao":"","assess":"5"},
            {"name":"油条","jieshao":"1111","assess":"4.9"},
            {"name":"133","jieshao":"1111","assess":"4.8"},
            {"name":"ad","jieshao":"啊大大","assess":"4.4"},
            {"name":"墨鱼小丸子","jieshao":"","assess":"4.5"},
            {"name":"芒果","jieshao":"","assess":"4.9"},
            {"name":"打卤面","jieshao":"好吃不贵","assess":"4.9"},
            {"name":"鱼丸面","jieshao":"1要休息好","assess":"4.4"},
            {"name":"炸鸡腿会","jieshao":"好吃","assess":"4.1"},
            {"name":"松前月下","jieshao":"松前月下","assess":"4.6"},
            {"name":"炸鸡","jieshao":"炸鸡","assess":"5"},
            {"name":"葱烧爱迪生","jieshao":"321","assess":"4.5"},
            {"name":"12","jieshao":"121","assess":"4.8"},
            {"name":"1","jieshao":"","assess":"4.6"},
            {"name":"1","jieshao":"1","assess":"4.4"},
            {"name":"333","jieshao":"这是一家好的食物","assess":"4.2"},
            {"name":"345345","jieshao":"","assess":"4.2"}
          ],
          /*分页*/
          pageSizes:[10,20,30,40],//页码大小
          pageSize:10,
          currentPage1: 1,//当前页是第几页
          /*会话框*/
          dialogVisible:false,//是否显示会话框
          innerVisible:false,//第二层会话框
          form:{},
          formLabelWidth: '120px',
          /*dialog会话框里的tab数据*/
          editData:[],//编辑里的tab表格data
          innerform:{//添加规格
          },
        }
      },
      methods: {
        //编辑事件
        handleEdit(rowIndex, rowData,scope) {
          this.dialogVisible = true;//显示dialog
          this.form = rowData;//传递row数据给dialog
          // console.log(rowIndex, rowIndex);
        },
        //dialog会话框的提交事件
        submitData(){
          this.dialogVisible = false;
        },
        //点击打开innerDialog
        towDialog(rowIndex, rowData,scope){
          this.innerVisible = true;
          this.innerform = {packExpense:1, price:20};
        },
        //inner里的添加规格确认按钮
        submitinnerData(){
          this.innerVisible = false;
          this.editData.push(this.innerform)
        },
        handleDelete(index, row) {
          console.log(index, row);
          console.log(this.curPageData[index])
          this.curPageData.splice(index,1)
        },
        editDelete(index,row){
          this.editData.splice(index,1)
        },
        /**
         * 行的样式
         */
        rowcss({row,rowIndex}){
          return `height:'35px';border:none;`
        },
        cellcss(){//列的样式
          return `padding:5px 0;`
        },
        headercss(){},
        //分页器的方法
        handleSizeChange(val){//页码大小
          console.log(`每页 ${val} 条`);
          this.pageSize = val
        },
        handleCurrentChange(val){//当前页变动
          console.log(`当前页:${val}`);
        },
      },
      computed:{
        curPageData(){
          return this.shiitem.slice((this.currentPage1-1)*this.pageSize,this.currentPage1*this.pageSize)
        }
      }
    }
</script>

<style lang="stylus">
  .el-table thead
    color: #333 !important
  .demo-table-expand
    width:100%
    .el-form-item
      width:48%
      margin:0

  .el-button--mini
    padding:7px 9px
</style>
