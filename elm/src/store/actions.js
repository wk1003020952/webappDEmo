import {RECEIVE_SHOPS,FILTER_SHOPS,ADD_SHOPS,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAT_CART,
  RECEIVE_CITYINFO,
  RECEIVE_LETTER,
  RECEIVE_HOTCITY,
} from './mutation-types'
import APIs from '../api'
// import cityListApi from '../api/CityApi';
export default {
  //异步获取商家列表信息
  async getShops(store) {
    const result = await APIs.reqShops()
    console.log(result[0].shipin[0].shipinlist[0].itemlist)
    store.commit(RECEIVE_SHOPS, {shops: result[0].shipin[0].shipinlist[0].itemlist});
   // console.log("com")
  },
  //根据data参数过滤匹配商家
  filtershops(store,data){
    //console.log(data)
    store.commit(FILTER_SHOPS,data);
  },
  //模拟异步获取商家列表
  addshops(store){
    store.commit(ADD_SHOPS);
  },

  // 异步获取商家信息reqShopInfo
  async getShopInfo({commit}){
    const result = await APIs.reqShopInfo();
    if(result.code ===0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  // 异步获取商家评价列表reqShopRatings
  async getShopRatings({commit},callback){
    const result  = await APIs.reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      // 数据更新了, 通知一下组件
      callback && callback(ratings)
    }
  }
  ,
  // 异步获取商家商品列表reqShopGoods
  async getShopGoods({commit,callback}){
    const result = await APIs.reqShopGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      // 数据更新了, 通知一下组件
      callback && callback(goods)
    }
  },
  // 同步更新food中的count值
  updataFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  // 同步清空购物车
  clearCart({commit,state}){
    commit(CLEAT_CART)
  },

  // 异步获取城市信息reqCityInfo
  async getCityInfo({commit},callback){
    const result = await APIs.reqCityInfo();
    if(result.code ===0){
      const cityInfo = result.data
      commit(RECEIVE_CITYINFO,{cityInfo})
      // console.log(result.data)
      // 数据更新了, 通知一下组件
      callback && callback(result.data)
    }
  },
  // 异步获取城市信息reqLetter
  async getLetter({commit},callback){
    const result = await APIs.reqLetter();
    if(result.code ===0){
      const letter = result.data
      commit(RECEIVE_LETTER,{letter})
      // console.log(result.data)
      // 数据更新了, 通知一下组件
      callback && callback(result.data)
    }
  },
  // 异步获取城市信息reqHotCity
  async getHotCity({commit},callback){
    const result = await APIs.reqHotCity();
    if(result.code ===0){
      const hotCity = result.data
      commit(RECEIVE_HOTCITY,{hotCity})
      // console.log(result.data)
      callback && callback(result.data)
    }
  },
}
