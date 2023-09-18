<script setup lang="ts">
import { RoutePath } from '../core/router'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>index-page</h1>
    <RouterLink :to="RoutePath.about">to about</RouterLink>
    <HelloWorld />
  </div>
</template>

<style module></style>
