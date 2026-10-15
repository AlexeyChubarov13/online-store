<script setup lang="ts">
const search = ref('')
</script>

<template>
    <header class="header">
      <NuxtLink to="/" class="header__logo">
        <Icon name="icons:logo" class="header__logo-icon " />
      </NuxtLink>
  
      <div class="header__search">
        
        <UiFieldInput
          v-model="search"
          variant="search"
          type="search"
          class="header__search-field"
          placeholder="Search"
          autocomplete="off"
        />

        <UiButton variant="icon" class="header__search-button" aria-label="Search">
          <Icon name="icons:search" size="20" />
        </UiButton>

      </div>
  
      <div class="header__actions">
        <UiButton variant="text" class="header__currency" aria-label="Change currency">
          <span>USD</span>
          <Icon name="icons:arrow" size="8" />
        </UiButton>
  
        <UiButton variant="icon" class="header__action-button" aria-label="Favorites">
          <Icon name="icons:favorites" size="20" />
        </UiButton>
  
        <UiButton variant="icon" class="header__action-button" aria-label="Cart">
          <Icon name="icons:cart" size="20" />
        </UiButton>
        
      </div>

    </header>

  </template>

<style scoped lang="scss" src="./header.scss"></style>