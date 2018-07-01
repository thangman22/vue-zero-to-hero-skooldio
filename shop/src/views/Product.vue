<template>
  <div class="about">
    <ShopHeader/>
    <div v-if="displayProduct">
      <img :src="displayProduct.img_url">
      <h1>{{displayProduct.name}}</h1>
      <p>{{displayProduct.description}}</p>
      <p>Price {{displayProduct.price}}</p>
      <button class="btn btn-success">Add to Cart</button>
    </div>
  </div>
</template>
<script>
import ShopHeader from '@/components/ShopHeader'
import productsJson from '@/products.json'

export default {
  name: 'product',
  components: {
    ShopHeader
  },
  data () {
    return {
      products: productsJson,
      displayProduct: null
    }
  },
  mounted () {
    this.displayProduct = this.products.filter((product) => { 
      return product.id === parseInt(this.$route.params.productId)
    })[0]
  }
}
</script>

