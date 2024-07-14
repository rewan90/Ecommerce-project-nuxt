<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-img :src="product.image" height="400px" cover></v-img>
      </v-col>
      <v-col cols="12" md="4">
        <v-card-title class="text-capitalize">
          {{ product.title }}
        </v-card-title>

        <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
        <v-card-text>
          {{ product.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn class="bg-primary" @click="cartStore.add(product.id)">
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { useCartStore } from '~/stores/cart.js';
import data from '~/products'; 
const cartStore = useCartStore();
const { params } = useRoute();
const product = ref(data.find((product) => product.id === parseInt(params.id)));
</script>