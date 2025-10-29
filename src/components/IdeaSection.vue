<template>
  <section id="idea" class="idea-section relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-black text-white text-center overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <!-- Floating geometric shapes with parallax -->
      <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl animate-float-shape1 parallax-slow"></div>
      <div class="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-full blur-xl animate-float-shape2 parallax-medium"></div>
      <div class="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-tr from-green-500/8 to-transparent rounded-full blur-3xl animate-float-shape3 parallax-fast"></div>
      <div class="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-tl from-pink-500/12 to-transparent rounded-full blur-2xl animate-float-shape4 parallax-slow"></div>
      
      <!-- Additional floating shapes -->
      <div class="absolute top-1/6 left-1/6 w-20 h-20 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-xl animate-float-shape5 parallax-medium"></div>
      <div class="absolute bottom-1/6 right-1/6 w-36 h-36 bg-gradient-to-tl from-orange-500/6 to-transparent rounded-full blur-3xl animate-float-shape6 parallax-fast"></div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
        </div>
        <div class="absolute inset-0 grid grid-rows-12">
          <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
        </div>
      </div>
      
      <!-- Floating particles with parallax -->
      <div class="absolute top-1/5 left-1/5 w-2 h-2 bg-white/20 rounded-full animate-particle1 parallax-slow"></div>
      <div class="absolute top-2/5 right-1/5 w-1 h-1 bg-white/30 rounded-full animate-particle2 parallax-medium"></div>
      <div class="absolute bottom-1/5 left-2/5 w-3 h-3 bg-white/15 rounded-full animate-particle3 parallax-fast"></div>
      <div class="absolute top-3/5 right-2/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-particle4 parallax-slow"></div>
      <div class="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-white/10 rounded-full animate-particle5 parallax-medium"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <!-- Subtitle -->
      <p 
        class="text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 animate-subtitle"
        data-aos="fade-down"
      >
        {{ $t('idea.topTagline') }}
      </p>

      <!-- Main Title -->
      <h2 
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10 leading-tight animate-title"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span class="animate-title-word">{{ $t('idea.titlePart1') }}</span> 
        <span class="bg-gray-700/40 px-2 sm:px-3 py-1 rounded-lg inline-block animate-highlight">
          {{ $t('idea.titlePart2') }}
        </span>
      </h2>

      <!-- Content -->
      <div 
        class="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p class="animate-paragraph">
          {{ $t('idea.description') }}
        </p>
      </div>

      <!-- Bottom element -->
      <p 
        class="text-gray-500 text-sm tracking-widest mt-8 animate-web-element"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {{ $t('idea.bottomTagline') }}
      </p>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'IdeaSection',
  setup() {
    let handleScroll = null

    onMounted(() => {
      // Add parallax scroll effect
      handleScroll = () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast')
        
        parallaxElements.forEach((element) => {
          const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                        element.classList.contains('parallax-medium') ? 0.3 : 0.1
          const yPos = -(scrolled * speed)
          element.style.transform = `translateY(${yPos}px)`
        })
      }
      
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll)
      }
    })
  }
}
</script>

<style scoped>
/* Custom styling for the highlighted text */
.bg-gray-700\/40 {
  background-color: rgba(55, 65, 81, 0.4);
}

/* Smooth transitions for better UX */
* {
  transition: all 0.3s ease;
}

/* Responsive text adjustments for 320px screens */
@media (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
    line-height: 1.1;
  }
}

/* Responsive text sizing */
@media (max-width: 640px) {
  h2 {
    font-size: 2.5rem;
    line-height: 1.1;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  h2 {
    font-size: 3rem;
    line-height: 1.1;
  }
}

@media (min-width: 769px) {
  h2 {
    font-size: 3.75rem;
    line-height: 1.1;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 4rem;
    line-height: 1.1;
  }
}

/* Enhanced readability for paragraphs */
p {
  line-height: 1.7;
}

/* Subtle animation for the highlighted span */
span.bg-gray-700\/40 {
  transition: all 0.3s ease;
}

span.bg-gray-700\/40:hover {
  background-color: rgba(55, 65, 81, 0.6);
  transform: translateY(-1px);
}

/* Floating shapes animations */
@keyframes float-shape1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(30px, -20px) rotate(120deg) scale(1.1);
  }
  66% {
    transform: translate(-20px, 30px) rotate(240deg) scale(0.9);
  }
}

@keyframes float-shape2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-40px, 20px) rotate(180deg) scale(1.2);
  }
}

