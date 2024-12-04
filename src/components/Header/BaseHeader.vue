<template>
  <nav class="relative flex flex-wrap items-center justify-between bg-teal-500">
    <!-- <div class="lg:flex lg:flex-grow items-center absolute top-0 left-0 right-0 bg-teal-500 z-50">
    for floatting Navbar header  </div> -->
    <div class="container mx-10 flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between px-1 lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href=""
        >
          <img
            src="../../assets/Logo/OneLogo.png"
            class="w-10 h-10 bg-[#fff] rounded-full p-2"
            alt="OneMeds Logo"
          />
        </a>
        <button
          class="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNav"
        >
          <i :class="isOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
        </button>
      </div>

      <!-- Use dynamic class binding to show or hide the menu -->

      <!-- translate Top -->
      <div
        class="lg:flex lg:flex-grow items-center"
        :class="{ hidden: !isOpen, flex: isOpen }"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto pb-2">
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/') }"
          >
            <router-link
              to="/"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Home</span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/about') }"
          >
            <router-link
              to="/about"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">About US</span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/service') }"
          >
            <router-link
              to="/service"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Services and Wellness Program </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/special') }"
          >
            <router-link
              to="/special"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            >
              <span class="">Specialties </span>
            </router-link>
          </li>

          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/patients') }"
          >
            <router-link
              to="/patients"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">For Patients </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/appoin') }"
          >
            <router-link
              to="/appoin"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Appointments </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/contact') }"
          >
            <router-link
              to="/contact"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Contact Us </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/careers') }"
          >
            <router-link
              to="/careers"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Careers </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/visitors') }"
          >
            <router-link
              to="/visitors"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Patient and Visitors </span>
            </router-link>
          </li>
          <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/blog') }"
          >
            <router-link
              to="/blog"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Blog, News, Events & Testimonial </span>
            </router-link>
          </li>
          <!-- <li
            class="nav-item text-center hover:border-b-4 transition-all duration-100"
            :class="{ 'border-b-4 border-white': isActive('/blog') }"
          >
            <router-link
              to="/blog"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="">Blog, News, Events & Testimonial </span> <i class='bx bxs-laugh px-4 font-bold text-2xl' :class="{ 'rotate-180': menuOpen }" @click="togggleMenu"></i>
            </router-link>
            <ul
              class="absolute top-full bg-white text-black shadow-lg rounded-md mt-2 z-50"
              :class="{ hidden: !menuOpen, flex: menuOpen }"
            >
              <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 1</li>
              <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 2</li>
              <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">Item 3</li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const isOpen = ref(false);
const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

// const menuOpen = ref(false);
// const togggleMenu=()=>{
// menuOpen.value = !menuOpen.value
// }



const route = useRoute(); // Get the current route object

// Function to check if the current route matches the given path
const isActive = (path) => route.path === path;

</script>
