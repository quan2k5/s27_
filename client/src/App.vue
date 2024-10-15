<template>
    <div class="container mx-auto flex flex-wrap">
      <Product />
    </div>
</template>
  
<script setup>
import Product from './components/Product.vue'
  </script>
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  </style>
  