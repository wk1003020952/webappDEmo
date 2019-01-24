<template>
  <div class="login_page">
    <h1>elm后台管理系统</h1>
    <form>
      <div class="name common">
        <input :class="{input_error:userName==''}" type="text" v-model="userName" ref="userName" placeholder="用户名">
        <p v-show="!userName">请输入用户名</p>
      </div>
      <div class="psw common">
        <input :class="{input_error:userPsw==''}" type="password"  @keyup="rule(userPsw)" v-model="userPsw" ref="userPsw" placeholder="密码">
        <p v-show="!userPsw">请输入密码</p>
      </div>
      <a class="login_btn" @click="goIndex">登录</a>
    </form>
  </div>
</template>

<script>
  import $ from '../../node_modules/jquery/dist/jquery.min'
    import Apis from '../api/index'
    export default {
        name: "ELogin",
      components: {},
      data(){
          return{
            userName:'',
            userPsw:'',
          }
      },
      mounted(){
        this.fandein();
      },
      methods: {
        fandein(){
          $('form').fadeIn("slow");
        },
        rule(val) {
          if (val.length > 6) {

          }
          return val
        },
        openFullScreen2() {
          const loading = this.$loading({
            lock: true,
            text: '登录中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        },
        goIndex() {
          if (this.userName && this.userPsw) {
            this.openFullScreen2();
            Apis.reqLogin({"username": this.userName, "password": this.userPsw}).then((data) => {
              console.log(data);
              if (data == 1) {
                localStorage.setItem('users', (this.userName));
                this.$router.push("/");
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
              } else if (data == 0) {
                this.$message({
                  message: '用户名或密码错误',
                  type: 'warning'
                });
              }
            })
          } else {
            this.$message({
              message: '用户名与密码不能为空',
              type: 'error'
            });
          }
        }
      }
    }
</script>

<style lang="stylus">
.login_page
  width: 100%
  height 100%
  background-color: #324057;
  h1
    display: inline-block
    width: 100%
    line-height:1.47
    font-size: 34px
    color: #ffffff
    text-align: center
    -webkit-transform: translateY(100px)
    -moz-transform: translateY(100px)
    -ms-transform: translateY(100px)
    -o-transform: translateY(100px)
    transform: translateY(100px)
  form
    display none;
    width:320px
    height: 200px
    position: absolute
    top: 50%
    left: 50%
    -webkit-transform: translate(-50%,-40%)
    -moz-transform: translate(-50%,-40%)
    -ms-transform: translate(-50%,-40%)
    -o-transform: translate(-50%,-40%)
    transform: translate(-50%,-40%)
    padding:25px
    -webkit-border-radius: 5px
    -moz-border-radius: 5px
    border-radius: 5px
    background: #eee
    .common
      position: relative
      width: 100%
      height:36px
      margin-bottom: 20px
      input
        width: 100%
        padding-left: 20px
        height:100%
        line-height:36px
        border: 1px solid #bfcbd9
        -webkit-border-radius: 4px
        -moz-border-radius: 4px
        border-radius: 4px
        &::foucs
          border-color: #20a0ff
        &:hover
          border-color: #b0b1d0
        &.input_error
          border:1px solid #ff4949
      p
        font-size:12px
        color: #ff4949
    .login_btn
      margin-top 10px
      display inline-block
      text-align center
      width: 100%
      height:36px
      line-height: 36px
      font-size: 16px
      -webkit-border-radius: 4px
      -moz-border-radius: 4px
      border-radius: 4px
      color: #ffffff
      background: #20a0ff
      cursor: pointer
    .hint
      width: 100%
      text-align: center
      font-size:12px
      color: #ff4949

</style>
