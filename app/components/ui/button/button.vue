<script setup lang="ts">
import { NuxtLink } from '#components'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    link?: boolean
    disabled?: boolean
    loading?: boolean
    variant?: 'primary' | 'icon' | 'text'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    type: 'button',
    link: false,
    disabled: false,
    loading: false,
    variant: 'primary',
    size: 'md'
  },
)

</script>
<template>
  <component
    class="ui-btn"
    :class="[
    `--${props.variant}`,
    `--${props.size}`,
    ]"
    :is="link ? NuxtLink : 'button'"
    :type="type"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Icon v-if="loading" name="lucide:loader-circle" class="ui-btn__icon --spin" />
    <slot />
  </component>
</template>
<style scoped lang="scss" src="./button.scss"></style>

