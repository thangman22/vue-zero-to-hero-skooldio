<template>
    <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
                <router-link :to="{name:'home'}" class="navbar-brand d-flex align-items-center">
                    <i class="fas fa-shopping-bag" style="margin-right: 10px;"></i> ShopShop
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
                    aria-expanded="false" aria-label="Toggle navigation" @click="gotoCart">
                    {{userName}} | ${{totalPrice}} | {{$store.state.cart.length}}<i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import vuex from 'vuex'
const mapState = vuex.mapState

import {mapState} from 'vuex'

export default {
    name: 'ShopHeader',
    methods: {
        gotoCart() {
            this.$router.push({name: 'cart'})
        }
    },
    computed: {
        ...mapState(['userName','≈'])
    }
}
</script>

<style>

</style>
