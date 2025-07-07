<script setup lang="ts">
import ModalWrapper from '../components/ui/ModalWrapper.vue'
import Button   from '../components/ui/Button.vue'
import Section from '../components/hero/Section.vue'
import Slider from '../components/services/Slider.vue'
import Calculator from '../components/calculator/Calculator.vue'
import Header from '../components/Header/General.vue'
import { useModal } from '~/composables/useModal'


interface ModalPayload {
  fromCalc?: boolean
  price?: number
}

const { open, close } = useModal()

const agree = ref(false)

function onSubmit() {
  if (!agree.value) return
  close()
}
</script>

<template>
  <main class="space-y-10 bg-gray-200">
    <Header />

    <section class="">
      <Section />
    </section>


    <section id="services" class=" container mx-auto">
      <h2 class="mb-8 bg-gray-200 text-[#4B4B4B] text-3xl font-bold">Наши услуги</h2>
      <Slider />
    </section>

    <section id="calc" class="container mx-auto max-h-none px-4">
      <h2 class="mb-6 text-2xl font-bold">Посчитайте стоимость вашего сайта:</h2>
      <Calculator @open-modal="open" />
    </section>
    <footer class="container  px-4 py-8 bg-gray-200">
    </footer>
  </main>

  <ModalWrapper v-slot="slotProps">
    <div class=" mx-auto bg-white rounded-2xl px-4 pt-3 pb-6 md:px-10 md:py-5">
      <h3 class="text-2xl md:text-5xl font-semibold text-center mt-2 mb-4">Осталось совсем немного!</h3>
      <p class="text-base md:text-lg font-normal leading-[140%] text-black text-center max-w-[600px] mx-auto mb-6 md:mb-9">
        Мы рассчитали стоимость вашего сайта, она составила
        <strong class="font-normal">{{ (slotProps.content as ModalPayload).price!.toLocaleString() }} рублей</strong>.
        <br />Оставьте свои контакты, и наш менеджер свяжется с вами<br /> в ближайшее время.
      </p>
      <form @submit.prevent="onSubmit" class="w-full flex flex-col gap-4 md:gap-5">
        <div class="flex flex-col md:flex-row w-full gap-4">
          <input id="name"
                 type="text"
                 placeholder="Имя"
                 class="h-14 md:h-15 w-full rounded-2xl bg-[#F5F7FA] px-4 placeholder-gray-400 focus:outline-none"/>
          <input id="phone"
                 type="tel"
                 placeholder="Телефон"
                 class="w-full h-14 rounded-2xl bg-[#F5F7FA] px-4 placeholder-gray-400 focus:outline-none "/>
        </div>
        <button type="submit" :disabled="!agree"
                class="w-full bg-gradient-to-l from-[#0804A1] to-[#9278FA] text-white text-lg font-medium rounded-full px-6 py-4 disabled:opacity-50 disabled:cursor-not-allowed">
          Отправить заявку
        </button>
        <div class="flex items-center gap-2 text-xs text-gray-500 mt-2">
          <label class="flex items-center cursor-pointer select-none">
          <span class="relative flex items-center justify-center w-5 h-5">
            <input
                id="agree-calc"
                type="checkbox"
                v-model="agree"
                class="peer appearance-none w-5 h-5 border border-gray-500 rounded bg-transparent checked:bg-transparent transition-all duration-150"
            />
            <svg v-if="agree" class="absolute w-4 h-4 text-[#7B66FF]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </span>
            <span class="pl-3 leading-snug text-start text-gray-400">
            Нажимая кнопку, я соглашаюсь с
            <a href="#" class="text-gray-400 font-bold">политикой конфиденциальности</a>
            и даю разрешение на обработку моих персональных данных.
          </span>
          </label>
        </div>
      </form>
    </div>
  </ModalWrapper>
</template>
