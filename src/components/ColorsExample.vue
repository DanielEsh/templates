<script setup lang="ts">
// import type { TestInterface } from './example'

// export type test = TestInterface
</script>

<template>
  <h2>Color</h2>
  <div :class="$style.wrapper">
    <h3>Primary</h3>
    <div :class="[$style.colorItem, $style._primary500]"></div>
    <div :class="[$style.colorItem, $style._primary400]"></div>
    <div :class="[$style.colorItem, $style._primary300]"></div>
    <div :class="[$style.colorItem, $style._primary200]"></div>
    <div :class="[$style.colorItem, $style._primary100]"></div>
  </div>

  <div :class="$style.wrapper">
    <h3>Neutral</h3>
    <div :class="[$style.colorItem, $style._neutral500]"></div>
    <div :class="[$style.colorItem, $style._neutral400]"></div>
    <div :class="[$style.colorItem, $style._neutral300]"></div>
    <div :class="[$style.colorItem, $style._neutral200]"></div>
    <div :class="[$style.colorItem, $style._neutral100]"></div>
  </div>
</template>

<style lang="css" module>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.colorItem {
  width: 600px;
  height: 56px;
}
._primary500 {
  background: var(--primary-500);
}
._primary400 {
  background: var(--primary-400);
}
._primary300 {
  background: var(--primary-300);
}
._primary200 {
  background: var(--primary-200);
}
._primary100 {
  background: var(--primary-100);
}

._neutral500 {
  background: var(--neutral-500);
}
._neutral400 {
  background: var(--neutral-400);
}
._neutral300 {
  background: var(--neutral-300);
}
._neutral200 {
  background: var(--neutral-200);
}
._neutral100 {
  background: var(--neutral-100);
}
</style>
