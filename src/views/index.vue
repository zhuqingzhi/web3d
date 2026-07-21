<template>
  <div>{{ countStore.count }}</div>
  <el-button @click="countStore.add()">增加</el-button>
</template>
<script setup lang="ts">
import useCout from '@/store/useCout'

const countStore = useCout()
</script>
