import {RECEIVE_SHOPS,FILTER_SHOPS,ADD_SHOPS, RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAT_CART,
  RECEIVE_SEARCH_SHOPS,
  RECEIVE_CITYINFO,
  RECEIVE_LETTER,
  RECEIVE_HOTCITY,
  } from './mutation-types'
import APIs from '../api'
import Vue from 'vue'
import cityListApi from '../api/CityApi';
export default {

  [RECEIVE_SHOPS](state, {shops}) {
      state.shops = shops,
      state.ss=state.shops
  },
  //根据data参数过滤匹配商家
  [FILTER_SHOPS](state,data){
      if (data==1){
        //console.log(state.shops)
        state.ss=state.shops.filter(sp=>sp.biaoq.indexOf("品质联盟")!=-1)
        //console.log(state.shops)
      }else if (data==2){
        state.ss=state.shops.filter(sp=>sp.juli.indexOf("km")==-1)
      }else if (data==4){
        state.ss=state.shops.sort((a,b)=>{
          return b.danshu-a.danshu
        })
      }
    },
  //模拟异步获取商家列表
  [ADD_SHOPS](state){
    state.scro = true;
    clearTimeout(timers)
    if (state.ss.length >= 25) {
      state.scro = false;
      state.finished = true;
      return
    }
    let timers=setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        state.ss.push(state.shops[i]);
      }
    }, 1500);
  },





  [RECEIVE_GOODS](state,{goods}){
    state.goods =goods
    // console.log(state.goods)
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings=ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){// 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
     对象
     属性名
     属性值
      */
      Vue.set(food,'count',1)// 让新增的属性也有数据绑定
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--;
      if(food.count===0){
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAT_CART](state){
    // 清除food中的count
    state.cartFoods.forEach(food=>{food.count=0})
    // 移除购物车中所有购物项
    state.cartFoods=[];
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  },
  [RECEIVE_CITYINFO](state,{cityInfo}){//未排序的city原始数组
    state.cityInfo = cityInfo
    // console.log(state.cityInfo)
  },
  [RECEIVE_LETTER](state,{letter}){
    state.letter = letter
    // console.log(state.letter)
  },
  [RECEIVE_HOTCITY](state,{hotCity}){
    state.hotCity = hotCity
    // console.log(state.hotCity)
  },

  changeCity(state,curCity){
    state.curCity = curCity;
  },
  alphabetChange(state,curLetter){//当前触发的letter
    state.curLetter = curLetter
    console.log(state.curLetter)
  },

}
