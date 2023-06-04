<template>
	<div v-if="codeValid">
		<JetCrack v-if="device === 'pc'" @query="query" />
		<div v-else class="center text-center">
			<a-empty :description="null" />
			<a-typography-title :level="2" type="secondary">请在电脑端打开</a-typography-title>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '@/http'
import { useRoute } from 'vue-router'
import JetCrack from './components/JetCrack.vue'
import browser from 'browser-tool'
import storage from '@/store/storage'

const route = useRoute()

const codeValid = ref(false)
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
		}
	})
}
const device = ref()
const browserInfo = browser()
device.value = browserInfo.device.toLowerCase()
query()
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
