<template>
  <div>
    <a href="##">
      金币
    <span>0</span>
    </a>
    <a href="##">
      兑换记录
    </a>
  </div>
</template>

<script>
    export default {
        name: "EjinbiHeader"
    }
</script>

<style scoped lang="stylus">
  div{
    display: table;
    height: .43rem;
    width: 100%;
    background-color: #fff;
    padding: .13rem 0;
    &>a:nth-child(1){
      border-right: 1px solid #CCCCCC;
      background: url("../../../static/img/jinbi/1.png") no-repeat .45rem .02rem;
      display: block;
      width: .19rem;
      height: .17rem;
      width: 50%;
      display: table-cell;
      text-align: center;
      font-size: 14px;
      color: #000000;
      &>span{
        color: #ff6000;
      }
    }
    &>a:nth-child(2){
      background: url("../../../static/img/jinbi/2.png") no-repeat .43rem .02rem;
      display: block;
      width: .19rem;
      height: .17rem;
      width: 50%;
      display: table-cell;
      text-align: center;
      font-size: 14px;
      color: #000000;
    }
  }
</style>
