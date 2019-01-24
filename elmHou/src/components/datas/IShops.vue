<template>
  <div style="width: 100%;">
    <el-table :data="table_menu" style="width: 100%"
              :row-style="tableRowStyle" :cell-style="tableCellStyle":header-cell-style="tableHeaderColor"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.dizhi }}</span>
            </el-form-item>
            <el-form-item label="商品介绍">
              <span>{{ props.row.jieshao }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.ID }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.score }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.count }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.menu }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name">
      </el-table-column>
      <el-table-column
        label="店铺地址"
        prop="dizhi">
      </el-table-column>
      <el-table-column
        label="店铺介绍"
        prop="jieshao">
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-sizes="[5, 10, 15, 20]"
      style="margin-top: 20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total=tableData.length>
    </el-pagination>
    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible" width="600px">
      <el-form :model="form">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="form.dizhi" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" :label-width="formLabelWidth">
          <el-input v-model="form.jieshao" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" :label-width="formLabelWidth">
          <el-cascader :options="options" change-on-select size="mini"></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;console.log(form.name)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "IShops",
      data() {
        return {
          formLabelWidth: '80px',
          form:{},
          dialogFormVisible:false,
          pagesize:15,
          currpage: 1,
          tableData: [
            {"name":"效果演示","dizhi":"广东省广州市越秀区中山五路219号华联购物中心F1","jieshao":"sad","ID":1,"phone":"13437850035","score":"4.7","count":"124","menu":"快餐便当/简餐"},
            {"name":"带我去吃海鲜规范的规定风格的","dizhi":"广东省深圳市福田区福华路318-2福","jieshao":"877","ID":2,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"恰柠檬发发发","dizhi":"四川省成都市金牛区站东路1号","jieshao":"666","ID":3,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"我的牛肉面1111","dizhi":"广东省深圳市龙华区民治大道58号天虹商场F3","jieshao":"专治各种不服","ID":4,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"孟非11233","dizhi":"北京市东城区西坝河南路","jieshao":"非诚勿扰","ID":5,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"呵呵呵3","dizhi":"广东省广州市花都区狮岭镇盘古南路6号友田城","jieshao":"","ID":6,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"肯德基11","dizhi":"广西壮族自治区南宁市青秀区东葛路109号","jieshao":"肯德基豪华镶金装套餐","ID":7,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"哈哈管","dizhi":"广东省广州市荔湾区西堤二马路37号1","jieshao":"","ID":8,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"这么多店铺","dizhi":"地铁11号线支线,地铁11号线,地铁16号线","jieshao":"11111111111111111发","ID":9,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"快得房点餐","dizhi":"安徽省滁州市琅琊区天长西路54号苏宁广场负1层","jieshao":"so sweet","ID":10,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"为133123","dizhi":"浙江省宁波市象山县步东路26号","jieshao":"1233","ID":11,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"a2","dizhi":"陕西省西安市未央区太华北路","jieshao":"2323","ID":12,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"gew4q","dizhi":"上海市徐汇区宜山路455号光启城时尚购物中心4层","jieshao":"regvbeqgbv","ID":13,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"奔跑的丸子","dizhi":"北京市东城区东单大华路1号","jieshao":"奔跑吧，兄弟","ID":14,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"qwe","dizhi":"湖北省武汉市武昌区铁机路","jieshao":"123","ID":15,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"麦当劳","dizhi":"北京市海淀区","jieshao":"sad","ID":16,"phone":"12537850035","score":"4.6","count":"1224","menu":"快餐便当/简餐"},
            {"name":"陈传奇","dizhi":"安徽省合肥市包河区徽州大道与绕城高速交叉","jieshao":"sad"},
            {"name":"123","dizhi":"湖北省武汉市武昌区洪山路81号门前广场洪山","jieshao":"sad"},
            {"name":"1111111","dizhi":"上海市虹口区七浦路133号上海兴旺国际服装城","jieshao":"sad"},
            {"name":"1111111","dizhi":"北京市东城区东单大华路1号","jieshao":"sad"},
            {"name":"ew","dizhi":"广东省广州市越秀区中山五路219号华联购物中心F1","jieshao":"sad"},
            {"name":"带我去吃海鲜规范的规定风格的","dizhi":"广东省深圳市福田区福华路318-2福","jieshao":"877"},
            {"name":"恰柠檬发发发","dizhi":"四川省成都市金牛区站东路1号","jieshao":"666"},
            {"name":"我的牛肉面1111","dizhi":"广东省深圳市龙华区民治大道58号天虹商场F3","jieshao":"专治各种不服"},
            {"name":"孟非11233","dizhi":"北京市东城区西坝河南路","jieshao":"非诚勿扰"},
            {"name":"32","dizhi":"广东省广州市花都区狮岭镇盘古南路6号友田城","jieshao":""},
            {"name":"dsad1","dizhi":"广西壮族自治区南宁市青秀区东葛路109号","jieshao":"肯德基豪华镶金装套餐"},
            {"name":"哈哈管","dizhi":"广东省广州市荔湾区西堤二马路37号1","jieshao":""},
            {"name":"这么多店铺","dizhi":"地铁11号线支线,地铁11号线,地铁16号线","jieshao":"11111111111111111发"},
            {"name":"dsjd房点餐","dizhi":"安徽省滁州市琅琊区天长西路54号苏宁广场负1层","jieshao":"so sweet"},
            {"name":"为133123","dizhi":"浙江省宁波市象山县步东路26号","jieshao":"1233"},
            {"name":"a2","dizhi":"陕西省西安市未央区太华北路","jieshao":"2323"},
            {"name":"gew4q","dizhi":"上海市徐汇区宜山路455号光启城时尚购物中心4层","jieshao":"regvbeqgbv"},
            {"name":"奔跑的丸子","dizhi":"北京市东城区东单大华路1号","jieshao":"奔跑吧，兄弟"},
            {"name":"qwe","dizhi":"湖北省武汉市武昌区铁机路","jieshao":"123"},
            {"name":"麦当劳","dizhi":"北京市海淀区","jieshao":"sad"},
            {"name":"陈传奇","dizhi":"安徽省合肥市包河区徽州大道与绕城高速交叉","jieshao":"sad"},
            {"name":"123","dizhi":"湖北省武汉市武昌区洪山路81号门前广场洪山","jieshao":"sad"},
            {"name":"1111111","dizhi":"上海市虹口区七浦路133号上海兴旺国际服装城","jieshao":"sad"}
          ],
          options:[
            {
            value:'yi',
            label: '异国料理',
            children: [
              { value:'rh',label: '日韩料理',},
              { value:'xi',label: '西餐',},
              { value:'pi',label:'披萨意面'},
              { value:'dy',label:'东南亚菜'}
            ]},
            {
              value:'kuai',
              label: '快餐便当',
              children: [
                { value:'jian',label: '简餐',},
                { value:'gai',label: '盖浇饭',},
                { value:'mi',label:'米粉面馆'},
                { value:'bao',label:'包子粥店'},
                { value:'tang',label:'麻辣烫'},
                { value:'han',label:'汉堡'}
              ]},
            {
              value:'xiao',
              label: '小吃夜宵',
              children: [
                { value:'xl',label: '小龙虾',},
                { value:'dif',label: '地方小吃',},
                { value:'shao',label:'烧烤'},
                { value:'zha',label:'炸鸡炸串'},
                { value:'ya',label:'鸭脖卤味'},
                { value:'ling',label:'零食'}
              ]},
            {
              value:'guo',
              label: '果蔬生鲜',
              children: [
                { value:'fir',label: '水果',},
                { value:'sx',label: '生鲜',},
                { value:'sc',label:'蔬菜'},
                { value:'hai',label:'海鲜生产'},
              ]},
            {
              value:'tc',
              label: '特色菜系',
              children: [
                { value:'chuanc',label: '川湘菜',},
                { value:'zhec',label: '浙江菜',},
                { value:'yuec',label:'粤菜'},
                { value:'xic',label:'西北菜'},
                { value:'yunc',label:'云南菜'},
                { value:'luc',label:'鲁菜'},
              ]},
            {
              value:'tianp',
              label: '甜品饮品',
              children: [
                { value:'naic',label: '奶茶果汁',},
                { value:'tian',label: '甜品',},
                { value:'kaf',label:'咖啡'},
              ]}
          ]
        }
      },
      computed:{
        table_menu(){
          return this.tableData.slice((this.currpage - 1) * this.pagesize, this.currpage * this.pagesize)
        }
      },
      methods: {
        tableRowStyle({ row, rowIndex }) {
          return 'height:35px'
        },
        tableCellStyle({ cell, rowIndex }) {
          return 'padding:0;font-size:12px'
        },
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
          if (rowIndex === 0) {
            return 'background-color: #eff2f7;' +
              'color: black;' +
              'font-weight: 500;' +
              'height:32px;' +
              'padding:0;' +
              'line-height:32px'
          }
        },
        handleEdit(index, row) {
          this.form=row;
          this.dialogFormVisible=true;
        },
        handleDelete(index, row) {
          this.table_menu.splice(index,1);
          console.log(index, row);
        },
        handleSizeChange(val) {
          this.pagesize=val
        },
        handleCurrentChange(val) {
          this.currpage = val
        }
      }
    }
</script>

<style scoped lang="stylus">
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<style lang="stylus">
  .el-dialog__body
    padding 20px
  .el-dialog__title
    font-size 15px
    font-weight 600
  .el-form-item__label
    text-align left
    font-size 14px

</style>
