/*
包含多个基于state的getter计算属性的对象
 */
export const cityInfo = state=>{state.cityInfo};
export default {
  totalCount(state){
    return state.cartFoods.reduce((proTotal,food)=>proTotal+food.count, 0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((proTotal,food)=>proTotal+food.count*food.price, 0)
  },
  positiveSize(state){
    return state.ratings.reduce((proTotal,rating)=>proTotal+(rating.rateType=0?1:0), 0)
  },
  sortCity(state){//按26个英文字母的顺序给citylist排序并返回新数组
    let templist = [];
    if (state.letter){
      state.letter.map(
        letter => {
          let tempObj = {};
          tempObj.initial = letter;
          tempObj.cityinfo =  state.cityInfo.filter(
            val=>{if(val.initial===letter){return val} }
          );
          templist.push(tempObj);
        }
      )
    }
    // console.log(templist)
    return templist;
  },
  GETCITYINFO:(state)=>{
    return  state.data
  },
  getterGoods(state){
    // console.log(state.goods)
    return state.goods;
  },
  getterRatings(state){
    return state.ratings;
  }
}
