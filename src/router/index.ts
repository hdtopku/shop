import JetB from '@/views/jet/JetB.vue'
import Iframe from '@/views/Iframe.vue'
import Test from '@/views/Test.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/jb/:code',
		component: JetB,
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
