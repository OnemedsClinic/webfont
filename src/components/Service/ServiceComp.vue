<template>
  <div v-if="loading" class="text-center modal-preloading">
      <div class="flex flex-col-2 items-center justify-center h-full">
        <span class="loading loading-dots loading-md text-teal-500"></span>
        <span class="loading loading-dots loading-md text-teal-500"></span>
      </div>
    </div>
  <div v-else>
    <div class="bg-teal-500 shadow-lg shadow-teal-500/50 h-24">
      <h1 class="font-bold lg:2xl md:text-xl sm:text-md text-[#ffff] pt-8 px-3 sm:text-center md:text-center lg:text-left">Clinic Services</h1>
    </div>
    <hr class="border-b"/>
    <div class="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
      <div class="card bg-base-100 w-96 shadow-xl cursor-pointer">
        <div class="card-body hover:bg-[#d1cecb] rounded-t-lg transitoin-transfrom duration-200">
          <h2 class="card-title">
            <i class='bx bx-donate-blood bx-flashing text-2xl text-[#005789]' ></i>
            ກວດສຸຂະພາບປະຈຳປີ</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="../../assets/ServicesImages/Chachup.jpg"
            alt="chack up" class="w-full hover:scale-110 transition-transfrom duration-300"
          />
        </figure>
      </div>
      <div class="card bg-base-100 w-96 shadow-xl cursor-pointer">
        <figure>
          <img
            src="../../assets/ServicesImages/va.jpg"
            alt="vaccine" class="w-full hover:scale-110 transition-transfrom duration-300"
          />
        </figure>
        <div class="card-body hover:bg-[#d1cecb] rounded-b-lg transition-transfrom duration-200">
          <h2 class="card-title">
            <i class='bx bx-injection bx-flashing text-2xl text-[#005789]' ></i>
            ຮັບວັນຊີນ
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div class="card bg-base-100 w-96 shadow-xl cursor-pointer">
        <div class="card-body hover:bg-[#d1cecb] rounded-t-lg transition-transfrom duration-200">
          <h2 class="card-title">
            <i class='bx bxs-vial bx-flashing text-2xl text-[#005789]' ></i>
            ກວດເລືອດ
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="../../assets/ServicesImages/blood.jpg"
            alt="blood" class="w-full hover:scale-110 transition-transfrom duration-300"
          />
        </figure>
      </div>
      <div class="card bg-base-100 w-96 shadow-xl cursor-pointer">
        <figure>
          <img
            src="../../assets/ServicesImages/va.jpg"
            alt="Shoes" class="w-full hover:scale-110 transition-transfrom duration-300"
          />
        </figure>
        <div class="card-body hover:bg-[#d1cecb] rounded-b-lg transition-transfrom duration-200">
          <h2 class="card-title">ຮັບວັນຊີນ</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
const loading =ref(true);
onMounted(()=>{
  setTimeout(()=>{
    loading.value = false
  },1500);
})
</script>

<style>
.modal-preloading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
