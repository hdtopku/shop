<template>
	<slot></slot>
</template>

<script setup lang="ts">
import { saveIp } from '@/utils/ipUtil'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
	window.addEventListener(
		'focus',
		() => {
			// console.log('focus')
		},
		true
	)
	window.addEventListener(
		'blur',
		() => {
			// console.log('blur')
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
