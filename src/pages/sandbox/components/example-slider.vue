<script setup lang="ts">
import { Slider } from '../../../core/ui-kit'
import { ref } from 'vue'

const slider1Values = ref([20, 80])
const slider2Values = ref([20, 40])
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.slider">
      <pre>
        <code>values: {{ slider1Values }}</code>
      </pre>
      <Slider v-model="slider1Values" />
    </div>

    <div :class="$style.slider">
      <pre>
        <code>values: {{ slider2Values }}</code>
      </pre>
      <Slider
        v-model="slider2Values"
        :min="20"
        :max="40"
      />
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.slider {
  width: 400px;
}
</style>
