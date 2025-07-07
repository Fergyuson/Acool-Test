<script setup lang="ts">
import { useModal } from '~/composables/useModal'
import Button from "~/components/ui/Button.vue";
const { isOpen, close, content } = useModal()
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          @keydown.escape.prevent="close"
      >
        <div
            class="relative w-full h-auto max-h-140 max-w-205 rounded-2xl bg-transparent md:bg-white p-6 shadow-xl flex flex-col "
            role="dialog"
            aria-modal="true"
        >
          <button
              class="absolute top-3 right-5 z-60 text-black hover:text-gray-500 text-2xl"
              @click="close"
              aria-label="Закрыть"
          >
            ✕
          </button>
          <slot :content="content" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
