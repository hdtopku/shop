import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
	],
	resolve: {
		// 配置路径别名
		alias: {
			'@': '/src',
		},
	},
	server: {
		port: 5000,
		proxy: {
			'/api': {
				target: 'http://j.taojingling.cn:9000/jeecg-boot',
				// target: 'http://localhost:9000/jeecg-boot',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
})
