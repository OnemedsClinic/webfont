<template>
  <div>
    <div v-if="loading" class="text-center modal-preloading">
      <div class="flex flex-col-2 items-center justify-center h-full">
        <span class="loading loading-dots loading-md text-teal-500"></span>
        <span class="loading loading-dots loading-md text-teal-500"></span>
      </div>
    </div>
    <div v-else>
      <!-- Show and hide Dialog -->
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="dialogStore.openDialog"
      >
        Open Dialog
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="dialogStore.modelOPen"
      >
        Open Dialog2
      </button>
    </div>
    <!-- Dialog Component -->
    <Dialog />
    <Dialog2 />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDialogStore } from "../../../Service/dialogStore.service"; // นำเข้า Store
import Dialog from "./modelComp.vue"; // นำเข้า Dialog Component
import Dialog2 from "./modelCompo.vue"; // นำเข้า Dialog Component

const dialogStore = useDialogStore(); // เรียกใช้งาน Store

const loading = ref(true);

onMounted(() => {
  // Simulate a delay for loading data
  setTimeout(() => {
    loading.value = false;
  }, 1500); // Adjust time as necessary for real data load
});
</script>
