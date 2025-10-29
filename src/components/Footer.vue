<template>
  <footer class="bg-black text-gray-400 py-12 sm:py-14 md:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

      <!-- Logo and Company Info -->
      <div class="space-y-4 text-center">
        <!-- Logo -->
        <div class="flex items-center justify-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Web-Subnetik Logo" 
            class="h-10 w-auto transition-transform duration-200 hover:scale-105 cursor-pointer"
            @error="handleImageError"
          />
          <span class="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Web-Subnetik</span>
        </div>
        
        <!-- Copyright -->
        <p class="text-xs text-gray-500">{{ $t('footer.copyright') }}</p>
        
        <!-- Address -->
        <p class="text-sm text-gray-400">{{ $t('footer.address') }}</p>
      </div>

    </div>

    <!-- Bottom Section -->
    <div class="border-t border-white/10 mt-12 pt-8">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Main Bottom Text -->
        <div class="text-center space-y-2">
          <p class="text-xs text-gray-500">{{ $t('footer.tagline') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    handleImageError(event) {
      console.error('Failed to load logo image:', event.target.src)
      event.target.style.display = 'none'
    }
  }
}
</script>

<style scoped>
/* Custom hover effects for social media */
a:hover {
  transform: translateY(-1px);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Custom spacing for better mobile layout */
@media (max-width: 768px) {
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
  
  .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}
</style>