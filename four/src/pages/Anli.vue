<template>
  <div>
    <header>
      <h1>
        404UI<br/>
        <a>优站精选</a>
      </h1>
    </header>
    <div class="main">
      <h3>WebApp</h3>
      <ul class="webapp">
        <li>
        <img src="../../static/img/x1.jpg"/>
        </li>
        <li>
          <img src="../../static/img/x2.jpg"/>
        </li>
        <li>
          <img src="../../static/img/x3.jpg"/>
        </li>
        <li>
          <img src="../../static/img/x4.jpg"/>
        </li>
        <li>
          <img src="../../static/img/x5.jpg"/>
        </li>
      </ul>
      <h3>PC全栈</h3>
      <ul class="pc">
        <li>
          <img src="../../static/img/p1.png"/>
        </li>
        <li>
          <img src="../../static/img/p4.png"/>
        </li>
        <li>
          <img src="../../static/img/p2.png"/>
        </li>
        <li>
          <img src="../../static/img/p3.png"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Anli"
    }
</script>

<style scoped lang="stylus">
  header
    width 100%
    min-height: 400px;
    background url(http://assets.youzhan.org/img/d/dd/2de797545de56274f03a5920eb3a1.jpg)
    position relative
    left 0
    top 0
    h1
      position absolute
      width 200px
      top:100px;
      left:0;
      right:0;
      bottom:100px;
      margin:auto
      text-align center
      font-weight: 700;
      color: #fff;
      font-size: 64px;
      a
        font-weight: 500;
        color: #fff;
        font-size 40px



  div.main
    background-color #ebf1f3
    padding 20px 100px
    h3
      font-size 34px
      text-align center
    ul.webapp
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 315px
        height 500px
        background-color black
        margin 25px
        img
          width 100%
          height 100%
    ul.pc
      width 100%
      display flex
      justify-content space-around
      flex-wrap wrap
      li
        width 45%
        height 300px
        margin 25px
        img
          width 100%
          height 100%
</style>
