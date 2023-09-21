<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
const isFocused = ref(false)

const toggleFocus = () => {
  isFocused.value = !isFocused.value
}
</script>

<template>
  <label :class="$style.input">
    <input
      type="text"
      :class="$style.inputControl"
      @blur="toggleFocus"
      @focus="toggleFocus"
    />

    <span :class="[$style.label, { [$style.labelActive]: isFocused }]">
      label
    </span>
  </label>
</template>

<style module>
.input {
  position: relative;
}

.inputControl {
  /* position: relative; */
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e7e7f0;
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
}

.labelActive {
  transform: translateY(-34px);
  background-color: var(--white);
}
</style>
