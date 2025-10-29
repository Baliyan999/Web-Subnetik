import { ref } from 'vue'

const notification = ref({
  isVisible: false,
  type: 'info',
  title: '',
  message: '',
  confirmText: 'OK',
  cancelText: 'Отмена',
  showCancel: false
})

const toast = ref({
  isVisible: false,
  type: 'info',
  title: '',
  message: ''
})

const showNotification = (options) => {
  notification.value = {
    isVisible: true,
    type: options.type || 'info',
    title: options.title || 'Уведомление',
    message: options.message || '',
    confirmText: options.confirmText || 'OK',
    cancelText: options.cancelText || 'Отмена',
    showCancel: options.showCancel || false
  }
}

const hideNotification = () => {
  notification.value.isVisible = false
}

// Удобные методы для разных типов уведомлений
const showSuccess = (message, title = 'Успешно!') => {
  showNotification({
    type: 'success',
    title,
    message
  })
}

const showError = (message, title = 'Ошибка') => {
  showNotification({
    type: 'error',
    title,
    message
  })
}

const showWarning = (message, title = 'Внимание') => {
  showNotification({
    type: 'warning',
    title,
    message
  })
}

const showInfo = (message, title = 'Информация') => {
  showNotification({
    type: 'info',
    title,
    message
  })
}

// Подтверждение действия
const showConfirm = (message, title = 'Подтвердите действие') => {
  return new Promise((resolve) => {
    showNotification({
      type: 'warning',
      title,
      message,
      confirmText: 'Да',
      cancelText: 'Отмена',
      showCancel: true,
      onConfirm: () => resolve(true),
      onCancel: () => resolve(false)
    })
  })
}

// Toast уведомления
const showToast = (options) => {
  toast.value = {
    isVisible: true,
    type: options.type || 'info',
    title: options.title || 'Уведомление',
    message: options.message || ''
  }
  
  // Автоматически скрываем через 5 секунд
  setTimeout(() => {
    hideToast()
  }, 5000)
}

const hideToast = () => {
  toast.value.isVisible = false
}

const showToastSuccess = (message, title = 'Успешно!') => {
  showToast({ type: 'success', title, message })
}

const showToastError = (message, title = 'Ошибка') => {
  showToast({ type: 'error', title, message })
}

const showToastWarning = (message, title = 'Внимание') => {
  showToast({ type: 'warning', title, message })
}

const showToastInfo = (message, title = 'Информация') => {
  showToast({ type: 'info', title, message })
}

export {
  notification,
  toast,
  showNotification,
  hideNotification,
  showSuccess,
  showError,
  showWarning,
  showInfo,
  showConfirm,
  showToast,
  hideToast,
  showToastSuccess,
  showToastError,
  showToastWarning,
  showToastInfo
}
