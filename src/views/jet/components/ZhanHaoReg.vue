<template>
	<div class="tw-h-screen tw-flex tw-items-center tw-justify-center">
		<a-card class="tw-w-3/5 tw-text-center">
			<a-alert type="error" show-icon>
				<template #icon><SmileOutlined /></template>
				<template #message> <div class="tw-text-left">自定义提取密码，以便自助提取</div></template>
				<template #description>
					<div class="tw-text-left">8-24位，推荐输入qq号/邮箱/手机等，以便记忆</div>
				</template>
			</a-alert>
			<a-input
				v-model:value="identity"
				allow-clear
				class="tw-my-3"
				size="large"
				placeholder="推荐输入qq号/邮箱/手机等"
			/>
			<a-space size="large">
				<span class="tw-w-5">
					<a-checkbox
						v-show="showCheckbox"
						v-model:checked="checked"
						class="animate__animated animate__shakeX animate__repeat-1"
						size="large"
						>确认无误</a-checkbox
					>
				</span>
				<a-button size="large" type="primary" @click="submitIdentity">设置提取密码</a-button>
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
