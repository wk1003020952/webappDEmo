import ajax from './ajax'
import {INDEX,SHOPS,Login} from '../common/AjaxURLSchema'
const BASE_URL='/api';
export default{
  //获取msite页面其他信息
  reqCategorys:()=> ajax(INDEX),
  //获取msite商家列表信息
  reqShops:()=> ajax(SHOPS),
  //登陆查询
  reqLogin:(userinfo)=>ajax(Login,userinfo),

  /**
   * 获取商家信息
   */
   reqShopInfo : ()=>ajax('/info'),
  /**
   * 获取商家评价数组
   */
   reqShopRatings : ()=>ajax('/ratings'),
  /**
   * 获取商家商品数组
   */
  reqShopGoods : ()=>ajax('/goods'),
  /**
   * 获取城市列表原数据
   */
   reqCityInfo:()=>ajax('/cityInfo'),
  /**
   * 获取城市letter数据
   */
   reqLetter:()=>ajax('/letter'),
  /**
   * 获取hot热门城市列表数据
   */
   reqHotCity:()=>ajax('/hot')


}
