<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'
import SERVICES from '~/data/services'
import { useMediaQuery } from '@vueuse/core'
import type { Swiper as SwiperClass } from 'swiper'


const isDesktop = useMediaQuery('(min-width: 768px)')

const breakpoints = {
320: { slidesPerView: 1 },
640: { slidesPerView: 1.5 },
1024: { slidesPerView: 3 }
}

const swiperInstance = ref<SwiperClass | null>(null)

function onSwiper(swiper: SwiperClass) {
  swiperInstance.value = swiper
}
function slidePrev() {
  swiperInstance.value?.slidePrev()
}
function slideNext() {
  swiperInstance.value?.slideNext()
}
</script>

<template>
  <ClientOnly>
    <template v-if="isDesktop">
      <Swiper
          class="py-8"
          :space-between="20"
          :navigation="false"
          :slides-per-view="3"
          :breakpoints="breakpoints"
          @swiper="onSwiper"
      >
        <SwiperSlide
            v-for="(service, index) in SERVICES"
            :key="index"
            class="relative shrink-0 w-[413px] h-[400px] rounded-xl bg-white p-6 mb-5 shadow-md"
        >
          <h3
              class="text-transparent bg-clip-text bg-gradient-to-b from-[#0804A1] to-[#9278FA] font-semibold mb-2 break-words"
          >
            {{ service.title }}
          </h3>
          <p class="absolute bottom-10 text-[#313131]">{{ service.desc }}</p>
        </SwiperSlide>
      </Swiper>
      <div class="flex gap-2">
        <button class="w-10 h-10 rounded bg-gray-100 flex items-center text-2xl" @click="slidePrev">
          ←
        </button>
        <button class="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-2xl" @click="slideNext">
          →
        </button>
      </div>
    </template>
    <template v-else>
      <ul class="flex flex-col gap-3">
        <li
            v-for="(service, index) in SERVICES"
            :key="index"
            class="bg-white rounded-2xl p-4 mx-4 shadow text-left"
        >
          <div class="font-bold text-[18px] text-[#7B66FF] mb-1">{{ service.title }}</div>
          <div class="text-black text-[15px]">{{ service.desc }}</div>
        </li>
      </ul>
    </template>
  </ClientOnly>
</template>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
  background: var(--color-accent);
}
:deep(.swiper-slide) {
  width: 413px !important;
  height: 400px !important;
}
</style>