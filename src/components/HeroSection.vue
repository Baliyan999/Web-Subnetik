<template>
  <section id="hero" class="relative overflow-hidden bg-icorp-black text-white min-h-screen">
    <!-- Animated background shapes with parallax effects -->
    <div class="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-gray-800/40 to-transparent blur-3xl rounded-full animate-blob1 parallax-slow"></div>
    <div class="absolute bottom-0 right-0 w-2/3 h-96 bg-gradient-to-tr from-gray-700/40 to-transparent blur-3xl rounded-full animate-blob2 parallax-medium"></div>
    <div class="absolute top-1/2 left-1/3 w-1/3 h-80 bg-gradient-to-bl from-gray-600/30 to-transparent blur-3xl rounded-full animate-blob3 parallax-fast"></div>
    
    <!-- Additional parallax elements -->
    <div class="absolute top-1/4 right-1/4 w-1/4 h-64 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl rounded-full animate-blob4 parallax-slow"></div>
    <div class="absolute bottom-1/4 left-1/4 w-1/5 h-48 bg-gradient-to-tr from-purple-500/25 to-transparent blur-2xl rounded-full animate-blob5 parallax-medium"></div>
    <div class="absolute top-3/4 left-1/2 w-1/6 h-32 bg-gradient-to-bl from-green-500/30 to-transparent blur-xl rounded-full animate-blob6 parallax-fast"></div>
    
    <!-- Floating particles -->
    <div class="absolute top-1/5 left-1/5 w-2 h-2 bg-white/20 rounded-full animate-float1 parallax-slow"></div>
    <div class="absolute top-2/5 right-1/5 w-1 h-1 bg-white/30 rounded-full animate-float2 parallax-medium"></div>
    <div class="absolute bottom-1/5 left-2/5 w-3 h-3 bg-white/15 rounded-full animate-float3 parallax-fast"></div>
    <div class="absolute top-3/5 right-2/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-float4 parallax-slow"></div>

    <!-- Navbar -->
    <Navbar />

    <div class="relative z-10 flex flex-col items-center text-center py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 px-2 xs:px-4 sm:px-6 lg:px-8">
      <!-- Subtitle -->
      <p 
        class="text-[10px] xs:text-xs sm:text-sm md:text-base uppercase tracking-wider sm:tracking-widest text-gray-400 mb-2 sm:mb-3 md:mb-4"   
        data-aos="fade-down"
      >
        {{ $t('hero.tagline') }}
      </p>

      <!-- Main Title -->
      <h1 
        class="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-3 sm:mb-4 md:mb-6 w-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span class="block drop-shadow-lg">{{ $t('hero.title').split(' ').slice(0, 2).join(' ') }}</span>
        <span class="block drop-shadow-lg">{{ $t('hero.title').split(' ').slice(2).join(' ') }}</span>
      </h1>

      <!-- Description -->
      <p 
        class="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl mt-3 sm:mt-4 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed px-2 xs:px-4 hidden sm:block"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ $t('hero.subtitle') }}
      </p>

      <!-- Slogan -->
      <div 
        class="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mt-6 sm:mt-8 px-2 xs:px-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
          <p class="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium leading-relaxed text-center" v-html="$t('hero.slogan')">
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div 
        class="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 w-full sm:w-auto px-2 xs:px-4 sm:px-0 items-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <button 
          class="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-xs sm:w-auto sm:max-w-none"
          @click="discussProject"
        >
          {{ $t('hero.discussProject') }}
        </button>
        <button 
          class="portfolio-btn relative bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base border border-white/30 animate-pulse-border w-full max-w-xs sm:w-auto sm:max-w-none"
          @click="viewPortfolio"
        >
          {{ $t('hero.portfolio') }}
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div 
        class="flex flex-col items-center mt-12 sm:mt-14 md:mt-16 lg:mt-20"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <!-- Elegant Scroll Indicator -->
        <div class="scroll-indicator" @click="scrollToNext">
          <!-- Mouse Icon -->
          <div class="mouse-icon">
            <div class="mouse-body">
              <div class="mouse-wheel"></div>
            </div>
          </div>
          
          <!-- Scroll Text -->
          <p class="scroll-text">{{ $t('hero.scroll') }}</p>
          
          <!-- Animated Dots -->
          <div class="scroll-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import Navbar from './Navbar.vue'

export default {
  name: 'HeroSection',
  components: {
    Navbar
  },
  setup() {
    const discussProject = () => {
      // Scroll to contacts section
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        // Fallback: try to find by text content
        const sections = document.querySelectorAll('section')
        for (let section of sections) {
          if (section.textContent.includes('Контакты') || section.textContent.includes('Связаться с нами') || section.textContent.includes('Оставить заявку')) {
            section.scrollIntoView({ behavior: 'smooth' })
            break
          }
        }
      }
    }

    const viewPortfolio = () => {
      // Scroll to portfolio section (Наши проекты)
      const portfolioSection = document.querySelector('.portfolio-section') || document.querySelector('#portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Fallback: try to find by text content
        const sections = document.querySelectorAll('section')
        for (let section of sections) {
          if (section.textContent.includes('Наши проекты') || section.textContent.includes('ПОРТФОЛИО')) {
            section.scrollIntoView({ behavior: 'smooth' })
            break
          }
        }
      }
    }

    const scrollToNext = () => {
      // Scroll to next section (IdeaSection)
      const nextSection = document.querySelector('.idea-section') || document.querySelector('#idea')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Fallback: scroll down by viewport height
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
      }
    }

    onMounted(() => {
      // Initialize blob animations using CSS keyframes as fallback
      // GSAP animations would be added here if the library is available
      console.log('HeroSection mounted with animated blobs')
      
      // Add parallax scroll effect
      const handleScroll = () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast')
        
        parallaxElements.forEach((element, index) => {
          const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                       element.classList.contains('parallax-medium') ? 0.3 : 0.1
          const yPos = -(scrolled * speed)
          element.style.transform = `translateY(${yPos}px)`
        })
      }
      
      window.addEventListener('scroll', handleScroll)
      
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })

    return {
      discussProject,
      viewPortfolio
    }
  }
}
</script>

