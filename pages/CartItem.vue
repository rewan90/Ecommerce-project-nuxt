<template>
    <v-row>
      <v-col sm="4">
        <div class="d-flex align-center no-wrap">
          <img :src="item.image" alt="Product image" style="width: 90px; height: 90px; object-fit: cover" />
          <h3 class="text-capitalize ml-3">{{ item.title }}</h3>
        </div>
      </v-col>
      <v-col sm="8">
        <div class="d-flex justify-space-between align-center no-wrap w-full h-100">
          <div class="d-flex align-center bg-primary rounded">
            <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="cartStore.add(item.id)">
              <v-icon>mdi-plus</v-icon>
            </span>
            <span class="number d-flex align-center pa-3">{{ item.quantity }}</span>
            <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="cartStore.remove(item.id)">
              <v-icon>mdi-minus</v-icon>
            </span>
          </div>
          <p>
            {{ item.quantity }} X {{ item.price }} =
            <strong>{{ item.cost }} $</strong>
          </p>
          <v-btn @click="$emit('remove')" icon>
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
import { useCartStore } from '../stores/cart.js'

const cartStore = useCartStore();

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>