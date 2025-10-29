<template>
  <div class="min-h-screen bg-black text-white overflow-hidden">
    <!-- Header - Hidden on team page -->
    <!-- <Header /> -->
    
    <!-- Navbar -->
    <Navbar />
    
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0">
      <!-- Floating Geometric Shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-1"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-float-2"></div>
      <div class="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-3"></div>
      <div class="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-float-4"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-pattern"></div>
      </div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-particle-1"></div>
      <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-particle-2"></div>
      <div class="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400/30 rounded-full animate-particle-3"></div>
      <div class="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-particle-4"></div>
    </div>
    

    <!-- Back Button -->
    <div class="relative z-10 pt-24 pb-4">
      <div class="container mx-auto px-6">
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

    <!-- Team Members Grid -->
    <section class="relative z-10 py-16 bg-black">
      <div class="container mx-auto px-6">
        <!-- Section Title with Animation -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-section-title" data-aos="fade-up">
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {{ $t('teamPage.title') }}
            </span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-line-grow"></div>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8">
          <div
            v-for="(member, i) in allTeamMembers"
            :key="i"
            class="team-card group relative overflow-hidden rounded-3xl w-72 flex-shrink-0 animate-card-enter"
            :style="{ animationDelay: `${(i + 1) * 0.2}s` }"
            data-aos="zoom-in"
            :data-aos-delay="(i + 1) * 150"
          >
            <!-- Animated Border -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow"></div>
            
            <!-- Card Content -->
            <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-1">
              <!-- Member Photo -->
              <div class="relative overflow-hidden rounded-2xl">
                <img 
                  :src="member.photo" 
                  :alt="member.name"
                  class="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  @error="handleImageError"
                />
                
                <!-- Animated Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <!-- Floating Elements -->
                <div class="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.2s;"></div>
                <div class="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style="animation-delay: 0.4s;"></div>
                
                <!-- Member Info (appears on hover) -->
                <div class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                  <div class="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h3 class="text-white text-xl font-bold mb-1 animate-name-slide">{{ $t(`team.members.${member.key}.name`) }}</h3>
                    <p class="text-gray-300 text-sm animate-position-slide">{{ $t(`team.members.${member.key}.position`) }}</p>
                    
                    <!-- Animated Social Links - Временно закомментировано -->
                    <!--
                    <div class="flex space-x-3 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition-colors duration-300 cursor-pointer">
                        <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                      <div class="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors duration-300 cursor-pointer">
                        <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </div>
                    -->
                  </div>
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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
// import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import { teamMembers as teamData } from '../data/teamData.js'

const { t } = useI18n()

const allTeamMembers = ref(teamData)

const handleImageError = (event) => {
  // Fallback to placeholder if local image fails to load
  event.target.src = 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Team+Member'
}

onMounted(() => {
  // AOS will be initialized globally in main.js
  console.log('Team page mounted')
})
</script>

<style scoped>
/* Grid Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

/* Background Animations */
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-40px, -20px) rotate(180deg); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -40px) rotate(90deg); }
  75% { transform: translate(-30px, 30px) rotate(270deg); }
}

@keyframes float-4 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(25px, -25px) rotate(180deg); }
}

@keyframes particle-1 {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  50% { transform: translate(20px, -30px); opacity: 1; }
}

@keyframes particle-2 {
  0%, 100% { transform: translate(0, 0); opacity: 0.4; }
  50% { transform: translate(-15px, 25px); opacity: 0.8; }
}

@keyframes particle-3 {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  50% { transform: translate(30px, -20px); opacity: 0.6; }
}

@keyframes particle-4 {
  0%, 100% { transform: translate(0, 0); opacity: 0.4; }
  50% { transform: translate(-25px, -15px); opacity: 0.7; }
}

/* Text Animations */
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes title-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
  50% { text-shadow: 0 0 30px rgba(147, 51, 234, 0.8), 0 0 40px rgba(236, 72, 153, 0.6); }
}

@keyframes subtitle-slide {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes bounce-subtitle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes line-expand {
  0% { width: 0; }
  100% { width: 4rem; }
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

/* Section Animations */
@keyframes section-title {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes line-grow {
  0% { width: 0; }
  100% { width: 6rem; }
}

/* Card Animations */
@keyframes card-enter {
  0% { 
    transform: translateY(50px) scale(0.8); 
    opacity: 0; 
  }
  100% { 
    transform: translateY(0) scale(1); 
    opacity: 1; 
  }
}

@keyframes border-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% { 
    box-shadow: 0 0 30px rgba(147, 51, 234, 0.6), 0 0 40px rgba(236, 72, 153, 0.4);
  }
}

@keyframes name-slide {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes position-slide {
  0% { transform: translateX(20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/* CTA Animations */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulse-slow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.4; }
}

@keyframes cta-title {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes line-expand-full {
  0% { width: 0; }
  100% { width: 8rem; }
}

@keyframes cta-subtitle {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes word-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes stat-1 {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes stat-2 {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes stat-3 {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes counter {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* Animation Classes */
.animate-float-1 { animation: float-1 15s ease-in-out infinite; }
.animate-float-2 { animation: float-2 12s ease-in-out infinite; }
.animate-float-3 { animation: float-3 18s ease-in-out infinite; }
.animate-float-4 { animation: float-4 14s ease-in-out infinite; }

.animate-particle-1 { animation: particle-1 8s ease-in-out infinite; }
.animate-particle-2 { animation: particle-2 6s ease-in-out infinite; }
.animate-particle-3 { animation: particle-3 10s ease-in-out infinite; }
.animate-particle-4 { animation: particle-4 7s ease-in-out infinite; }

.animate-gradient-x { 
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.animate-title-glow { animation: title-glow 2s ease-in-out infinite; }
.animate-subtitle-slide { animation: subtitle-slide 1s ease-out; }
.animate-bounce-subtitle { animation: bounce-subtitle 2s ease-in-out infinite; }
.animate-line-expand { animation: line-expand 1.5s ease-out; }
.animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

.animate-section-title { animation: section-title 1s ease-out; }
.animate-line-grow { animation: line-grow 1.5s ease-out; }

.animate-card-enter { animation: card-enter 0.8s ease-out forwards; }
.animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
.animate-name-slide { animation: name-slide 0.6s ease-out; }
.animate-position-slide { animation: position-slide 0.6s ease-out; }

.animate-gradient-shift { 
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}
.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-cta-title { animation: cta-title 1s ease-out; }
.animate-line-expand-full { animation: line-expand-full 2s ease-out; }
.animate-cta-subtitle { animation: cta-subtitle 1s ease-out; }
.animate-word-bounce { animation: word-bounce 2s ease-in-out infinite; }

.animate-stat-1 { animation: stat-1 1s ease-out; }
.animate-stat-2 { animation: stat-2 1s ease-out 0.1s both; }
.animate-stat-3 { animation: stat-3 1s ease-out 0.2s both; }
.animate-counter { animation: counter 1s ease-out; }

/* Team Card Styles */
.team-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
}

.team-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.3);
}
</style>
