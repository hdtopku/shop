<script setup lang="ts">
import Page from '@/components/Page.vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
	window.addEventListener(
		'focus',
		() => {
			// console.log('focus，do something')
		},
		true
	)
	window.addEventListener(
		'blur',
		() => {
			// console.log('blur，do something')
		},
		true
	)
})
onUnmounted(() => {
	window.removeEventListener('focus', () => {
		// console.log('blur，do something')
	})
})
</script>

<template>
	<Page id="app">
		<router-view />
	</Page>
</template>

<style scoped></style>
