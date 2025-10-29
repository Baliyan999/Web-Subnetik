<template>
  <section id="faq" class="py-24 bg-icorp-black text-white text-center">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-16">
      <h2 
        class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
        data-aos="fade-up"
      >
        {{ $t('faq.title') }}
      </h2>
      <p 
        class="text-sm font-semibold text-icorp-blue uppercase tracking-wider"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {{ $t('faq.tagline') }}
      </p>
    </div>

    <!-- FAQ Accordion -->
    <div class="max-w-4xl mx-auto px-6">
      <div class="space-y-4 text-left">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item border-b border-white/10 pb-4"
          :class="{ 'active border-green-400': openIndex === index }"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex justify-between items-center text-lg font-semibold py-4 hover:text-icorp-blue transition-colors duration-300"
          >
            <span class="text-left pr-4">{{ $t(`faq.faqs.${faq.key}.question`) }}</span>
            <span 
              :class="openIndex === index ? 'rotate-180' : ''" 
              class="transition-transform duration-300 text-icorp-blue flex-shrink-0"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </button>
          
          <div 
            class="faq-answer"
            :data-index="index"
          >
            <div class="text-gray-300 leading-relaxed pt-2 pb-4">
              <div v-html="getFormattedAnswer(faq.key)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'FAQSection',
  setup() {
    const { t, locale } = useI18n()
    const openIndex = ref(null)

    const faqs = ref([
      {
        key: 'timing'
      },
      {
        key: 'tracking'
      },
      {
        key: 'changes'
      },
      {
        key: 'services'
      },
      {
        key: 'mobile'
      },
      {
        key: 'platforms'
      },
      {
        key: 'design'
      },
      {
        key: 'content'
      }
    ])

    // Computed properties for each FAQ answer
    const faqAnswers = computed(() => ({
      timing: t('faq.faqs.timing.answer'),
      tracking: t('faq.faqs.tracking.answer'),
      changes: t('faq.faqs.changes.answer'),
      services: t('faq.faqs.services.answer'),
      mobile: t('faq.faqs.mobile.answer'),
      platforms: t('faq.faqs.platforms.answer'),
      design: t('faq.faqs.design.answer'),
      content: t('faq.faqs.content.answer')
    }))

    const getFaqAnswer = (key) => {
      const answer = faqAnswers.value[key]
      console.log(`FAQ answer for ${key}:`, answer, 'type:', typeof answer, 'isArray:', Array.isArray(answer))
      
      if (typeof answer === 'string') {
        return answer
      } else if (Array.isArray(answer)) {
        return answer.join('\n\n')
      } else {
        return 'Перевод не найден'
      }
    }

    const getFormattedAnswer = (key) => {
      const answer = getFaqAnswer(key)
      return answer
        .replace(/\n\n/g, '</p><p class="mb-3">')
        .replace(/\n/g, '<br>')
    }

    const toggle = (index) => {
      const wasOpen = openIndex.value === index
      
      // Закрываем все открытые элементы
      const allAnswers = document.querySelectorAll('.faq-answer')
      allAnswers.forEach(answer => {
        answer.style.maxHeight = '0'
      })
      
      // Убираем активный класс со всех элементов
      const allItems = document.querySelectorAll('.faq-item')
      allItems.forEach(item => {
        item.classList.remove('active')
      })
      
      if (wasOpen) {
        // Если кликнули по уже открытому элементу - закрываем
        openIndex.value = null
      } else {
        // Открываем новый элемент
        openIndex.value = index
        const targetAnswer = document.querySelector(`[data-index="${index}"]`)
        const targetItem = targetAnswer?.closest('.faq-item')
        
        if (targetAnswer && targetItem) {
          targetItem.classList.add('active')
          // Сначала устанавливаем высоту 0, затем вычисляем реальную высоту
          targetAnswer.style.maxHeight = '0'
          targetAnswer.offsetHeight // force reflow
          targetAnswer.style.maxHeight = targetAnswer.scrollHeight + 'px'
        }
      }
    }

    // Initialize FAQ immediately when component mounts
    onMounted(() => {
      // Ensure all FAQ elements are ready for interaction
      const faqItems = document.querySelectorAll('.faq-item')
      faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer')
        if (answer) {
          answer.style.maxHeight = '0'
        }
      })
    })

    return {
      openIndex,
      faqs,
      toggle,
      getFaqAnswer,
      getFormattedAnswer
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* FAQ Answer Animation - Pure CSS, no AOS dependency */
.faq-answer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 1000px; /* fallback, will be overridden by JS */
}

/* Ensure FAQ elements are always interactive */
.faq-item {
  pointer-events: auto;
}

.faq-item button {
  pointer-events: auto;
  cursor: pointer;
}

/* Remove any potential blocking styles */
.faq-item * {
  pointer-events: auto;
}

/* Custom scrollbar for long content */
.overflow-hidden::-webkit-scrollbar {
  width: 4px;
}

.overflow-hidden::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-hidden::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 2px;
}

.overflow-hidden::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
