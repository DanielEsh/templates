<script setup lang="ts">
import Button from '../../../core/ui-kit/button/button.vue'
import IconClose from '../../../assets/icons/close.svg'

const handleClick = (event: Event) => {
  console.log('button click', event)
}
</script>

<template>
  <div>
    <Button @click="handleClick"> Default button </Button>
    <Button>
      <IconClose />
    </Button>
  </div>
</template>

<style module></style>
