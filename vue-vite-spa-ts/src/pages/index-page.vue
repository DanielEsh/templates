<script setup lang="ts">
import { RoutePath } from '../core/router'
</script>

<template>
  <div>
    <h1>index-page</h1>
    <RouterLink :to="RoutePath.about">to about</RouterLink>
  </div>
</template>
