<script setup lang="ts">
import type { TestInterface } from './example'

export type test = TestInterface
</script>

<template>
  <h2>Color</h2>
  <div :class="$style.wrapper">
    <div :class="[$style.colorItem, $style._primary]"></div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
}
.colorItem {
  width: 600px;
  height: 56px;
}
._primary {
  background: var(--primary);
}
</style>
