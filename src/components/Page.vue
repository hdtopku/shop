<template>
	<slot></slot>
</template>

<script setup lang="ts">
import { saveIp } from '@/utils/ipUtil'
import { getCurrentInstance, onMounted, onUnmounted } from 'vue'

let instance = getCurrentInstance()

onMounted(() => {
	window.addEventListener(
		'focus',
		() => {
			// console.log('focus')
			instance?.proxy?.bus.emit('queryCode')
		},
		true
	)
	window.addEventListener(
		'blur',
		() => {
			// console.log('blur')
			instance?.proxy?.bus.emit('queryCode')
		},
		true
	)
})
onUnmounted(() => {
	window.removeEventListener('focus', () => {
		// console.log('blur，do something')
	})
	window.removeEventListener('blur', () => {
		// console.log('blur，do something')
	})
})
saveIp()
</script>

<style lang="less" scoped></style>
