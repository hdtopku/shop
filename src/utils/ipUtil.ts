import storage from '@/store/storage'
import http from '@/http'

interface Ip {
	areacode: string
	zipcode: string
	operator: string
	county: string
	city: string
	province: string
	ip: string
	country: string
}
const getIp = () => {
	http
		.get('https://2023.ipchaxun.com', {})
		.then((res) => {
			const result = <Ip>{}
			if (res && res.ret === 'ok') {
				result.ip = res.ip
				result.country = res.data[0]
				result.province = res.data[1]
				result.city = res.data[2]
				result.county = res.data[3]
				result.operator = res.data[4]
				result.zipcode = res.data[5]
				result.areacode = res.data[6]
				storage.set('i', result, 30 * 24 * 60 * 60)
				return Promise.resolve(result)
			}
			return Promise.resolve(res)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const saveIp = () => {
	const location = storage.get('i')
	if (location?.ip != null) {
		return
	}
	getIp()
}
