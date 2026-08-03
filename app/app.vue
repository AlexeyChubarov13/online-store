<template>
  <div class="shop-page">
    <aside class="sidebar">
      <div class="logo">Shop</div>

      <nav class="categories">
        <button class="category active">All categories</button>
        <button class="category">Smartphones</button>
        <button class="category">Laptops</button>
        <button class="category">Fragrances</button>
        <button class="category">Skincare</button>
        <button class="category">Groceries</button>
        <button class="category">Home decoration</button>
      </nav>
    </aside>

    <main class="content">
      <header class="header">
        <input class="search" type="text" placeholder="Search" />

        <div class="header-actions">
          <span>USD</span>
          <button>♡</button>
          <button>🛒</button>
        </div>
      </header>

      <section class="catalog">
        <div class="breadcrumbs">Home / Section name / All categories</div>
        <h1>All categories</h1>

        <div class="products-grid">
          <article class="product-card">
            <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" alt="iPhone" />
            <p class="product-category">Smartphones</p>
            <h2>Smartphone Apple iPhone 15 Pro</h2>
            <div class="product-bottom">
              <span class="price">$1 500.00</span>
              <button class="cart-button">🛒</button>
            </div>
          </article>

          <article class="product-card">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" alt="MacBook" />
            <p class="product-category">Laptops</p>
            <h2>13.3” Laptop Apple MacBook Air M1</h2>
            <div class="product-bottom">
              <span class="price">$1 500.00</span>
              <button class="cart-button">🛒</button>
            </div>
          </article>

          <article class="product-card">
            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500" alt="Perfume" />
            <p class="product-category">Fragrances</p>
            <h2>Giorgio Armani Eau de toilette</h2>
            <div class="product-bottom">
              <span class="price">$1 500.00</span>
              <button class="cart-button">🛒</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: #f5f7fb;
  color: #111827;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.shop-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 220px 1fr;
}

.sidebar {
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 24px 18px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 28px;
}

.categories {
  display: grid;
  gap: 8px;
}

.category {
  border: 0;
  background: transparent;
  color: #6b7280;
  text-align: left;
  padding: 10px 12px;
  border-radius: 8px;
}

.category.active,
.category:hover {
  background: #fff4ed;
  color: #d97706;
}

.content {
  padding: 24px 32px;
}

.header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.search {
  width: min(420px, 100%);
  height: 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 14px;
  outline: none;
  background: #ffffff;
}

.search:focus {
  border-color: #f59e0b;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-actions button,
.cart-button {
  width: 38px;
  height: 38px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 8px;
}

.breadcrumbs {
  font-size: 13px;
  color: #9ca3af;
  margin-bottom: 10px;
}

.catalog h1 {
  font-size: 28px;
  margin: 0 0 24px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 24px;
}

.product-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 18px;
  border: 1px solid #eef0f4;
}

.product-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
  margin-bottom: 16px;
}

.product-category {
  margin: 0 0 8px;
  font-size: 11px;
  text-transform: uppercase;
  color: #2563eb;
  font-weight: 700;
}

.product-card h2 {
  min-height: 44px;
  margin: 0 0 14px;
  font-size: 15px;
  line-height: 1.45;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-weight: 800;
}

@media (max-width: 760px) {
  .shop-page {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
