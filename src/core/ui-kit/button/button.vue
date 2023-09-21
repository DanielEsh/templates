<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<style lang="css" module>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 2px;
  border: 1px solid var(--primary-500);
  background: var(--primary-500);
  color: var(--white);
  font-size: 14px;
  cursor: pointer;
}
</style>
