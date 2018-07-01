<template>
    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row">
                <div class="col-md-4" v-for="product in products" :key="product.id">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" :src="product.img_url" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">{{product.name}}</p>
                            <p class="card-text">Price {{product.price}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <router-link :to="{name: 'product', params: {productId: product.id}}" class="btn btn-sm btn-outline-info">View</router-link>
                                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCartMethod(product)">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productsJson from '@/products.json'
import {mapActions,mapMutations} from 'vuex'
export default {
    name: 'ProductList',
    data () {
        return {
            products: []
        }
    },
    mounted () {
        this.products = productsJson
    },
    methods: {
        addToCartMethod (product) {
            product.buyingTime = Date.now() 
            
            this.addToCart(product)
        },
        ...mapActions(['addToCart'])
    }
    
}
</script>
