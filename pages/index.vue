<template>
  <div>
    <v-row class="my-5">
      <v-col cols="12">
        <v-btn @click="grid = !grid" :class="{ 'bg-primary': grid }">
          <v-icon> mdi-apps </v-icon>

        </v-btn>
        <v-btn
          @click="grid = !grid"
          :class="{ 'bg-primary': !grid }"
          class="ml-3"
        >
        <v-icon> mdi-view-list </v-icon>
      </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row v-show="grid">
          <v-col
            v-for="(product, i) in products"
            :key="i"
            cols="12"
            lg="4"
            sm="6"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
        <v-row v-show="!grid" v-for="(product, i) in products" :key="i">
          <v-col cols="12">
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue';
import data from '~/products';
import { useCartStore } from '~/stores/cart.js'
const cartStore = useCartStore();
const products = ref(data);
const grid = ref(true);
</script>