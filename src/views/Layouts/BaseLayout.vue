<template>
    <div>
        <div class="header">
          <Header />
          <Sider/>
        </div>
        <div class="p-2">
            <slot></slot>
        </div>
        <div class="footer">
          <Footer/>
        </div>
    </div>
</template>

<script setup>
import Header from '../../components/Header/BaseHeader.vue'
import Sider from '../../components/SiderImage/ImageSlide.vue'
import Footer from '../../components/Footer/BaseFooter.vue'
</script>

<style>

</style>
