import JSEncrypt from 'jsencrypt-ext'

const cryptUtil = new JSEncrypt()

export const encrypt = (str: any, toBack = false) => {
	if (toBack) {
		cryptUtil.setPublicKey(
			'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQaHAL7p/f/DsTtbwSIcQ7CpnPkcoW9FN5CD/pUtljkrx2Nrw7jQ/Tj/1x88kYZbOuwse8jzTo/4fFzGNOh3M8kywoEuFmkJB+enbVG2xwWw5HVJ4fcVYlxbqo5w6ZgqYDA0pnwxyHPvPtCnh3mfNqSNf28fXpFe21ziewwW1+iQIDAQAB'
		)
	} else {
		cryptUtil.setPublicKey(
			'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCena9AMrIGSxnidhrlaNKv91wpne+xRVF0hRMbquGwi5G3fNB+PjJ1sy74G9RhFzN/n6+B1yvTmmS45fAMnYiUBObBPumUnQdA/wOarckQdhTjzbH7hCwua1qf+/yxCLeWA7xGQXA2EZKez5kzC5zU8qIT91HGgO1z3btxmKMFSQIDAQAB'
		)
	}
	return cryptUtil.encrypt(JSON.stringify(str))
}
export const decrypt = (str: any, fromBack = false) => {
	if (fromBack) {
		cryptUtil.setPrivateKey(
			'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAM1hllVx0rudqBkfFZzK/ky0nRRTJDTKRx72SG+6s1XZCOmhYIZYegvRuNjDIBnT6zHWUh+XAG5newp7JEj+Uhb//8NUrbzfYToNtqpdKU/MV2z+1M0RpGecWFBsyOCMYhS8QQ1+vyPKvgpX1yEXkr2MmZZCLm1xL9ZDzAFwJNqZAgMBAAECgYEAs/AN0Cp7IJkOD4RmYQqQJhAPlyEIlZ+rE/tel1URjeMqpdYXRVz7AKPruS2rUDWU2AMXzEl1vUS4TgR5U+JNc/r71LYaEqcoUDL5XLcfsU2kkels//15br0jRlFwSUC8szaxdZNeTHFYndTbuSLgYPxuOxkP4+wMJs/xREEUcAECQQDwC06Ha49MnQAv39doNkIKSs/ixYwzWo+tPSx68xY5mGA7m1JltSTREbUZKQaNHnBUmFUGx5pVFlw688KsOnmZAkEA2whw1YDYAjLheZGX5Z6CV7kG8j5PtEYY7Y3sXIZs5Q4CkLHyLwm6tTQHEj+TocQDCwNMhjGPAqrv2vUHUUQJAQJBAKEZBX/u2MIzD+ARWtBusY2UvcXUjI4edhRu3L47DCxlLhhy2i62Dlpdhuu209W7mum7Pj0JknMOSaGq3HiX2ekCQQC/VxFSwdpxmUc1LwXVtnHA9kbmKZ7xKecu5rNbZKcONf3xrzGU+9fZ4dhnjZiHUTcjUL9x3ytCNleQHEtHJ7sBAkB9cZCXn61mwVHhXt8sD6OmWhgYZsW3D4DLNmpfTuSoOFqH2fedozEcYJ7nW6VyNDwuPnGKE3t+rNgoxHpR8mFz'
		)
	} else {
		cryptUtil.setPrivateKey(
			'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAJ6dr0AysgZLGeJ2GuVo0q/3XCmd77FFUXSFExuq4bCLkbd80H4+MnWzLvgb1GEXM3+fr4HXK9OaZLjl8AydiJQE5sE+6ZSdB0D/A5qtyRB2FOPNsfuELC5rWp/7/LEIt5YDvEZBcDYRkp7PmTMLnNTyohP3UcaA7XPdu3GYowVJAgMBAAECgYEAls+GmZuZ+LHfYpq45/bKm9StJESuafZmhEsi5+OJwrpxSey6r82jXJWJyw1q2QWeSXIjBWj4mrDpo4O8wcHm4I8HhjhO38rzJiU4F11N0tWnrwpHmqv5ZLV3flfMhbu7E93eq1xHt3cXvMucpHxV1KFIy1SdmIFYmu6UDnXGG6ECQQD2HjOpwtEC5AvClJkTF5f4MgYo2LXQVRAFqYKGSAR4rbQvJGWFfpCI/be4fqBBy/7IdTjS7Nx1YtDRX3qgcNlLAkEApPwRFWjstgeHkOigsMqUlCBwYuxhZQJFJuYdGeWXERIRUbT+K7YkZ43BLlWzUpC1mOoNNYOXQf9UXkzsgqUzOwJBAMGnrAEEkI9UvsghQn0aUHJzchNLyWuestextElSe2o1S5TYb6Vlm/aepKPfxtte1yAF1GtrAmC/Gw3TsdpyURcCQHCbZyGg0ufPLdVXIc5pBo4vseWjBzrFGOPa7gPt83UASvfkvBKjqCdR1ofEkLeK85eiME/VOBkgp7oRcOAe118CQQCFiWN14ly73VU/9ChTyF5/GEyvHoBfCgN+uIYu4dkeCUds0hf1v4vE9Ze+dz6bsTas4U+u+arJXHPOa81TacQ+'
		)
	}
	const res = cryptUtil.decrypt(str) // 若失败：cryptUtil.decrypt(str)=false
	if (res === false) {
		return null
	}
	try {
		return JSON.parse(<string>res)
	} catch (err) {
		return res
	}
}
