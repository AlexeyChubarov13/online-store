<script setup>

const route = useRoute()

const selectedCategory = computed(() =>
  typeof route.query.category === 'string' ? route.query.category : ''
)

const productsUrl = computed(() => {
  if (selectedCategory.value) {
    return `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory.value)}`
  }

  return 'https://dummyjson.com/products'
})

const { data, error, status } = await useFetch(
  () => productsUrl.value,
  {
    query: {
      limit: 30,
    },
  },
)

const products = computed(() => data.value?.products ?? [])

const { data: categories } = await useFetch(
  'https://dummyjson.com/products/categories'
)

const categoryTitle = computed(() => {
  const category = categories.value?.find(
    item => item.slug === selectedCategory.value
  )

  return category?.name ?? 'All categories'
})

</script>

<template>
    <section class="catalog">
      <nav class="catalog__breadcrumbs" aria-label="Breadcrumbs">
        <NuxtLink to="/">Главная</NuxtLink>
        <span aria-hidden="true">/</span>
        <span
          class="catalog__breadcrumb--active"
          aria-current="page"
        >
          {{ categoryTitle }}
        </span>
      </nav>

      <h1 class="catalog__title">{{ categoryTitle }}</h1>

      <p v-if="status === 'pending'">Загружаем товары…</p>

      <p v-else-if="error">
        Не удалось загрузить товары.
      </p>

  
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