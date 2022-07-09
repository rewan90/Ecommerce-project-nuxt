<template>
  <h1 v-if="error.statusCode === 500">Something Went wrong</h1>
  <h1 v-else>An error occurred</h1>
  <nuxt-link to="/">Home page</nuxt-link>
</template>
<script>
  export default {
    props: ["error"],
    layout: "error",
  };
</script>

 <!--  

<template>
  <h1 v-if="error.statusCode === 404">Page not found</h1>
  <h1 v-else>An error occurred</h1>
  <nuxt-link to="/">Home page</nuxt-link>
</template>
<script>
  export default {
    props: ["error"],
    layout: "my-error-layout",
  };
</script>
-->
