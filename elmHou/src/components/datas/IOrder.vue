<template>
  <div style="width: 100%;">
    <el-table :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.user }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.Sadress }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.Dadress }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="订单ID" >
      </el-table-column>
      <el-table-column prop="pic" label="总价格">
      </el-table-column>
      <el-table-column prop="zhaungtai" label="订单状态">
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
  </div>
</template>

<script>
    export default {
        name: "IOrder",
        data(){
          return{
            pagesize:15,
            currpage: 1,
            tableData:[
              {"id":"7586","pic":"2553.5","zhaungtai":"支付超时","user":"wqwq","name":"效果展示","Sadress":"A one商务大厦","Dadress":"广东省广州市越秀区中山五路219号华联购物中心F1"},
              {"id":"7585","pic":"2401","zhaungtai":"支付超时"},
              {"id":"7584","pic":"2397","zhaungtai":"支付超时"},
              {"id":"7583","pic":"2388","zhaungtai":"支付超时"},
              {"id":"7582","pic":"2345","zhaungtai":"支付超时"},
              {"id":"7581","pic":"2281","zhaungtai":"支付超时"},
              {"id":"7580","pic":"2207","zhaungtai":"支付超时"},
              {"id":"7579","pic":"2225","zhaungtai":"支付超时"},
              {"id":"7578","pic":"2213","zhaungtai":"支付超时"},
              {"id":"7577","pic":"2208","zhaungtai":"支付超时"},
              {"id":"7576","pic":"62","zhaungtai":"支付超时"},
              {"id":"7575","pic":"139","zhaungtai":"支付超时"},
              {"id":"7574","pic":"26","zhaungtai":"支付超时"},
              {"id":"7573","pic":"24","zhaungtai":"支付超时"},
              {"id":"7572","pic":"21","zhaungtai":"支付超时"},
              {"id":"7571","pic":"26781","zhaungtai":"支付超时"},
              {"id":"7570","pic":"22897","zhaungtai":"支付超时"},
              {"id":"7569","pic":"23892","zhaungtai":"支付超时"},
              {"id":"7568","pic":"23882","zhaungtai":"支付超时"},
              {"id":"7567","pic":"25","zhaungtai":"支付超时"},
              {"id":"7234","pic":"2553.5","zhaungtai":"支付超时"},
              {"id":"7553","pic":"2401","zhaungtai":"支付超时"},
              {"id":"7583","pic":"2397","zhaungtai":"支付超时"},
              {"id":"7423","pic":"2328","zhaungtai":"支付超时"},
              {"id":"7532","pic":"23565","zhaungtai":"支付超时"},
              {"id":"7582","pic":"22815","zhaungtai":"支付超时"},
              {"id":"7513","pic":"220746","zhaungtai":"支付超时"},
              {"id":"7129","pic":"2225223","zhaungtai":"支付超时"},
              {"id":"7553","pic":"2211","zhaungtai":"支付超时"},
              {"id":"7113","pic":"22042","zhaungtai":"支付超时"},
              {"id":"7543","pic":"62","zhaungtai":"支付超时"},
              {"id":"7553","pic":"139","zhaungtai":"支付超时"},
              {"id":"7575","pic":"53","zhaungtai":"支付超时"},
              {"id":"7562","pic":"24","zhaungtai":"支付超时"},
              {"id":"7524","pic":"21","zhaungtai":"支付超时"},
              {"id":"7513","pic":"267242","zhaungtai":"支付超时"},
              {"id":"7575","pic":"21","zhaungtai":"支付超时"},
              {"id":"7563","pic":"2392","zhaungtai":"支付超时"},
              {"id":"7524","pic":"282","zhaungtai":"支付超时"},
              {"id":"7511","pic":"25","zhaungtai":"支付超时"},
              {"id":"7586","pic":"2553.5","zhaungtai":"支付超时"},
              {"id":"7583","pic":"2401","zhaungtai":"支付超时"},
              {"id":"7582","pic":"2397","zhaungtai":"支付超时"},
              {"id":"7581","pic":"2388","zhaungtai":"支付超时"},
              {"id":"7580","pic":"2345","zhaungtai":"支付超时"},
              {"id":"7522","pic":"2281","zhaungtai":"支付超时"},
              {"id":"7533","pic":"2207","zhaungtai":"支付超时"},
              {"id":"7511","pic":"2225","zhaungtai":"支付超时"},
              {"id":"7544","pic":"2213","zhaungtai":"支付超时"},
              {"id":"7511","pic":"2208","zhaungtai":"支付超时"},
              {"id":"7524","pic":"62","zhaungtai":"支付超时"},
              {"id":"7566","pic":"139","zhaungtai":"支付超时"},
              {"id":"7571","pic":"26","zhaungtai":"支付超时"},
              {"id":"7555","pic":"24","zhaungtai":"支付超时"},
              {"id":"7512","pic":"21","zhaungtai":"支付超时"},
              {"id":"7552","pic":"26781","zhaungtai":"支付超时"},
              {"id":"7553","pic":"22897","zhaungtai":"支付超时"},
              {"id":"7555","pic":"23892","zhaungtai":"支付超时"},
              {"id":"7511","pic":"23882","zhaungtai":"支付超时"},
              {"id":"7566","pic":"25","zhaungtai":"支付超时"}
            ]
          }
        },
      methods:{
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
