<script setup></script>

<template>
  <div class="carousel w-full">
    <!-- Slide 1 -->
    <div id="slide1" class="carousel-item relative w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/1.png" class="w-full h-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
        <a href="#slide3" class="btn btn-circle">
          <i class="bx bx-chevron-left text-2xl font-bold"></i>
        </a>
        <a href="#slide2" class="btn btn-circle">
          <i class="bx bx-chevron-right text-2xl font-bold"></i>
        </a>
      </div>
    </div>
    
    <!-- Slide 2 -->
    <div id="slide2" class="carousel-item relative w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/2.png" class="w-full h-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
        <a href="#slide1" class="btn btn-circle">
          <i class="bx bx-chevron-left text-2xl font-bold"></i>
        </a>
        <a href="#slide3" class="btn btn-circle">
          <i class="bx bx-chevron-right text-2xl font-bold"></i>
        </a>
      </div>
    </div>

    <!-- Slide 3 -->
    <div id="slide3" class="carousel-item relative w-full h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/3.png" class="w-full h-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
        <a href="#slide2" class="btn btn-circle">
          <i class="bx bx-chevron-left text-2xl font-bold"></i>
        </a>
        <a href="#slide1" class="btn btn-circle">
          <i class="bx bx-chevron-right text-2xl font-bold"></i>
        </a>
      </div>
    </div>
  </div>
</template>

