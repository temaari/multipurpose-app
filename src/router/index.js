import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/calculator',
		name: 'Calculator',
		component: () => import('../views/Calculator.vue')
	},
	{
		path: '/datecalendar',
		name: 'DateCalendar',
		component: () => import('../views/DateCalendar.vue')
	},
	{
		path: '/loadhtml',
		name: 'LoadHtml',
		component: () => import('../views/LoadHtml.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
