<template>
  <div v-if="dialogStore.model" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 w-[500px] shadow-lg">
      <button
            class="text-gray-400 hover:text-gray-600"
            @click="dialogStore.close"
          >
            <i class="bx bx-x text-xl"></i>
          </button>
      Model2
    </div>
  </div>
</template>

<script setup>
import { useDialogStore } from "../../../Service/dialogStore.service"; // นำเข้า Store

const dialogStore = useDialogStore(); // เรียกใช้งาน Store
</script>

<style lang="scss" scoped>

</style>
