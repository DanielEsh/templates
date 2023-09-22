<script setup lang="ts">
import ExampleButtons from './ui/example-buttons.vue'
import ExampleModal from './ui/example-modal.vue'
import ExampleSlider from './ui/example-slider.vue'
import ExampleInput from './ui/example-input.vue'
import ExampleSelect from './ui/example-select.vue'
</script>

<template>
  <div :class="$style.container">
    <h1>SandBox Page</h1>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Button</h2>
      <ExampleButtons />
    </div>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Modal</h2>
      <ExampleModal />
    </div>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Slider</h2>
      <ExampleSlider />
    </div>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Input</h2>
      <ExampleInput />
    </div>

    <div :class="$style.block">
      <h2 :class="$style.blockTitle">Select</h2>
      <ExampleSelect />
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
