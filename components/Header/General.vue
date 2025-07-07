<script setup lang="ts">
import { ref } from 'vue'
const mobileMenuOpen = ref(false)

function scrollToCalc() {
  mobileMenuOpen.value = false
  const el = document.getElementById('calc')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="w-full bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between py-3 px-4 lg:px-0">

      <button class="lg:hidden mr-2" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
          <rect y="7" width="32" height="2.5" rx="1.25" fill="#222"/>
          <rect y="15" width="32" height="2.5" rx="1.25" fill="#222"/>
          <rect y="23" width="32" height="2.5" rx="1.25" fill="#222"/>
        </svg>
      </button>

      <div class="flex items-center gap-2 select-none">
        <img src="~/public/img/logo.png" alt="ACOOLA TEAM" class="h-7 w-auto" />
        <span class="font-bold tracking-widest text-lg hidden">ACOOLA TEAM</span>
      </div>

      <ul class="hidden lg:flex gap-6 text-base font-medium text-[#222]">
        <li><a href="#projects" class="hover:underline">Проекты</a></li>
        <li><a href="#services" class="hover:underline">Услуги</a></li>
        <li><a href="#about" class="hover:underline">Мы</a></li>
        <li><a href="#blog" class="hover:underline">Блог</a></li>
        <li><a href="#contacts" class="hover:underline">Контакты</a></li>
      </ul>

      <button @click="scrollToCalc" class="hidden lg:block bg-[#222] text-white rounded-full px-6 py-2 font-semibold text-base ml-6 hover:bg-[#444] transition">
        Связаться с нами
      </button>

      <button @click="scrollToCalc" class="lg:hidden bg-[#222] text-white rounded-full px-5 py-2 font-semibold text-sm ml-2">
        Напишите нам
      </button>
    </nav>

    <transition name="fade">
      <div v-if="mobileMenuOpen" class="lg:hidden absolute left-0 right-0 bg-white shadow-md border-t z-40">
        <ul class="flex flex-col gap-2 py-4 px-6 text-base font-medium text-[#222]">
          <li><a href="#projects" @click="mobileMenuOpen = false">Проекты</a></li>
          <li><a href="#services" @click="mobileMenuOpen = false">Услуги</a></li>
          <li><a href="#about" @click="mobileMenuOpen = false">Мы</a></li>
          <li><a href="#blog" @click="mobileMenuOpen = false">Блог</a></li>
          <li><a href="#contacts" @click="mobileMenuOpen = false">Контакты</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>