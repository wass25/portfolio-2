<script setup>

import Header from '../src/components/Header.vue'
import Footer from "../src/components/Footer.vue"
</script>

<template>
  <div class="font-inter bg:white dark:bg-black">
    <div class="mb-9">
      <Header></Header>
    </div>
    <Suspense>
      <router-view>

      </router-view>
    </Suspense>
    <div class="mt-20">
      <Footer></Footer>
    </div>
  </div>
</template>