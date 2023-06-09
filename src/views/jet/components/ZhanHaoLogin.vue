<template>
	<div class="tw-h-screen tw-flex tw-items-center tw-justify-center">
		<a-card class="tw-w-3/5 tw-text-center">
			<a-alert type="error" show-icon>
				<template #icon><SmileOutlined /></template>
				<template #message> <div class="tw-text-left">下方的qq号/邮箱/手机等，是密码提示:</div></template>
				<template #description>
					<div class="tw-text-left">123***78</div>
				</template>
			</a-alert>
			<a-input
				v-model:value="identity"
				allow-clear
				class="tw-my-3"
				size="large"
				placeholder="请完整输入您刚设置的密码"
			/>
			<a-space size="large">
				<a-button size="large" type="primary" @click="submitIdentity">输入密码并提取</a-button>
			</a-space>
		</a-card>
	</div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue'

defineComponent({
	components: {
		SmileOutlined,
	},
})
const identity = ref()
const checked = ref(false)
const showCheckbox = ref(true)
const submitIdentity = () => {
	showCheckbox.value = false
	setTimeout(() => {
		showCheckbox.value = true
	})
}
</script>

<style lang="less" scoped></style>
