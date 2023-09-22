<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
} from 'radix-vue'
import { useVModel } from '@vueuse/core'

export interface ModalProps {
  title: string
  modelValue: boolean
  opened?: boolean
}

export interface ModalEmits {
  (event: 'update:modelValue', opened: (typeof props)['modelValue']): void
}

const props = defineProps<ModalProps>()
const emit = defineEmits<ModalEmits>()

const opened = useVModel(props, 'modelValue', emit)

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <DialogRoot
    v-model="opened"
    :open="opened"
    @update:open="handleClose"
  >
    <DialogPortal>
      <DialogOverlay :class="$style.overlay" />
      <DialogContent :class="$style.content">
        <div :class="$style.header">
          <h2>{{ title }}</h2>
          <DialogClose
            aria-label="Close"
            as-child
          >
            <span>close</span>
          </DialogClose>
        </div>

        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style module>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.64);
}

.content {
  position: absolute;
  top: 40px;
  left: 50%;
  z-index: 100;
  background: var(--white);
  width: 754px;
  padding: 40px;
  border-radius: 8px;
  transform: translateX(-50%);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 26px;
}
</style>
