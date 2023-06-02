<template>
	<div v-if="codeValid" class="center">
		<a-spin :indicator="indicator" :spinning="spinning">
			<JetCode :jet-code="jetCode" />
		</a-spin>
	</div>
</template>

<script setup lang="ts">
import JetCode from './components/JetCode.vue'
import { getCurrentInstance, h, ref } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import http from '@/http'
import { useRoute } from 'vue-router'
import browser from 'browser-tool'
import storage from '@/store/storage'
import { decrypt } from '@/utils/rsaUtil'

let instance = getCurrentInstance()

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
	if (!codeValid.value) {
		spinning.value = true
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
instance?.proxy?.bus.on('queryCode', query)
</script>

<style lang="less" scoped>
.center {
	position: fixed;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}
</style>
