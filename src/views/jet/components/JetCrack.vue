<template>
	<a-card>
		<div class="text-center">
			<a-typography-title mark>请选择需要激活的软件版本</a-typography-title>
			<a-tabs v-model:activeKey="activeKey" centered type="card" @change="changePane">
				<a-tab-pane v-if="system === 'windows'" key="2020" tab="2017-2020版">
					<span v-if="loading">资源加载中...</span>
				</a-tab-pane>
				<a-tab-pane v-if="system === 'windows'" key="2022" tab="2021-2022版">
					<span v-if="loading">资源加载中...</span>
				</a-tab-pane>
				<a-tab-pane v-if="system === 'mac'" key="2022" tab="2017-2022版">
					<span v-if="loading">资源加载中...</span>
				</a-tab-pane>
				<a-tab-pane v-if="system === 'linux'" key="2022" tab="2021-2022版">
					<span v-if="loading">资源加载中...</span>
				</a-tab-pane>
				<a-tab-pane key="2023" tab="其他版本"> <span v-if="loading">资源加载中...</span> </a-tab-pane>
			</a-tabs>
		</div>

		<div v-show="showPane2023" style="position: absolute; top: 130px; bottom: 100px; width: 100%">
			<iframe ref="pane2023" title="" src="/iframe" class="iframe"></iframe>
		</div>
		<div v-show="showPane2022" style="position: absolute; top: 130px; bottom: 100px; width: 100%">
			<iframe ref="pane2022" title="" src="/iframe" class="iframe"></iframe>
		</div>
		<div v-show="showPane2020" style="position: absolute; top: 130px; bottom: 100px; width: 100%">
			<iframe ref="pane2020" title="" src="/iframe" class="iframe"></iframe>
		</div>
	</a-card>
</template>

<script setup lang="ts">
import browser from 'browser-tool'
import { defineEmits, onMounted, ref } from 'vue'

const browserInfo = browser()

const activeKey = ref('2022')
const loading = ref(true)

const pane2023 = ref()
const pane2022 = ref()
const pane2020 = ref()
const showPane2023 = ref(false)
const showPane2022 = ref(false)
const showPane2020 = ref(false)

const getSystem = () => {
	let system = browserInfo.system.toLowerCase()
	if (system.indexOf('mac') >= 0) {
		return 'mac'
		// return 'linux'
		// return 'windows'
	}

	if (
		system.indexOf('ubuntu') >= 0 ||
		system.indexOf('linux') >= 0 ||
		system.indexOf('freebsd') >= 0 ||
		system.indexOf('debian') >= 0
	) {
		return 'linux'
	}
	if ('windows' === system) {
		return 'windows'
	}
}
const system = getSystem()

const emit = defineEmits(['query'])
const changePane = () => {
	if (activeKey.value === '2022') {
		showPane2023.value = false
		showPane2022.value = true
		showPane2020.value = false
	} else if (activeKey.value === '2020') {
		showPane2022.value = false
		showPane2023.value = false
		showPane2020.value = true
	} else {
		showPane2022.value = false
		showPane2023.value = true
		showPane2020.value = false
	}
	emit('query')
}
onMounted(() => {
	window.addEventListener(
		'message',
		() => {
			if (system === 'windows') {
				pane2022.value.contentWindow.postMessage(
					{ src: 'https://www.yuque.com/yangleduo-o3nlq/oh36ip/eumuei?singleDoc' },
					'*'
				)
				pane2020.value.contentWindow.postMessage(
					{ src: 'https://www.yuque.com/yangleduo-o3nlq/oh36ip/gzxqk1?singleDoc' },
					'*'
				)
			} else if (system === 'mac') {
				pane2022.value.contentWindow.postMessage(
					{ src: 'https://www.yuque.com/yangleduo-o3nlq/oh36ip/uskdoh?singleDoc' },
					'*'
				)
			} else if (system === 'linux') {
				pane2022.value.contentWindow.postMessage(
					{ src: 'https://www.yuque.com/yangleduo-o3nlq/oh36ip/zi3gyy?singleDoc' },
					'*'
				)
			}
			loading.value = false
			pane2023.value.contentWindow.postMessage(
				{ src: 'https://www.yuque.com/yangleduo-o3nlq/oh36ip/upgdau?singleDoc' },
				'*'
			)
			changePane()
		},
		false
	)
})
</script>

<style lang="less" scoped>
.iframe {
	position: absolute;
	width: 100%;
	height: 100vh;
	border: 0;
}
</style>
