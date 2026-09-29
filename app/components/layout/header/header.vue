<template>
    <header class="header">
      <div class="header__logo">
        <Icon name="icons:logo" class="header__logo-icon" />
      </div>
  
      <div class="header__search">
        <input type="text" class="header__input" placeholder="Search" />
        <button type="button">
          <Icon name="icons:search" size="20" />
        </button>
      </div>
  
      <div class="header__actions">
        <button type="button" class="currency__button">
          <span>USD</span>
          <Icon name="icons:arrow" size="8" />
        </button>
  
        <button type="button" aria-label="Favorites">
            <Icon name="icons:favorites" size="20" />
        </button>
  
        <button type="button" class="cart__button">
            <Icon name="icons:cart" size="20" />
        </button>
      </div>
    </header>
  </template>

<style scoped lang="scss" src="./header.scss"></style>