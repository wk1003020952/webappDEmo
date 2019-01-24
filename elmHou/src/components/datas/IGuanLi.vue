<template>
  <div style="width: 100%;">
    <el-table :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)" :row-style="tableRowStyle" :cell-style="tableCellStyle":header-cell-style="tableHeaderColor">
      <el-table-column prop="name" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="time" label="注册日期" >
      </el-table-column>
      <el-table-column prop="dizhi" label="地址">
      </el-table-column>
      <el-table-column prop="prer" label="权限">
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
        name: "IGuanLi",
        data(){
          return{
            pagesize:20,
            currpage: 1,
            tableData:[
              {"name":"sadasf","time":"2019-01-11 09:54","dizhi":"南京","prer":"管理员"},
              {"name":"asdf199361","time":"2019-01-11 09:54","dizhi":"武汉","prer":"超级管理员"},
              {"name":"balay","time":"2019-01-11 09:54","dizhi":"武汉","prer":"超级管理员"},
              {"name":"joejoejoe","time":"2019-01-11 09:54","dizhi":"广州","prer":"管理员"},
              {"name":"joejoejoejoe","time":"2019-01-11 09:54","dizhi":"广州","prer":"超级管理员"},
              {"name":"gbrrgw","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":"233333333333333","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":"rrrrrrrrr","time":"2019-01-11 09:54","dizhi":"杭州","prer":"管理员"},
              {"name":"1111211234123","time":"2019-01-11 09:54","dizhi":"深圳","prer":"超级管理员"},
              {"name":"abcvqq","time":"2019-01-11 09:54","dizhi":"深圳","prer":"管理员"},
              {"name":"cchh","time":"2019-01-11 09:54","dizhi":"广州","prer":"超级管理员"},
              {"name":"temiss123","time":"2019-01-11 09:54","dizhi":"南京","prer":"管理员"},
              {"name":";j[o","time":"2019-01-11 09:54","dizhi":"北京","prer":"超级管理员"},
              {"name":"f f","time":"2019-01-11 09:54","dizhi":"南京","prer":"超级管理员"},
              {"name":"root1111231f","time":"2019-01-11 09:54","dizhi":"南京","prer":"管理员"},
              {"name":"adminfjdksl3890","time":"2019-01-11 09:54","dizhi":"深圳","prer":"超级管理员"},
              {"name":"qazqazq","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"xing123456","time":"2019-01-11 09:54","dizhi":"临沂","prer":"超级管理员"},
              {"name":"suwei1994","time":"2019-01-11 09:54","dizhi":"深圳","prer":"管理员"},
              {"name":"adminfjdksl3890","time":"2019-01-11 09:54","dizhi":"贵阳","prer":"超级管理员"},
              {"name":"sadasf","time":"2019-01-11 09:54","dizhi":"深圳","prer":"超级管理员"},
              {"name":"asdf199361","time":"2019-01-11 09:54","dizhi":"北京","prer":"管理员"},
              {"name":"balay","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"joejoejoe","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"joejoejoejoe","time":"2019-01-11 09:54","dizhi":"北京","prer":"管理员"},
              {"name":"gbrrgw","time":"2019-01-11 09:54","dizhi":"北京","prer":"管理员"},
              {"name":"233333333333333","time":"2019-01-11 09:54","dizhi":"北京q","prer":"管理员"},
              {"name":"rrrrrrrrr","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"1111211234123","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"abcvqq","time":"2019-01-11 09:54","dizhi":"上海","prer":"管理员"},
              {"name":"cchh","time":"2019-01-11 09:54","dizhi":"深圳","prer":"管理员"},
              {"name":"temiss123","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"},
              {"name":";j[o","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"},
              {"name":"f f","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"},
              {"name":"root1111231f","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"},
              {"name":"adminfjdksl3890","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"},
              {"name":"qazqazq","time":"2019-01-11 09:54","dizhi":"南通","prer":"管理员"},
              {"name":"xing123456","time":"2019-01-11 09:54","dizhi":"南通","prer":"管理员"},
              {"name":"suwei1994","time":"2019-01-11 09:54","dizhi":"南通","prer":"管理员"},
              {"name":"adminfjdksl3890","time":"2019-01-11 09:54","dizhi":"南通","prer":"管理员"},
              {"name":"ffffff6","time":"2019-01-11 09:54","dizhi":"潍坊","prer":"管理员"},
              {"name":"asdf199361","time":"2019-01-11 09:54","dizhi":"潍坊","prer":"管理员"},
              {"name":"balay","time":"2019-01-11 09:54","dizhi":"潍坊","prer":"管理员"},
              {"name":"joejoejoe","time":"2019-01-11 09:54","dizhi":"西安","prer":"管理员"},
              {"name":"joejoejoejoe","time":"2019-01-11 09:54","dizhi":"南京","prer":"管理员"},
              {"name":"111444444","time":"2019-01-11 09:54","dizhi":"南京","prer":"管理员"},
              {"name":"abcvqq","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":"rrrrrrrrr","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":"1111211234123","time":"2019-01-11 09:54","dizhi":"杭州","prer":"管理员"},
              {"name":"abcvqq","time":"2019-01-11 09:54","dizhi":"广州","prer":"管理员"},
              {"name":"cchh","time":"2019-01-11 09:54","dizhi":"广州","prer":"管理员"},
              {"name":"cchh","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":";j[o","time":"2019-01-11 09:54","dizhi":"武汉","prer":"管理员"},
              {"name":"f f","time":"2019-01-11 09:54","dizhi":"杭州","prer":"管理员"},
              {"name":"root1111231f","time":"2019-01-11 09:54","dizhi":"深圳","prer":"管理员"},
              {"name":"adminfjdksl3890","time":"2019-01-11 09:54","dizhi":"深圳","prer":"管理员"},
              {"name":"qazqazq","time":"2019-01-11 09:54","dizhi":"广州","prer":"管理员"},
              {"name":"abcvqq","time":"2019-01-11 09:54","dizhi":"沈阳","prer":"管理员"},
              {"name":"suwei1994","time":"2019-01-11 09:54","dizhi":"北京","prer":"管理员"},
              {"name":"root1111231","time":"2019-01-11 09:54","dizhi":"","prer":"管理员"}
            ]
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
