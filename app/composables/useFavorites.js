export const useFavorites = () => {
    const favorites = useState('favorites', () => [])
  
    const isFavorite = (id) =>
      favorites.value.some(product => product.id === id)
  
    const removeFavorite = (id) => {
      favorites.value = favorites.value.filter(product => product.id !== id)
    }
  
    const toggleFavorite = (product) => {
      if (isFavorite(product.id)) {
        removeFavorite(product.id)
      } else {
        favorites.value.push(product)
      }
    }
  
    return { favorites, isFavorite, removeFavorite, toggleFavorite }
  }