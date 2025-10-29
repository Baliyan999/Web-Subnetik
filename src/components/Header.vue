<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <div class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div class="flex items-center justify-between h-14 sm:h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center group">
            <div class="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-110">
              <span class="text-white font-bold text-sm sm:text-base lg:text-lg">W</span>
            </div>
            <span class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 hidden xs:block">Web-Subnetik</span>
            <span class="text-base sm:text-lg font-bold text-gray-900 xs:hidden">WS</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <router-link to="/" class="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            {{ $t('nav.home') }}
          </router-link>
          <router-link to="/portfolio" class="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            {{ $t('nav.portfolio') }}
          </router-link>
          <a href="#idea" class="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            {{ $t('nav.about') }}
          </a>
          <a href="#contact" class="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            {{ $t('nav.contact') }}
          </a>
        </nav>

        <!-- Language Switcher and CTA Button -->
        <div class="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <button 
            @click="openContactModal"
            class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-sm xl:text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
          >
            {{ $t('hero.discussProject') }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
            aria-label="Toggle menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="lg:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <router-link 
              to="/" 
              @click="toggleMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              Главная
            </router-link>
            <router-link 
              to="/portfolio" 
              @click="toggleMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              Портфолио
            </router-link>
            <a 
              href="#idea" 
              @click="toggleMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              О компании
            </a>
            <a 
              href="#contacts" 
              @click="toggleMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
            >
              Контакты
            </a>
            <div class="px-3 py-2">
              <button 
                @click="openContactModal"
                class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold w-full transition-all duration-300 hover:shadow-lg"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Contact Modal -->
    <transition name="modal">
      <div 
        v-if="showModal" 
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click="closeModal"
      >
        <div 
          class="bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 border border-white/10"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="text-center mb-6 sm:mb-8">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">Связаться с нами</h3>
            <p class="text-gray-400 text-sm sm:text-base">Выберите удобный способ связи</p>
          </div>

          <!-- Contact Options -->
          <div class="space-y-3 sm:space-y-4">
            <!-- Telegram -->
            <a 
              href="https://t.me/subnetik" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <img src="/assets/images/social/telegram.png" alt="Telegram" class="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm sm:text-base">Telegram</h4>
                <p class="text-gray-400 text-xs sm:text-sm">@subnetik</p>
              </div>
            </a>

            <!-- Instagram -->
            <a 
              href="https://instagram.com/subnetik.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-pink-500/30 transition-colors flex-shrink-0">
                <img src="/assets/images/social/instagram.png" alt="Instagram" class="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm sm:text-base">Instagram</h4>
                <p class="text-gray-400 text-xs sm:text-sm">@subnetik.pro</p>
              </div>
            </a>

            <!-- Threads -->
            <a 
              href="https://threads.net/@subnetik.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-gray-500/30 transition-colors flex-shrink-0">
                <img src="/assets/images/social/threads.png" alt="Threads" class="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm sm:text-base">Threads</h4>
                <p class="text-gray-400 text-xs sm:text-sm">@subnetik.pro</p>
              </div>
            </a>

            <!-- Redbook -->
            <a 
              href="https://xhslink.com/m/7ecNGndRLWE" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-red-500/30 transition-colors flex-shrink-0">
                <img src="/assets/images/social/redbook.png" alt="Redbook" class="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm sm:text-base">Redbook</h4>
                <p class="text-gray-400 text-xs sm:text-sm">Наш профиль</p>
              </div>
            </a>
          </div>

          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="mt-6 text-gray-400 hover:text-white transition-colors duration-300 w-full"
          >
            <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isMobileMenuOpen = ref(false)
const showModal = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const openContactModal = () => {
  showModal.value = true
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    if (showModal.value) {
      closeModal()
    } else if (isMobileMenuOpen.value) {
      toggleMobileMenu()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.container {
  max-width: 1920px;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-gray-900,
.modal-leave-active .bg-gray-900 {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-gray-900,
.modal-leave-to .bg-gray-900 {
  transform: scale(0.9);
}

/* Extra small screens */
@media (min-width: 375px) {
  .xs\:block {
    display: block;
  }
  .xs\:hidden {
    display: none;
  }
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
