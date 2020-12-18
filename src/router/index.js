import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Explore from '../views/Explore.vue'
import UserDetail from '../views/UserDetail.vue'
import Tag from '../views/Tag.vue' 
import UserPost from '../views/UserPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/userdetail/:userid',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/tag/:title',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/post/:userid',
    name: 'UserPost',
    component: UserPost
  },
]

const router = new VueRouter({
  routes
})

export default router
