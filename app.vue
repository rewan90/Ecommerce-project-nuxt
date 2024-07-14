<template>
  <NuxtLayout>
    <v-app id="" :theme="useCartStore().getTheme">
      <Header />
      <v-main>
        <v-container>
          <NuxtPage />
        </v-container>
      </v-main>
      <Footer/>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useCartStore } from './stores/cart';

</script>
