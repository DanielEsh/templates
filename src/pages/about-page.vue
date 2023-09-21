<script setup lang="ts">
import { RoutePath } from '../core/router'
import ExampleSelect from '../components/ExampleSelect.vue'
import ComboboxRoot from '../core/ui-kit/combobox/combobox-root.vue'
import Button from '../core/ui-kit/button/button.vue'
import Input from '../core/ui-kit/input/input.vue'
import Slider from '../core/ui-kit/slider/slider.vue'
</script>

<template>
  <div>
    <h1>about-page</h1>
    <RouterLink :to="RoutePath.home">back</RouterLink>
    <ExampleSelect />
    <ComboboxRoot />
    <Button> example button </Button>

    <div :class="$style.inputs">
      <Input />
    </div>

    <div :class="$style.inputs">
      <Slider />
    </div>
  </div>
</template>

<style module>
.inputs {
  margin-top: 20px;
  width: 280px;
}
</style>
