import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({ 
routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb:[{
        name: '首頁'
      }]
    }
  },
  {
    path: '/news',
    name: 'news',
    component:() => import('../views/News.vue'),
    meta:{
      breadcrumb:[{
        name: '首頁',
        link: 'index'
      },
      {
        name: '範例層test',
        link: 'test'
    },
    {
      name: '關於我'
    }]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      breadcrumb:[{
        name: '首頁',
        link: 'home'
      },
      {
        name: '關於我'
      }]
    }
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/Content.vue'),
    meta:{
      breadcrumb:[{
        name: '首頁',
        link: 'home'
      },
      {
        name: '內容'  
      }]
    }
  }
]
})