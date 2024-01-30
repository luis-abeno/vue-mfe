<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/cart">Cart</router-link>
  </nav>
</template>

<style scoped>
nav {
  background-color: #575454;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
h1 {
  margin: 0;
}
a {
  margin: 0 0.5rem;
}
</style>
