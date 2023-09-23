<script setup lang="ts">
import { RoutePath } from '../core/router'
</script>

<template>
  <div>
    <h1>about-page</h1>
    <RouterLink :to="RoutePath.home">back</RouterLink>
  </div>
</template>
