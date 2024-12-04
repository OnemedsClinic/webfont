<template>
  <title>Aboute</title>
  <div v-if="loading" class="text-center modal-preloading">
    <div class="flex flex-col-2 items-center justify-center h-full">
      <span class="loading loading-dots loading-md text-teal-500"></span>
      <span class="loading loading-dots loading-md text-teal-500"></span>
    </div>
  </div>
  <div v-else>
    <div
      class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-[80%] p-4"
    >
      <div class="md:flex">
        <div class="md:shrink-0 px-2">
          <img
            class="h-48 w-full object-cover md:h-full md:w-96 rounded-md"
            src="../../assets/ServicesImages/va.jpg"
            alt="Modern"
          />
        </div>
        <div class="md:shrink-0 px-2">
          <img
            class="h-48 w-full object-cover md:h-full md:w-96 rounded-md"
            src="../../assets/ServicesImages/blood.jpg"
            alt="Modern"
          />
        </div>
        <div class="p-8">
          <div>
            <div>
              <i class="bx bx-star bx-tada text-[#005789] text-xl"></i> &nbsp;
              <span class="text-[#005789] font-semibold">Advanced Care</span>
            </div>
            <h1 class="tracking-wide text-[32px] font-bold">
              Welcome to OneMeds Clinic
            </h1>
          </div>
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
      <!-- --------------------------------------------------------------------------------------------------------------------- -->
      <div class="md:flex pt-2">
        <div class="md:shrink-0 px-2">
          <img
            class="h-48 w-full object-cover md:h-full md:w-96 rounded-md"
            src="../../assets/ServicesImages/va.jpg"
            alt="Modern"
          />
        </div>
        <div class="md:shrink-0 px-2">
          <img
            class="h-48 w-full object-cover md:h-full md:w-96 rounded-md"
            src="../../assets/ServicesImages/blood.jpg"
            alt="Modern"
          />
        </div>
        <div class="px-8">
          <div>
            <div>
              <i class="bx bx-badge-check text-[#005789] text-xl"></i> &nbsp;
              <span class="font-semibold">Advanced Medical Care</span>
            </div>
            <div>
              <i class="bx bx-badge-check text-[#005789] text-xl"></i> &nbsp;
              <span class="font-semibold">Compassionate Team</span>
            </div>
            <div>
              <i class="bx bx-badge-check text-[#005789] text-xl"></i> &nbsp;
              <span class="font-semibold">Patient-Centered Approach</span>
            </div>
          </div>
          <div class="flex flex-col-2">
            <div class="flex items-center mt-5">
              <i
                class="bx bx-phone border-[#005789] border-2 rounded-full p-2 text-2xl text-[#005789] hover:-rotate-45 duration-200"
              ></i>
              <div class="px-5">
                <p class="text-md font-bold">Helpline Number</p>
                <p><a href="tel:+85620 28577773">+85620 28577773</a></p>
              </div>
            </div>
            <div class="flex items-center mt-5">
              <i
                class="bx bx-envelope border-[#005789] border-2 rounded-full p-2 text-2xl text-[#005789] hover:-rotate-45 duration-200"
              ></i>
              <div class="px-5">
                <p class="text-md font-bold">Email Address</p>
                <p>
                  <a href="mailto:Admin@onemedslaos.com"
                    >Admin@onemedslaos.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------------------------------------------------------------- -->
    <div class="p-5 bg-[#eff6f9]">
      <div class="flex flex-col-2">
        <div class="w-[40%]">
          <i class="bx bx-badge-check text-[#005789] text-xl"></i> &nbsp;
          <span class="font-semibold">Exceptional Care</span>
          <div>
            <h1 class="text-[32px] font-bold">
              Excellence in medical <br />
              services with passion for patient care
            </h1>
            <p class="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              labore ex recusandae fugiat suscipit rem voluptates incidunt, eum
              quam atque.
            </p>
          </div>
        </div>

        <div class="rounded-xl w-[40%] flex items-center justify-center">
          <img
            src="../../assets/DoctorImage/cd-9.png"
            alt=""
            class="w-96 bg-white border-slate-500 p-4 rounded-lg hover:scale-105 duration-200"
          />
        </div>
      </div>
      <div class="flex flex-col-3 m-10">
        <div class="p-10 rounded-lg shadow-inner bg-white m-2">
          <i class="bx bx-plus-medical text-[70px] text-teal-500"></i>
          <h1 class="font-semibold text-[#005789] text-2xl">
            Personalised Servics
          </h1>
          <p>
            At OneMeds, we offer personalized care tailored to your needs,
            ensuring your comfort and well-being are our top priorities.
          </p>
        </div>
        <div class="p-10 rounded-lg shadow-inner bg-white m-2">
          <i class="bx bxs-first-aid text-[70px] text-teal-500"></i>
          <h1 class="font-semibold text-[#005789] text-2xl">
            Personalised Care
          </h1>
          <p>
            Our team takes the time to understand your concerns and tailor
            treatments to your health goals, ensuring your overall comfort.
          </p>
        </div>
        <div class="p-10 rounded-lg shadow-inner bg-white m-2">
          <i class="bx bxs-time text-[70px] text-teal-500"></i>
          <h1 class="font-semibold text-[#005789] text-2xl">
            24/7 Medical Consultation
          </h1>
          <p>
            Day or night, our medical team is always available to address your
            concerns, ensuring you have access to care.
          </p>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------------------------------------------------------------- -->
    <div class="my-5">
      <div class="text-center">
        <i class="bx bx-badge-check text-[#005789] text-xl"></i> &nbsp;
        <span class="text-[#005789] font-semibold">Our Team</span>
        <h1 class="text-[32px] font-bold">Meet Our Doctors</h1>
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
</template>

<script setup>
import { ref, onMounted } from "vue";
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);

  // for change Title On Page
  // document.title = "My Vue 3 Page Title";
});
</script>

<style scoped>
/* Additional styles can go here if needed */
</style>
