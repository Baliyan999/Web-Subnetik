<template>
  <Transition name="toast">
    <div 
      v-if="isVisible" 
      class="fixed top-4 right-4 z-50 max-w-sm w-full"
    >
      <div 
        class="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl backdrop-blur-sm"
        :class="toastClasses"
      >
        <div class="flex items-start">
          <!-- Icon -->
          <div class="flex-shrink-0 mr-3">
            <div 
              class="w-6 h-6 rounded-full flex items-center justify-center"
              :class="iconClasses"
            >
              <svg v-if="type === 'success'" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <svg v-else-if="type === 'error'" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <svg v-else-if="type === 'warning'" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <svg v-else class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1">
            <h4 class="text-sm font-semibold text-white mb-1">
              {{ title }}
            </h4>
            <p class="text-sm text-gray-300">
              {{ message }}
            </p>
          </div>
          
          <!-- Close Button -->
          <button 
            @click="close"
            class="flex-shrink-0 ml-3 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
  },
  title: {
    type: String,
    default: 'Уведомление'
  },
  message: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const toastClasses = computed(() => {
  const base = 'border-l-4'
  const types = {
    success: 'border-green-500',
    error: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500'
  }
  return `${base} ${types[props.type] || types.info}`
})

const iconClasses = computed(() => {
  const classes = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  }
  return classes[props.type] || classes.info
})

const close = () => {
  emit('close')
}
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
