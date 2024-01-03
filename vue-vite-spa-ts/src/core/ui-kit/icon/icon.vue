<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

export interface Props {
  name: string
}

const props = defineProps<Props>()

const Icon = defineAsyncComponent(
  () => import(`../../../assets/icons/${props.name}.svg`),
)
</script>

<template>
  <Icon :class="$style.size" />
</template>

<style module>
.size {
  width: 24px;
  height: 24px;
}
</style>
