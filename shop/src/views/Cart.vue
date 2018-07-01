<template>
    <div>
        <ShopHeader/>
        <h1>Cart</h1>
        <ul>
            <li v-for="item in cartItems" :key="item.id + item.buyingTime">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import ShopHeader from '@/components/ShopHeader'

export default {
    name: 'contact',
    components: {
        ShopHeader
    },
    computed: {
        cartItems () {
            return this.$store.state.cart
            // return this.$store.cart.state.cart
        }
    }
}
</script>
