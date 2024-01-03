<script setup lang="ts">
import { Button, Icon, IconsNames } from '../../../core/ui-kit'

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
