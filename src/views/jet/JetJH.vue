<template>
	<a-spin :indicator="indicator" :spinning="spinning">
		<div v-if="codeValid" class="center">
			<JiHuoMa :jet-code="jetCode" />
		</div>
	</a-spin>
</template>

<script setup lang="ts">
import JiHuoMa from './components/JiHuoMa.vue'
import { getCurrentInstance, h, ref } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import http from '@/http'
import { useRoute } from 'vue-router'
import browser from 'browser-tool'
import storage from '@/store/storage'
import { decrypt } from '@/utils/rsaUtil'

const route = useRoute()
const indicator = h(LoadingOutlined, {
	style: {
		fontSize: '24px',
	},
	spin: true,
})
const codeValid = ref(false)
const spinning = ref(true)
const jetCode = ref()
const query = () => {
	let invalid_codes = storage.get('ic') || []
	if (invalid_codes.includes(route.params.code)) {
		codeValid.value = false
		return
	}
	http.post('/c/idb/q/' + route.params.code).then((res) => {
		codeValid.value = res.success
		if (!codeValid.value) {
			invalid_codes.push(route.params.code)
			storage.set('ic', invalid_codes)
			return
		}
		jetCode.value = decodeURIComponent(decrypt(res.result, true))
		spinning.value = false
	})
}
const device = ref()
const browserInfo = browser()
device.value = browserInfo.device.toLowerCase()
query()
let instance = getCurrentInstance()
instance?.proxy?.bus.on('queryCode', query)
</script>

<style lang="less" scoped>
.center {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
