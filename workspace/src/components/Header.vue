<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <h5>
            <slot name="subTitle"></slot>
        </h5>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style>
h1 {
    color: green
} 
</style>

