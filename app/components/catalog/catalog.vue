<script setup>

const products = [
{
    id: 1,
    category: 'smartphones',
    title: 'Smartphone Apple iPhone 15 Pro, White Titanium',
    image: '/images/iPhone-15.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 2,
    category: 'laptops',
    title: '13.3” Laptop Apple MacBook Air M1, Apple M1',
    image: '/images/macbook-air.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 3,
    category: 'fragrances',
    title: '7.191001733E9 Eau de toilette 100 ml',
    image: '/images/GIO.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 4,
    category: 'skincare',
    title: 'ECODE Smart Balance cosmetics set',
    image: '/images/ECODE.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 5,
    category: 'groceries',
    title: 'Natural Mountain honey, 1000 g, Altayapis, harvested 2023',
    image: '/images/honey.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 6,
    category: 'home-decoration',
    title: 'Artificial flowers for decoration, decorative flowers in a pot, artificial plant for the table',
    image: '/images/flowers.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 7,
    category: 'furniture',
    title: 'Extending kitchen dining table Milan, 139x85x76, Wellington oak',
    image: '/images/table.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 8,
    category: 'womens dresses',
    title: 'MarAlex dress',
    image: '/images/dress.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 9,
    category: 'womens shoes',
    title: 'Saivilia shoes',
    image: '/images/shoes.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 10,
    category: 'mens shirts',
    title: 'Envy Lab Shirt',
    image: '/images/shirt.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 11,
    category: 'mens shoes',
    title: 'Ralf Ringer Classic Shoes',
    image: '/images/shoes-man.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 12,
    category: 'mens watches',
    title: "Men's watch Casio Collection MTP-V001L-1B",
    image: '/images/watch-black.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 13,
    category: 'womens watches',
    title: 'Japanese wristwatch Casio LTP-V300D-7A2',
    image: '/images/watch-silver.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 14,
    category: 'womens jewellery',
    title: 'SOKOLOV, Pendant (pendant) made of silver with cubic zirconia, 94032202, decorative, 925 standard',
    image: '/images/suspension.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 15,
    category: 'sunglasses',
    title: 'Carrera sunglasses',
    image: '/images/glasses.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 16,
    category: 'automotive',
    title: 'Winter tires Sailun Ice Blazer WST3 205/60 R16 96T Studded',
    image: '/images/tires.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 17,
    category: 'motorcycle',
    title: 'Motorcycle helmet 444525 black matte',
    image: '/images/helmet.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  },
  {
    id: 18,
    category: 'lighting',
    title: 'Surface-mounted rotary lamp with switch TA108 WH white GU10 D80*130*D60',
    image: '/images/lamp.png',
    oldPrice: '$ 1 650.00',
    discount: '-10%',
    price: '$ 1 500.00'
  }
]

</script>

<template>
    <section class="catalog">
        <nav class="catalog__breadcrumbs">
            <span>Главная</span>
            <span>/</span>
            <span>Section name</span>
            <span>/</span>
            <span class="catalog__breadcrumb--active">Active element</span>
        </nav>

      <h1 class="catalog__title">All categories</h1>
  
      <div class="catalog__products">
        <CatalogCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </template>

<style scoped lang="scss" src="./catalog.scss"></style>