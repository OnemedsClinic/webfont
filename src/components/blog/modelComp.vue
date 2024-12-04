<template>
  <div
    v-if="dialogStore.visible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 w-96 shadow-lg">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">Profile</h1>
        <button
          class="text-gray-400 hover:text-gray-600"
          @click="dialogStore.closeDialog"
        >
          <i class="bx bx-x text-xl"></i>
        </button>
      </div>

      <!-- Content -->
      <div>
        <div class="mb-4">
          <label for="username" class="block text-sm font-semibold mb-1"
            >Username</label
          >
          <input
            id="username"
            type="text"
            class="border rounded w-full px-3 py-2"
            v-model="username"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold mb-1">Email</label>
          <input
            id="email"
            type="email"
            class="border rounded w-full px-3 py-2"
            v-model="email"
          />
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-2 mt-4">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          @click="dialogStore.closeDialog"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDialogStore } from "../../../Service/dialogStore.service"; // นำเข้า Store

const dialogStore = useDialogStore(); // เรียกใช้งาน Store
</script>
