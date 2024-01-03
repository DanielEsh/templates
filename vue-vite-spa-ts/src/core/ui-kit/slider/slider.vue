<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import { useVModel } from '@vueuse/core'

export interface ModalEmits {
  (event: 'update:modelValue', values: (typeof props)['modelValue']): void
}

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()

const value = useVModel(props, 'modelValue', emits)
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
  height: 4px;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  background: #e6e6e6;
  cursor: pointer;
}

.range {
  position: absolute;
  height: 100%;
  background: var(--primary-500);
}

.thumb {
  --size: 20px;

  display: block;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  background: var(--primary-500);
  cursor: pointer;
}
</style>
