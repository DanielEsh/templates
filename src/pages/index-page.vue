<script setup lang="ts">
import { RoutePath } from '../core/router'
import HelloWorld from '../components/HelloWorld.vue'
import ColorsExample from '../components/ColorsExample.vue'
</script>

<template>
  <div>
    <h1>index-page</h1>
    <RouterLink :to="RoutePath.about">to about</RouterLink>
    <ColorsExample />
    <HelloWorld />
  </div>
</template>

<style module></style>
