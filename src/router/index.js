import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoPage from "../views/InfoPage.vue" 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/movie/:id",
    name: "info",
    component: InfoPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
