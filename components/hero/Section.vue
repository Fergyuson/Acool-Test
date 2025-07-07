<script setup lang="ts">
import PROJECTS from '~/data/projects'
import type { Project } from '~/components/hero/section.types'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'


const items: Project[] = PROJECTS
</script>

<template>
  <section
    class="mx-auto px-5 flex flex-col gap-5 md:flex-row relative max-w-315 w-full max-h-188 md:px-0"
  >

    <div
      class="relative z-10 flex flex-col justify-center items-start bg-gradient-to-r from-[#0804A1] to-[#9278FA] rounded-2xl w-full max-w-[847px] h-[420px] md:h-[600px] min-w-[320px] flex-1 md:mr-0 px-4 md:px-0"
    >
      <div class="pl-5 md:pl-15 pt-8 flex flex-col w-full h-full">
        <p class="text-base md:text-xl text-white mb-2 tracking-wide">digital creative agency</p>
        <h1 class="text-4xl md:text-7xl font-medium text-white mb-8 leading-[1.05]">
          СОЗДАНИЕ<br />И ПРОДВИЖЕНИЕ<br />САЙТОВ
        </h1>
        <button class="block md:hidden w-full bg-white rounded-full py-4 text-[#0804A1] font-bold text-lg mt-auto mb-4 flex items-center justify-center shadow-lg">
          Наши проекты
          <span class="align-middle ml-2 bg-accent rounded-full w-8 h-8 flex items-center justify-center">
            <svg class="h-5 w-5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      <div
          class="hidden md:flex absolute left-0 bottom-15 w-full max-w-182 bg-white rounded-[20px] items-center shadow-lg"
      >
        <ul class="flex items-stretch h-full w-full pl-2.5 pt-2.5 pb-2.5 pr-25">
          <li v-for="project in PROJECTS" :key="project.id" class="flex-1 flex items-center h-full">
            <a :href="project.link" class="flex items-center h-full w-full">
              <img
                :src="project.img"
                alt="projects"
                class="w-full h-full object-cover rounded-lg border-2 border-white"
              />
            </a>
          </li>
        </ul>
        <div class="absolute bottom-0 right-0 h-[40px] w-[100px] flex items-end justify-start pl-[14px] pb-[10px]">
          <span class="text-black text-lg font-medium leading-tight text-left">Наши<br>проекты</span>
        </div>
      </div>
    </div>

    <div
      class="relative flex-none basis-[413px] h-15 md:h-150 items-end justify-end rounded-2xl w-full max-w-[712px]  min-w-55 flex-shrink-0 w-413px bg-[url('/img/flower-bg.png')] bg-center bg-cover bg-no-repeat"
    >
      <img
        src="/img/flower-hero-P.png"
        alt="Flower"
        class="absolute right-0 bottom-0 z-10 pointer-events-none h-full w-[140%] max-w-none"
      />
      <div class="relative w-full h-full">
        <div class="absolute left-8 bottom-20 right-8 z-20">
          <span class="block text-white text-5xl md:text-7xl font-normal drop-shadow-lg">320 000 ₽</span>
        </div>
        <div class="absolute left-2 bottom-4 w-[244] h-[36px] bg-opacity-0 leading-none font-normal rounded-b-xl flex items-center pl-[5px] pb-5 pr-40 z-20 hidden md:block">
    <span class="text-[#313131] text-base font-medium">
      Топ-10 самых креативных<br>разработчиков сайтов в России
    </span>
        </div>
        <button
            class="absolute bottom-2 right-2 w-full md:w-auto bg-white rounded-full px-0 md:pl-2 md:pr-6 py-4 md:py-2 flex items-center justify-center z-30 shadow-lg"

        >
          <span class="flex items-center justify-center bg-accent rounded-full w-[30px] h-[30px] mr-3">
          <svg class="h-5 w-5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            </span>
          <span class="text-[#313131] font-semibold">Заказать</span>

        </button>
      </div>
    </div>
  </section>
</template>