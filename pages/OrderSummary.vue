<!-- pages/OrderSummary.vue -->
<template>
  <v-card class="py-5 px-4">
    <v-card-title class="mb-5">Order Summary</v-card-title>
    <v-card-text>
      <div class="d-flex align-center justify-space-between mb-4">
        <p class="ma-0">Subtotal</p>
        <p class="text-primary">${{ subtotal }}</p>
      </div>
      <div class="d-flex align-center justify-space-between mb-4">
        <p class="ma-0">Tax</p>
        <p class="text-primary">0</p>
      </div>
      <div class="d-flex align-center justify-space-between mb-4">
        <p class="ma-0">Shipping Price</p>
        <p class="text-primary">0</p>
      </div>
      <v-divider></v-divider>
      <div class="py-3 d-flex align-center justify-space-between mb-4">
        <p class="ma-0">Order Total</p>
        <p class="text-primary">${{ total }}</p>
      </div>
      <v-btn color="primary" block>Checkout</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>

defineProps(['total']);

const subtotal = total;
</script>