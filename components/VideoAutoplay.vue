<script setup>
import {ref, onMounted} from 'vue';

const isVideoLoaded = ref(false);

onMounted(() => {
  const videoElement = document.querySelector('video');

  videoElement.addEventListener('loadeddata', () => {
    isVideoLoaded.value = true;
  });
});
</script>

<template>
    <video v-if="isVideoLoaded"  class="w-100" loop autoplay preload="auto" muted playsinline>
      <source src="/assets/video/video_1.mp4" type="video/mp4">
    </video>
</template>

<style scoped>
.w-100 {
  width: 100%;
  height: 100%;
}
</style>