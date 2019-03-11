<template>
  <div id="app" class="mt=5">
    <img alt="Vue logo" src="./assets/vueschool.png">
    <shop-layout>
      <template slot="product-list">
        <product-list></product-list>
      </template>
      <template slot="cart">
        <cart></cart>
      </template>
    </shop-layout>
  </div>
</template>

<script>
import ShopLayout from "@/components/ShopLayout";
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default {
  name: "app",
  components: {
    ShopLayout,
    ProductList,
    Cart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
