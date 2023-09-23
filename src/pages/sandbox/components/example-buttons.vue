<script setup lang="ts">
import Button from '../../../core/ui-kit/button/button.vue'
import { Icon, IconsNames } from '../../../core/ui-kit/icon'

const handleClick = (event: Event) => {
  console.log('button click', event)
}
</script>

<template>
  <div>
    <Button @click="handleClick"> Default button </Button>
    <Button>
      <Icon :name="IconsNames.close" />
    </Button>
  </div>
</template>

<style module></style>
