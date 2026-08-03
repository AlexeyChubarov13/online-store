<template>
    <header class="shop-header">
      <div class="header-logo">
        <span>Shop</span>
      </div>
  
      <div class="header-search">
        <input type="text" placeholder="Search" />
        <button type="button">
          Search
        </button>
      </div>
  
      <div class="header-actions">
        <button type="button" class="currency-button">
          USD
        </button>
  
        <button type="button" aria-label="Favorites">
            <Icon name="icons:favorites" size="20" />
        </button>
  
        <button type="button" class="cart-button">
            <Icon name="icons:cart" size="20" />
        </button>
      </div>
    </header>
  </template>