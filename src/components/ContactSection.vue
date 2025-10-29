<template>
  <section id="contact" class="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900 text-white">
    <!-- Header -->
    <div class="container mx-auto px-4 mb-16 text-center">
      <h2 
        class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
        data-aos="fade-up"
      >
        {{ $t('contact.title') }}
      </h2>
      <p 
        class="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {{ $t('contact.tagline') }}
      </p>
      <p 
        class="text-gray-400 text-lg max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ $t('contact.subtitle') }}
      </p>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 items-start">
      <!-- Contact Information -->
      <div 
        class="space-y-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="space-y-6">
          <!-- Address -->
          <div class="flex items-start space-x-4">
            <div class="w-6 h-6 text-green-400 flex-shrink-0 mt-1">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-gray-300">{{ $t('contact.info.address') }}</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start space-x-4">
            <div class="w-6 h-6 text-green-400 flex-shrink-0 mt-1">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <a href="tel:+998336669944" class="text-gray-300 hover:text-green-400 transition-colors duration-300">
                {{ $t('contact.info.phone') }}
              </a>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start space-x-4">
            <div class="w-6 h-6 text-green-400 flex-shrink-0 mt-1">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <a href="mailto:thesubnetik@gmail.com" class="text-gray-300 hover:text-green-400 transition-colors duration-300">
                {{ $t('contact.info.email').replace('[at]', '@').replace('[dot]', '.') }}
              </a>
            </div>
          </div>

          <!-- Telegram -->
          <div class="flex items-start space-x-4">
            <div class="w-6 h-6 text-green-400 flex-shrink-0 mt-1">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div>
              <a href="https://t.me/subnetik" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-green-400 transition-colors duration-300">
                {{ $t('contact.info.telegram').replace('[at]', '@') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="pt-8 border-t border-white/10">
          <h3 class="text-lg font-semibold mb-6">{{ $t('contact.info.social') }}</h3>
          <div class="flex space-x-4">
            <!-- Telegram -->
            <a href="https://t.me/subnetik" target="_blank" rel="noopener noreferrer" class="group relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
              <img src="/assets/images/social/telegram.png" alt="Telegram" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com/subnetik.pro" target="_blank" rel="noopener noreferrer" class="group relative w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center hover:from-pink-400 hover:via-purple-400 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25">
              <img src="/assets/images/social/instagram.png" alt="Instagram" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <!-- Threads -->
            <a href="https://threads.net/@subnetik.pro" target="_blank" rel="noopener noreferrer" class="group relative w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25">
              <img src="/assets/images/social/threads.png" alt="Threads" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <!-- Redbook (小红书) -->
            <a href="https://xhslink.com/m/7ecNGndRLWE" target="_blank" rel="noopener noreferrer" class="group relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:from-red-400 hover:to-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25">
              <img src="/assets/images/social/redbook.png" alt="Redbook" class="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form 
        @submit.prevent="submitForm"
        class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div>
          <input 
            v-model="form.name"
            type="text" 
            :placeholder="$t('contact.form.name')" 
            required
            maxlength="50"
            pattern="[a-zA-Zа-яА-ЯёЁ\s]+"
            title="Только буквы и пробелы"
            class="w-full bg-transparent border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300"
            :class="{ 'border-red-400': errors.name }"
          />
          <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <div>
          <div class="relative">
            <input 
              v-model="form.phone"
              @input="form.phone = formatPhoneNumber($event.target.value)"
              type="tel" 
              :placeholder="$t('contact.info.phone')" 
              required
              :maxlength="detectedCountry ? detectedCountry.maxLength + 1 : 20"
              pattern="^\+[1-9]\d{1,14}$"
              title="Международный формат: +код страны номер"
              class="w-full bg-transparent border border-white/20 rounded-lg p-4 pr-20 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300"
              :class="{ 'border-red-400': errors.phone }"
            />
            <!-- Индикатор страны -->
            <div v-if="detectedCountry" class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <span class="text-lg">{{ detectedCountry.flag }}</span>
              <span class="text-xs text-gray-400 hidden sm:block">{{ detectedCountry.name }}</span>
            </div>
          </div>
          <p v-if="errors.phone" class="text-red-400 text-sm mt-1">{{ errors.phone }}</p>
          <div v-if="detectedCountry" class="text-green-400 text-xs mt-1 flex items-center space-x-1">
            <span>✓</span>
            <span>Определена страна: {{ detectedCountry.name }} {{ detectedCountry.flag }}</span>
          </div>
          <p class="text-gray-500 text-xs mt-1">{{ $t('contact.form.phoneExamples') }}</p>
        </div>

        <div>
          <textarea 
            v-model="form.comment"
            :placeholder="$t('contact.form.comment')" 
            rows="4"
            maxlength="500"
            class="w-full bg-transparent border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
            :class="{ 'border-red-400': errors.comment }"
          ></textarea>
          <p v-if="errors.comment" class="text-red-400 text-sm mt-1">{{ errors.comment }}</p>
          <p class="text-gray-500 text-xs mt-1 text-right">{{ form.comment.length }}/500</p>
        </div>

        <button 
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg py-4 font-semibold text-white transition-colors duration-300 transform hover:scale-105 disabled:transform-none"
        >
          <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ $t('contact.form.submitting') }}
          </span>
        </button>

        <p class="text-xs text-gray-500 text-center leading-relaxed">
          {{ $t('contact.form.privacy') }}
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { showToastSuccess, showToastError } from '../composables/useNotifications'

