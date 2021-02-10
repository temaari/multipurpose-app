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
		path: '/todo',
		name: 'Todo',
		component: () => import('../views/Todo.vue')
	},
	{
		path: '/Tester',
		name: 'Tester',
		component: () => import('../views/Tester.vue')
	},
	{
		path: '/FlappyBird',
		name: 'FlappyBird',
		component: () => import('../views/FlappyBird.vue')
	},
	{
		path: '/CalendarPicker',
		name: 'CalendarPicker',
		component: () => import('../views/CalendarPicker.vue')
	},
	{
		path: '/AddCustomer',
		name: 'AddCustomer',
		component: () => import('../views/AddCustomer.vue')
	},
	{
		path: '/Slots',
		name: 'Slots',
		component: () => import('../views/Slots.vue')
	},
	{
		path: '/ToggleProd',
		name: 'ToggleProd',
		component: () => import('../views/ToggleProd.vue')
	},
	{
		path: '/Vuetifier',
		name: 'Vuetifier',
		component: () => import('../views/Vuetifier.vue')
	},
	{
		path: '/Parent',
		name: 'Parent',
		component: () => import('../views/Parent.vue')
	},
	{
		path: '/Computed',
		name: 'Computed',
		component: () => import('../views/Computed.vue')
	},
	{
		path: '/ItemPicker',
		name: 'ItemPicker',
		component: () => import('../views/ItemPicker.vue')
	},
	{
		path: '/Munchkin',
		name: 'Munchkin',
		component: () => import('../views/Munchkin.vue')
	},
	{
		path: '/RefreshComponents',
		name: 'RefreshComponents',
		component: () => import('../views/RefreshComponents.vue')
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
