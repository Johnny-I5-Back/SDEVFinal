import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import CourseDetailPage from '../views/CourseDetailPage.vue';
import CoursesPage from '../views/CoursesPage.vue';
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage,
  }, {
    path: '/courses/:id',
    name: 'courseDetail',
    component: CourseDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, {
    path: '/',
    redirect: '/courses',
  },{
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
