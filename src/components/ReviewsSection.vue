<template>
  <section id="reviews" class="py-24 bg-black text-white relative">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <p 
          class="text-gray-400 uppercase tracking-widest mb-3 subtitle-animated"
          data-aos="fade-down"
        >
          {{ $t('reviews.topTagline') }}
        </p>
        <h2 
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold title-animated"
          data-aos="fade-up"
        >
          {{ $t('reviews.title') }}
        </h2>
      </div>

      <!-- Reviews Slider -->
      <div class="relative">
        <div 
          ref="slider" 
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab select-none pb-4"
          @mousedown="handleMouseDown"
          @mouseleave="handleMouseLeave"
          @mouseup="handleMouseUp"
          @mousemove="handleMouseMove"
        >
          <div
            v-for="(review, i) in reviews"
            :key="i"
            class="review-card flex-shrink-0 snap-start bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 w-[280px] sm:w-[320px] md:w-[360px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            :data-aos-delay="i * 150"
          >
            <!-- Avatar -->
            <div class="avatar-container mb-4">
              <img 
                v-if="review.avatar"
                :src="review.avatar" 
                :alt="$t(`reviews.reviews.${review.key}.name`)" 
                class="w-16 h-16 rounded-full object-cover avatar-image"
              />
              <div 
                v-else
                class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl avatar-initials"
              >
                {{ getInitials($t(`reviews.reviews.${review.key}.name`)) }}
              </div>
              <div class="avatar-glow"></div>
            </div>
            
            <!-- Name -->
            <h3 class="text-lg font-semibold text-white mb-1 name-text">{{ $t(`reviews.reviews.${review.key}.name`) }}</h3>
            
            <!-- Role and Company -->
            <p class="text-gray-400 text-sm mb-4 role-text">{{ $t(`reviews.reviews.${review.key}.role`) }}{{ $t(`reviews.reviews.${review.key}.company`) ? ', ' + $t(`reviews.reviews.${review.key}.company`) : '' }}</p>
            
            <!-- Review Text -->
            <p class="text-gray-300 text-sm leading-relaxed review-text">{{ $t(`reviews.reviews.${review.key}.text`) }}</p>
          </div>
        </div>

        <!-- Navigation Arrows - Hidden -->
        <!-- <button 
          @click="scroll('left')" 
          class="absolute right-20 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click="scroll('right')" 
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([
  {
    key: 'timur',
    avatar: ''
  },
  {
    key: 'anastasia',
    avatar: ''
  },
  {
    key: 'david',
    avatar: '/assets/images/reviews/unlock-logo.jpg'
  },
  {
    key: 'andrey',
    avatar: ''
  },
  {
    key: 'maria',
    avatar: ''
  },
  {
    key: 'aziza',
    avatar: ''
  }
])

const slider = ref(null)
let isDown = false
let startX = 0
let scrollLeft = 0

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2) // Берем максимум 2 буквы
}

const scroll = (dir) => {
  const amount = 380
  slider.value.scrollBy({ 
    left: dir === 'right' ? amount : -amount, 
    behavior: 'smooth' 
  })
}

const handleMouseDown = (e) => {
  isDown = true
  slider.value.classList.add('grabbing')
  startX = e.pageX - slider.value.offsetLeft
  scrollLeft = slider.value.scrollLeft
}

const handleMouseLeave = () => {
  isDown = false
  slider.value.classList.remove('grabbing')
}

const handleMouseUp = () => {
  isDown = false
  slider.value.classList.remove('grabbing')
}

const handleMouseMove = (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.value.offsetLeft
  const walk = (x - startX) * 1.5
  slider.value.scrollLeft = scrollLeft - walk
}

onMounted(() => {
  // AOS will be initialized globally in main.js
  console.log('ReviewsSection mounted with drag-scroll functionality')
})
</script>

<style scoped>
/* Cursor styles for drag functionality */
.cursor-grab { 
  cursor: grab; 
}

.cursor-grab:active, 
.grabbing { 
  cursor: grabbing; 
}

/* Hide scrollbar */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.3s ease;
}

/* Avatar initials styling */
.avatar-initials {
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.avatar-initials:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* Review Card Animations */
.review-card {
  position: relative;
  overflow: hidden;
  transform: translateY(20px);
  opacity: 0;
  animation: slideInUp 0.8s ease forwards;
}

.review-card:nth-child(1) { animation-delay: 0.1s; }
.review-card:nth-child(2) { animation-delay: 0.2s; }
.review-card:nth-child(3) { animation-delay: 0.3s; }
.review-card:nth-child(4) { animation-delay: 0.4s; }
.review-card:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Avatar Container with Glow Effect */
.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar-image {
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.avatar-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00ff88, #00d4ff, #ff00ff, #ff8800);
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  animation: rotate 3s linear infinite;
  transition: opacity 0.3s ease;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Text Animations */
.name-text {
  background: linear-gradient(45deg, #ffffff, #00ff88, #ffffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.role-text {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.6s ease forwards;
  animation-delay: 0.3s;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.review-text {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.8s ease forwards;
  animation-delay: 0.5s;
}

/* Hover Effects */
.review-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 136, 0.2);
}

.review-card:hover .avatar-glow {
  opacity: 0.7;
}

.review-card:hover .avatar-image {
  transform: scale(1.1) rotate(5deg);
}

.review-card:hover .name-text {
  animation-duration: 1s;
}

/* Floating Animation for Cards */
.review-card:nth-child(odd) {
  animation: float 6s ease-in-out infinite;
}

.review-card:nth-child(even) {
  animation: float 6s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Pulse Effect for Background */
.review-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 136, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
}

.review-card:hover::before {
  opacity: 1;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Header Animations */
.subtitle-animated {
  background: linear-gradient(45deg, #9ca3af, #00ff88, #9ca3af);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite;
}

.title-animated {
  background: linear-gradient(45deg, #ffffff, #00ff88, #00d4ff, #ffffff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 5s ease-in-out infinite;
  position: relative;
}

.title-animated::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #00ff88, #00d4ff);
  animation: expandLine 2s ease-in-out forwards;
  animation-delay: 1s;
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 200px;
  }
}

/* Navigation button hover effects */
button:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 320px) {
  .review-card {
    width: 280px !important;
    padding: 1rem !important;
  }
  
  h2 {
    font-size: 1.875rem !important;
    line-height: 1.1;
  }
  
  .text-gray-400 {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .absolute.right-20 {
    right: 4rem;
  }
  
  .absolute.right-4 {
    right: 1rem;
  }
}
</style>