<template>
  <div class="min-h-screen bg-gray-900 text-white py-20">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center mb-12">
        Тестирование уведомлений
      </h1>
      
      <div class="max-w-2xl mx-auto space-y-8">
        <!-- Modal Notifications -->
        <section class="bg-gray-800 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Модальные уведомления</h2>
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="showSuccess('Операция выполнена успешно!', 'Успех')"
              class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              Успех
            </button>
            <button 
              @click="showError('Произошла ошибка при выполнении операции', 'Ошибка')"
              class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
            >
              Ошибка
            </button>
            <button 
              @click="showWarning('Внимание! Проверьте данные перед продолжением', 'Предупреждение')"
              class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors"
            >
              Предупреждение
            </button>
            <button 
              @click="showInfo('Это информационное сообщение для пользователя', 'Информация')"
              class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            >
              Информация
            </button>
          </div>
        </section>
        
        <!-- Toast Notifications -->
        <section class="bg-gray-800 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Toast уведомления</h2>
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="showToastSuccess('Toast: Операция выполнена!')"
              class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              Toast Успех
            </button>
            <button 
              @click="showToastError('Toast: Произошла ошибка!')"
              class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
            >
              Toast Ошибка
            </button>
            <button 
              @click="showToastWarning('Toast: Внимание!')"
              class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors"
            >
              Toast Предупреждение
            </button>
            <button 
              @click="showToastInfo('Toast: Информация!')"
              class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            >
              Toast Информация
            </button>
          </div>
        </section>
        
        <!-- Confirmation Dialog -->
        <section class="bg-gray-800 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4">Диалог подтверждения</h2>
          <button 
            @click="testConfirm"
            class="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg transition-colors"
          >
            Показать диалог подтверждения
          </button>
        </section>
        
        <!-- Back to Home -->
        <div class="text-center">
          <router-link 
            to="/"
            class="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Назад на главную
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  showSuccess, 
  showError, 
  showWarning, 
  showInfo,
  showToastSuccess,
  showToastError,
  showToastWarning,
  showToastInfo,
  showConfirm
} from '../composables/useNotifications'

const testConfirm = async () => {
  const confirmed = await showConfirm(
    'Вы уверены, что хотите выполнить это действие? Это действие нельзя будет отменить.',
    'Подтвердите действие'
  )
  
  if (confirmed) {
    showToastSuccess('Действие выполнено!')
  } else {
    showToastInfo('Действие отменено')
  }
}
</script>
