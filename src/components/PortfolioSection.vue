<template>
  <section id="portfolio" class="portfolio-section py-24 bg-icorp-black text-white text-center">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-16">
      <h2 
        class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
        data-aos="fade-up"
      >
        {{ $t('portfolio.title') }}
      </h2>
      <p 
        class="text-sm font-semibold text-icorp-blue uppercase tracking-wider mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {{ $t('portfolio.tagline') }}
      </p>
      <p 
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ $t('portfolio.subtitle') }}
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="container mx-auto px-4 sm:px-8 md:px-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <!-- Project 1 - Unlock (Combined Card + Info) -->
        <div 
          class="group relative"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <!-- Card Container with Background -->
          <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 hover:rounded-3xl h-full flex flex-col">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>
            
            <!-- Card Image -->
            <div class="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 group-hover:rounded-2xl transition-all duration-500">
              <div class="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                <!-- Image Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/assets/images/projects/unlock.jpg" 
                  :alt="$t('portfolio.projects.unlock.title') + ' - ' + $t('portfolio.projects.unlock.description')"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  @error="handleImageError"
                />
                <!-- Floating Elements -->
                <div class="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.2s;"></div>
                <div class="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.4s;"></div>
              </div>
            </div>
            
          <!-- Project Info -->
          <div class="text-center relative z-10 flex-1 flex flex-col justify-center">
            <h3 class="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">{{ $t('portfolio.projects.unlock.title') }}</h3>
            <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{{ $t('portfolio.projects.unlock.description') }}</p>
            <div class="flex justify-center">
              <a 
                href="https://unlocklingua.com" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 hover:underline group-hover:scale-105"
              >
                {{ $t('portfolio.visit') }} →
                <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div 
      class="container mx-auto px-2 sm:px-4 mt-6 sm:mt-8 md:mt-12"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div class="flex justify-center">
        <router-link 
          to="/portfolio" 
          class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors text-xs sm:text-base uppercase tracking-wide no-text-shadow"
        >
          <span>{{ $t('portfolio.viewFullPortfolio') }} →</span>
        </router-link>
      </div>
    </div>

    <!-- Beautiful Info Block -->
    <div 
      class="container mx-auto px-4 mt-16"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div class="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl"></div>
        
        <div class="relative z-10 text-center">
          <!-- Main Message -->
          <div class="mb-8">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              {{ $t('portfolio.cta.title') }}
            </h3>
            <p class="text-3xl md:text-4xl font-extrabold text-green-400 mb-6">
              {{ $t('portfolio.cta.highlight') }}
            </p>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">
              {{ $t('portfolio.cta.description') }}
            </p>
          </div>
          
          
          <!-- Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50">
            <div class="text-center">
              <div class="text-3xl font-bold text-green-400 mb-2">10+</div>
              <div class="text-gray-400 text-sm">{{ $t('portfolio.stats.projects') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div class="text-gray-400 text-sm">{{ $t('portfolio.stats.clients') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div class="text-gray-400 text-sm">{{ $t('portfolio.stats.support') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div 
        class="bg-gray-900/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full mx-4 border border-white/10"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-2">Связаться с нами</h3>
          <p class="text-gray-400">Выберите удобный способ связи</p>
        </div>

        <!-- Contact Options -->
        <div class="space-y-4">
          <!-- Telegram -->
          <a 
            href="https://t.me/subnetik" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
              <img src="/assets/images/social/telegram.png" alt="Telegram" class="w-8 h-8" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Telegram</h4>
              <p class="text-gray-400 text-sm">@subnetik</p>
            </div>
          </a>

          <!-- Instagram -->
          <a 
            href="https://instagram.com/subnetik.pro" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-pink-500/30 transition-colors">
              <img src="/assets/images/social/instagram.png" alt="Instagram" class="w-8 h-8" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Instagram</h4>
              <p class="text-gray-400 text-sm">@subnetik.pro</p>
            </div>
          </a>

          <!-- Threads -->
          <a 
            href="https://threads.net/@subnetik.pro" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-500/30 transition-colors">
              <img src="/assets/images/social/threads.png" alt="Threads" class="w-8 h-8" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Threads</h4>
              <p class="text-gray-400 text-sm">@subnetik.pro</p>
            </div>
          </a>

          <!-- Redbook -->
          <a 
            href="https://xhslink.com/m/7ecNGndRLWE" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
              <img src="/assets/images/social/redbook.png" alt="Redbook" class="w-8 h-8" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Redbook</h4>
              <p class="text-gray-400 text-sm">Наш профиль</p>
            </div>
          </a>
        </div>

        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300"
        >
          Закрыть
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const handleImageError = (event) => {
  // Fallback to placeholder if unlock.jpg fails to load
  event.target.src = 'https://via.placeholder.com/400x320/1a1a1a/ffffff?text=Unlock+Project'
}

const openContactModal = () => {
  showModal.value = true
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  // Restore body scroll
  document.body.style.overflow = 'auto'
}

// Close modal on Escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

// Add event listener for Escape key
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleEscape)
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Hover effects for project cards */
.group:hover .w-full {
  transform: scale(1.05);
  transition: transform 0.7s ease;
  border-radius: 1rem;
}

/* Custom hover glow effect for links */
.text-green-400:hover {
  text-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

/* Enhanced text contrast and readability */
.drop-shadow-lg {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8));
}

/* Custom animations for Unlock card */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
    border-radius: 1.5rem;
  }
  50% { 
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
    border-radius: 1.5rem;
  }
}

@keyframes shimmer {
  0% { 
    background-position: -200% 0; 
    transform: translateX(-100%);
  }
  100% { 
    background-position: 200% 0; 
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Enhanced hover effects for the main card */
.group:hover .bg-gradient-to-br {
  animation: glow 2s ease-in-out infinite;
  border-radius: 1.5rem !important;
}

/* Force rounded corners on hover */
.group:hover .rounded-3xl {
  border-radius: 1.5rem !important;
}

.group:hover .rounded-2xl {
  border-radius: 1rem !important;
}

/* Ensure all child elements maintain rounded corners */
.group:hover * {
  border-radius: inherit !important;
}

/* Specific fix for the main card container */
.group:hover > div {
  border-radius: 1.5rem !important;
}

/* Force rounded corners on all animated elements */
.group:hover .absolute.inset-0 {
  border-radius: 1.5rem !important;
  overflow: hidden !important;
}

/* Ensure glow animation respects rounded corners */
.group:hover .bg-gradient-to-br {
  border-radius: 1.5rem !important;
  overflow: hidden !important;
}

/* Floating animation for background elements */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Shimmer effect for text */
.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

/* CTA Button Animations */
@keyframes button-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
  }
}

@keyframes button-pulse {
  0%, 100% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(1.05);
  }
}

@keyframes shimmer-button {
  0% { 
    background-position: -200% 0; 
  }
  100% { 
    background-position: 200% 0; 
  }
}

/* Enhanced CTA button hover effects */
.group:hover {
  animation: button-glow 2s ease-in-out infinite, button-pulse 2s ease-in-out infinite;
}

/* Shimmer effect for button text */
.group:hover span {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200% 100%;
  animation: shimmer-button 1.5s infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom pulse animation */
@keyframes custom-pulse {
  0%, 100% { 
    opacity: 0.4;
    transform: scale(1);
  }
  50% { 
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-custom-pulse {
  animation: custom-pulse 2s ease-in-out infinite;
}

/* Background pattern animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.absolute.top-4.left-4 {
  animation: float 3s ease-in-out infinite;
}

.absolute.top-4.right-4 {
  animation: float 3s ease-in-out infinite reverse;
  animation-delay: 1s;
}

.absolute.bottom-4.left-4 {
  animation: float 3s ease-in-out infinite;
  animation-delay: 2s;
}

.absolute.bottom-4.right-4 {
  animation: float 3s ease-in-out infinite reverse;
  animation-delay: 0.5s;
}

/* Enhanced backdrop blur for better text readability */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Text shadow for better contrast */
.text-white {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.text-green-400 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

/* Remove text shadow */
.no-text-shadow {
  text-shadow: none !important;
}

/* Beautiful Info Block Styles */
.bg-gradient-to-r {
  position: relative;
}

.bg-gradient-to-r::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  border-radius: 1.5rem;
  z-index: 1;
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px);
}

/* Stats animation */
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-3xl.font-bold {
  animation: countUp 0.8s ease forwards;
}

/* Modal Animations */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content, .modal-leave-to .modal-content {
  transform: scale(0.9) translateY(-20px);
}

.modal-content {
  transition: all 0.3s ease;
}

/* Responsive adjustments for the info block */
@media (max-width: 768px) {
  .bg-gradient-to-r {
    padding: 2rem 1.5rem;
  }
  
  .text-3xl.md\:text-4xl {
    font-size: 2rem;
  }
  
  .text-2xl.md\:text-3xl {
    font-size: 1.5rem;
  }
}
</style>
