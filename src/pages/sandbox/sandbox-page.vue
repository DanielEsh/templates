<script setup lang="ts">
import ExampleModal from './ui/example-modal.vue'
import ExampleButtons from './ui/example-buttons.vue'
</script>

<template>
  <div :class="$style.container">
    <h1>SandBox Page</h1>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Buttons</h2>
      <ExampleButtons />
    </div>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Modal</h2>
      <ExampleModal />
    </div>
  </div>
</template>

<style module>
.container {
  padding: 20px;
}

.block {
  position: relative;
  margin: 40px 0;
  padding: 40px 20px;
  border-radius: 6px;
  border: 1px solid var(--primary-500);
}

.blockTitle {
  position: absolute;
  top: -14px;
  left: 10px;
  padding: 0 10px;
  background-color: var(--white);
}
</style>
