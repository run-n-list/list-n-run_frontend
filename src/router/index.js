import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/dialogs',
        name: 'dialogs',
        component: () => import('@/components/LrDialogs.vue')
      },
      {
        path: '/feed',
        name: 'feed',
        component: () => import('@/components/LrFeed.vue')
      },
      {
        path: '/notes',
        name: 'notes',
        component: () => import('@/components/LrNotes.vue')
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/components/LrProjects.vue')
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: () => import('@/components/LrStatistics.vue')
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import('@/components/LrTasks.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
