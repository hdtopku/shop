import JetCJ from '@/views/jet/JetCJ.vue'
import JetJH from '@/views/jet/JetJH.vue'
import Iframe from '@/views/Iframe.vue'
import Test from '@/views/Test.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/jcj/:code',
		component: JetCJ,
	},
	{
		path: '/jjh/:code',
		component: JetJH,
	},
	{
		path: '/iframe',
		component: Iframe,
	},
	{
		path: '/test',
		component: Test,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
router.beforeEach((to, from, next) => {
	document.title = to?.meta?.title ? to?.meta?.title : '.'
	next()
})
export default router
