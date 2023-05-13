<template>
	<div class="">
		<a-card :bordered="false" hoverable class="tw-w-11/12 tw-max-w-screen-sm box tw-text-center">
			<template #cover>
				<img
					class="tw-rounded-l"
					alt="example"
					src="https://article.biliimg.com/bfs/article/ff673cf4779172b0fd1242c0b353a67f48ab5a9b.png"
				/>
			</template>
			<a-card-meta>
				<template #title>
					<a-tooltip :color="showAlert ? '#F6FFEE' : ''" placement="top" @visibleChange="visibleChange">
						<template #title>
							<div v-show="showAlert">
								<a-alert banner class="" type="success">
									<template #message
										><span class="tw-animate-pulse tw-animate-bounce">复制成功，粘贴到软件激活</span></template
									>
								</a-alert>
							</div>
							<div v-show="!showAlert">点击复制</div>
						</template>
						<a-button
							size="large"
							type="primary"
							class="animate__animated animate__pulse animate__infinite"
							:loading="loading"
							@click="handleCopy"
							>一键复制激活码</a-button
						>
					</a-tooltip>
				</template>
			</a-card-meta>
		</a-card>
	</div>
</template>

<script setup lang="ts">
import 'animate.css'
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()
const showAlert = ref(false)
const loading = ref(false)
const handleCopy = () => {
	loading.value = true
	proxy.tool.copy('abcd', false)
	showAlert.value = true
	setTimeout(() => {
		loading.value = false
	}, 200)
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
