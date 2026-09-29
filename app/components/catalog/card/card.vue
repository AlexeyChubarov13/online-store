<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="card">
    <NuxtPicture
      :src="product.image"
      :alt="product.title"
      class="card__image"
      format="webp"
      width="300"
      sizes="300px"
    />

    <div class="card__body">
      <div class="card__info">
        <p class="card__category">
          {{ product.category }}
        </p>

        <h2 class="card__title">
          {{ product.title }}
        </h2>
      </div>

      <div class="card__footer">
        <button class="card__favorite">
          <Icon name="icons:favorites" size="20" />
        </button>

        <span class="card__old-price">
          {{ product.oldPrice }}
        </span>

        <span class="card__discount">
          {{ product.discount }}
        </span>

        <span class="card__price">
          {{ product.price }}
        </span>

        <button class="card__basket">
          <Icon name="icons:basket" size="20" />
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss" src="./card.scss"></style>
