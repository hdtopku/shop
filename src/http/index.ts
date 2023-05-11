import axios from 'axios'
import storage from '@/store/storage.ts'
import browser from 'browser-tool'
import { encrypt } from '@/utils/rsaUtil'

// 设置接口超时时间
axios.defaults.timeout = 6000

// 请求地址，这里是动态赋值的的环境变量，下一篇会细讲，这里跳过
// axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN
axios.defaults.headers.common['i'] = encrypt({ sys: browser(), ip: storage.get('i'), t: new Date().getTime() }, true)
//http request 拦截器
axios.interceptors.request.use(
	(config) => {
		if (!config?.url?.startsWith('http')) {
			config.baseURL = `/api` /* 根域名 */
		} else {
			config.baseURL = `` /* 根域名 */
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

//http response 拦截器
axios.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		const { response } = error
		if (response) {
			// 请求已发出，但是不在2xx的范围
			return Promise.reject(response.data)
		} else {
			// this.$message.warning('网络连接异常,请稍后再试!')
		}
	}
)

function request(url = '', params = {}, type = 'POST') {
	//设置 url params type 的默认值
	return new Promise((resolve: any, reject: any) => {
		let promise
		if (type.toUpperCase() === 'GET') {
			promise = axios({
				url,
				params,
			})
		} else if (type.toUpperCase() === 'POST') {
			promise = axios({
				method: 'POST',
				url,
				data: params,
			})
		}
		//处理返回
		promise
			.then((res) => {
				resolve(res)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
// 封装 GET POST 请求并导出
function get(url = '', params = {}) {
	//设置 url params type 的默认值
	return request(url, params, 'GET')
}
function post(url = '', params = {}) {
	//设置 url params type 的默认值
	return request(url, params, 'POST')
}

export default { get, post }
