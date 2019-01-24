<template>
  <main>
    <div class="gift_headline">
      <span></span>
      <div>{{maindata.headdata.div_data}}</div>
      <span></span>
    </div>
    <div>
      <p>{{maindata.headdata.p_data}}</p>
    </div>
    <ul>
      <li v-if="maindata.ul_listdata" v-for="i in maindata.ul_listdata">
        <div>
          <span>{{i.div_onedata.spandata}}</span>
          <img :src="i.div_onedata.imgdata">
        </div>
        <div>
          <p>{{i.div_twodata.p_onedata}}</p>
          <p>{{i.div_twodata.p_twodata}}<span>{{i.div_twodata.span_data}}</span></p>
        </div>
      </li>
    </ul>
    <div class="rout_page">
      <router-link tag="a" to="/money">{{maindata.moredata}}</router-link>
    </div>
  </main>
</template>

<script>
    export default {
        name: "find_main",
      data(){
          return{
            maindata:{
              headdata:{
                div_data:"限时好礼",
                p_data:"金币换好礼"
              },
              ul_listdata:[
                {
                  div_onedata:{
                    spandata:"限时优惠",
                    imgdata:"../../../static/imges/xianguochaoshi.png"
                  },
                  div_twodata:{
                    p_onedata:"3元饿了么鲜果精选特卖",
                    p_twodata:"90金币",
                    span_data:"￥3"
                  }
                },
                {
                  div_onedata:{
                    spandata:"特价换购",
                    imgdata:"../../../static/imges/saodijiqiren.jpg"
                  },
                  div_twodata:{
                    p_onedata:"扫地机器人",
                    p_twodata:"9金币",
                    span_data:"￥99"
                  }
                },
                {
                  div_onedata:{
                    spandata:"特价换购",
                    imgdata:"../../../static/imges/diandonganmoyi.jpg"
                  },
                  div_twodata:{
                    p_onedata:"电动按摩理疗仪器",
                    p_twodata:"9金币",
                    span_data:"￥239"
                  }
                }
              ],
              moredata:"查看更多"
            }
          }
        }
    }
</script>

<style scoped>
  main {
    background: #fff;
    width: 100%;
    flex: 1;
    padding: .2rem 0 0 0;
    margin-top: .12rem; }
  main .gift_headline {
    width: 100%;
    height: .22rem;
    display: flex;
    justify-content: center;
    align-items: center; }
  main .gift_headline > span {
    display: block;
    height: 100%;
    width: .15rem; }
  main .gift_headline > span:nth-child(1) {
    background: url("../../../static/imges/left_line.png") no-repeat center;
    background-size: contain; }
  main .gift_headline > span:nth-child(3) {
    background: url("../../../static/imges/right_line.png") no-repeat center;
    background-size: contain; }
  main .gift_headline div {
    padding-left: .22rem;
    background: url("../../../static/imges/naozhong.png") no-repeat left center;
    background-size: .18rem;
    margin: 0 .05rem;
    color: #333;
    font-size: 16px;
    font-weight: 600;
    line-height: .22rem; }
  main > div:nth-child(2) {
    overflow: hidden;
    font-size: 12px;
    color: #C5C5C5;
    text-align: center;
    margin-bottom: .08rem; }
  main > ul {
    width: 100%;
    height: auto;
    display: flex;
    padding: 12px 0 15px 15px; }
  main > ul li {
    height: auto;
    width: 33.33333%;
    margin-right: .06rem; }
  main > ul li > div:nth-child(1) {
    margin-bottom: .09rem; }
  main > ul li > div:nth-child(1) span {
    display: inline-block;
    height: .16rem;
    font-size: 14px;
    line-height: .16rem;
    color: #fff;
    background: #413D3C;
    padding: 0 .03rem; }
  main > ul li > div:nth-child(1) img {
    width: 100%;
    height: .94rem; }
  main > ul li > div:nth-child(2) > p:nth-child(1) {
    font-size: 14px;
    line-height: 16px;
    color: #333;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: .05rem; }
  main > ul li > div:nth-child(2) > p:nth-child(2) {
    font-size: 14px;
    color: #FF6750;
    line-height: 24px; }
  main > ul li > div:nth-child(2) > p:nth-child(2) span {
    font-size: 10px;
    color: #999999; }
  main .rout_page {
    margin-top: 15px;
    text-align: center; }
  main .rout_page a {
    font-size: 14px;
    color: #999999; }
</style>