@keyframes float-shape3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(20px, -30px) rotate(90deg) scale(1.1);
  }
  75% {
    transform: translate(-30px, 20px) rotate(270deg) scale(0.8);
  }
}

@keyframes float-shape4 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(25px, -25px) rotate(180deg) scale(1.3);
  }
}

@keyframes float-shape5 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  40% {
    transform: translate(35px, -15px) rotate(144deg) scale(1.15);
  }
  80% {
    transform: translate(-25px, 35px) rotate(288deg) scale(0.85);
  }
}

@keyframes float-shape6 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  60% {
    transform: translate(-45px, 25px) rotate(216deg) scale(1.25);
  }
}

.animate-float-shape1 {
  animation: float-shape1 20s ease-in-out infinite;
}

.animate-float-shape2 {
  animation: float-shape2 25s ease-in-out infinite;
}

.animate-float-shape3 {
  animation: float-shape3 30s ease-in-out infinite;
}

.animate-float-shape4 {
  animation: float-shape4 22s ease-in-out infinite;
}

.animate-float-shape5 {
  animation: float-shape5 18s ease-in-out infinite;
}

.animate-float-shape6 {
  animation: float-shape6 28s ease-in-out infinite;
}

/* Particle animations */
@keyframes particle1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(50px, -30px) scale(1.5);
    opacity: 0.8;
  }
}

@keyframes particle2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-40px, 40px) scale(2);
    opacity: 0.9;
  }
}

@keyframes particle3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.15;
  }
  50% {
    transform: translate(30px, 50px) scale(1.2);
    opacity: 0.7;
  }
}

@keyframes particle4 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.25;
  }
  50% {
    transform: translate(-50px, -20px) scale(1.8);
    opacity: 0.8;
  }
}

@keyframes particle5 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: translate(60px, -40px) scale(2.2);
    opacity: 0.6;
  }
}

.animate-particle1 {
  animation: particle1 8s ease-in-out infinite;
}

.animate-particle2 {
  animation: particle2 12s ease-in-out infinite;
}

.animate-particle3 {
  animation: particle3 10s ease-in-out infinite;
}

.animate-particle4 {
  animation: particle4 14s ease-in-out infinite;
}

.animate-particle5 {
  animation: particle5 16s ease-in-out infinite;
}

/* Parallax classes for scroll effect */
.parallax-slow {
  will-change: transform;
}

.parallax-medium {
  will-change: transform;
}

.parallax-fast {
  will-change: transform;
}

/* Text animations */
@keyframes subtitle-glow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(156, 163, 175, 0.3);
  }
  50% {
    text-shadow: 0 0 15px rgba(156, 163, 175, 0.6), 0 0 25px rgba(156, 163, 175, 0.3);
  }
}

.animate-subtitle {
  animation: subtitle-glow 3s ease-in-out infinite;
}

@keyframes title-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-title {
  animation: title-float 4s ease-in-out infinite;
}

@keyframes title-word {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

.animate-title-word {
  animation: title-word 5s ease-in-out infinite;
}

@keyframes highlight-pulse {
  0%, 100% {
    background-color: rgba(55, 65, 81, 0.4);
    box-shadow: 0 0 0 rgba(55, 65, 81, 0.4);
  }
  50% {
    background-color: rgba(55, 65, 81, 0.6);
    box-shadow: 0 0 20px rgba(55, 65, 81, 0.3);
  }
}

.animate-highlight {
  animation: highlight-pulse 2s ease-in-out infinite;
}

.animate-highlight:hover {
  background-color: rgba(55, 65, 81, 0.8);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 5px 25px rgba(55, 65, 81, 0.4);
}

@keyframes paragraph-fade {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.animate-paragraph {
  animation: paragraph-fade 6s ease-in-out infinite;
}

.animate-paragraph:hover {
  opacity: 1;
  transform: translateX(5px);
  text-shadow: 0 0 10px rgba(209, 213, 219, 0.3);
}

@keyframes web-element-bounce {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-5px) scale(1.1);
    opacity: 0.8;
  }
}

.animate-web-element {
  animation: web-element-bounce 3s ease-in-out infinite;
  cursor: pointer;
}

.animate-web-element:hover {
  animation-play-state: paused;
  transform: translateY(-8px) scale(1.2);
  opacity: 1;
  text-shadow: 0 0 15px rgba(156, 163, 175, 0.5);
  color: rgba(156, 163, 175, 1);
}
</style>
