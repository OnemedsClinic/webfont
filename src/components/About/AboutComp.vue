
<template>
  <div>
    <div v-if="loading" class="text-center modal-preloading">
      <div class="flex flex-col-2 items-center justify-center h-full">
        <span class="loading loading-dots loading-md text-teal-500"></span>
        <span class="loading loading-dots loading-md text-teal-500"></span>
      </div>
    </div>
    <div v-else>
      <div class="text-center pt-5">
        <h1 class="font-bold text-2xl cursor-pointer text-[#005789]">
          A boute One Medical Wellness Clinic
        </h1>
        <p class="text-md">
          Asperiores sunt consectetur impedit nulla molestiae delectus repellat
          laborum dolores doloremque accusantium
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-2">
        <div class="text-center">
          <i
            class="bx bx-heart-circle text-[80px] text-teal-500 hover:scale-110 duration-200"
          ></i>
          <br />
          <h1 class="font-semibold">CARDIOLOGY</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            corporis ea nihil consequuntur atque numquam odio repellat maiores
            vitae debitis labore necessitatibus autem molestias vel natus
            inventore excepturi, possimus enim.</span
          >
        </div>
        <div class="text-center">
          <i
            class="bx bx-pulse text-[80px] text-teal-500 hover:scale-110 duration-200"
          ></i>
          <br />
          <h1 class="font-semibold">SURGERY</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            corporis ea nihil consequuntur atque numquam odio repellat maiores
            vitae debitis labore necessitatibus autem molestias vel natus
            inventore excepturi, possimus enim.</span
          >
        </div>
        <div class="text-center">
          <i
            class="bx bx-detail text-[80px] text-teal-500 hover:scale-110 duration-200"
          ></i>
          <br />
          <h1 class="font-semibold">DIAGNOSIS</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            corporis ea nihil consequuntur atque numquam odio repellat maiores
            vitae debitis labore necessitatibus autem molestias vel natus
            inventore excepturi, possimus enim.</span
          >
        </div>

        <div class="text-center">
          <i
            class="bx bx-first-aid text-[80px] text-teal-500 hover:scale-110 duration-200"
          ></i>
          <br />
          <h1 class="font-semibold">FIRST AID</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            corporis ea nihil consequuntur atque numquam odio repellat maiores
            vitae debitis labore necessitatibus autem molestias vel natus
            inventore excepturi, possimus enim.</span
          >
        </div>
      </div>
      <hr class="border-b" />
      <!-- --------------------------------------------------------------------------------------------------------------------- -->
      <div
        class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-[80%] p-4"
      >
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-96 rounded-md"
              src="../../assets/ServicesImages/blood.jpg"
              alt="Modern"
            />
          </div>
          <div class="p-8">
            <div
              class="uppercase tracking-wide text-[18px] text-[#005789] font-semibold"
            >
              SERVICES
            </div>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      <!-- --------------------------------------------------------------------------------------------------------------------- -->
      <div class="bg-[#eff6f9]">
        <div>
          <div class="text-center pt-5 text-[#005789]">
            <h1 class="font-bold text-2xl cursor-pointer">OUR DOCTOR</h1>
            <p class="text-md">
              To enhance community health by delivering compassionate <br />
              high-quality healthcare services and promoting wellness in an
              environment of trust and respect.
            </p>
          </div>
          <div
            class="flex flex-wrap lg:flex-row p-5 justify-center items-center gap-5"
          >
            <div class="card bg-base-100 w-96 shadow-xl">
              <figure class="hover:scale-105 duration-200">
                <img src="../../assets/DoctorImage/cd-9.png" alt="Doctor" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Doctor
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src="../../assets/DoctorImage/cd-9.png" alt="Doctor" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Doctor
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src="../../assets/DoctorImage/cd-9.png" alt="Doctor" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Doctor
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-4 p-4">
        <div class="p-2 w-[100%]">
          <h1 class="text-[#005789] font-semibold">ABOUT US</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit,
            ipsam tenetur itaque provident saepe dignissimos quam numquam rerum
            pariatur earum dolores. Molestiae ipsum itaque totam pariatur
            architecto consequuntur necessitatibus corporis alias consequatur
            unde, delectus, beatae quam dicta voluptatem aut sequi incidunt?
            Consectetur nihil sit laborum obcaecati rem quia voluptate.
          </p>
        </div>
        <div class="p-2 flex flex-col text-end items-end w-[100%] h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.17299371503066!2d102.5549483721154!3d18.00497193973587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312469b358f715eb%3A0x1ed7f46c996282c6!2sOne%20Meds%20Clinic!5e1!3m2!1sth!2sla!4v1732599449706!5m2!1sth!2sla"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.446688043973!2d102.55476185427527!3d18.00546794234113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312469a66303286b%3A0x81a4db7d053feaf!2sLuckxay%20Company!5e1!3m2!1sth!2sla!4v1730427626162!5m2!1sth!2sla"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full border-0"
          ></iframe> -->
        </div>
      </div>
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

