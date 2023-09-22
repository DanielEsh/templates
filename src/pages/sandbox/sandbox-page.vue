<script setup lang="ts">
import ExampleModal from './ui/example-modal.vue'
</script>

<template>
  <div :class="$style.container">
    <h1>SandBox Page</h1>

    <div>
      <h2>Modal</h2>
      <ExampleModal />
    </div>
  </div>
</template>

<style module>
.container {
  padding: 20px;
}
</style>
