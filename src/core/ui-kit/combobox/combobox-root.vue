<script setup lang="ts">
import * as combobox from '@zag-js/combobox'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

const selectData = [
  { label: 'Nigeria', value: 'NG' },
  { label: 'Japan', value: 'JP' },
]

const collection = computed(() =>
  combobox.collection({
    items: selectData,
    itemToValue: (item) => item.value,
    itemToString: (item) => item.label,
  }),
)

const [state, send] = useMachine(
  combobox.machine({
    id: '1',
    collection: collection.value,
    name: 'country',
    value: undefined,
    onOpenChange(details) {
      console.log('open-change', details)
    },
    onValueChange(details) {
      console.log('on-value-change', details)
    },
    onInputValueChange(details) {
      console.log('on-input-change', details)
    },
    openOnClick: true,
  }),
)

const api = computed(() => combobox.connect(state.value, send, normalizeProps))

const handleClear = () => {
  api.value.clearValue()
  api.value.close()
}
</script>

<template>
  <form>
    <!-- Custom Select  -->
    <div v-bind="api.controlProps">
      <label v-bind="api.labelProps">Label</label>
      <div v-bind="api.controlProps">
        <input v-bind="api.inputProps" />
        <button v-bind="api.triggerProps">▼</button>
      </div>
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
