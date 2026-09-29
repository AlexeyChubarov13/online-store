<script setup lang="ts">
type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
}

const model = defineModel<string | number>({ default: '' })

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    placeholder?: string
    help?: string
    error?: string
    disabled?: boolean
    required?: boolean
    options?: SelectOption[]
  }>(),
  {
    id: '',
    label: '',
    placeholder: '',
    help: '',
    error: '',
    disabled: false,
    required: false,
    options: () => [],
  },
)

const uid = useId()
const fieldId = computed(() => props.id || uid)
const isEmpty = computed(() => model.value === '' || model.value === null || model.value === undefined)
</script>

<template>
  <label class="ui-field" :for="fieldId">
    <span
      class="ui-field__control --select"
      :class="{
        '--has-label': props.label,
        '--invalid': Boolean(props.error),
        '--disabled': props.disabled,
      }"
    >
      <span v-if="props.label" class="ui-field__floating-label">{{ props.label }}</span>
      <select
        :id="fieldId"
        v-model="model"
        class="ui-field__native"
        :class="{ '--empty': isEmpty }"
        :disabled="props.disabled"
        :required="props.required"
        :aria-invalid="Boolean(props.error)"
        :aria-describedby="props.help || props.error ? `${fieldId}-msg` : undefined"
      >
        <option v-if="props.placeholder" value="" disabled>{{ props.placeholder }}</option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
    </span>
    <span v-if="props.error" :id="`${fieldId}-msg`" class="ui-field__error">{{ props.error }}</span>
    <span v-else-if="props.help" :id="`${fieldId}-msg`" class="ui-field__help">{{ props.help }}</span>
  </label>
</template>

<style scoped lang="sass" src="./field.sass"></style>
