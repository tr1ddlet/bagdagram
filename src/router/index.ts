import { createRouter, createWebHistory } from 'vue-router'
import Bookmarks from '../views/Bookmarks.vue'
import Profile from '../views/Profile.vue'
import Feed from '../views/Feed.vue'
import Create from '../views/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: Bookmarks
    }
  ],
})

export default router
