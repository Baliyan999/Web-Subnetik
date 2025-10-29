<template>
  <div class="language-switcher flex items-center justify-between w-full">
    <!-- Logo -->
    <div class="flex-shrink-0">
      <img 
        src="/logo.png" 
        alt="Web-Subnetik Logo" 
        class="h-8 w-auto sm:h-10 transition-transform duration-200 hover:scale-105 cursor-pointer"
        @click="goToHome"
        @error="handleImageError"
      />
    </div>
    
    <!-- Language Switcher -->
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-200 hover:border-white/40"
      >
        <span class="text-lg sm:text-2xl">{{ currentLanguage.flag }}</span>
        <span class="text-white font-medium text-xs sm:text-sm hidden xs:block">{{ currentLanguage.code }}</span>
        <svg 
          class="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div 
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 z-50 transform -translate-x-0 max-w-[calc(100vw-2rem)]"
      >
        <div class="py-2">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
            :class="{ 'bg-white/10': currentLanguage.code === lang.code }"
          >
            <span class="text-xl sm:text-2xl flex-shrink-0">{{ lang.flag }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-white font-medium text-sm sm:text-base truncate">{{ lang.name }}</div>
              <div class="text-gray-400 text-xs sm:text-sm truncate">{{ lang.nativeName }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const isOpen = ref(false)

const languages = [
  {
    code: 'ru',
    name: 'Русский',
    nativeName: 'Русский',
    flag: '🇷🇺'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'zh',
    name: '中文',
    nativeName: '中文',
    flag: '🇨🇳'
  },
  {
    code: 'uz',
    name: 'O\'zbek',
    nativeName: 'O\'zbek',
    flag: '🇺🇿'
  }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (langCode) => {
  locale.value = langCode
  isOpen.value = false
  
  // Сохраняем выбранный язык в localStorage
  localStorage.setItem('selectedLanguage', langCode)
}

const goToHome = () => {
  router.push('/')
}

const handleImageError = (event) => {
  console.error('Failed to load logo image:', event.target.src)
  // Можно добавить fallback изображение или скрыть логотип
  event.target.style.display = 'none'
}

// Загружаем сохраненный язык при инициализации
const savedLanguage = localStorage.getItem('selectedLanguage')
if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
  locale.value = savedLanguage
}

// Закрываем dropdown при клике вне его
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-switcher')) {
    isOpen.value = false
  }
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  z-index: 1000;
  width: 100%;
}

.language-switcher img {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

/* Анимация для dropdown */
.language-switcher .absolute {
  animation: fadeInDown 0.2s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
