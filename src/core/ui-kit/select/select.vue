<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'
import * as select from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import Input from '../input/input.vue'

const selectData = [
  { label: 'Nigeria', value: 'NG' },
  { label: 'Japan', value: 'JP' },
  //...
]

const [state, send] = useMachine(
  select.machine({
    id: '1',
    collection: select.collection({
      items: selectData,
    }),
    name: 'country',
    value: undefined,
    onOpenChange(details) {
      console.log('open-change', details)
    },
    onValueChange(details) {
      console.log('on-value-change', details)
    },
  }),
)

const api = computed(() => select.connect(state.value, send, normalizeProps))

const handleClear = () => {
  api.value.clearValue()
  api.value.close()
}
</script>

<template>
  <form>
    <!-- Custom Select  -->
    <div v-bind="api.controlProps">
      <Input
        v-bind="api.triggerProps"
        v-model="api.valueAsString"
        label="select"
        readonly
      />
    </div>

    <Teleport to="body">
      <div
        v-bind="api.positionerProps"
        :class="[$style.content, { [$style.visible]: !api.isOpen }]"
      >
        <ul
          v-bind="api.contentProps"
          :class="$style.list"
        >
          <li @click="handleClear">clear</li>
          <li
            v-for="item in selectData"
            :key="item.value"
            v-bind="api.getItemProps({ item })"
          >
            <span>{{ item.label }}</span>
            <span v-bind="api.getItemIndicatorProps({ item })">✓</span>
          </li>
        </ul>
      </div>
    </Teleport>
  </form>
</template>

<style module>
.content {
  background: var(--white);
  width: var(--reference-width);
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  opacity: 1;
}

.visible {
  opacity: 0;
}

.list {
  margin: 0 10px;
}
</style>
