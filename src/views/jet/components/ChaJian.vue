<template>
	<a-card>
		<div class="tw-text-center">
			<a-tabs v-if="system === 'windows'" v-model:activeKey="activeKey" centered @change="changeActiveKey">
				<a-tab-pane key="1" tab="2017-2020版"></a-tab-pane>
				<a-tab-pane key="2" tab="2021-2022版"></a-tab-pane>
			</a-tabs>
			<a-space size="large">
				<a-button
					size="large"
					class="animate__animated animate__pulse animate__infinite"
					type="primary"
					@click="openLink"
					>激活插件下载</a-button
				>
				<a-button size="large" @click="openDownload">软件下载地址</a-button>
			</a-space>
			<div v-if="system !== 'windows'">
				<a-divider></a-divider>
				<a-card hoverable size="small">
					<a-typography-text mark>教程中可能用到的命令：</a-typography-text
					><a-typography-paragraph copyable code>{{ command }}</a-typography-paragraph>
				</a-card>
			</div>
			<img style="width: 100%" :src="imgSrc" />
		</div>
	</a-card>
</template>

<script setup lang="ts">
import browser from 'browser-tool'
import { ref } from 'vue'

const browserInfo = browser()

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
const activeKey = ref('1')

let link = ''
let imgSrc = ''
let command = ''
if (system === 'mac') {
	link = 'https://wwlq.lanzouf.com/iUsb90uz7a8b'
	imgSrc = 'https://article.biliimg.com/bfs/article/3a15032f9d83d805b1efd1469f076b4f7d72da14.png'
	command = 'chmod +x mac.sh && ./mac.sh'
} else if (system === 'linux') {
	link = 'https://wwlq.lanzouf.com/icM290uzgeab'
	imgSrc = 'https://article.biliimg.com/bfs/article/254ba9d6081fefb1a110271b78a735bd31640cbc.png'
	command = 'chmod +x scripts/install.sh && ./scripts/install.sh'
} else if (system === 'windows') {
	link = 'https://wwlq.lanzouf.com/ilfg70uzj8le'
	imgSrc = 'https://article.biliimg.com/bfs/article/234814979cf7abaa2fe0a1107d047f4375ded115.png'
	command = ''
}
const openLink = () => {
	window.open(link)
}
const openDownload = () => {
	window.open('https://www.yuque.com/yangleduo-o3nlq/oh36ip/upgdau?singleDoc')
}
const changeActiveKey = (key) => {
	if (key === '1') {
		link = 'https://wwlq.lanzouf.com/ilfg70uzj8le'
		imgSrc = 'https://article.biliimg.com/bfs/article/234814979cf7abaa2fe0a1107d047f4375ded115.png'
	} else {
		link = 'https://wwlq.lanzouf.com/iQBFv0uzjcsf'
		imgSrc = 'https://article.biliimg.com/bfs/article/4f3b13b77f8224eae8ac4075775d8862cd454347.png'
	}
}
</script>

<style lang="less" scoped>
.iframe {
	position: absolute;
	width: 100%;
	height: 100vh;
	border: 0;
	top: 130px;
	bottom: 100px;
}
img {
	pointer-events: none;
}
</style>
