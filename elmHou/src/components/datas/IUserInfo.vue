<template>
  <div style="width: 100%;">
    <el-table :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" :row-style="tableRowStyle" :cell-style="tableCellStyle":header-cell-style="tableHeaderColor">
      <el-table-column type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column prop="time" label="注册日期" width="180">
      </el-table-column>
      <el-table-column prop="user" label="用户姓名" width="180">
      </el-table-column>
      <el-table-column prop="dizhi" label="注册地址">
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
        name: "IUserInfo",
      data() {
        return {
          tableData: [
              {"time":"2019-01-11 09:15","user":"wincool","dizhi":"上海"},
              {"time":"2019-01-11 09:13","user":"13683361957","dizhi":"北京"},
              {"time":"2019-01-11 09:06","user":"oeleme","dizhi":"上海"},
              {"time":"2019-01-11 07:37","user":"18513918265","dizhi":"北京"},
              {"time":"2019-01-10 23:31","user":"itcast","dizhi":"深圳"},
              {"time":"2019-01-10 23:15","user":"ksdjda","dizhi":"北京"},
              {"time":"2019-01-10 22:51","user":"8797","dizhi":"深圳"},
              {"time":"2019-01-10 21:46","user":"15226036333","dizhi":"沈阳"},
              {"time":"2019-01-11 09:15","user":"1234556790","dizhi":"上海"},
              {"time":"2019-01-10 21:29","user":"zhuimengren","dizhi":"深圳"},
              {"time":"2019-01-10 21:28","user":"my@126.com","dizhi":"西安"},
              {"time":"2019-01-10 21:15","user":"11211111","dizhi":"青岛"},
              {"time":"2019-01-10 20:12","user":"chy","dizhi":"广州"},
              {"time":"2019-01-10 19:57","user":"admin1435345","dizhi":"北京"},
              {"time":"2019-01-10 19:43","user":"jiangjian","dizhi":""},
              {"time":"2019-01-10 18:38","user":"zq","dizhi":"长沙"},
              {"time":"2019-01-10 17:19","user":"bbuu","dizhi":" 武汉"},
              {"time":"2019-01-10 17:19","user":"136777777777","dizhi":"上海"},
              {"time":"2019-01-10 17:08","user":"haha1a","dizhi":""},
              {"time":"2019-01-11 09:15","user":"wincool","dizhi":"上海"},
              {"time":"2019-01-11 09:15","user":"haha1a","dizhi":""},
              {"time":"2019-01-11 09:13","user":"18356526156","dizhi":"北京"},
              {"time":"2019-01-11 09:06","user":"t0003","dizhi":""},
              {"time":"2019-01-11 07:37","user":"zhgzhg","dizhi":"北京"},
              {"time":"2019-01-10 23:31","user":"15225117867","dizhi":"深圳"},
              {"time":"2019-01-10 23:15","user":"ksdjda","dizhi":""},
              {"time":"2019-01-10 22:51","user":"145d5d","dizhi":"深圳"},
              {"time":"2019-01-10 21:46","user":"tom123456","dizhi":"沈阳"},
              {"time":"2019-01-11 09:15","user":"17853501903","dizhi":"上海"},
              {"time":"2019-01-10 21:29","user":"321456","dizhi":""},
              {"time":"2019-01-10 21:28","user":"321654","dizhi":"西安"},
              {"time":"2019-01-10 21:15","user":"11211111","dizhi":"青岛"},
              {"time":"2019-01-10 20:12","user":"y123456z","dizhi":""},
              {"time":"2019-01-10 19:57","user":"15828571612","dizhi":"北京"},
              {"time":"2019-01-10 19:43","user":"zhangsan002","dizhi":""},
              {"time":"2019-01-10 18:38","user":"er159357er","dizhi":"长沙"},
              {"time":"2019-01-10 17:19","user":"132546","dizhi":""},
              {"time":"2019-01-10 17:19","user":"15690876588","dizhi":"上海"},
              {"time":"2019-01-10 17:08","user":"18700047560","dizhi":""},
              {"time":"2019-01-11 09:15","user":"15192166623","dizhi":"上海"},
              {"time":"2019-01-11 09:15","user":"18700004756111","dizhi":"上海"},
              {"time":"2019-01-11 09:13","user":"polet9","dizhi":"昆明"},
              {"time":"2019-01-11 09:06","user":"ljl","dizhi":"苏州"},
              {"time":"2019-01-11 07:37","user":"727263636363","dizhi":""},
              {"time":"2019-01-10 23:31","user":"195","dizhi":"深圳"},
              {"time":"2019-01-10 23:15","user":"17854185536","dizhi":""},
              {"time":"2019-01-10 22:51","user":"8797","dizhi":"深圳"},
              {"time":"2019-01-10 21:46","user":"15857177309","dizhi":"沈阳"},
              {"time":"2019-01-11 09:15","user":"15857177300","dizhi":"上海"},
              {"time":"2019-01-10 21:29","user":"456123sadasd","dizhi":"深圳"},
              {"time":"2019-01-10 21:28","user":"13151565078","dizhi":""},
              {"time":"2019-01-10 21:15","user":"17701878107","dizhi":""},
              {"time":"2019-01-10 20:12","user":"15857170001","dizhi":"广州"},
              {"time":"2019-01-10 19:57","user":"15857170000","dizhi":"北京"},
              {"time":"2019-01-10 19:43","user":"woele","dizhi":""},
              {"time":"2019-01-10 18:38","user":"13243173027","dizhi":""},
              {"time":"2019-01-10 17:19","user":"24789rwf","dizhi":" 武汉"},
              {"time":"2019-01-10 17:19","user":"12qwasz","dizhi":"上海"},
              {"time":"2019-01-10 17:08","user":"1234567sdasd","dizhi":""},
              {"time":"2019-01-11 09:15","user":"adhub","dizhi":"上海"},
            {"time":"2019-01-11 09:15","user":"wincool","dizhi":"上海"},
            {"time":"2019-01-11 09:13","user":"13683361957","dizhi":"北京"},
            {"time":"2019-01-11 09:06","user":"oeleme","dizhi":"上海"},
            {"time":"2019-01-11 07:37","user":"18513918265","dizhi":"北京"},
            {"time":"2019-01-10 23:31","user":"itcast","dizhi":"深圳"},
            {"time":"2019-01-10 23:15","user":"ksdjda","dizhi":"北京"},
            {"time":"2019-01-10 22:51","user":"8797","dizhi":"深圳"},
            {"time":"2019-01-10 21:46","user":"15226036333","dizhi":"沈阳"},
            {"time":"2019-01-11 09:15","user":"1234556790","dizhi":"上海"},
            {"time":"2019-01-10 21:29","user":"zhuimengren","dizhi":"深圳"},
            {"time":"2019-01-10 21:28","user":"my@126.com","dizhi":"西安"},
            {"time":"2019-01-10 21:15","user":"11211111","dizhi":"青岛"},
            {"time":"2019-01-10 20:12","user":"chy","dizhi":"广州"},
            {"time":"2019-01-10 19:57","user":"admin1435345","dizhi":"北京"},
            {"time":"2019-01-10 19:43","user":"jiangjian","dizhi":""},
            {"time":"2019-01-10 18:38","user":"zq","dizhi":"长沙"},
            {"time":"2019-01-10 17:19","user":"bbuu","dizhi":" 武汉"},
            {"time":"2019-01-10 17:19","user":"136777777777","dizhi":"上海"},
            {"time":"2019-01-10 17:08","user":"haha1a","dizhi":""},
            {"time":"2019-01-11 09:15","user":"wincool","dizhi":"上海"}
          ],
          pagesize:20,
          currpage: 1
        }
      },
      methods: {
        indexMethod(index) {
          return index;
        },
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
        handleSizeChange(val) {
            this.pagesize=val
        },
        handleCurrentChange(val) {
            this.currpage = val
        }
      }
    }
</script>

<style scoped>

</style>
