<template>
  <section id="team" class="py-24 bg-black text-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
      <!-- Header Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Left Section - Team Info -->
        <div class="text-center lg:text-left">
          <p 
            class="text-gray-400 uppercase tracking-widest mb-3 text-sm"
            data-aos="fade-down"
          >
            {{ $t('team.topTagline') }}
          </p>
          <h2 
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ $t('team.title') }}
          </h2>
          <p 
            class="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ $t('team.description') }}
          </p>
        </div>

        <!-- Right Section - CTA (only visible on screens > 800px) -->
        <div class="hidden lg:flex flex-col items-end justify-center relative">
          <!-- Vertical Separator Line -->
          <div 
            class="absolute left-0 top-0 bottom-0 w-px bg-gray-600"
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>
          
          <div class="text-right">
            <p 
              class="text-gray-300 text-lg mb-8"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {{ $t('team.cta.description') }}
            </p>
            
            <router-link 
              v-if="hasMoreMembers"
              to="/team"
              class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              {{ $t('team.cta.button') }} →
            </router-link>
          </div>
        </div>
      </div>

      <!-- Team Members Grid -->
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(member, i) in displayedMembers"
          :key="i"
          class="team-card group relative overflow-hidden rounded-2xl w-56 sm:w-60 md:w-64 flex-shrink-0"
          data-aos="fade-left"
          :data-aos-delay="(i + 1) * 100"
        >
          <!-- Member Photo -->
          <div class="relative">
            <img 
              :src="member.photo" 
              :alt="$t(`team.members.${member.key}.name`)"
              class="w-full h-80 object-cover object-[center_25%] transition-all duration-500 group-hover:scale-110"
              @error="handleImageError"
            />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
            
            <!-- Member Info (appears on hover) -->
            <div class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <h3 class="text-white text-xl font-bold mb-1">{{ $t(`team.members.${member.key}.name`) }}</h3>
              <p class="text-gray-300 text-sm">{{ $t(`team.members.${member.key}.position`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section - Below cards on screens <= 800px -->
      <div class="mt-16 lg:hidden">
        <div class="text-center">
          <p 
            class="text-gray-300 text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {{ $t('team.cta.description') }}
          </p>
          
          <router-link 
            v-if="hasMoreMembers"
            to="/team"
            class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {{ $t('team.cta.button') }} →
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { teamMembers as teamData } from '../data/teamData.js'

const teamMembers = ref(teamData)

// Показываем только первые 4 члена команды на главной странице
const displayedMembers = computed(() => {
  return teamMembers.value.slice(0, 4)
})

// Проверяем, есть ли скрытые члены команды
const hasMoreMembers = computed(() => {
  return teamMembers.value.length > 4
})

const handleImageError = (event) => {
  // Fallback to placeholder if local image fails to load
  event.target.src = 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Team+Member'
}

onMounted(() => {
  // AOS will be initialized globally in main.js
  console.log('TeamSection mounted with Pexels images')
})
</script>

<style scoped>
/* Team Card Animations */
.team-card {
  position: relative;
  transform: translateX(50px);
  opacity: 0;
  animation: slideInFromRight 0.8s ease forwards;
}

.team-card:nth-child(1) { animation-delay: 0.1s; }
.team-card:nth-child(2) { animation-delay: 0.2s; }
.team-card:nth-child(3) { animation-delay: 0.3s; }
.team-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInFromRight {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Hover Effects */
.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Image Hover Effects */
.team-card img {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.team-card:hover img {
  filter: brightness(0.8);
}

/* Text Animation on Hover */
.team-card h3,
.team-card p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Ensure consistent image dimensions and positioning */
.team-card img {
  aspect-ratio: 3/4;
  object-position: center 25%;
  object-fit: cover;
  height: 320px !important;
}

@media (min-width: 640px) {
  .team-card img {
    height: 340px !important;
  }
}

@media (min-width: 768px) {
  .team-card img {
    height: 360px !important;
  }
}

@media (min-width: 1025px) {
  .team-card img {
    height: 400px !important;
  }
}

/* Ensure all cards are the same size */
.team-card {
  width: 224px !important;
}

@media (min-width: 640px) {
  .team-card {
    width: 240px !important;
  }
}

@media (min-width: 768px) {
  .team-card {
    width: 256px !important;
  }
}

/* Responsive adjustments */
@media (max-width: 320px) {
  .team-card {
    width: 200px !important;
  }
  
  .team-card img {
    height: 280px !important;
  }
  
  h2 {
    font-size: 1.5rem !important;
    line-height: 1.1;
  }
}

/* Button hover effects */
button:hover {
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* Vertical separator animation */
.absolute.left-0 {
  animation: expandLine 1s ease-in-out forwards;
  animation-delay: 0.5s;
  height: 0;
}

@keyframes expandLine {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
</style>