<template>
  <section id="projects" class="py-24 bg-black text-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p 
          class="text-gray-400 uppercase tracking-widest mb-2"
          data-aos="fade-down"
        >
          {{ $t('hero.tagline') }}
        </p>
        <h2 
          class="text-5xl font-bold mb-10"
          data-aos="fade-up"
        >
          {{ $t('projects.title') }}
        </h2>
        <div class="border-t border-white/10"></div>
      </div>

      <!-- Projects List -->
      <div class="space-y-0">
        <div 
          v-for="(project, i) in projects" 
          :key="i" 
          class="project-card border-t border-white/10 py-12"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="flex flex-col lg:flex-row justify-between items-center gap-10">
            <!-- Left Content -->
            <div class="flex flex-col lg:flex-row items-center gap-10">
              <!-- Project Image -->
              <div class="bg-[#111] rounded-3xl p-4 sm:p-6 md:p-8 w-64 sm:w-72 md:w-80 h-48 sm:h-52 md:h-60 flex flex-col justify-center flex-shrink-0">
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">{{ $t(`projects.${project.key}.title`) }}</h3>
                <div class="w-full h-32 rounded-xl overflow-hidden">
                  <img 
                    :src="project.image" 
                    :alt="$t(`projects.${project.key}.title`)"
                    class="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <!-- Project Description -->
              <div class="text-center lg:text-left max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl px-4 sm:px-6 md:px-8 lg:px-0">
                <p class="text-gray-400 text-sm mb-3">{{ $t('common.description') }}</p>
                <p class="text-gray-300 mb-3 text-sm sm:text-base">{{ $t(`projects.${project.key}.description`) }}</p>
                
                <!-- Animated Circle and Line -->
                <div class="flex justify-center lg:justify-start mb-4">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div class="h-[1px] w-16 bg-emerald-400 animate-pulse-line"></div>
                  </div>
                </div>
                
                <!-- Calculate Cost Button -->
                <button 
                  @click="goToContact"
                  class="inline-flex items-center justify-center lg:justify-start group text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-sm sm:text-base"
                >
                  <span>{{ $t('projects.calculateCost') }}</span>
                </button>
              </div>
            </div>

            <!-- Duration Badge -->
            <div class="border border-white/20 rounded-full px-6 py-3 text-white text-sm bg-white/5 backdrop-blur-sm flex items-center justify-center text-center">
              {{ $t(`projects.${project.key}.duration`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const projects = ref([
  {
    key: 'landing',
    image: '/assets/images/project-types/landing.png'
  },
  {
    key: 'multipage',
    image: '/assets/images/project-types/multipage.png'
  },
  {
    key: 'shop',
    image: '/assets/images/project-types/shop.png'
  },
  {
    key: 'mobile',
    image: '/assets/images/project-types/mobile.png'
  },
  {
    key: 'bot',
    image: '/assets/images/project-types/bot.png'
  }
])

onMounted(() => {
  // AOS will be initialized globally in main.js
  console.log('ProjectsSection mounted')
})
</script>

<style scoped>
/* Project Card Hover Effects */
.project-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1.5rem;
  margin: 0.5rem;
  padding: 1.5rem;
  width: 100%;
  min-width: 0;
}

/* Hover effects only for screens 1025px and larger */
@media (min-width: 1025px) {
  .project-card:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
    border-radius: 1.5rem;
  }
}

/* Button Hover Effects */
button:hover {
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

/* Enhanced button hover with smooth line animation */
.group:hover .h-\[1px\] {
  width: 6rem !important;
  background: linear-gradient(90deg, #10b981, #34d399);
}

/* Animated pulse line */
@keyframes pulse-line {
  0%, 100% {
    opacity: 0.6;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.1);
  }
}

.animate-pulse-line {
  animation: pulse-line 2s ease-in-out infinite;
}

/* Image hover effects - only for screens 1025px and larger */
@media (min-width: 1025px) {
  .project-card img {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  /* Duration badge hover effect */
  .project-card:hover .border-white\/20 {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Text hover effects */
  .project-card h3 {
    transition: all 0.3s ease;
  }

  .project-card:hover h3 {
    color: #10b981;
    text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }

  .project-card p {
    transition: all 0.3s ease;
  }

  .project-card:hover p {
    color: rgba(255, 255, 255, 0.9);
  }
}

/* Ensure consistent card widths */
.project-card .bg-\[#111\] {
  flex-shrink: 0;
}

.project-card .bg-\[#111\] img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

/* Responsive adjustments */
@media (min-width: 1024px) and (max-width: 1219px) {
  .project-card .flex {
    justify-content: center;
    align-items: center;
  }
  
  .project-card .border-white\/20 {
    margin-top: 1rem;
  }
}

@media (max-width: 1024px) {
  .project-card {
    padding: 2rem 0;
  }
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem 0;
  }
  
  .project-card .flex {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .project-card .bg-\[#111\] h3 {
    font-size: 1rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .project-card .bg-\[#111\] .w-full.h-32 {
    height: 5rem !important;
  }
}

@media (max-width: 320px) {
  .project-card .bg-\[#111\] h3 {
    font-size: 1rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .project-card .bg-\[#111\] .w-full.h-32 {
    height: 4rem !important;
  }
  
  .project-card {
    padding: 1rem 0 !important;
  }
  
  .project-card .flex {
    gap: 1rem !important;
  }
  
  .project-card .text-center.lg\\:text-left {
    padding: 0.5rem !important;
    max-width: 140px !important;
  }
  
  .project-card .text-center.lg\\:text-left p {
    font-size: 0.75rem !important;
    line-height: 1.2 !important;
  }
}
</style>