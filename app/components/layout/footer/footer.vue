<script setup>
const footerCategories = [
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
	<footer class="footer">
		<div class="footer__brand">
			<Icon name="icons:logo-footer" class="footer__logo" />

			<div class="footer__phones">
				<a href="tel:+78007008573">+7 800 700-85-73</a>
				<a href="tel:+74959338573">+7 495 933-85-73</a>
			</div>

			<address class="footer__address">
				Moscow, st. B. Bronnaya, 23, building 1,<br>
				Business center “Bolshaya Bronnaya 23 bldg. 1”
			</address>
		</div>

		<nav class="footer__nav">
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/">Delivery and payment</NuxtLink>
			<NuxtLink to="/">About</NuxtLink>
			<NuxtLink to="/">Blog</NuxtLink>
			<NuxtLink to="/">Contacts</NuxtLink>
		</nav>

		<nav class="footer__catalog">
			<h2>Catalog</h2>

			<div class="footer__catalog-grid">
				<NuxtLink

					v-for="category in footerCategories"
					:key="category.title"
					:to="`/`"
					class="footer__catalog-link"
				>

					<Icon 
						:name="category.icon"
						class="footer__catalog-icon --fill"
						size="12"
					/>

					<span>{{ category.title }}</span>
				</NuxtLink>
			</div>
		</nav>

		<div class="footer__meta">
			<button type="button" class="footer__currency">
				USD
				<Icon name="icons:arrow" size="12" />
			</button>

			<p>2020 © All rights reserved</p>

			<NuxtLink to="/">Privacy Policy</NuxtLink>
			<NuxtLink to="/">Public offer</NuxtLink>
		</div>
	</footer>
</template>

<style scoped lang="scss" src="./footer.scss"></style>
