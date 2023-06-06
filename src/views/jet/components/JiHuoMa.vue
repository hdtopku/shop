<template>
	<div class="">
		<a-card :bordered="false" hoverable class="tw-cursor-default tw-w-11/12 tw-max-w-screen-sm box tw-text-center">
			<template #cover>
				<img
					class="tw-rounded-l"
					alt="example"
					src="https://article.biliimg.com/bfs/article/ff673cf4779172b0fd1242c0b353a67f48ab5a9b.png"
				/>
			</template>
			<a-card-meta>
				<template #title>
					<a-typography-title :level="3" mark>复制粘贴激活码，会自动续期</a-typography-title>
					<a-tooltip :color="showAlert ? '#F6FFEE' : ''" placement="top" @visible-change="visibleChange">
						<template #title>
							<div v-show="showAlert">
								<a-alert banner class="" type="success">
									<template #message
										><span class="tw-animate-bounce"
											>已复制，到软件<span class="tw-text-rose-600 tw-underline">粘贴激活</span></span
										></template
									>
								</a-alert>
							</div>
							<div v-show="!showAlert">点击复制</div>
						</template>
						<a-button
							shape="round"
							size="large"
							type="primary"
							class="animate__animated animate__pulse animate__infinite tw-bg-blue-600"
							:loading="loading"
							@click="handleCopy"
							>点击复制激活码</a-button
						>
					</a-tooltip>
				</template>
			</a-card-meta>
		</a-card>
	</div>
</template>

<script setup lang="ts">
import 'animate.css'
import { defineProps, getCurrentInstance, ref, toRefs } from 'vue'

const { proxy } = getCurrentInstance()

type Props = {
	jetCode: string
}
const props = defineProps<Props>()
const { jetCode } = toRefs(props)

const showAlert = ref(false)
const loading = ref(false)

const handleCopy = () => {
	loading.value = true
	proxy.tool.copy(jetCode.value, false)
	showAlert.value = true
	setTimeout(() => {
		loading.value = false
	}, 250)
}
const visibleChange = () => {
	setTimeout(() => {
		showAlert.value = false
	}, 80)
}
</script>

<style lang="less" scoped>
.box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
}
img {
	pointer-events: none;
}
</style>
