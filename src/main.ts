import '@/utils/devtool.js'
import { createApp } from 'vue'
import App from './App.vue'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '@/router'
import '@/assets/style.css'
import Tool from '@/utils/tool'
import mitt from 'mitt'

const Mitt = mitt()

const app = createApp(App)
app.use(AntD).use(router)
app.mount('#app')
app.config.globalProperties.tool = Tool
app.config.globalProperties.bus = Mitt
