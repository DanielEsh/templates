<script setup lang="ts">
import { Modal, Button } from '../../../core/ui-kit'
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
