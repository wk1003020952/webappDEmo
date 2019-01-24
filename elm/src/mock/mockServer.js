/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './shops.json'
import city from './city.json'

// 返回goods的接口
Mock.mock('/goods',{code:0,data:data.goods})
// 返回ratings的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
// 返回info的接口
Mock.mock('/info',{code:0, data:data.info})
//返回cityInfo的接口
Mock.mock('/cityInfo',{code:0,data:city.citylist})
//返回letter的接口
Mock.mock('/letter',{code:0,data:city.letter})
//返回hot的接口
Mock.mock('/hot',{code:0,data:city.hot})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
