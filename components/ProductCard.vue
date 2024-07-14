<template>
    <v-card class="mx-auto pb-2">
      <v-img :src="product.image" height="200px" cover>
        <template v-slot:placeholder>
          <v-row align="center" class="fill-height ma-0" justify="center">
            <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
          </v-row>
        </template>
      </v-img>
  
      <v-card-title class="text-capitalize">
        {{ product.title }}
      </v-card-title>
  
      <v-card-subtitle> ${{ product.price }} </v-card-subtitle>
      <v-card-actions>
        <v-btn color="primary" @click="$router.push(`/products/${product.id}`)">
          Read More
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="bg-primary" @click="cartStore.add(product.id)">
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  import { useCartStore } from '../stores/cart.js'
  const cartStore = useCartStore();
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  </script>