<script setup lang="ts">
const model = defineModel<string>({ default: '' })

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    placeholder?: string
    help?: string
    error?: string
    disabled?: boolean
    required?: boolean
    rows?: number
  }>(),
  {
    id: '',
    label: '',
    placeholder: '',
    help: '',
    error: '',
    disabled: false,
    required: false,
    rows: 3,
  },
)

const uid = useId()
const fieldId = computed(() => props.id || uid)
const isEmpty = computed(() => model.value === '')
</script>

<template>
  <label class="ui-field" :for="fieldId">
    <span
      class="ui-field__control --textarea"
      :class="{
        '--has-label': props.label,
        '--invalid': Boolean(props.error),
        '--disabled': props.disabled,
      }"
    >
      <span v-if="props.label" class="ui-field__floating-label">{{ props.label }}</span>
      <textarea
        :id="fieldId"
        v-model="model"
        class="ui-field__native"
        :class="{ '--empty': isEmpty }"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :required="props.required"
        :rows="props.rows"
        :aria-invalid="Boolean(props.error)"
        :aria-describedby="props.help || props.error ? `${fieldId}-msg` : undefined"
      />
    </span>
    <span v-if="props.error" :id="`${fieldId}-msg`" class="ui-field__error">{{ props.error }}</span>
    <span v-else-if="props.help" :id="`${fieldId}-msg`" class="ui-field__help">{{ props.help }}</span>
  </label>
</template>

<style scoped lang="sass" src="./field.sass"></style>
