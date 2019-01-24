import Vue from 'vue'
import Router from 'vue-router'
//import Msite from '@/pages/Msite'
/*import ESearch from '@/pages/ESearch'
import FooterGuide from '@/pages/FooterGuide'
import EMsiteCity from '@/pages/EMsiteCity'
import Ewode from '@/pages/Ewode'
import EOrder from '@/pages/EOrder'
import EFind from '@/pages/EFind'
import ELogin from '@/pages/ELogin'
import Ejinbi from '@/pages/Ejinbi'
import EjinbinFenlei from '@/pages/EjinbinFenlei'*/
import { Dialog } from 'vant';
const Msite = () => import('@/pages/Msite')
const ESearch = () => import('@/pages/ESearch')
const FooterGuide = () => import('@/pages/FooterGuide')
const EMsiteCity = () => import('@/pages/EMsiteCity')
const Ewode = () => import('@/pages/Ewode')
const EOrder = () => import('@/pages/EOrder')
const EFind = () => import('@/pages/EFind')
const ELogin = () => import('@/pages/ELogin')
const Ejinbi = () => import('@/pages/Ejinbi')
const EjinbinFenlei = () => import('@/pages/EjinbinFenlei')
const Shop = () => import('@/pages/Shop')
const EShopGoods = () => import('@/components/Shops/EShopGoods')
const EShopInfo = () => import('@/components/Shops/EShopInfo')
const EShopRatings = () => import('@/components/Shops/EShopRatings')


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:"",
      redirect:'/main/msite'
    },
    {
      path:'/main',
      name:'FooterGuide',
      component:FooterGuide,
      children:[
        {
          path:'msite',
          name:'Msite',
          component: Msite
        },
        {
          path:'wode',
          name:'Ewode',
          component:Ewode,
        },
        {
          path:'order',
          name:'EOrder',
          component:EOrder
        },
        {
          path:'find',
          name:'find',
          component:EFind
        }
      ]
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {path:'',redirect: '/shop/goods'},
        {path:"/shop/goods",name:'EShopGoods',component:EShopGoods},
        {path:"/shop/ratings",name:'EShopRatings',component:EShopRatings},
        {path:"/shop/info",name:'EShopInfo',component:EShopInfo},
      ],
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'ESearch',
      component: ESearch
    },
    {
      path:'/emsitecity',
      name:'EMsiteCity',
      component:EMsiteCity,
    },
    {
      path:'/login',
      name:'ELogin',
      component:ELogin,
    },
    {
      path:'/money',
      name:'Ejinbi',
      component:Ejinbi
    },
    {
      path:'/moneylist',
      name:'EjinbinFenlei',
      component:EjinbinFenlei
    }
  ]
});

router.beforeEach((to, from, next) => {
  var isLogin=localStorage.getItem("users")
      //如果用户token不存在则跳转到login页面
  if (isLogin) {
      //如果用户信息存在则往下执行。
    if (to.path === '/login') {
      next(false);
    } else {
      next()
    }
  }else {
    if (to.path === '/main/order'){
      Dialog.alert({
        message: '请先登陆后在查看订单信息'
      }).then(() => {
        next('/login')
      });
    }else {
      next();
    }
  }
});

export default router;

