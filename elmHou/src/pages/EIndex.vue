<template>
<div id="a">
  <aside>
    <ul class="aside_menu">
      <li v-if="menu.namelist" v-for="(i,index) in menu.namelist" :ref="index" :key="index">
        <p @click="toggles(index)">
          <i :class="i.i"></i>
          <span>{{i.name}}</span>
          <i class="el-icon-arrow-down" v-if="i.namelist"></i>
        </p>
        <ul>
          <router-link  v-for="(s,er) in i.namelist" :key="er" tag="li" :to="`${s.tos}`" >{{s.names}}</router-link>
        </ul>
      </li>
    </ul>
  </aside>
    <div class="cons">
      <header>
          <e-nav-bar class="mianbao"></e-nav-bar>
          <el-dropdown placement="bottom" class=".el_dr">
                <span class="el-dropdown-link">
                   <i class="el-icon-bell"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="goTag(1)">首页</el-dropdown-item>
                <el-dropdown-item @click.native="goTag(2)">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
      </header>
      <main>
        <div v-if="$route.path=='/main'">
          <e-index-echarts></e-index-echarts>
        </div>
        <router-view></router-view>
      </main>
    </div>
</div>
</template>

<script>
  import $ from '../../node_modules/jquery/dist/jquery.min'
  import ENavBar from "../components/public/ENavBar";
  import EIndexEcharts from "../components/index/EIndexEcharts";
  export default {
    name: "EIndex",
    components: {EIndexEcharts, ENavBar},
    data(){
      return{
        menu:{
          "namelist":[
            {"name":"首页","i":"el-icon-menu"},
            {"name":"数据管理","i":"el-icon-document","namelist":[{"names":'用户列表',"tos":'/main/userList'},{"names":'商家列表',"tos":'/main/shopList'},{"names":'食品列表',"tos":'/main/foodlist'},{"names":'订单列表',"tos":'/main/orderList'},{"names":'管理员列表',"tos":'/main/adminList'}]},
            {"name":"添加数据","i":"el-icon-plus","namelist":[{"names":"添加商铺","tos":'/main/shops'},{"names":"添加商品","tos":'/main/goods'}]},
            {"name":"图表","i":"el-icon-star-off","namelist":[{"names":"用户分布","tos":'/main/userprofile'}]},
            {"name":"编辑","i":"el-icon-edit","namelist":[{"names":"文本编辑"}]},
            {"name":"设置","i":"el-icon-setting","namelist":[{"names":"管理员设置"}]},
            {"name":"说明","i":"el-icon-info","namelist":[{"names":"说明"}]}
          ]
        },
        flag:false
      }
    },
    methods: {
      toggles(i){
        if (i===0){
          this.$router.push("/");
          return
        }
        this.flag=!this.flag;
        $(this.$refs[i][0]).find("ul").slideToggle("2000");
        // console.log( $(this.$refs[i][0]).find("p i:last-child"));
        if (this.flag){
          $(this.$refs[i][0]).find("p i:last-child").animate({},1000,function () {
            $(this).css({'transform':'rotateX(180deg)'});
          })
        } else if (!this.flag) {
          $(this.$refs[i][0]).find("p i:last-child").animate({},1000,function () {
            $(this).css({'transform':'rotateX(360deg)'});
          })
        }
      },
      goTag(i){
        if (i===1){
          this.$router.push("/");
        }else if (i===2){
          this.$confirm('您确定要退出吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            window.localStorage.removeItem('users');
            this.$router.push("/login");
          })
        }
        }
      }
  }
</script>

<style scoped lang="stylus">
  div#a
    width 100%
    height 100%
    display flex
    overflow: hidden
    aside
      flex 0 0 210px
      width 210px
      height: 100%;
      background-color: rgb(50, 64, 87);
      ul.aside_menu
        width 100%
        height: 100%;
        color #bfcbd9
        white-space: nowrap
        li
          p
            cursor pointer
            font-size 14px
            margin-left 20px
            padding 16px 0
            i:first-child
              margin-right 10px
            i:last-child
              float right
              margin-right 20px
          &>ul
            display none
            background-color: #1f2d3d;
            li
              cursor pointer
              margin-left 44px
              padding 10px 5px
              font-size 12px
    div.cons
      flex 1
      height: 100%
      display flex
      flex-direction column
      header
        height 60px
        line-height 60px
        padding 0 20px
        background-color: #eff2f7;
        display flex
        justify-content space-between
        .mianbao
          margin-top  22px
        .el-dropdown
          margin-right 30px
          i
            font-size 24px
      main
        flex 1
        overflow-y: auto
        padding 20px
</style>
