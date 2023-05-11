<template>
	<a-space class="p-6">
		<a-button type="primary" @click="click">请求</a-button>
		<a-button type="danger" ghost @click="click2">获取</a-button>
		<a-button type="danger" ghost @click="click1">查询</a-button>
	</a-space>
</template>

<script setup lang="ts">
import { saveIp } from '@/utils/ipUtil'
import storage from '@/store/storage'
import http from '@/http/index.js'

const click = async () => {
	saveIp()
}
const click2 = async () => {
	console.log(storage.get('i'))
}
const click1 = async () => {
	http.post('/c/idc/q/u87ayfal5e').then((res) => {
		console.log(res)
	})
}
</script>

<style lang="less" scoped></style>
