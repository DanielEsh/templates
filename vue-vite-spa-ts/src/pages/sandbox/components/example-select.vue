<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../../core/ui-kit'

const options = [
  { label: 'Не выбрано', value: '' },
  { label: 'Россия', value: 'RU' },
  { label: 'Англия', value: 'UK' },
  { label: 'Америка', value: 'US' },
]

const selectedOptionValue = ref('')
</script>

<template>
  <div :class="$style.select">
    <pre>
      <code>selected: {{ JSON.stringify(selectedOptionValue) }}</code>
    </pre>
    <Select
      v-model="selectedOptionValue"
      label="Выбор страны"
      :options="options"
    />
  </div>
</template>

<style module>
.select {
  width: 260px;
}
</style>
