<script setup lang="ts">
const model = defineModel<string | number>({ default: '' })

const props = withDefaults(
  defineProps<{
    id?: string
    type?: string
    label?: string
    placeholder?: string
    help?: string
    error?: string
    disabled?: boolean
    required?: boolean
    autocomplete?: string
    mask?: string
  }>(),
  {
    id: '',
    type: 'text',
    label: '',
    placeholder: '',
    help: '',
    error: '',
    disabled: false,
    required: false,
    autocomplete: undefined,
    mask: '',
  },
)

const uid = useId()
const fieldId = computed(() => props.id || uid)
const isEmpty = computed(() => model.value === '' || model.value === null || model.value === undefined)
const fieldValue = computed(() => {
  const value = model.value

  if (value === null || value === undefined) {
    return ''
  }

  return String(value)
})

const tokenPatterns: Record<string, RegExp> = {
  '#': /\d/,
  '*': /[^\s@.]/,
}

const applyFixedMask = (value: string, mask: string) => {
  let result = ''
  let valueIndex = 0

  for (const maskChar of mask) {
    const tokenPattern = tokenPatterns[maskChar]

    if (!tokenPattern) {
      if (result || valueIndex < value.length) {
        result += maskChar
      }

      continue
    }

    let nextChar = ''

    while (valueIndex < value.length) {
      const char = value[valueIndex]

      valueIndex += 1

      if (tokenPattern.test(char)) {
        nextChar = char
        break
      }
    }

    if (!nextChar) {
      break
    }

    result += nextChar
  }

  return result
}

const removePreviousMaskToken = (value: string, caretPosition: number, mask: string) => {
  const startIndex = Math.min(caretPosition - 1, value.length - 1, mask.length - 1)

  for (let index = startIndex; index >= 0; index -= 1) {
    if (tokenPatterns[mask[index]]) {
      return `${value.slice(0, index)}${value.slice(index + 1)}`
    }
  }

  return value
}

const applyMask = (value: string) => {
  if (!props.mask) {
    return value
  }

  return applyFixedMask(value, props.mask)
}

const maskedValue = computed(() => applyMask(fieldValue.value))
const maskMaxlength = computed(() => (props.mask ? props.mask.length : undefined))

watch(maskedValue, (value) => {
  if (!props.mask || fieldValue.value === value) {
    return
  }

  model.value = value
}, { immediate: true })

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const inputType = 'inputType' in event ? (event as InputEvent).inputType : ''
  const previousValue = fieldValue.value
  const caretPosition = target.selectionStart ?? target.value.length
  let value = applyMask(target.value)

  if (
    props.mask
    && inputType === 'deleteContentBackward'
    && target.value.length < previousValue.length
    && value === previousValue
  ) {
    value = applyMask(removePreviousMaskToken(previousValue, caretPosition, props.mask))
  }

  model.value = value

  if (target.value !== value) {
    target.value = value
  }
}
</script>

<template>
  <label class="ui-field" :for="fieldId">
    <span
      class="ui-field__control"
      :class="{
        '--has-label': props.label,
        '--invalid': Boolean(props.error),
        '--disabled': props.disabled,
      }"
    >
      <span v-if="props.label" class="ui-field__floating-label">{{ props.label }}</span>
      <input
        :id="fieldId"
        :value="maskedValue"
        class="ui-field__native"
        :class="{ '--empty': isEmpty }"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :required="props.required"
        :autocomplete="props.autocomplete"
        :maxlength="maskMaxlength"
        :aria-invalid="Boolean(props.error)"
        :aria-describedby="props.help || props.error ? `${fieldId}-msg` : undefined"
        @input="onInput"
      >
    </span>
    <span v-if="props.error" :id="`${fieldId}-msg`" class="ui-field__error">{{ props.error }}</span>
    <span v-else-if="props.help" :id="`${fieldId}-msg`" class="ui-field__help">{{ props.help }}</span>
  </label>
</template>

<style scoped lang="sass" src="./field.sass"></style>
