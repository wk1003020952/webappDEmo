<!--suppress ALL -->
<template>
  <div class="shopGoods">
    <section class="goodpic">
      <!--放店铺的图片的-->
    </section>
    <section class="cur-season">
      <h2>当季新品</h2>
      <div class="ullist">
        <ul>
          <li v-if="curFoods" v-for="(curFood,index) in curFoods" :key="index">
            <img :src="curFood.image">
            <div>
              <p class="tit">{{curFood.name}}</p>
              <p class="empty">
                <span>月售{{curFood.sellCount}}</span>
                <span>好评率{{curFood.rating}}</span>
              </p>
              <div class="money" style="color:rgb(26, 172, 122);">
                <p style="font-size:16px; ">
                  <span style="font-size:14px;">￥</span>
                  {{curFood.price}}
                  <span style="font-size:12px;">起</span>
                </p>
                <span>
                <i style="font-size:20px" class="iconfont icon-jia"></i>
              </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="goodslist">
      <main class="goods">
        <div ref="menuWrapper" class="menuWrapper">
          <ul>
            <!--current-->
            <!-- 如果index等于currentIndex,就为这个li添加一个current类，改变左侧导航栏的背景颜色-->
            <li class="menu-item bottom-border-1px" v-if="goods" v-for="(good,index) in goods" :key="index"
              :class="{'curren':currentIndex1===index}" @click="clickMenuItem(index)">
              <span class="text">
                <img class="icon" :src="good.icon" v-if="good.icon">
                {{good.name}}
              </span>
            </li>
          </ul>
        </div>
        <div ref="foodsWrapper" class="foodsWrapper">
          <ul ref="foodsUl">
            <li ref="foodList" class="food-list-hook" v-if="goods" v-for="(good,index) in goods" :key="index">
              <h1 class="title">{{good.name}}</h1>
              <ul>
                <li class="food-item bottom-border-1px" v-if="good" v-for="(food,index) in good.foods"
                :key="index" @click="showFood(food)">
                  <div class="icon">
                    <img :src="food.icon" width="95" height="95">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}份</span>
                      <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                      <span class="old" v-if="food.oldPrice">{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper" @click.stop="">
                      <e-shop-cart-control :food = 'food'></e-shop-cart-control>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <e-shop-cart></e-shop-cart>
      </main>
      <!--food detail   食品详情页-->
      <e-shop-goods-food :food="food" ref="food"></e-shop-goods-food>
    </section>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState,mapGetters} from 'vuex'

    // import EMsiteShopList from "../Msite/EMsiteShopList";
    import EShopCartControl from "./EShopCartControl";
    import EShopGoodsFood from "./EShopGoodsFood";
    import EShopCart from "./EShopCart";
    export default {
      name: "EShopGoods",
      props:[],
      components: {EShopCart, EShopGoodsFood, EShopCartControl,},
      data(){
        return {
          scrollY:0,//右侧滑动的Y轴坐标
          tops:[],//所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）
          listHeight: [],
          food:{},//需要显示的food
          curFoods:[],
        }
      },
      beforeCreate(){
        this.$store.dispatch('getShopGoods')
      },
      created(){
      },
      mounted(){
        setTimeout(()=>{
          this._initTops()
          this._initScroll()
          this.curSeason()//初始化当季新品
        },150)//如果刷新后，页面某些功能没反应，那就稍微加大等待时间
      },
      updated(){

      },
      computed:{
        ...mapGetters({
          goods:'getterGoods',
        }),
        //计算得到当前分类的下标
        currentIndex1(){//初始和相关数据发生了变化
          // 得到条件数据
          // console.log( `currentIndex:${this.scrollY}`)
          const {scrollY,tops} = this;
          // 根据条件计算产生一个结果
          const index = tops.findIndex((top,index)=>{
            //scrollY>=当前top && scrollY<下一个top
            return scrollY >= top && scrollY<tops[index+1]
          });
          //返回结果
          return index
        }
      },
      methods:{
        // 初始化滚动
        _initScroll(){
              // 列表显示之后创建
              this.menuWraper = new BScroll(this.$refs.menuWrapper,{click:true});
              this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
                probeType: 2,  // 因为惯性滑动不会触发
                click:true,
              })
              // console.log( this.foodsScroll)
              // 给右侧列表绑定scroll监听
              this.foodsScroll.on('scroll',(pos)=>{
                this.scrollY = Math.abs(Math.round(pos.y));//本身是个负值，取正值
                // console.log(`scroll:${this.scrollY}`)
              })
              // 给右侧列表绑定scroll结束的监听
              this.foodsScroll.on('scrollEnd',(pos)=>{
                this.scrollY = Math.abs(Math.round(pos.y))
                // console.log(`scrollEnd:${this.scrollY}`)
              })
        },
        // 初始化tops
        _initTops(){
          // 1. 初始化tops
          const tops = [];
          let top = 0;
          tops.push(top)
          // 2. 收集
          // 找到所有分类的li
          let lis = this.$refs.foodList
          lis.forEach(li=>{
            top += li.clientHeight
            tops.push(top)
          })
          // 3. 更新数据
          this.tops = tops
          // console.log(`_inittops:${ this.tops}`)
        },
        clickMenuItem(index){
          // console.log(index)
          //使用右侧列表滑动到对应的位置

          //得到目标位置的scroll
          const scrollY = this.tops[index]
        // 立即更新scrollY（让点击的分类项成为当前分类）
          this.scrollY = scrollY;
          // 平滑滑动右侧列表
          this.foodsScroll.scrollTo(0,-scrollY,300)
        },
        // 显示点击的food
        showFood(food){
          // 设置food
          this.food = food
          // 显示food组件 (在父组件中调用子组件对象的方法)
          this.$refs.food.toggleShow();
        },
        curSeason(){
          if(this.goods){
            return this.goods.filter(good=>{
              if(good.name==="当季新品"){
                return this.curFoods = good.foods;
              }
            })
          }
        },
      },
    }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .shopGoods
    max-height:100% !important
  .cur-season
    padding-top: .2rem
    h2
      margin-left:.15rem
      font-weight:700
      font-size: .19rem
      line-height:1.2
      margin-bottom:.15rem
    .ullist
      width: 100%
      overflow: auto
      ul
        padding-left: .15rem
        white-space: nowrap
        li
          display: inline-block
          width: 1.2rem
          margin-right:.1rem
          padding-bottom: .2rem
          img
            width:1.2rem
            height:1.2rem
          .tit
            -ms-text-overflow: ellipsis
            text-overflow: ellipsis
            overflow: hidden
            margin:5px 0 5px
          .empty
            height:.1rem
            margin-bottom:.05rem
            font-size:10px
            color: #999
          .money
            display: flex
            justify-content: space-around
            align-items center

.goodslist
  width: 100%;
  height:100%
  padding-bottom:.5rem
  background: #a87
  position: relative
  .goods
    position: absolute
    top: 0
    left: 0
    width: 100%
    max-height 600px
    display: flex
    display: -webkit-box;
    background: #fff;
    overflow: hidden
    .menuWrapper
      width: 80px
      min-height 100% !important
      background: #f3f5f7
      overflow-y: auto
      .menu-item
        display: table
        height: 54px
        width: 100%
        padding: .1rem .05rem
        line-height:1.2
        color: #666
        font-size:.12rem
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .text
          display: table-cell
          width:100%
          vertical-align: middle
          font-size: 12px
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 2px
            background-size: 12px 12px
            background-repeat: no-repeat
            font-size: 12px
        &.curren
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fa7
          font-weight: 700
          .text
            border-none()
    .foodsWrapper
      flex: 1
      min-height:100% !important
      overflow-y: auto
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
