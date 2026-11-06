<script setup>

const { favorites: products, removeFavorite: removeProduct } = useFavorites()

</script>

<template>
  <section class="favorites">
    <nav
      class="favorites__breadcrumbs"
      aria-label="Breadcrumbs"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Favorites</span>
    </nav>

    <h1 class="favorites__title">Favorites</h1>

    <div class="favorites__products">
      <div class="favorites__products">
        <CatalogCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          removable
          @remove="removeProduct(product.id)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss" src="./favorites.scss"></style>