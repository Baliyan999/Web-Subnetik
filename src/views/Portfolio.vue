<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header -->
    <!-- <Header /> -->
    
    <!-- Navbar -->
    <Navbar />
    
    <!-- Back Button -->
    <div class="pt-24 pb-4">
      <div class="max-w-7xl mx-auto px-6">
        <router-link 
          to="/" 
          class="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
        >
          <svg class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="font-medium">{{ $t('common.backToHome') }}</span>
        </router-link>
      </div>
    </div>

    <!-- Portfolio Hero -->
    <section class="py-16 bg-gradient-to-b from-black to-gray-900">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 
          class="text-5xl md:text-6xl font-extrabold mb-6"
          data-aos="fade-up"
        >
          {{ $t('portfolioPage.title') }}
        </h1>
        <p 
          class="text-xl text-gray-300 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ $t('portfolioPage.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          <!-- Project 1 - Unlock -->
          <div 
            class="group relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <!-- Card Container with Background -->
            <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 h-full flex flex-col">
              <!-- Animated Background Elements -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" style="animation-delay: 0.5s;"></div>
              </div>
              
              <!-- Card Image -->
              <div class="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                <div class="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                  <!-- Image Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="/src/assets/images/projects/unlock.jpg" 
                    alt="Unlock - Учебный центр китайского языка"
                    class="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    @error="handleImageError"
                  />
                  <!-- Floating Elements -->
                  <div class="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
              
              <!-- Project Info -->
              <div class="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.title') }}</h3>
                  <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.subtitle') }}</p>
                  <p class="text-gray-300 text-sm mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {{ $t('portfolioPage.projects.unlock.description') }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs group-hover:bg-green-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.technologies.vue') }}</span>
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs group-hover:bg-blue-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.technologies.tailwind') }}</span>
                    <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs group-hover:bg-purple-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.technologies.api') }}</span>
                    <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs group-hover:bg-yellow-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.unlock.technologies.python') }}</span>
                  </div>
                </div>
                <div class="mt-auto">
                  <a 
                    href="https://unlocklingua.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 hover:underline font-semibold group-hover:scale-105"
                  >
                    {{ $t('portfolioPage.projects.unlock.viewProject') }} →
                    <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 2 - Your Project -->
          <div 
            class="group relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- Card Container with Background -->
            <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 h-full flex flex-col">
              <!-- Animated Background Elements -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" style="animation-delay: 0.5s;"></div>
              </div>
              
              <!-- Card Image -->
              <div class="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                <div class="w-full h-64 bg-gradient-to-br from-gray-600/20 to-gray-800/20 flex items-center justify-center relative">
                  <!-- Image Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div class="text-center p-8 relative z-10">
                    <div class="w-20 h-20 bg-gradient-to-br from-green-500/40 to-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-10 h-10 text-white group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.title') }}</h3>
                    <p class="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.subtitle') }}</p>
                  </div>
                  
                  <!-- Floating Elements -->
                  <div class="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.2s;"></div>
                  <div class="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.4s;"></div>
                </div>
              </div>
              
              <!-- Project Info -->
              <div class="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.cardTitle') }}</h3>
                  <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.cardSubtitle') }}</p>
                  <p class="text-gray-300 text-sm mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {{ $t('portfolioPage.projects.yourProject.description') }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs group-hover:bg-green-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.modern') }}</span>
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs group-hover:bg-blue-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.responsive') }}</span>
                    <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs group-hover:bg-purple-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.seo') }}</span>
                    <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs group-hover:bg-yellow-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.fast') }}</span>
                    <span class="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs group-hover:bg-red-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.security') }}</span>
                    <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs group-hover:bg-indigo-500/30 transition-colors duration-300">{{ $t('portfolioPage.projects.yourProject.technologies.support') }}</span>
                  </div>
                </div>
                <div class="mt-auto">
                  <button 
                    @click="goToContact"
                    class="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-300 hover:underline font-semibold group-hover:scale-105"
                  >
                    {{ $t('portfolioPage.projects.yourProject.discussProject') }} →
                    <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { showSuccess } from '../composables/useNotifications'
// import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

const { t } = useI18n()

const router = useRouter()

const goToContact = () => {
  // Переходим на главную страницу
  router.push('/')
  
  // Ждем загрузки страницы и прокручиваем к контактам
  setTimeout(() => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, 100)
}

const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/400x320/1a1a1a/ffffff?text=Project+Image'
}
</script>

<style scoped>
/* Custom animations for Portfolio cards */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
  50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Enhanced hover effects for project cards */
.group:hover {
  transform: translateY(-8px);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom glow effect for the main card */
.group:hover .bg-gradient-to-br {
  animation: glow 2s ease-in-out infinite;
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

/* Enhanced link hover effects */
.text-green-400:hover {
  text-shadow: 0 0 12px rgba(34, 197, 94, 0.8);
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.4));
}

/* Smooth transitions for all elements */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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


/* Gradient text effect */
.gradient-text {
  background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}
</style>
