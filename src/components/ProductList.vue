<template>
  <div>
    <div v-if="products.length">
      <paginate name="products" :list="products" :per="perPage">
        <b-card-group columns>
          <product-item
            v-for="product in paginated('products')"
            :key="product.id"
            :product="product"
            @addToCart="addProductToCart"
          ></product-item>
        </b-card-group>
      </paginate>
      <paginate-links
        for="products"
        :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
      ></paginate-links>
    </div>
    <b-alert v-else show variant="info">Don't found products</b-alert>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem
  },
  mounted() {
    this.fetchProducts(); // this is a action (= event)
  },
  data() {
    return {
      paginate: ["products"],
      perPage: 3
    };
  },
  computed: {
    ...mapState("products", ["products"]) // ...mapState("modul-name", ["state-name"])
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]), // ...mapActions("modul-name", ["action-name"])
    ...mapMutations("carts", ["addProduct"]),
    addProductToCart(product) {
      this.addProduct(product);
    }
  }
};
</script>