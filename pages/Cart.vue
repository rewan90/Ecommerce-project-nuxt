<template>
  <div class="py-6">
    <v-row>
      <v-col md="8">
        <v-card class="py-5 px-4" style="max-height: 500px; overflow-y: auto">
          <v-card-title class="mb-5">My Cart</v-card-title>
          <v-card-text v-if="cartStore.formattedCart.length">
            <ul>
              <li v-for="cartItem in cartStore.formattedCart" :key="cartItem.id">
                <CartItem :item="cartItem" @remove="cartStore.removeProduct(cartItem.id)" />
              </li>
            </ul>
          </v-card-text>
          <v-card-text class="text-center" v-else>
            <v-btn class="mx-auto" @click="$router.push('/')" color="primary">
              Your cart is empty
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="cartStore.total" md="4">
        <OrderSummary :total="cartStore.total" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js';
import CartItem from './CartItem.vue';
import OrderSummary from './OrderSummary.vue';

const cartStore = useCartStore();
</script>
