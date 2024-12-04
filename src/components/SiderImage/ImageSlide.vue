<script setup></script>

<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/1.png" class="w-full" />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide3" class="btn btn-circle"
          ><i class="bx bx-chevron-left text-2xl font-bold"></i
        ></a>
        <a href="#slide2" class="btn btn-circle"
          ><i class="bx bx-chevron-right text-2xl font-bold"></i
        ></a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/2.png" class="w-full" />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide1" class="btn btn-circle"
          ><i class="bx bx-chevron-left text-2xl font-bold"></i
        ></a>
        <a href="#slide3" class="btn btn-circle"
          ><i class="bx bx-chevron-right text-2xl font-bold"></i
        ></a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full h-[400px] max-h-450">
      <img src="../../assets/sidebarimage/3.png" class="w-full" />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide2" class="btn btn-circle"
          ><i class="bx bx-chevron-left text-2xl font-bold"></i
        ></a>
        <a href="#slide1" class="btn btn-circle"
          ><i class="bx bx-chevron-right text-2xl font-bold"></i
        ></a>
      </div>
    </div>
  </div>
</template>
