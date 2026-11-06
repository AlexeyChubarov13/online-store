<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  removable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['remove'])

const { isFavorite, toggleFavorite } = useFavorites()

const selected = computed(() => isFavorite(props.product.id))

const finalPrice = computed(() => {
  const price = props.product.price
  const discount = props.product.discountPercentage

  return price - price * discount / 100
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

</script>

<template>
  <article class="card">

    <UiButton
      v-if="removable"
      variant="icon"
      class="card__remove"
      :aria-label="`Remove ${product.title} from favorites`"
      @click="emit('remove')"
    >
      <Icon name="lucide:x" size="16" />
    </UiButton>

    <NuxtPicture
      :src="product.thumbnail"
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
          <NuxtLink
            :to="`/product/${product.id}`"
            class="card__link"
          >
            {{ product.title }}
          </NuxtLink>
        </h2>
      </div>

      <div class="card__footer">
        <UiButton
          variant="icon"
          class="card__favorite --fill"
          :class="{ '--selected': selected }"
          :aria-pressed="selected"
          :aria-label="selected ? 'Remove from favorites' : 'Add to favorites'"
          @click="toggleFavorite(product)"
        >
          <Icon name="icons:favorites" class="--fill" size="20" />
        </UiButton>

        <span class="card__old-price">
          {{ formatPrice(product.price) }}
        </span>

        <span class="card__discount">
          -{{ product.discountPercentage }}%
        </span>

        <span class="card__price">
          {{ formatPrice(finalPrice) }}
        </span>

        <button class="card__basket">
          <Icon name="icons:basket" size="20" />
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss" src="./card.scss"></style>
