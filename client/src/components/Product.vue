<template>
  <div class="product-container">
    <h2 class="product-title">List Product</h2>
    <!-- Duyệt qua danh sách sản phẩm -->
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-quantity">Total: {{ product.quantity }}</p>
        <div class="product-actions">
          <input type="number" v-model="product.quantity" min="1" class="product-quantity-input" />
          <p class="product-price">Price: ${{ product.price }}</p>
          <button @click="addToCart(product)" class="product-add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const products = computed(() => store.state.product.products);

onMounted(() => {
  store.dispatch('getAllProduct'); 
});

const addToCart = (product) => {
  console.log('Add to cart:', product);
};
</script>

<style scoped>
.product-container {
  width: 100%;
  padding: 16px;
}
@media (min-width: 1024px) {
  .product-container {
    width: 50%;
  }
}

.product-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.product-card {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 16px;
}

.product-details {
  flex: 1;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
}

.product-description {
  font-size: 0.875rem;
  color: #4a5568;
}

.product-quantity {
  font-size: 0.875rem;
  font-weight: bold;
}

.product-actions {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.product-quantity-input {
  width: 64px;
  padding: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.product-price {
  font-size: 0.875rem;
}

.product-add-to-cart {
  background-color: #4299e1;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
