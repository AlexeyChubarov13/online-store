<script setup>
const categories = [
  'All categories',
  'Smartphones',
  'Laptops',
  'Fragrances',
  'Skincare',
  'Groceries',
  'Home-decoration',
  'Furniture',
  'Tops',
  'Womens dresses',
  'Womens shoes',
  'Mens shirts',
  'Mens shoes',
  'Mens watches',
  'Womens watches',
  'Womens bags',
  'Womens jewellery',
  'Sunglasses',
  'Automotive',
  'Motorcycle',
  'Lighting'
]
</script>

<template>
    <div class="sidebar">
        <nav class="categories">
            <button
                v-for="category in categories"
                :key="category"
                class="category"
                :class="{ active: category === 'All categories' }"
                >
                {{ category }}
            </button>
        </nav>
    </div>
</template>