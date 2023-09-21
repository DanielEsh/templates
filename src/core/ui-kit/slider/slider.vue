<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()
</script>

<template>
  <SliderRoot
    :class="$style.root"
    v-bind="{ ...props, ...emits }"
  >
    <SliderTrack :class="$style.track">
      <SliderRange :class="$style.range" />
    </SliderTrack>
    <SliderThumb :class="$style.thumb" />
  </SliderRoot>
</template>

<style lang="css" module>
.root {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.track {
  position: relative;
  height: 8px;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  background: var(--primary-500);
}

.range {
  position: absolute;
  height: 100%;
  background: red;
}

.thumb {
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: green;
}
</style>
