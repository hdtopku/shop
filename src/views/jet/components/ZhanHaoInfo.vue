<template>
	<div class="tw-h-screen tw-flex tw-items-center tw-justify-center">
		<div>
			<a-alert class="tw-text-center" type="error">
				<template #icon><SmileOutlined /></template>
				<template #message> <div>特别说明:</div></template>
				<template #description>
					<div>1、篡改jet密码，将永久拉黑，终身停止售后！勿自私！</div>
					<div>2、若希望更稳定，可补差价买上面的，激活自己邮箱！</div>
				</template>
			</a-alert>
			<a-card hoverable class="tw-cursor-default tw-max-w-screen-md tw-text-center">
				<template #title>
					<div class="tw-text-right">
						<a-button type="link" @click="openTutorial"><span class="tw-underline">使用教程</span></a-button>
						<a-button type="link" danger @click="showAccountModal"
							><span class="tw-underline">账号不可用</span>？</a-button
						>
						<a-dropdown>
							<a class="ant-dropdown-link" @click.prevent>
								<smile-two-tone />
								已登录
								<DownOutlined />
							</a>
							<template #overlay>
								<a-menu>
									<a-menu-item>
										<a-button type="link">退出重新获取</a-button>
									</a-menu-item>
									<a-menu-divider />
									<a-menu-item>
										<a-button type="link" danger>修改提取密码</a-button>
									</a-menu-item>
								</a-menu>
							</template>
						</a-dropdown>
					</div>
				</template>
				<a-row type="flex" justify="center">
					<a-col :span="4">账号：</a-col>
					<a-col :span="8"><a-typography-paragraph copyable>aoneoda</a-typography-paragraph></a-col>
				</a-row>
				<a-row type="flex" justify="center">
					<a-col :span="4">密码：</a-col>
					<a-col :span="8"><a-typography-paragraph copyable> ADIONoDu80 </a-typography-paragraph></a-col>
				</a-row>
			</a-card>
		</div>
	</div>
	<a-modal v-model:visible="accountVisible" centered>
		<p>
			1、认真阅读：
			<a-button type="link" @click="openTutorial"><span class="tw-underline">使用教程</span></a-button>
		</p>
		<p>2、使用正版激活码</p>
		<div class="tw-flex tw-justify-center">
			<JiHuoMa jet-code="abc" />
		</div>
		<template #footer>
			<a-button key="submit" type="primary" @click="showAccountModal">关闭</a-button>
		</template>
	</a-modal>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { DownOutlined, SmileTwoTone } from '@ant-design/icons-vue'
import JiHuoMa from './JiHuoMa.vue'

defineComponent({
	components: {
		DownOutlined,
		SmileTwoTone,
	},
})
const openTutorial = () => {
	window.open('https://www.yuque.com/yangleduo-o3nlq/asdfgo/cebq2n')
}
const accountVisible = ref(false)
const showAccountModal = () => {
	accountVisible.value = !accountVisible.value
}
</script>

<style lang="less" scoped></style>
