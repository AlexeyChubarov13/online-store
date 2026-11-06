<script setup>
const route = useRoute()

const { data: product, error, status } = await useFetch(
  () => `https://dummyjson.com/products/${route.params.id}`
)
</script>

<template>

    <p v-if="status === 'pending'">Загружаем товар…</p>

    <p v-else-if="error">
    Не удалось загрузить товар.
    </p>

    <section v-else-if="product" class="product">
        <nav class="product__breadcrumbs" aria-label="Breadcrumbs">
            <NuxtLink to="/">Home</NuxtLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{{ product.title }}</span>
        </nav>
  
        <div class="product__content">
            <div class="product__gallery">
                <NuxtPicture
                :src="product.thumbnail"
                :alt="product.title"
                format="avif"
                sizes="sm:100vw md:50vw lg:600px"
                class="product__image"
                />
            </div>

            <div class="product__info">
                <h1 class="product__title">{{ product.title }}</h1>

                <p class="product__description">
                    {{ product.description }}
                </p>

                <dl class="product__specs">
                    <div v-if="product.brand" class="product__spec">
                        <dt>Brand</dt>
                        <dd>{{ product.brand }}</dd>
                    </div>

                    <div v-if="product.sku" class="product__spec">
                        <dt>SKU</dt>
                        <dd>{{ product.sku }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
  
    <p v-else>Товар не найден</p>
  </template>

<style scoped lang="scss" src="./product.scss"></style>