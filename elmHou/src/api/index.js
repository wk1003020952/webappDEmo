import ajax from './ajax'
import {Login} from '../common/AjaxURLSchema'
export default{
  //登陆查询
  reqLogin:(userinfo)=>ajax(Login,userinfo),
}