export default {
  name: 'ContactSection',
  setup() {
    const { t } = useI18n()
    
    const form = ref({
      name: '',
      phone: '',
      comment: ''
    })

    const errors = ref({
      name: '',
      phone: '',
      comment: ''
    })

    const isSubmitting = ref(false)

    // База данных кодов стран с ограничениями длины (общая длина включая код страны)
    const countryCodes = {
      '1': { name: 'США/Канада', flag: '🇺🇸', code: '+1', minLength: 11, maxLength: 12 },
      '7': { name: 'Россия/Казахстан', flag: '🇷🇺', code: '+7', minLength: 11, maxLength: 11 },
      '20': { name: 'Египет', flag: '🇪🇬', code: '+20', minLength: 10, maxLength: 12 },
      '27': { name: 'ЮАР', flag: '🇿🇦', code: '+27', minLength: 11, maxLength: 11 },
      '30': { name: 'Греция', flag: '🇬🇷', code: '+30', minLength: 12, maxLength: 12 },
      '31': { name: 'Нидерланды', flag: '🇳🇱', code: '+31', minLength: 11, maxLength: 11 },
      '32': { name: 'Бельгия', flag: '🇧🇪', code: '+32', minLength: 10, maxLength: 11 },
      '33': { name: 'Франция', flag: '🇫🇷', code: '+33', minLength: 11, maxLength: 11 },
      '34': { name: 'Испания', flag: '🇪🇸', code: '+34', minLength: 11, maxLength: 11 },
      '36': { name: 'Венгрия', flag: '🇭🇺', code: '+36', minLength: 10, maxLength: 11 },
      '39': { name: 'Италия', flag: '🇮🇹', code: '+39', minLength: 11, maxLength: 13 },
      '40': { name: 'Румыния', flag: '🇷🇴', code: '+40', minLength: 11, maxLength: 11 },
      '41': { name: 'Швейцария', flag: '🇨🇭', code: '+41', minLength: 11, maxLength: 11 },
      '43': { name: 'Австрия', flag: '🇦🇹', code: '+43', minLength: 12, maxLength: 14 },
      '44': { name: 'Великобритания', flag: '🇬🇧', code: '+44', minLength: 12, maxLength: 12 },
      '45': { name: 'Дания', flag: '🇩🇰', code: '+45', minLength: 10, maxLength: 10 },
      '46': { name: 'Швеция', flag: '🇸🇪', code: '+46', minLength: 9, maxLength: 11 },
      '47': { name: 'Норвегия', flag: '🇳🇴', code: '+47', minLength: 10, maxLength: 10 },
      '48': { name: 'Польша', flag: '🇵🇱', code: '+48', minLength: 11, maxLength: 11 },
      '49': { name: 'Германия', flag: '🇩🇪', code: '+49', minLength: 12, maxLength: 14 },
      '51': { name: 'Перу', flag: '🇵🇪', code: '+51', minLength: 10, maxLength: 11 },
      '52': { name: 'Мексика', flag: '🇲🇽', code: '+52', minLength: 12, maxLength: 12 },
      '53': { name: 'Куба', flag: '🇨🇺', code: '+53', minLength: 10, maxLength: 10 },
      '54': { name: 'Аргентина', flag: '🇦🇷', code: '+54', minLength: 12, maxLength: 13 },
      '55': { name: 'Бразилия', flag: '🇧🇷', code: '+55', minLength: 12, maxLength: 13 },
      '56': { name: 'Чили', flag: '🇨🇱', code: '+56', minLength: 10, maxLength: 11 },
      '57': { name: 'Колумбия', flag: '🇨🇴', code: '+57', minLength: 12, maxLength: 12 },
      '58': { name: 'Венесуэла', flag: '🇻🇪', code: '+58', minLength: 12, maxLength: 12 },
      '60': { name: 'Малайзия', flag: '🇲🇾', code: '+60', minLength: 11, maxLength: 12 },
      '61': { name: 'Австралия', flag: '🇦🇺', code: '+61', minLength: 11, maxLength: 11 },
      '62': { name: 'Индонезия', flag: '🇮🇩', code: '+62', minLength: 10, maxLength: 14 },
      '63': { name: 'Филиппины', flag: '🇵🇭', code: '+63', minLength: 12, maxLength: 12 },
      '64': { name: 'Новая Зеландия', flag: '🇳🇿', code: '+64', minLength: 10, maxLength: 11 },
      '65': { name: 'Сингапур', flag: '🇸🇬', code: '+65', minLength: 10, maxLength: 10 },
      '66': { name: 'Таиланд', flag: '🇹🇭', code: '+66', minLength: 10, maxLength: 11 },
      '81': { name: 'Япония', flag: '🇯🇵', code: '+81', minLength: 12, maxLength: 13 },
      '82': { name: 'Южная Корея', flag: '🇰🇷', code: '+82', minLength: 11, maxLength: 13 },
      '84': { name: 'Вьетнам', flag: '🇻🇳', code: '+84', minLength: 11, maxLength: 12 },
      '86': { name: 'Китай', flag: '🇨🇳', code: '+86', minLength: 13, maxLength: 13 },
      '90': { name: 'Турция', flag: '🇹🇷', code: '+90', minLength: 12, maxLength: 12 },
      '91': { name: 'Индия', flag: '🇮🇳', code: '+91', minLength: 12, maxLength: 12 },
      '92': { name: 'Пакистан', flag: '🇵🇰', code: '+92', minLength: 12, maxLength: 12 },
      '93': { name: 'Афганистан', flag: '🇦🇫', code: '+93', minLength: 11, maxLength: 11 },
      '94': { name: 'Шри-Ланка', flag: '🇱🇰', code: '+94', minLength: 11, maxLength: 11 },
      '95': { name: 'Мьянма', flag: '🇲🇲', code: '+95', minLength: 10, maxLength: 12 },
      '98': { name: 'Иран', flag: '🇮🇷', code: '+98', minLength: 12, maxLength: 12 },
      '998': { name: 'Узбекистан', flag: '🇺🇿', code: '+998', minLength: 12, maxLength: 12 }
    }

    // Функция для определения страны по коду
    const detectCountry = (phoneNumber) => {
      if (!phoneNumber || !phoneNumber.startsWith('+')) {
        return null
      }
      
      const cleanNumber = phoneNumber.replace(/[^\d+]/g, '')
      
      // Проверяем 3-значные коды (Узбекистан, Иран и т.д.)
      if (cleanNumber.length >= 4) {
        const code3 = cleanNumber.substring(1, 4)
        if (countryCodes[code3]) {
          return countryCodes[code3]
        }
      }
      
      // Проверяем 2-значные коды
      if (cleanNumber.length >= 3) {
        const code2 = cleanNumber.substring(1, 3)
        if (countryCodes[code2]) {
          return countryCodes[code2]
        }
      }
      
      // Проверяем 1-значные коды
      if (cleanNumber.length >= 2) {
        const code1 = cleanNumber.substring(1, 2)
        if (countryCodes[code1]) {
          return countryCodes[code1]
        }
      }
      
      return null
    }

    // Функция для форматирования номера телефона
    const formatPhoneNumber = (value) => {
      // Удаляем все нецифровые символы кроме +
      let cleaned = value.replace(/[^\d+]/g, '')
      
      // Если нет + в начале, добавляем
      if (!cleaned.startsWith('+')) {
        cleaned = '+' + cleaned
      }
      
      // Ограничиваем длину
      if (cleaned.length > 16) {
        cleaned = cleaned.substring(0, 16)
      }
      
      return cleaned
    }

    // Функция для очистки HTML тегов и потенциально опасных символов
    const sanitizeInput = (input) => {
      if (typeof input !== 'string') return ''
      
      return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Удаляем script теги
        .replace(/<[^>]*>/g, '') // Удаляем все HTML теги
        .replace(/javascript:/gi, '') // Удаляем javascript: протоколы
        .replace(/on\w+\s*=/gi, '') // Удаляем event handlers
        .replace(/[<>'"&]/g, '') // Удаляем опасные символы
        .trim()
    }

    // Валидация имени
    const validateName = (name) => {
      const sanitized = sanitizeInput(name)
      
      if (!sanitized) {
        return t('contact.validation.nameRequired')
      }
      
      if (sanitized.length < 2) {
        return t('contact.validation.nameMinLength')
      }
      
      if (sanitized.length > 50) {
        return t('contact.validation.nameMaxLength')
      }
      
      // Проверяем, что имя содержит только буквы и пробелы
      if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(sanitized)) {
        return t('contact.validation.nameOnlyLetters')
      }
      
      return ''
    }

    // Валидация телефона
    const validatePhone = (phone) => {
      const sanitized = sanitizeInput(phone)
      
      if (!sanitized) {
        return t('contact.validation.phoneRequired')
      }
      
      // Удаляем все пробелы, дефисы и скобки для проверки
      const cleanPhone = sanitized.replace(/[\s\-\(\)]/g, '')
      
      // Проверяем международный формат E.164
      if (!/^\+[1-9]\d{1,14}$/.test(cleanPhone)) {
        return t('contact.validation.phoneFormat')
      }
      
      // Определяем страну
      const country = detectCountry(cleanPhone)
      const phoneDigits = cleanPhone.substring(1) // убираем +
      
      if (country) {
        // Проверяем общую длину номера (включая код страны)
        const totalLength = phoneDigits.length
        
        if (totalLength < country.minLength) {
          return t('contact.validation.phoneTooShort', { country: country.name, min: country.minLength })
        }
        
        if (totalLength > country.maxLength) {
          return t('contact.validation.phoneTooLong', { country: country.name, max: country.maxLength })
        }
      } else {
        // Если страна не определена, используем общие ограничения
        if (phoneDigits.length < 7) {
          return t('contact.validation.phoneMinLength')
        }
        
        if (phoneDigits.length > 15) {
          return t('contact.validation.phoneMaxLength')
        }
      }
      
      return ''
    }

    // Валидация комментария
    const validateComment = (comment) => {
      const sanitized = sanitizeInput(comment)
      
      if (sanitized.length > 500) {
        return t('contact.validation.commentMaxLength')
      }
      
      // Проверяем на подозрительные паттерны
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /eval\s*\(/i,
        /document\./i,
        /window\./i
      ]
      
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(comment)) {
          return t('contact.validation.commentInvalidChars')
        }
      }
      
      return ''
    }

    // Общая валидация формы
    const validateForm = () => {
      errors.value = {
        name: validateName(form.value.name),
        phone: validatePhone(form.value.phone),
        comment: validateComment(form.value.comment)
      }
      
      return !Object.values(errors.value).some(error => error !== '')
    }

    const submitForm = async () => {
      // Очищаем предыдущие ошибки
      errors.value = { name: '', phone: '', comment: '' }
      
      // Валидируем форму
      if (!validateForm()) {
        return
      }
      
      // Санитизируем данные перед отправкой
      const sanitizedData = {
        name: sanitizeInput(form.value.name),
        phone: sanitizeInput(form.value.phone),
        comment: sanitizeInput(form.value.comment),
        source: 'Главная страница'
      }
      
      // Показываем состояние загрузки
      isSubmitting.value = true
      
      try {
        console.log('🚀 Отправляем заявку:', sanitizedData)
        
        // Отправляем данные на backend
        const response = await fetch('https://subnetik.pro/api/send-telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData)
        })
        
        console.log('📡 Получен ответ:', response.status, response.statusText)
        
        const result = await response.json()
        console.log('📋 Результат:', result)
        
        if (result.success) {
          // Успешная отправка
          showToastSuccess(t('notifications.formSubmitted'), t('notifications.success'))
          
          // Очистка формы
          form.value = {
            name: '',
            phone: '',
            comment: ''
          }
        } else {
          // Ошибка от сервера
          showToastError(result.error, t('notifications.error'))
        }
      } catch (error) {
        // Ошибка сети или другая ошибка
        console.error('❌ Ошибка отправки заявки:', error)
        console.error('❌ Тип ошибки:', error.name)
        console.error('❌ Сообщение:', error.message)
        
        let errorMessage = t('notifications.formError')
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          errorMessage = t('notifications.connectionError')
        } else if (error.message.includes('CORS')) {
          errorMessage = t('notifications.corsError')
        }
        
        showToastError(errorMessage, t('notifications.connectionErrorTitle'))
      } finally {
        // Убираем состояние загрузки
        isSubmitting.value = false
      }
    }

    // Computed свойство для определения страны
    const detectedCountry = computed(() => {
      return detectCountry(form.value.phone)
    })

    return {
      form,
      errors,
      isSubmitting,
      submitForm,
      formatPhoneNumber,
      detectedCountry
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Custom backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Form input focus effects */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

/* Button hover effects */
button:hover {
  box-shadow: 0 10px 25px -5px rgba(34, 197, 94, 0.3);
}

/* Social media hover effects */
a:hover {
  transform: translateY(-2px);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Responsive adjustments for 320px screens */
@media (max-width: 320px) {
  input::placeholder {
    font-size: 0.75rem !important;
  }
  
  textarea::placeholder {
    font-size: 0.75rem !important;
  }
  
  /* Make form more compact on very small screens */
  .bg-white\/5 {
    padding: 1rem !important;
  }
  
  input, textarea {
    padding: 0.75rem !important;
    font-size: 0.875rem !important;
  }
  
  button {
    padding: 0.75rem !important;
    font-size: 0.875rem !important;
  }
}
</style>
