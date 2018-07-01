<template>
  <div class="home">
    <ShopHeader/>
    <main role="main">
      <HeroContent />
      <ProductList />
    </main>  
  </div>
</template>

<script>
// @ is an alias to /src
import ShopHeader from '@/components/ShopHeader'
import HeroContent from '@/components/HeroContent'
import ProductList from '@/components/ProductList'

export default {
  name: 'home',
  components: {
    ShopHeader,
    HeroContent,
    ProductList
  },
  methods:{
    linkToProduct () {
      this.$router.push({name:'product', params: {productId: 1234}})
    }
  }
}
</script>
