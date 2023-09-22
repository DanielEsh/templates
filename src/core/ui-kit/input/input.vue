<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useVModel } from '@vueuse/core'

export interface InputProps {
  modelValue: string
  label: string
  readonly?: boolean
  placeholder?: string
}

export interface InputEmits {
  (event: 'update:modelValue', value: (typeof props)['modelValue']): void
}

const props = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const value = useVModel(props, 'modelValue', emit)

const isFocused = ref(false)

const isActive = computed(
  () => value.value || props.placeholder || isFocused.value,
)

const toggleFocus = () => {
  isFocused.value = !isFocused.value
}
</script>

<template>
  <label :class="$style.input">
    <input
      v-model="value"
      type="text"
      :class="$style.inputControl"
      :readonly="readonly"
      :placeholder="placeholder"
      @blur="toggleFocus"
      @focus="toggleFocus"
    />

    <span :class="[$style.label, { [$style.labelActive]: isActive }]">
      {{ label }}
    </span>
  </label>
</template>

<style module>
.input {
  position: relative;
  display: flex;
}

.inputControl {
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background-color: transparent;
  text-align: left;
  font: inherit;
  line-height: inherit;
  color: inherit;
  transition: border-color 0.3s ease-in-out;
  resize: none;
}

.label {
  position: absolute;
  top: 50%;
  left: 8px;
  z-index: 2;
  display: block;
  padding: 0 8px;
  font-size: inherit;
  color: #9f9fa8;
  transform: translateY(-50%);
  transform-origin: left center;
  pointer-events: none;
  transition: transform 0.3s;
}

.labelActive {
  transform: translateY(-34px);
  background-color: var(--white);
}
</style>
