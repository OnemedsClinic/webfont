<template>
  <div>
    <div v-if="loading" class="text-center modal-preloading">
      <div class="flex flex-col-2 items-center justify-center h-full">
        <span class="loading loading-dots loading-md text-teal-500"></span>
        <span class="loading loading-dots loading-md text-teal-500"></span>
      </div>
    </div>
    <div v-else>
      <div class="text-xl">Visitors Component</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  // Simulate a delay for loading data
  setTimeout(() => {
    loading.value = false;
  }, 1500); // Adjust time as necessary for real data load
});
</script>

<style>
.modal-preloading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
