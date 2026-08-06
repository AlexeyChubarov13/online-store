<script setup>

const products = [
    {
        id: 1,
        categoty: 'smartphones',
        title: 'Smartphone Apple iPhone 15 Pro, White Titanium',
        image: '/images/iphone-15.png',
        oldPrice: '$ 1 650.00',
        discount: '-10%',
        price: '$ 1 500.00'
    },
    {
        id: 2,
        categoty: 'laptops',
        title: '13.3” Laptop Apple MacBook Air M1, Apple M1',
        image: '/images/macbook-air.png',
        oldPrice: '$ 1 650.00',
        discount: '-10%',
        price: '$ 1 500.00'
  },
]

</script>

<template>
    <section class="catalog">
        <h1 class="catalog__title">All categories</h1>

        <div class="catalog__products">
            <article
                v-for="product in products"
                :key="product.id"
                class="catalog__card"
            >
            <NuxtPicture
                :src="product.image"
                :alt="product.title"
                class="product-card__image"
                format="webp"
                width="300"
                height="300"
            />

                <div class="catalog__body">
                    <p class="catalog__category">{{ product.category }}</p>
                    <h2 class="catalog__title">{{ product.title }}</h2>
                    <div class="catalog__footer">
                        <button class="catalog__button">
                            <Icon name="icons:favorites" size="20" />
                        </button>
                        <span class="catalog__old-price">{{ product.oldPrice }}</span>
                        <span class="catalog__discount">{{ product.discount }}</span>
                        <span class="catalog__price">{{ product.price }}</span>
                    </div>
                </div>
            </article>
        </div>
  </section>
</template>