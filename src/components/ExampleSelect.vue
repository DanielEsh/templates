<script setup lang="ts">
import * as select from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

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
    <!-- Hidden select  -->
    <select v-bind="api.hiddenSelectProps">
      <option
        v-for="item in selectData"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <!-- Custom Select  -->
    <div v-bind="api.controlProps">
      <label v-bind="api.labelProps">Label</label>
      <button
        type="button"
        v-bind="api.triggerProps"
      >
        <span>{{ api.valueAsString || 'Select option' }}</span>
        <span>▼</span>
      </button>
    </div>

    <Teleport to="body">
      <div v-bind="api.positionerProps">
        <ul v-bind="api.contentProps">
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
