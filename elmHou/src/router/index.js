import Vue from 'vue'
import Router from 'vue-router'
import EIndex from '@/pages/EIndex'
import ELogin from '@/pages/ELogin'
import IOrder from '@/components/datas/IOrder'
import IShops from '@/components/datas/IShops'
import IGuanli from '@/components/datas/IGuanli'
import IUserInfo from '@/components/datas/IUserInfo'
import EIndexUserProfile from '@/components/bigdata/EIndexUserProfile'
import EIndexFoodList from '@/components/datas/EIndexFoodList'
import nava from '@/components/add/nava'
import Navz from '@/components/add/Navz'


Vue.use(Router)

const router=new Router({
  mode: 'history',
  routes: [
    {
      path:"",
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'EIndex',
      component: EIndex,
      meta: {
        breadcrumbName: "首页"
      },
      children:[
        {
          path:'orderList',
          name:'IOrder',
          component: IOrder,
          meta: {
            breadcrumbName: "订单列表"
          }
        },
        {
          path:'shopList',
          name:'IShops',
          component: IShops,
          meta: {
            breadcrumbName: "商家列表"
          }
        },
        {
          path:'userList',
          name:'IUserInfo',
          component: IUserInfo,
          meta: {
            breadcrumbName: "用户列表"
          }
        },
        {
          path:'adminList',
          name:'IGuanli',
          component: IGuanli,
          meta: {
            breadcrumbName: "管理员列表"
          }
        },
        {
          path:'userprofile',
          name:'EIndexUserProfile',
          component: EIndexUserProfile,
          meta: {
            breadcrumbName: "用户分布"
          }
        },
        {
          path:'foodlist',
          name:' EIndexFoodList',
          component: EIndexFoodList,
          meta: {
            breadcrumbName: "用户分布"
          }
        },
        {
          path:'shops',
          name:' Navz',
          component: Navz,
          meta: {
            breadcrumbName: "添加商铺"
          }
        },
        {
          path:'goods',
          name:' nava',
          component: nava,
          meta: {
            breadcrumbName: "添加商品"
          }
        }
      ]
    },
    {
      path:'/login',
      name:'ELogin',
      component:ELogin
    }
  ]
})
router.beforeEach((to, from, next) => {
      //获取用户信息
     let isLogin = window.localStorage.getItem('users');
       if (isLogin) {
             next() //如果用户信息存在则往下执行。
         } else {
             //如果用户token不存在则跳转到login页面
             if (to.path === '/login') {
                   next()
               } else {
                  next('/login')
               }
        }
   })

export default router;
