<template>
    <header class="header">
      <div class="header__logo">
        <span>Shop</span>
      </div>
  
      <div class="header__search">
        <input type="text" class="header__input" placeholder="Search" />
        <button type="button">
          Search
        </button>
      </div>
  
      <div class="header__actions">
        <button type="button" class="currency__button">
          USD
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