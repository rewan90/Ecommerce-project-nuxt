<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      Mobily Shop 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
    <v-btn
      :prepend-icon="
        cartStore.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      @click="cartStore.toggleTheme()"
    >
      Theme Picker
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>