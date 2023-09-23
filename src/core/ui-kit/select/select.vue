<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'
import * as select from '@zag-js/select'
import { normalizeProps, useMachine } from '@zag-js/vue'
import Input from '../input/input.vue'
import { useVModel } from '@vueuse/core'

export interface SelectOptions {
  label: string
  value: string | number
}

export interface SelectProps {
  modelValue: string
  label: string
  options: SelectOptions[]
}

export interface SelectEmits {
  (event: 'update:modelValue', selected: (typeof props)['modelValue']): void
  (event: 'open-change', value: boolean): void
}

const props = defineProps<SelectProps>()
const emit = defineEmits<SelectEmits>()

const selectedValue = useVModel(props, 'modelValue', emit)

const [state, send] = useMachine(
  select.machine({
    id: '1',
    collection: select.collection({
      items: props.options,
    }),
    name: 'country',
    value: [selectedValue.value],
    onOpenChange(details) {
      emit('open-change', details.open)
    },
    onValueChange(details) {
      emit('update:modelValue', details.value[0])
    },
  }),
)

const api = computed(() => select.connect(state.value, send, normalizeProps))
</script>

<template>
  <form>
    <!-- Custom Select  -->
    <div v-bind="api.controlProps">
      <Input
        v-bind="api.triggerProps"
        v-model="api.valueAsString"
        :label="label"
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
          <li
            v-for="item in options"
            :key="item.value"
            v-bind="api.getItemProps({ item })"
            :class="[
              $style.option,
              {
                [$style._selected]: item.value === api.selectedItems[0]?.value,
              },
            ]"
          >
            <span>{{ item.label }}</span>
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
  margin: 10px;
}

.option {
  display: flex;
  align-items: center;
  height: 26px;
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
}

._selected {
  background: var(--primary-500);
  color: var(--white);
}
</style>