<style scoped>
/* Keyframe animations for blob shapes */
@keyframes blob1 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  33% { 
    transform: translate(30px, -20px) scale(1.1) rotate(120deg); 
  }
  66% { 
    transform: translate(-20px, 30px) scale(0.9) rotate(240deg); 
  }
}

@keyframes blob2 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  50% { 
    transform: translate(-40px, 25px) scale(1.2) rotate(180deg); 
  }
}

@keyframes blob3 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  25% { 
    transform: translate(20px, -30px) scale(1.15) rotate(90deg); 
  }
  75% { 
    transform: translate(-25px, 20px) scale(0.85) rotate(270deg); 
  }
}

@keyframes blob4 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  50% { 
    transform: translate(-30px, 25px) scale(1.1) rotate(180deg); 
  }
}

@keyframes blob5 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  33% { 
    transform: translate(25px, -20px) scale(1.2) rotate(120deg); 
  }
  66% { 
    transform: translate(-20px, 30px) scale(0.9) rotate(240deg); 
  }
}

@keyframes blob6 {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg); 
  }
  50% { 
    transform: translate(15px, -15px) scale(1.3) rotate(180deg); 
  }
}

@keyframes float1 {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
  }
  25% { 
    transform: translateY(-20px) translateX(10px); 
  }
  50% { 
    transform: translateY(-10px) translateX(-5px); 
  }
  75% { 
    transform: translateY(-30px) translateX(15px); 
  }
}

@keyframes float2 {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
  }
  50% { 
    transform: translateY(-25px) translateX(-10px); 
  }
}

@keyframes float3 {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
  }
  33% { 
    transform: translateY(-15px) translateX(8px); 
  }
  66% { 
    transform: translateY(-35px) translateX(-12px); 
  }
}

@keyframes float4 {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
  }
  50% { 
    transform: translateY(-20px) translateX(5px); 
  }
}

.animate-blob1 {
  animation: blob1 25s infinite ease-in-out;
}

.animate-blob2 {
  animation: blob2 30s infinite ease-in-out;
}

.animate-blob3 {
  animation: blob3 20s infinite ease-in-out;
}

.animate-blob4 {
  animation: blob4 35s infinite ease-in-out;
}

.animate-blob5 {
  animation: blob5 28s infinite ease-in-out;
}

.animate-blob6 {
  animation: blob6 22s infinite ease-in-out;
}

.animate-float1 {
  animation: float1 8s infinite ease-in-out;
}

.animate-float2 {
  animation: float2 6s infinite ease-in-out;
}

.animate-float3 {
  animation: float3 10s infinite ease-in-out;
}

.animate-float4 {
  animation: float4 7s infinite ease-in-out;
}

/* Parallax effects */
.parallax-slow {
  will-change: transform;
}

.parallax-medium {
  will-change: transform;
}

.parallax-fast {
  will-change: transform;
}

/* Enhanced button hover effects - only for first button */
button:not(.portfolio-btn):hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

/* Portfolio button styles */
.portfolio-btn {
  position: relative;
}

/* Pulsing border animation */
@keyframes pulse-border {
  0%, 100% {
    border-color: rgba(255, 255, 255, 0.3);
  }
  50% {
    border-color: rgba(255, 255, 255, 1);
  }
}

.animate-pulse-border {
  animation: pulse-border 1s ease-in-out infinite;
}


/* Rotating animation for the light strip */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Smooth transitions for all elements */
* {
  transition: all 0.3s ease;
}

/* Responsive text adjustments */
@media (max-width: 320px) {
  h1 {
    font-size: 1.4rem;
    line-height: 1.1;
  }
  
  /* Ensure no horizontal overflow on 320px screens */
  .relative.z-10 {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  /* Reduce padding for very small screens */
  .relative.z-10 > * {
    max-width: calc(100vw - 1rem);
  }
}

@media (min-width: 425px) and (max-width: 640px) {
  h1 {
    font-size: 2rem;
    line-height: 1.1;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 1.7rem;
    line-height: 1.1;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }
}

@media (min-width: 769px) {
  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }
}

/* Elegant Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: scroll-indicator-float 3s ease-in-out infinite;
}

.scroll-indicator:hover {
  transform: translateY(-5px);
  animation: none;
}

.mouse-icon {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  position: relative;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.scroll-indicator:hover .mouse-icon {
  border-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mouse-body {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mouse-wheel {
  width: 3px;
  height: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  animation: wheel-scroll 2s ease-in-out infinite;
}

.scroll-text {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.scroll-indicator:hover .scroll-text {
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.scroll-dots {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dot {
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: dot-fade 2s ease-in-out infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.3s;
}

.dot:nth-child(3) {
  animation-delay: 0.6s;
}

.scroll-indicator:hover .dot {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
}

@keyframes wheel-scroll {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

@keyframes dot-fade {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes scroll-indicator-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
  }
}

@media (min-width: 1280px) {
  h1 {
    font-size: 4rem;
    line-height: 1.1;
  }
}
</style>