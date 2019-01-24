// import { CITYURL } from '../common/Urls/AjaxURLSchema'
const CITYURL='../../static/json/city.json'
export default{
  getCitiesInfo(cb){
    fetch(CITYURL).then(res=>{
      res.json().then(data=>{
        cb(data);
        // console.log(data);
      })
    })
  }
}
