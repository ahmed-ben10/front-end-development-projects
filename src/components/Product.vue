<template>
    <div id="product">
        <h2>{{product.name}}</h2>
    </div>
</template>

<script>
export default {
    name:"product",
    computed:{
        products(){
            return this.$store.state.products
        },
        productsPrice(){

        }
    }
}
</script>

<style>

</style>
