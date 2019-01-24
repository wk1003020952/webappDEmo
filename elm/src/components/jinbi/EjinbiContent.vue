<template>
  <main>
     <div class="box1">
       <e-swiper>
         <div class="swiper-slide" slot="swiper-con">
           <img width="100%" src="../../../static/img/jinbi/fdalz438zd.jpg"/>
           <img width="100%" src="../../../static/img/jinbi/ufdoxx0w49.jpg"/>
           <img width="100%" src="../../../static/img/jinbi/fh9iw1evwk.jpg"/>
         </div>
         <div class="swiper-slide" slot="swiper-con">
           <img width="100%" src="../../../static/img/jinbi/ufdoxx0w49.jpg"/>
         </div>
         <div class="swiper-slide" slot="swiper-con">
           <img width="100%" src="../../../static/img/jinbi/fh9iw1evwk.jpg"/>
         </div>
       </e-swiper>

       <!--<div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide"><img src="../../../static/img/jinbi/fdalz438zd.jpg"/> </div>
           <div class="swiper-slide"><img src="../../../static/img/jinbi/ufdoxx0w49.jpg"/></div>
           <div class="swiper-slide"><img src="../../../static/img/jinbi/fh9iw1evwk.jpg"/></div>
         </div>
         &lt;!&ndash; Add Pagination &ndash;&gt;
         <div class="swiper-pagination"></div>
       </div>-->
     </div>
    <div class="box2">
      <ul>
        <router-link tag="li"  v-for="(p,index) in lists" :key="index" :to="'/moneylist?id='+index">
          <a href="##">
            <img :src="p.image"/>
            <span>{{p.title}}</span>
          </a>
        </router-link>
      </ul>
    </div>
    <div class="box3">
      <p>大家都在兑</p>
    </div>
    <div class="box4">
      <a href="##">
        <p>3元饿了么红包－鲜果超...</p>
        <p><span>90</span> 金币</p>
        <img src="../../../static/img/jinbi/v4vhrej3bq.png"/>
      </a>
      <a href="##">
        <p>5元饿了么红包－鲜果超...</p>
        <p><span>150</span> 金币</p>
        <img src="../../../static/img/jinbi/b3unb2iq84.png"/>
      </a>
      <a href="##">
        <p>9元饿了么红包－鲜果超...</p>
        <p><span>270</span> 金币</p>
        <img src="../../../static/img/jinbi/5026o64xpw.png"/>
      </a>
      <a href="##" v-for=" a in item">
        <p>{{a.title}}</p>
        <p><span>{{a.price}}</span> 金币<span>{{a.hot}}</span></p>
        <img :src="a.image"/>
      </a>
    </div>
    <div class="box5">
      <p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
      <p>合作请联系：ejifen@ele.me</p>
    </div>
  </main>
</template>

