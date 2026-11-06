<script setup>

const route = useRoute()

const selectedCategory = computed(() =>
  typeof route.query.category === 'string' ? route.query.category : ''
)

const categoryIcons = {
  smartphones: 'sidebar:smartphones',
  laptops: 'sidebar:laptops',
  fragrances: 'sidebar:fragrances',
  'skin-care': 'sidebar:skincare',
  groceries: 'sidebar:groceries',
  'home-decoration': 'sidebar:home-decoration',
  furniture: 'sidebar:furniture',
  tops: 'sidebar:tops',
  'womens-dresses': 'sidebar:womens-dresses',
  'womens-shoes': 'sidebar:womens-shoes',
  'mens-shirts': 'sidebar:mens-shirts',
  'mens-shoes': 'sidebar:mens-shoes',
  'mens-watches': 'sidebar:mens-watches',
  'womens-watches': 'sidebar:womens-watches',
  'womens-bags': 'sidebar:womens-bags',
  'womens-jewellery': 'sidebar:womens-jeweller',
  sunglasses: 'sidebar:sunglasses',
  vehicle: 'sidebar:automotive',
  motorcycle: 'sidebar:motorcycle',
}

const categories = computed(() => [
  {
    slug: '',
    title: 'All categories',
    icon: 'sidebar:all-categories',
  },
  ...(apiCategories.value ?? []).map(category => ({
    slug: category.slug,
    title: category.name,
    icon: categoryIcons[category.slug] ?? 'lucide:tag',
  })),
])

const {
  data: apiCategories,
  error: categoriesError,
  status: categoriesStatus,
} = await useFetch('https://dummyjson.com/products/categories')

</script>

<template>
    <div class="sidebar">

        <p v-if="categoriesStatus === 'pending'">
            Загружаем категории…
        </p>

        <p v-else-if="categoriesError">
            Не удалось загрузить категории.
        </p>


        <nav class="categories">
            <NuxtLink
            v-for="category in categories"
            :key="category.slug"
            class="category"
            :to="{
                path: '/',
                query: category.slug ? { category: category.slug } : {},
            }"
            :class="{
                active: route.path === '/' && selectedCategory === category.slug,
            }"
            >
            <Icon
                :name="category.icon"
                class="category__icon --fill"
                size="12"
            />

            <span>{{ category.title }}</span>
            </NuxtLink>
        </nav>
    </div>
</template>

<style scoped lang="scss" src="./sidebar.scss"></style>