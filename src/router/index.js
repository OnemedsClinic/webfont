import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Service from '../views/ServiceView.vue';
import About from '../views/AboutView.vue';
import Contact from '../views/ContactView.vue'
import Blog from '../views/BlogView.vue'
import Appoin from '../views/AppoinView.vue'
import Careers from '../views/CareersView.vue'
import Patients from '../views/PatientsView.vue'
import Special from '../views/SpecialView.vue'
import Visitors from '../views/VisitorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/appoin',
      name: 'appoin',
      component: Appoin
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    {
      path: '/patients',
      name: 'patients',
      component: Patients
    },
    {
      path: '/special',
      name: 'special',
      component: Special
    },
    {
      path: '/visitors',
      name: 'visitors',
      component: Visitors
    },

  ]
})

export default router