<script>
    import ESwiper from "../public/ESwiper";
    export default {
        name: "EjinbiContent",
      components: {ESwiper},
      data(){
          return{
            item:[
              {
                title:"充电式电动牙刷",
                price:"9",
                hot:"+ 35",
                image:"../../../static/img/jinbi/w9auzzxyvl.jpg"
              },
              {
                title:"太阳能移动充电宝",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/02cx4h1zob.jpg"
              },
              {
                title:"家用烘鞋器",
                price:"9",
                hot:"+ 35",
                image:"../../../static/img/jinbi/939ts1xr5t.jpg"
              },
              {
                title:"隐形蓝牙无线耳机....",
                price:"9",
                hot:"+ 55",
                image:"../../../static/img/jinbi/240b8i4cz5.jpeg"
              },
              {
                title:"流光苹果安卓发光线....",
                price:"9",
                hot:"+ 18",
                image:"../../../static/img/jinbi/aw95j8re3i.jpg"
              },
              {
                title:"迷你取暖器",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/qd3yhhd5kl.jpg"
              },
              {
                title:"男士剃须刀",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/ht8kgz6qwt.jpg"
              },
              {
                title:"迷你usb加湿器空气净化静音",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/sv3s2dlo15.jpg"
              },
              {
                title:"锌合金弹簧充电线",
                price:"9",
                hot:"+ 18",
                image:"../../../static/img/jinbi/22i7orzlmo.jpg"
              },
              {
                title:"加厚增压花洒浴室三件套",
                price:"9",
                hot:"+ 19",
                image:"../../../static/img/jinbi/nv1k2r8o6r.jpg"
              },
              {
                title:"机械手感背光键盘套装",
                price:"9",
                hot:"+ 39.9",
                image:"../../../static/img/jinbi/opslspucvv.jpg"
              },
              {
                title:"电动洁牙器",
                price:"9",
                hot:"+ 59",
                image:"../../../static/img/jinbi/5w7p7ggrph.jpg"
              },
              {
                title:"电动按摩器针灸理疗仪",
                price:"9",
                hot:"+ 56",
                image:"../../../static/img/jinbi/q5as490zm3.jpg"
              },
              {
                title:"充电眼部按摩护眼仪",
                price:"9",
                hot:"+ 59",
                image:"../../../static/img/jinbi/u6n88klhf4.jpg"
              },
              {
                title:"创意小呆猫充电宝",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/6tf2acni51.jpg"
              },
              {
                title:"喵星萌物充电宝",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/2amqjblx28.jpg"
              },
              {
                title:"黑胶表情包晴雨折叠伞",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/tvgjawoe1v.jpg"
              },
              {
                title:"无线充电鼠标超薄款",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/pp6lt0oe99.jpg"
              },
              {
                title:"悬浮机械手",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/vl9654ol2t.jpg"
              },
              {
                title:"竹浆卷纸",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/3dkiwlm4lp.jpg"
              },
              {
                title:"突破羽毛球拍套装",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/rg88dz9dc1.jpg"
              },
              {
                title:"暴走运动刷步器",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/srco0iulnw.jpg"
              },
              {
                title:"2瓶8斤装洗衣液",
                price:"9",
                hot:"+ 39",
                image:"../../../static/img/jinbi/nl4w5cljpa.jpg"
              },


            ],
            lists:[
              {
                image:"../../../static/img/jinbi/custom_default_icon.png",
                title:"0元兑换"
              },
              {
                image:"../../../static/img/jinbi/custom_default_icon.png",
                title:"会员专区"
              },
              {
                image:"../../../static/img/jinbi/gawmi0zjp2.jpg",
                title:"红包专区"
              },
              {
                image:"../../../static/img/jinbi/by82zpc962.png",
                title:"优惠礼券"
              },
              {
                image:"../../../static/img/jinbi/e2gpweapqd.png",
                title:"数码家电"
              },
              {
                image:"../../../static/img/jinbi/q4eion0i4l.png",
                title:"日常家具"
              },
              {
                image:"../../../static/img/jinbi/yrvj0axxff.png",
                title:"食品饮料"
              },
              {
                image:"../../../static/img/jinbi/5glf4cj3io.png",
                title:"个人美妆"
              }

            ]
          }
      },
    }
</script>


<style  lang="stylus">
  main{
    background: #f6f6f6;
    .box1{
      .swiper-pagination-bullet-active{
        background: #FFFFFF;
      }
      margin-top: .1rem;
      .swiper-container {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img{
        width:100% ;
      }
    }
    .box2{
      background: #FFFFFF;
      ul{
        display: flex;
        margin-top: .15rem;
        flex-wrap: wrap;
        &>li{
          width: 25%;
          &>a{
            display: block;
            text-align: center;
            margin .08rem 0
            &>img{
              width: .45rem;
              height: .45rem;
              border-radius: 50%;
              display inline-block
              margin-bottom .05rem
            }
            &>span{
              display: block;
              font-size: 12px;
            }
          }
        }
      }
    }
    .box3{
      background: #FFFFFF;
      p{
        margin-top: .08rem;
        height: .37rem;
        line-height: .37rem;
        padding-left: .14rem;
        border-bottom: 1px solid #fafafa;
        font-size: 12px;
        color: #666666;
      }
    }
    .box4{
      background: #FFFFFF;
      display: flex;
      flex-wrap: wrap;
      &>a{
        width: 50%;
        border: 1px solid #fafafa;
        padding: .14rem;
        p{
          margin .08rem 0
        }
        &>p:nth-child(1){
          font-size: 13px;
          color: #000000;
        }
        &>p:nth-child(2){
          font-size: 12px;
          color: #666666;
          &>span:nth-child(1){
            color: #f60;
          }
          &>span:nth-child(2){
            display: inline-block;
            width:.35rem;
            height:.14rem;
            background: #05b2c2;
            border-radius: 3px;
            color: #FFFFFF;
            margin-left: 5px;
            text-align: center;
            line-height: .14rem;
          }
        }
        &>img{
          height: .91rem;
          width: 100%;
        }
      }
    }
    .box5{
      padding: 2px 0;
      &>p{
        text-align: center;
        font-size: 10px;
        color: #666666;
      }
    }
  }
</style>
