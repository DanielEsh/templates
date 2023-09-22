<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../core/ui-kit/input/input.vue'

const value = ref('')
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
</template>

<style module>
.input {
  width: 100%;
}
</style>
