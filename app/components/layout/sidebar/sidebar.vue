<script setup>
const categories = [
    { title: 'All categories', icon: 'sidebar:all-categories' },
  { title: 'Smartphones', icon: 'sidebar:smartphones' },
  { title: 'Laptops', icon: 'sidebar:laptops' },
  { title: 'Fragrances', icon: 'sidebar:fragrances' },
  { title: 'Skincare', icon: 'sidebar:skincare' },
  { title: 'Groceries', icon: 'sidebar:groceries' },
  { title: 'Home-decoration', icon: 'sidebar:home-decoration' },
  { title: 'Furniture', icon: 'sidebar:furniture' },
  { title: 'Tops', icon: 'sidebar:tops' },
  { title: 'Womens dresses', icon: 'sidebar:womens-dresses' },
  { title: 'Womens shoes', icon: 'sidebar:womens-shoes' },
  { title: 'Mens shirts', icon: 'sidebar:mens-shirts' },
  { title: 'Mens shoes', icon: 'sidebar:mens-shoes' },
  { title: 'Mens watches', icon: 'sidebar:mens-watches' },
  { title: 'Womens watches', icon: 'sidebar:womens-watches' },
  { title: 'Womens bags', icon: 'sidebar:womens-bags' },
  { title: 'Womens jewellery', icon: 'sidebar:womens-jeweller' },
  { title: 'Sunglasses', icon: 'sidebar:sunglasses' },
  { title: 'Automotive', icon: 'sidebar:automotive' },
  { title: 'Motorcycle', icon: 'sidebar:motorcycle' },
  { title: 'Lighting', icon: 'sidebar:lighting' }
]
</script>

<template>
    <div class="sidebar">
        <nav class="categories">
            <button
                v-for="category in categories"
                :key="category.title"
                class="category"
                :class="{ active: category.title === 'All categories' }"
                >
                

                <Icon
                    :name="category.icon"
                    class="category__icon"
                    size="12"
                />

                <span>{{ category.title }}</span>
            </button>
        </nav>
    </div>
</template>

<style scoped lang="scss" src="./sidebar.scss"></style>