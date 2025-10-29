<template>
  <div id="app" class="min-h-screen">
    <router-view />
    
    <!-- Global Notification Modal -->
    <NotificationModal
      :is-visible="notification.isVisible"
      :type="notification.type"
      :title="notification.title"
      :message="notification.message"
      :confirm-text="notification.confirmText"
      :cancel-text="notification.cancelText"
      :show-cancel="notification.showCancel"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @close="hideNotification"
    />
    
    <!-- Toast Notifications -->
    <ToastNotification
      :is-visible="toast.isVisible"
      :type="toast.type"
      :title="toast.title"
      :message="toast.message"
      @close="hideToast"
    />
    
  </div>
</template>

<script>
import { notification, hideNotification, toast, hideToast } from './composables/useNotifications'
import NotificationModal from './components/NotificationModal.vue'
import ToastNotification from './components/ToastNotification.vue'

export default {
  name: 'App',
  components: {
    NotificationModal,
    ToastNotification
  },
  setup() {
    const handleConfirm = () => {
      // Логика подтверждения
    }

    const handleCancel = () => {
      // Логика отмены
    }

    return {
      notification,
      hideNotification,
      toast,
      hideToast,
      handleConfirm,
      handleCancel
    }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', system-ui, sans-serif;
}

.container {
  max-width: 1200px;
}
</style>
