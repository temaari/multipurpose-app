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
		path: '/formio',
		name: 'FormIO',
		component: () => import('../views/FormIO.vue')
	},
	{
		path: '/redirect',
		name: 'Redirect',
		component: () => import('../views/Redirect.vue')
	},
	{
		path: '/neveropen',
		name: 'NeverOpen',
		component: () => import('../views/NeverOpen.vue')
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
