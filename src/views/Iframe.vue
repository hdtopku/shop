<template>
	<a-spin :spinning="spinning">
		<div class="iframeContainer">
			<iframe ref="iframeRef" title="" class="iframe" :src="src" @load="onLoad"></iframe>
		</div>
	</a-spin>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

let src = ref()
onBeforeMount(() => {
	window.addEventListener(
		'message',
		(ev) => {
			src.value = ev.data.src || ''
		},
		false
	)
	window.parent.postMessage({}, '*')
})
const spinning = ref(true)
const onLoad = () => {
	spinning.value = false
}
</script>

<style lang="less" scoped>
.iframeContainer {
	position: relative;
	width: 100%;
	padding-top: calc(100% * 720 / 1280);
	.iframe {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		border: 0;
		margin: -53px 0 0;
	}
}
</style>
