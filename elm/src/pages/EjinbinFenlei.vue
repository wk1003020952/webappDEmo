<template>
  <div>
    <ul>
      <li v-for="(i,index) in info[this.$route.query.id].one" :key="index">
        <a href="##">
          <img :src="i.image"/>
          <h3>{{i.title}}</h3>
          <p>{{i.price}}</p>
          <span>{{i.give}}</span>
        </a>
      </li>
    </ul>
    <p>没有更多啦！</p>
  </div>
</template>

<script>
    export default {
        name: "EjinbinFenlei",
      data(){
          return{
            info:[
              {
              one:[
                {
                  image:["../../static/img/jinbi/5bfi7zqcg1.png"],
                  title:"咪咕阅读会员月卡",
                  price:"9金币",
                  give:"兑换"
                },
                {
                  image:["../../static/img/jinbi/1b95mxhetf.png"],
                  title:"网易考拉红卡月卡",
                  price:"20金币",
                  give:"兑换"
                },
                {
                  image:["../../static/img/jinbi/2abpr8tusi.png"],
                  title:"黑人牙刷",
                  price:"1200金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/n4aqx89wyb.png"],
                  title:"维达抽纸",
                  price:"1700金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/sio7p3gz8a.png"],
                  title:"USB分线器",
                  price:"1300金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/wtcsbpg4n7.png"],
                  title:"妙洁保鲜膜",
                  price:"1200金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/qufoajg7i1.jpg"],
                  title:"纯棉抗菌船袜",
                  price:"1200金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/qjacradihf.jpg"],
                  title:"正品丝蕴电吹风",
                  price:"1200金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/6bcdr7ah90.png"],
                  title:"圣诞大礼包",
                  price:"1200金币",
                  give:"兑完"
                },
                {
                  image:["../../static/img/jinbi/rmek5wnvy7.jpg"],
                  title:"亚马逊prime",
                  price:"1200金币",
                  give:"兑完"
                },
              ]
            },
              {
                one:[
                    {
                      image:["../../static/img/jinbi/v4vhrej3bq.png"],
                      title:"3元饿了么红包－鲜果超市红包",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/b3unb2iq84.png"],
                      title:"5元饿了么红包－鲜果超市红包",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/5026o64xpw.png"],
                      title:"9元饿了么红包－鲜果超市红包",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/s06r47kzlf.jpg"],
                      title:"铂瑞正品声波电动牙刷－超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/do7p3fmhz8.jpg"],
                      title:"304不锈钢保温杯－超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/8lji6at3tn.jpg"],
                      title:"创意双层反方向雨伞-超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/2amqjblx28.jpg"],
                      title:"萌宠智能充电宝-超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/rc9mvabknm.jpg"],
                      title:"真空保温壶-超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/icueazmyyz.jpg"],
                      title:"飞科三刀头剃须刀-超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    },
                    {
                      image:["../../static/img/jinbi/aiqteyda0a.jpg"],
                      title:"超强吸水浴巾赠毛巾-超级会员专享",
                      price:"9金币",
                      give:"兑换"
                    }
                    ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/v4vhrej3bq.png"],
                    title:"3元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/b3unb2iq84.png"],
                    title:"5元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5026o64xpw.png"],
                    title:"9元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/v4vhrej3bq.png"],
                    title:"3元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/b3unb2iq84.png"],
                    title:"5元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5026o64xpw.png"],
                    title:"9元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/6bcdr7ah90.png"],
                    title:"圣诞大礼包",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/rmek5wnvy7.jpg"],
                    title:"亚马逊prime",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/76iutnxx2y.png"],
                    title:"PPTV会员卡",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/0ewfhgvtxo.png"],
                    title:"优酷会员",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/10h93e7uvm.png"],
                    title:"腾讯视频",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/qgkgdjbipj.png"],
                    title:"货拉拉优惠卷",
                    price:"1200金币",
                    give:"兑完"
                  },
                  {
                    image:["../../static/img/jinbi/frdkfchbsi.jpg"],
                    title:"搜狐VIP邮箱尊享月卡",
                    price:"1200金币",
                    give:"兑完"
                  },
                ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/v4vhrej3bq.png"],
                    title:"3元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/b3unb2iq84.png"],
                    title:"5元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5026o64xpw.png"],
                    title:"9元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/s06r47kzlf.jpg"],
                    title:"铂瑞正品声波电动牙刷－超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/do7p3fmhz8.jpg"],
                    title:"304不锈钢保温杯－超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/8lji6at3tn.jpg"],
                    title:"创意双层反方向雨伞-超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/2amqjblx28.jpg"],
                    title:"萌宠智能充电宝-超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/rc9mvabknm.jpg"],
                    title:"真空保温壶-超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/icueazmyyz.jpg"],
                    title:"飞科三刀头剃须刀-超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/aiqteyda0a.jpg"],
                    title:"超强吸水浴巾赠毛巾-超级会员专享",
                    price:"9金币",
                    give:"兑换"
                  }
                ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/v4vhrej3bq.png"],
                    title:"3元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/b3unb2iq84.png"],
                    title:"5元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5026o64xpw.png"],
                    title:"9元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/v4vhrej3bq.png"],
                    title:"3元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/b3unb2iq84.png"],
                    title:"5元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5026o64xpw.png"],
                    title:"9元饿了么红包－鲜果超市红包",
                    price:"9金币",
                    give:"兑换"
                  },
                ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/1pcfqsi03o.jpg"],
                    title:"澳大利亚丁戈树红标经典红葡萄酒750ml",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/1kdeyo7exc.jpg"],
                    title:"法国原装原瓶进口佳丽昂精选干红",
                    price:"9金币",
                    give:"兑换"
                  },
                ]
              },
              {
                one:[
                  {
                    image:["../../static/img/jinbi/keeutsff5a.jpg"],
                    title:"奢华迷你口红5支套装",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/s2slsiydgv.jpg"],
                    title:"芦荟爽肤水",
                    price:"9金币",
                    give:"兑换"
                  },
                  {
                    image:["../../static/img/jinbi/5u6n8ebmxu.jpg"],
                    title:"植萃护手霜5件套",
                    price:"9金币",
                    give:"兑换"
                  }
                ]
              },
            ]
          }
      }
    }
</script>

<style scoped lang="stylus">
  div{
    &>ul{
      display: flex;
      flex-direction: column;
      &>li{
        width: 100%;
        padding: .14rem .12rem;
        border-bottom: 1px solid #fafafa;
        &>a{
          position: relative;
          display: flex;
          &>img{
            height: .79rem;
          }
          &>h3{
            font-size: 15px;
            color: #000000;
            font-weight: 100;
            padding-left: .17rem;
            overflow: hidden;
            width: 1.8rem;
            margin-top: .115rem;
            margin-bottom: .175rem;
            white-space: nowrap;
            text-overflow: ellipsis
          }
          &>p{
            position: absolute;
            top: .5rem;
            left: 1.45rem;
            font-size: 13px;
            color: #ff6000;
          }
          &>span{
            position: absolute;
            display: block;
            width:.45rem ;
            height: .27rem;
            border: 1px solid #ff6000;
            border-radius: 4px;
            text-align: center;
            line-height: .27rem;
            color: #ff6000;
            top: .25rem;
            right: 0;
          }
        }
      }
    }
    &>p{
      height: .35rem;
      line-height: .35rem;
      text-align: center;
      color: #666666;
      font-size: 15px;
      background: #f0f0f0;
    }
  }
</style>
