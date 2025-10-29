// Performance optimization utilities

// Lazy load images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach(img => imageObserver.observe(img))
}

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/logo.png',
    '/src/assets/images/logo/black-logo.png'
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = 'image'
    document.head.appendChild(link)
  })
}

// Optimize font loading
export const optimizeFontLoading = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link')
  fontLink.rel = 'preload'
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
  fontLink.as = 'style'
  fontLink.onload = () => {
    fontLink.rel = 'stylesheet'
  }
  document.head.appendChild(fontLink)
}

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    body { font-family: 'Inter', sans-serif; }
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
    .hero-section { min-height: 100vh; }
  `
  
  const style = document.createElement('style')
  style.textContent = criticalCSS
  document.head.insertBefore(style, document.head.firstChild)
}

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ]

  hints.forEach(hint => {
    const link = document.createElement('link')
    Object.assign(link, hint)
    document.head.appendChild(link)
  })
}
