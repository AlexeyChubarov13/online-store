<script setup lang="ts">
import { NuxtLink } from '#components'

withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    link?: boolean
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    type: 'button',
    link: false,
    disabled: false,
    loading: false,
  },
)

</script>
<template>
  <component
    class="ui-btn"
    :is="link ? NuxtLink : 'button'"
    :type="type"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Icon v-if="loading" name="lucide:loader-circle" class="ui-btn__icon --spin" />
    <slot />
  </component>
</template>
<style scoped lang="sass" src="./button.sass"></style>
