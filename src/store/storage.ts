import { decrypt, encrypt } from '@/utils/rsaUtil'

class Storage {
	get expire(): any {
		return this._expire
	}

	set expire(value: any) {
		this._expire = value
	}
	private _expire: any
	constructor(expire = null) {
		this._expire = expire
	}

	set(key: string, value: any, expire: number | null, isEncrypt = true) {
		const item = { data: value, cTime: Date.now(), expire: expire || this._expire }
		if (isEncrypt) {
			sessionStorage.setItem(key, encrypt(item), expire)
		} else {
			sessionStorage.setItem(key, JSON.stringify(item), expire)
		}
	}

	get(key: string, isEncrypt = true) {
		let item = sessionStorage.getItem(key)
		if (!item) {
			return null
		}
		if (isEncrypt) {
			item = decrypt(item)
		} else {
			try {
				item = JSON.parse(item)
			} catch (e) {
				/* empty */
			}
		}
		const nowTime = Date.now()
		if (item?.expire && item?.expire < (nowTime - item.cTime) / 1000) {
			this.remove(key)
			return null
		} else {
			return item?.data
		}
	}

	remove(key: string) {
		sessionStorage.removeItem(key)
	}

	clear() {
		sessionStorage.clear()
	}
}

export default new Storage()
