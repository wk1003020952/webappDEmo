import Vue from 'vue'
import Router from 'vue-router'
import FIndex from '@/pages/FIndex'
import Anli from '@/pages/Anli'
import AdminIndex from '@/pages/AdminIndex'
import BaseNavBar from '@/components/NavBar/BaseNavBar'
import BaseGoTop from '@/components/GoTop/BaseGoTop'
import BaseStar from '@/components/Star/BaseStar'
import BaseButton from '@/components/Button/BaseButton'
import BaseSwiper from '@/components/swiper/BaseSwiper'
import BaseStepper from '@/components/Stepper/BaseStepper'
import BaseLoading from '@/components/Loading/BaseLoading'
import BaseSearch from '@/components/Search/BaseSearch'
import BaseMessage from '@/components/Message/BaseMessage'
import BaseTabs from '@/components/tabs/BaseTabs'
import BaseInput from '@/components/input/BaseInput'
import BaseSwitch from '@/components/Switch/BaseSwitch'
import BaseAddressList from '@/components/AddressList/BaseAdderssList'
import BaseAdderessLi from '@/components/addressL/BaseAddressLi'
import kaifa from '@/components/kaifa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:AdminIndex,
    },
    {
      path:'/404ui',
      name:'AdminIndex',
      component:AdminIndex
    },
    {
      path:'/anli',
      name:'Anli',
      component:Anli
    },
    {
      path: '/index',
      name: 'FIndex',
      component: FIndex,
      children:[
        {
          path:'',
          redirect:kaifa
        },
        {
          path:'/kaifa',
          name:'kaifa',
          component:kaifa,
        },
        {
          path:'/navBar',
          name:'BaseNavBar',
          component:BaseNavBar,
          meta:{
            title:'NavBar 导航栏'
          }
        },
        {
          path:'/goTop',
          name:'BaseGoTop',
          component:BaseGoTop,
          meta:{
            title:'GoTop 回到顶部'
          }
        },
        {
          path:'/star',
          name:'BaseStar',
          component:BaseStar,
          meta:{
            title:'Star 星星评分'
          }
        },
        {
          path:'/button',
          name:'BaseButton',
          component:BaseButton,
          meta:{
            title:'Button 按钮'
          }
        },
        {
          path:'/swiper',
          name:'BaseSwiper',
          component:BaseSwiper,
          meta:{
            title:'swiper 轮播'
          }
        },
        {
          path:'/stepper',
          name:'BaseStepper',
          component:BaseStepper,
          meta:{
            title:'stepper 步进器 '
          }
        },
        {
          path:'/loading',
          name:'BaseLoading',
          component:BaseLoading,
          meta:{
            title:'loading 加载 '
          }
        },
        {
          path:'/search',
          name:'BaseSearch',
          component:BaseSearch,
          meta:{
            title:'search 搜索 '
          }
        },
        {
          path:'/message',
          name:'BaseMessage',
          component:BaseMessage,
          meta:{
            title:'message 消息框 '
          }
        },
        {
          path:'/tabs',
          name:'BaseTabs',
          component:BaseTabs,
          meta:{
            title:'Tabs 选项卡 '
          }
        },
        {
          path:'/input',
          name:'BaseInput',
          component:BaseInput,
          meta:{
            title:'Input 框'
          }
        },
        {
          path:'/switch',
          name:'BaseSwitch',
          component:BaseSwitch,
          meta:{
            title:'Switch 按钮'
          }
        },
        {
          path:'/address',
          name:'BaseAddressList',
          component:BaseAddressList,
          meta:{
            title:'AddressEdit 地址编辑'
          }
        },
        {
          path:'/addresslist',
          name:'BaseAdderessLi',
          component:BaseAdderessLi,
          meta:{
            title:'AdderessList 地址列表'
          }
        }
      ]
    }
  ]
})
