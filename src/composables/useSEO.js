import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useSEO() {
  const { locale } = useI18n()
  
  const seoData = ref({
    title: 'Web-Subnetik - Разработка веб-сайтов и приложений под ключ | subnetik.pro',
    description: 'Профессиональная разработка веб-сайтов и мобильных приложений под ключ. Современные технологии, быстрая загрузка, SEO-оптимизация. Заказать сайт в Web-Subnetik.',
    keywords: 'разработка сайтов, веб-дизайн, мобильные приложения, лендинг, интернет-магазин, корпоративный сайт, SEO, адаптивный дизайн, Vue.js, React, Node.js',
    image: 'https://subnetik.pro/og-image.jpg',
    url: 'https://subnetik.pro'
  })

  const updateSEO = (data) => {
    seoData.value = { ...seoData.value, ...data }
    updateMetaTags()
  }

  const updateMetaTags = () => {
    const { title, description, keywords, image, url } = seoData.value
    
    // Update title
    document.title = title
    
    // Update meta tags
    updateMetaTag('name', 'title', title)
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'keywords', keywords)
    updateMetaTag('property', 'og:title', title)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:image', image)
    updateMetaTag('property', 'og:url', url)
    updateMetaTag('property', 'twitter:title', title)
    updateMetaTag('property', 'twitter:description', description)
    updateMetaTag('property', 'twitter:image', image)
    updateMetaTag('property', 'twitter:url', url)
  }

  const updateMetaTag = (attribute, name, content) => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  // Watch for locale changes
  watch(locale, () => {
    updateSEO({
      title: getLocalizedTitle(),
      description: getLocalizedDescription(),
      keywords: getLocalizedKeywords()
    })
  })

  const getLocalizedTitle = () => {
    const titles = {
      ru: 'Web-Subnetik - Разработка веб-сайтов и приложений под ключ | subnetik.pro',
      en: 'Web-Subnetik - Web Development and Mobile Apps | subnetik.pro',
      zh: 'Web-Subnetik - 网站和应用程序开发 | subnetik.pro',
      uz: 'Web-Subnetik - Veb-sayt va ilovalar ishlab chiqish | subnetik.pro'
    }
    return titles[locale.value] || titles.ru
  }

  const getLocalizedDescription = () => {
    const descriptions = {
      ru: 'Профессиональная разработка веб-сайтов и мобильных приложений под ключ. Современные технологии, быстрая загрузка, SEO-оптимизация. Заказать сайт в Web-Subnetik.',
      en: 'Professional web development and mobile app development under key. Modern technologies, fast loading, SEO optimization. Order a website at Web-Subnetik.',
      zh: '专业的网站和移动应用程序开发。现代技术，快速加载，SEO优化。在Web-Subnetik订购网站。',
      uz: 'Professional veb-sayt va mobil ilovalar ishlab chiqish. Zamonaviy texnologiyalar, tez yuklash, SEO optimallashtirish. Web-Subnetik\'da sayt buyurtma qiling.'
    }
    return descriptions[locale.value] || descriptions.ru
  }

  const getLocalizedKeywords = () => {
    const keywords = {
      ru: 'разработка сайтов, веб-дизайн, мобильные приложения, лендинг, интернет-магазин, корпоративный сайт, SEO, адаптивный дизайн, Vue.js, React, Node.js',
      en: 'web development, web design, mobile apps, landing page, online store, corporate website, SEO, responsive design, Vue.js, React, Node.js',
      zh: '网站开发, 网页设计, 移动应用, 着陆页, 在线商店, 企业网站, SEO, 响应式设计, Vue.js, React, Node.js',
      uz: 'veb-sayt ishlab chiqish, veb-dizayn, mobil ilovalar, landing sahifa, onlayn do\'kon, korporativ sayt, SEO, responsive dizayn, Vue.js, React, Node.js'
    }
    return keywords[locale.value] || keywords.ru
  }

  return {
    seoData,
    updateSEO,
    updateMetaTags
  }
}
