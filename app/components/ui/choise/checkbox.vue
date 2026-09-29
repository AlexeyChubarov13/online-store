<script setup lang="ts">
const model = defineModel<boolean>({ default: false })

withDefaults(
  defineProps<{
    id?: string
    label?: string
    error?: boolean
    disabled?: boolean
    required?: boolean
  }>(),
  {
    id: '',
    label: '',
    error: false,
    disabled: false,
    required: false,
  },
)

const uid = useId()
</script>

<template>
  <label class="ui-choice ui-choice--checkbox" :class="{ '--invalid': error }" :for="id || uid">
    <input
      :id="id || uid"
      v-model="model"
      class="ui-choice__input"
      type="checkbox"
      :disabled="disabled"
      :required="required"
      :aria-invalid="error"
    >
    <span class="ui-choice__mark" aria-hidden="true" />
    <span v-if="label" class="ui-choice__label">{{ label }}</span>
    <span v-else class="ui-choice__label"><slot /></span>
  </label>
</template>

<style scoped lang="sass" src="./choise.sass"></style>
