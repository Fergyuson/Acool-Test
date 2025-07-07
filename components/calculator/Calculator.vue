<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCalculator } from '~/stores/calc'


const calculator = useCalculator()

const emit = defineEmits<{
  (e: 'open-modal', payload: { fromCalculator: true; price: number }): void
}>()

const types     = ['Landing', 'E-commerce']
const cmsList   = ['Bitrix24', 'WordPress']
const designs   = ['Template', 'Custom']
const themes    = ['Business', 'Portfolio']
const extraOpts = ['SEO', 'Copywriting', 'Support']

const comment = ref('')

const total = computed(() => calculator.total)

const agree = ref(false)

function openModal() {
  emit('open-modal', { fromCalculator: true, price: total.value })
}
</script>

<template>
  <div
      class="bg-[url('/img/flower-br-calc.png')] bg-center bg-cover bg-no-repeat bg-gray-900/70 bg-blend-multiply rounded-xl p-8 text-white max-w-7xl mx-auto">
    <h2 class="text-2xl font-bold mb-6">Посчитайте стоимость вашего сайта:</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 relative z-10">

      <select v-model="calculator.options.type" class=" bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 appearance-none">
        <option :value="null">Тип сайта</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>

      <select v-model="calculator.options.cms" class="bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 appearance-none">
        <option :value="null">Тип CMS</option>
        <option v-for="cms in cmsList" :key="cms" :value="cms">{{ cms }}</option>
      </select>

      <select v-model="calculator.options.theme" class="bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 appearance-none">
        <option :value="null">Тематика сайта</option>
        <option v-for="theme in themes" :key="theme" :value="theme">{{ theme }}</option>
      </select>

      <select v-model="calculator.options.design" class="bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 appearance-none">
        <option :value="null">Дизайн сайта</option>
        <option v-for="design in designs" :key="design" :value="design">{{ design }}</option>
      </select>

      <select v-model="calculator.options.extras" multiple class="bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 h-24 hide-scrollbar appearance-none">
        <option v-for="extras in extraOpts" :key="extras" :value="extras">{{ extras }}</option>
      </select>

      <textarea
          v-model="calculator.options.comment"
          placeholder="Комментарии к проекту"
          class="md:col-span-2 bg-[#F2F2F4] w-full p-3 rounded-2xl text-gray-900 h-24 resize-none"
      />
    </div>

    <div class="mb-6">
      <span class="text-lg">Стоимость проекта:</span>
      <span class="text-3xl font-bold ml-4">{{ total.toLocaleString() }} ₽</span>
    </div>

    <button
        class="w-full bg-gradient-to-r from-[#7B66FF] to-[#845FFF] py-4 rounded-4xl text-white font-semibold"
        @click="openModal"
    >
      Связаться с нами
    </button>
    <div class="flex items-center text-center gap-2 text-xs text-[#8B8B8B] mt-4">
      <label class="flex items-start md:items-center cursor-pointer select-none relative">
        <input
            id="agree-calc"
            type="checkbox"
            v-model="agree"
            class="peer aspect-square appearance-none w-5 h-5 border border-gray-500 rounded bg-transparent checked:bg-transparent  transition-all duration-150"
        />
        <span
            class="pointer-events-none absolute left-0 top-0 w-5 h-5 flex items-center justify-center"
        >
      <svg v-if="agree" class="w-4 h-4 text-[#7B66FF] " fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
    </span>
        <span class="pl-2 md:pl-3 leading-snug text-start text-gray-300">
      Нажимая кнопку, я соглашаюсь с
      <a href="#" class="underline text-white">политикой конфиденциальности</a>
      и даю разрешение на обработку моих персональных данных.
    </span>
      </label>
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;     /* Firefox */
}
</style>
