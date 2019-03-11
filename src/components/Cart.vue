<template>
  <div v-if="carts.length">
    <b-table striped hover :items="carts" :fields="fields">
        <template slot="actions" slot-scope="cell">
                <b-button
                    size="sm"
                    variant="danger"
                    @click.stop="removeProductFromCart(cell.item)"
                >
                    Remove
                </b-button>
            </template>
    </b-table>
    <b-alert show variant="success" class="text-center">Total: {{ totalCost }} €</b-alert>
  </div>
  <b-alert v-else show variant="info">Ther aren't products into cart</b-alert>
</template>


<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      fields: ["name", "qty", "price", "actions"]
    };
  },
  computed: {
    ...mapState("carts", ["carts"]),
    ...mapGetters("carts", ["totalCost"])
  },
  methods: {
    ...mapMutations("carts", ["removeProductFromCart"])
  }
};
</script>
