<template>
	<slot></slot>
</template>

<script setup lang="ts">
import { saveIp } from '@/utils/ipUtil'

saveIp()
</script>

<style lang="less" scoped></style>
