<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import Page from '@/components/Page.vue'

const locale = zhCN
</script>

<template>
	<a-config-provider :locale="locale">
		<Page id="app">
			<router-view />
		</Page>
	</a-config-provider>
</template>

<style scoped></style>
