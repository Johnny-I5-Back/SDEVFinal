import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CourseSection from '../views/CourseSection.vue';
import CourseDetailPage from '../views/CourseDetailPage.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },{
    path: '/courses',
    name: 'Courses',
    component: CourseSection,
  }, {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: CourseDetailPage,
  }, {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
