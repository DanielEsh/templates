<script setup lang="ts">
import Button from '../../../core/ui-kit/button/button.vue'

const handleClick = (event: Event) => {
  console.log('button click', event)
}
</script>

<template>
  <div>
    <Button @click="handleClick"> Default button </Button>
  </div>
</template>

<style module></style>
