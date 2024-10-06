<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="copy-text">© Santos Ltd {{ currentYear }} ACN 007550923</div>
</template>

<style scoped>

</style>