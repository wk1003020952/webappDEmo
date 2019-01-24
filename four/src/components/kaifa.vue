<template>
  <div>
    <main class="con">
      <h1>快速上手</h1>
      <h2>安装</h2>
      <p>NPM</p>
      <div class="code">npm install 404ui --save</div>
      <h2>引入组件</h2>
      <p>方式一.按需引入组件</p>
      <div class="code">import FourButton from '404ui/packages/button';</div>
      <p>方式二.全局引入</p>
      <div class="code">
        <p>import FourUI from '404ui'</p>
        <p>Vue.use(FourUI);</p>
      </div>
    </main>
    <publick-view>
       <router-link tag="h3" to="/navbar">基础组件</router-link>
       <router-link tag="h3" to="/message">业务组件</router-link>
    </publick-view>
  </div>
</template>

<script>
    import PublickCode from "./public/PublickCode";
    import PublickView from "./public/PublickView";
    export default {
        name: "kaifa",
      components: {PublickView, PublickCode}
    }
</script>

<style scoped lang="stylus">
  h3
    font-size 30px
    margin 90px 78px
    cursor pointer
  h3:nth-child(1)
    margin-top 110px
  main
    flex:1
    min-width: 300px
    height: 100%
    padding:30px 40px
    h1
      font-size 32px
      color: #333;
      font-weight 400
      margin-bottom 30px
    h2
      font-size 24px
      color: #333;
    p
      line-height: 1.5;
      font-weight: 400;
      margin: 20px 0 10px;
      color: #333;
    div.code
      font-size: 14px;
      overflow-x: auto;
      font-weight: 400;
      border-radius: 3px;
      margin-bottom: 25px;
      position: relative;
      word-break: break-all;
      white-space: pre-wrap;
      color: #455a64;
      padding: 18px 10px 18px 20px;
      background-color: #f1f4f8;
      font-family: Source Code Pro,Monaco,Inconsolata,monospace;
      p
        margin 0
        color: #455a64;
</style>
