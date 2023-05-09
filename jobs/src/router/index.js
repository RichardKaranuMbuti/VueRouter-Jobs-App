import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import JobsVue from '@/views/jobs/Jobs.vue'
import JobDetail from '@/views/jobs/JobDetail.vue'
import JobDetailVue from '@/views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue,
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {path: '/views/jobs',
  name: 'Jobs',
  component: JobsVue,

  },
  {
    path: '/views/jobs/:id',
    name: 'JobDetails',
    component: JobDetailVue,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
