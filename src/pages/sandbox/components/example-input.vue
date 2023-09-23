<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../core/ui-kit/input/input.vue'

const value = ref('')
const filledValue = ref('input with filled value')
</script>

<template>
  <div :class="$style.input">
    <pre>
      <code>value: {{ value }}</code>
    </pre>
    <Input
      v-model="value"
      label="custom label"
    />
  </div>

  <div :class="$style.input">
    <Input
      v-model="value"
      label="custom label"
      placeholder="input with placeholder..."
    />
  </div>

  <div :class="$style.input">
    <Input
      v-model="filledValue"
      label="custom label"
      placeholder="input with placeholder..."
    />
  </div>
</template>

<style module>
.input {
  width: 100%;
  margin-top: 20px;
}
</style>
