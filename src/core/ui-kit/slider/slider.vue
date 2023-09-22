<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import { ref } from 'vue'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()

const value = ref()
</script>

<template>
  <SliderRoot
    v-model="value"
    :class="$style.root"
    v-bind="{ ...props, ...emits }"
  >
    <SliderTrack :class="$style.track">
      <SliderRange :class="$style.range" />
    </SliderTrack>
    <SliderThumb :class="$style.thumb" />
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
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  background: var(--primary-500);
}

.range {
  position: absolute;
  height: 100%;
  background: var(--secondary-500);
}

.thumb {
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--secondary-500);
  cursor: pointer;
}
</style>
