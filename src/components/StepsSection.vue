<template>
  <section id="steps" class="py-24 md:py-32 bg-black text-white">
    <div class="max-w-6xl mx-auto px-6 md:px-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <div 
          class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
          data-aos="fade-up"
        >
          {{ $t('steps.topTagline') }}
        </div>
        <h2 
          class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ $t('steps.title') }}
        </h2>
      </div>

      <!-- Steps Grid -->
      <div class="steps-container max-w-6xl mx-auto">
        <!-- Step 1 -->
        <div 
          class="step-card"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <!-- Animated Number -->
          <div class="step-number">1</div>
          
          <!-- Header -->
          <div class="step-header">
            <h3 class="text-white text-sm font-medium text-center">{{ $t('steps.step1.title') }}</h3>
          </div>
          
          <!-- Content -->
          <div class="step-content">
            <!-- Title with bullet -->
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <h4 class="text-white text-lg font-semibold">{{ $t('steps.step1.subtitle') }}</h4>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ $t('steps.step1.description') }}
            </p>
          </div>
          
          <!-- Image -->
          <div class="step-image">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <div class="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div 
          class="step-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <!-- Animated Number -->
          <div class="step-number">2</div>
          
          <!-- Header -->
          <div class="step-header">
            <h3 class="text-white text-sm font-medium text-center">{{ $t('steps.step2.title') }}</h3>
          </div>
          
          <!-- Content -->
          <div class="step-content">
            <!-- Title with bullet -->
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <h4 class="text-white text-lg font-semibold">{{ $t('steps.step2.subtitle') }}</h4>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ $t('steps.step2.description') }}
            </p>
          </div>
          
          <!-- Image -->
          <div class="step-image">
            <div class="w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
              <div class="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div 
          class="step-card"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <!-- Animated Number -->
          <div class="step-number">3</div>
          
          <!-- Header -->
          <div class="step-header">
            <h3 class="text-white text-sm font-medium text-center">{{ $t('steps.step3.title') }}</h3>
          </div>
          
          <!-- Content -->
          <div class="step-content">
            <!-- Title with bullet -->
            <div class="flex items-start space-x-3 mb-4">
              <div class="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <h4 class="text-white text-lg font-semibold">{{ $t('steps.step3.subtitle') }}</h4>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ $t('steps.step3.description') }}
            </p>
          </div>
          
          <!-- Image -->
          <div class="step-image">
            <div class="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
              <div class="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div 
        class="text-center mt-16"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <button 
          class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          @click="goToContact"
        >
          {{ $t('steps.startProject') }}
        </button>
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

<script>
import { ref } from 'vue'

export default {
  name: 'StepsSection',
  setup() {
    const showModal = ref(false)

    const goToContact = () => {
      // Плавно прокручиваем к контактам на текущей странице
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
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

    return {
      showModal,
      goToContact,
      openContactModal,
      closeModal
    }
  }
}
</script>

<style scoped>
/* Steps Container */
.steps-container {
  display: flex;
  gap: 2rem;
  align-items: stretch;
}

@media (max-width: 768px) {
  .steps-container {
    flex-direction: column;
    gap: 1.5rem;
  }
}

/* Step Card */
.step-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(55, 65, 81, 0.3);
  transition: transform 0.3s ease;
  position: relative;
  min-height: 400px;
}

.step-card:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Animated Number */
.step-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #00ff99;
  opacity: 0.15;
  animation: fadeInUp 0.8s ease forwards;
  z-index: 1;
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 0.15;
  }
}

/* Step Header */
.step-header {
  width: 100%;
  margin-bottom: 1.5rem;
}

.step-header h3 {
  background: rgba(55, 65, 81, 0.5);
  border: 1px solid rgba(75, 85, 99, 0.5);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0;
}

/* Step Content */
.step-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
}

.step-content h4 {
  margin: 0;
  text-align: left;
}

.step-content p {
  margin: 0;
  text-align: left;
}

/* Step Image */
.step-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.step-image > div {
  transition: transform 0.3s ease;
}

.step-card:hover .step-image > div {
  transform: scale(1.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .step-card {
    min-height: 350px;
    padding: 1rem;
  }
  
  .step-number {
    font-size: 2.5rem;
    top: 0.75rem;
    left: 0.75rem;
  }
}
</style>
