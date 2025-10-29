import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initGA, trackPageView } from './utils/analytics'

const app = createApp(App)

// Use router and i18n
app.use(router)
app.use(i18n)

// Initialize Google Analytics
initGA()

// Track page views on route changes
router.afterEach((to) => {
  trackPageView(to.fullPath)
})

// Mount the app
app.mount('#app')

// Initialize AOS after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    disable: false, // Ensure AOS is enabled
    startEvent: 'DOMContentLoaded'
  })
  
  // Force FAQ initialization to ensure it works immediately
  initFAQ()
})

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
  // Document is still loading, wait for DOMContentLoaded
} else {
  // Document has already loaded, initialize AOS immediately
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    disable: false,
    startEvent: 'DOMContentLoaded'
  })
  
  // Also initialize FAQ immediately
  initFAQ()
}

// FAQ initialization function
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const answer = item.querySelector('.faq-answer')
    if (answer) {
      // Ensure all answers start closed
      answer.style.maxHeight = '0'
    }
  })
}
