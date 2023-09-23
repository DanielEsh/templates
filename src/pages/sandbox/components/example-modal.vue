<script setup lang="ts">
import Modal from '../../../core/ui-kit/modal/modal.vue'
import Button from '../../../core/ui-kit/button/button.vue'
import { ref } from 'vue'

const isModalOpen = ref(false)
</script>

<template>
  <pre>
    <code>isModalOpen: {{ isModalOpen }}</code>
  </pre>
  <Modal
    v-model="isModalOpen"
    title="example modal title"
  >
    <div>modal content</div>
  </Modal>

  <Button @click="() => (isModalOpen = true)"> Open Modal </Button>
</template>

<style module></style>
