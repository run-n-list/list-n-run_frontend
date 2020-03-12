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
        component: () => import('@/views/Dialog/DialogsListView.vue')
      },
      {
        path: '/feed',
        name: 'feed',
        component: () => import('@/views/Feed/FeedView.vue')
      },
      {
        path: '/notes',
        name: 'notes',
        component: () => import('@/views/Note/NotesListView.vue')
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/Project/ProjectsListView.vue')
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: () => import('@/views/Statistics/StatisticsListView.vue')
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import('@/views/Task/TasksListView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
