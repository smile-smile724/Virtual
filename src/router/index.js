import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login'
import ExpContent from '@/pages/ExpContent'
import ExpVideo from '@/pages/ExpVideo'
import ExpTheory from '@/pages/ExpTheory'
import VirtualExp from '@/pages/VirtualExp'
import SolidExp from '@/pages/SolidExp'
import AnalysisExp from '@/pages/AnalysisExp'
import PersonInformation from '@/pages/PersonInformation'
import StudyRecord from '@/pages/StudyRecord'
import ChangePassword from '@/pages/ChangePassword'
import Content from '@/pages/Content'
import Video from '@/pages/Video'
import Theory from '@/pages/Theory'
import Solid from '@/pages/Solid'
import Virtual from '@/pages/Virtual'
import Analysis from '@/pages/Analysis'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'login',
      component:login,
      meta: {
        keepAlive: 1
      }
    },
    {
      path:'/ExpContent',
      name:'ExpContent',
      component:ExpContent,
      meta: {
        keepAlive: 2,
        order:0
      }
    },
    {
      path:'/ExpVideo',
      name:'ExpVideo',
      component:ExpVideo,
      meta: {
        keepAlive: 2,
        order:0
      }
    },
    {
      path:'/ExpTheory',
      name:'ExpTheory',
      component:ExpTheory,
      meta: {
        keepAlive: 2,
        order:0
      }
    },
    {
      path:'/VirtualExp',
      name:'VirtualExp',
      component:VirtualExp,
      meta: {
        keepAlive: 2,
        order:1
      }
    },
    {
      path:'/SolidExp',
      name:'SolidExp',
      component:SolidExp,
      meta: {
        keepAlive: 2,
        order:1
      }
    },
    {
      path:'/AnalysisExp',
      name:'AnalysisExp',
      component:AnalysisExp,
      meta: {
        keepAlive: 2,
        order:1
      }
    },
    {
      path:'/PersonInformation',
      name:'PersonInformation',
      component:PersonInformation,
      meta: {
        keepAlive: 2,
        order:2
      }
    },
    {
      path:'/StudyRecord',
      name:'StudyRecord',
      component:StudyRecord,
      meta: {
        keepAlive: 2,
        order:2
      }
    },
    {
      path:'/ChangePassword',
      name:'ChangePassword',
      component:ChangePassword,
      meta: {
        keepAlive: 2,
        order:2
      }
    },
    {
      path:'/Content',
      name:'Content',
      component:Content,
      meta: {
        keepAlive: 3,
        to:"/ExpContent"
      }
    },
    {
      path:'/Video',
      name:'Video',
      component:Video,
      meta: {
        keepAlive: 3,
        to:"/ExpVideo"
      }
    },
    {
      path:'/Theory',
      name:'Theory',
      component:Theory,
      meta: {
        keepAlive: 3,
        to:"/ExpTheory"
      }
    },
    {
      path:'/Solid',
      name:'Solid',
      component:Solid,
      meta: {
        keepAlive: 3,
        to:"/SolidExp"
      }
    },
    {
      path:'/Analysis',
      name:'Analysis',
      component:Analysis,
      meta: {
        keepAlive: 3,
        to:"/AnalysisExp"
      }
    },
    {
      path:'/Virtual',
      name:'Virtual',
      component:Virtual,
      meta: {
        keepAlive: 3,
        to:"/VirtualExp"
      }
    }
  ]
})
export default router;
