<template>
  <header>
    <router-link tag="div" to="/money">
      <p>{{headerdata.leftbox.left_pdata_one}}</p>
      <p>{{headerdata.leftbox.left_pdata_two}}</p>
      <div>
        <img :src="headerdata.leftbox.left_imgdata"  >
      </div>
    </router-link>
    <div>
      <div v-if="headerdata.rightbox" v-for="i in headerdata.rightbox">
        <div>
          <p class="caption_award">{{i.right_pdata_one}}</p>
          <p class="explain">{{i.right_pdata_two}}</p>
        </div>
        <img :src="i.right_imgdata">
      </div>
    </div>
  </header>
</template>

<script>

    export default {
        name: "find_header",
      components: {},
      data(){
          return{
           headerdata:{
              leftbox:{
                left_pdata_one:"金币商城",
                left_pdata_two:"0元好物在这里",
                left_imgdata:"../../../static/imges/jinbishangcheng.jpg"
              },
             rightbox:[
               {
                 right_pdata_one:"推荐有奖",
                 right_pdata_two:"10元现金拿不停",
                 right_imgdata:"../../../static/imges/jiangpin.jpg"
               },
               {
                 right_pdata_one:"周边优惠",
                 right_pdata_two:"领取口碑好券",
                 right_imgdata:"../../../static/imges/youhui.png"
               }
             ]
            }
          }
        }
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 1.51rem;
    display: flex;
    background: #fff; }
  header > div {
    width: 50%;
    height: 100%; }
  header > div:nth-child(1) {
    padding: .22rem .11rem 0 .16rem;
    border-right: 1px solid #f5f5f5; }
  header > div:nth-child(1) > p:nth-child(1) {
    font-size: 16px;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: .06rem;
    color: #ffa826; }
  header > div:nth-child(1) > p:nth-child(2) {
    font-size: 12px;
    line-height: .14rem;
    color: #999;
    overflow: hidden; }
  header > div:nth-child(1) div {
    height: .76rem;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row-reverse; }
  header > div:nth-child(1) div img {
    height: .76rem;
    width: .76rem; }
  header > div:nth-child(2) {
    width: 50%;
    height: 100%;
    display: flex;
    padding: 0 .15rem;
    flex-direction: column; }
  header > div:nth-child(2) > div {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center; }
  header > div:nth-child(2) > div img {
    width: .45rem;
    height: .45rem; }
  header > div:nth-child(2) > div:nth-child(1) {
    border-bottom: 1px solid #f5f5f5; }
  header > div:nth-child(2) .caption_award, header > div:nth-child(2) .caption_sale {
    font-size: 16px;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: .06rem;
    color: #1BA9E1; }
  header > div:nth-child(2) .caption_sale {
    color: #F5A9A5; }
  header > div:nth-child(2) .explain {
    font-size: 12px;
    color: #999999; }
</style>
