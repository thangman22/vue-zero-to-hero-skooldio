<template>
    <div><button @click="callback"></button></div>
</template>

<script>
export default {
    name: 'button',
    methods:{
        callback () {
            this.$emit('callbackOfButton')
        }
    }
}
</script>

<style>

</style>
