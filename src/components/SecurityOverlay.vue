<template>
  <div v-if="showOverlay" class="security-overlay">
    <div class="security-warning">
      <div class="warning-icon">🛡️</div>
      <h3>Security Protection Active</h3>
      <p>{{ warningMessage }}</p>
      <div class="security-stats">
        <div class="stat">
          <span class="label">Screenshot Attempts:</span>
          <span class="value">{{ screenshotAttempts }}</span>
        </div>
        <div class="stat">
          <span class="label">DevTools Detected:</span>
          <span class="value">{{ devToolsDetected ? 'Yes' : 'No' }}</span>
        </div>
        <div class="stat">
          <span class="label">Security Events:</span>
          <span class="value">{{ securityEventsCount }}</span>
        </div>
      </div>
      <button @click="hideOverlay" class="close-btn">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecurityOverlay',
  data() {
    return {
      showOverlay: false,
      warningMessage: 'Content is protected. Screenshots and copying are blocked.',
      screenshotAttempts: 0,
      devToolsDetected: false,
      securityEventsCount: 0
    }
  },
  mounted() {
    // Слушаем события безопасности
    window.addEventListener('security-event', this.handleSecurityEvent)
    
    // Показываем overlay при загрузке
    setTimeout(() => {
      this.showOverlay = true
    }, 1000)
  },
  beforeUnmount() {
    window.removeEventListener('security-event', this.handleSecurityEvent)
  },
  methods: {
    handleSecurityEvent(event) {
      const { type, data } = event.detail
      
      switch (type) {
        case 'screenshot_attempt':
          this.screenshotAttempts++
          this.warningMessage = 'Screenshot attempt blocked!'
          this.showOverlay = true
          break
        case 'devtools_opened':
          this.devToolsDetected = true
          this.warningMessage = 'DevTools detected! Content blocked.'
          this.showOverlay = true
          break
        case 'right_click_blocked':
        case 'keyboard_shortcut_blocked':
        case 'copy_blocked':
          this.securityEventsCount++
          break
      }
    },
    hideOverlay() {
      this.showOverlay = false
    }
  }
}
</script>

<style scoped>
.security-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(10px);
}

.security-warning {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border: 2px solid #ff4444;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(255, 68, 68, 0.3);
  animation: securityPulse 0.5s ease-in-out;
}

.warning-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: bounce 2s infinite;
}

h3 {
  color: #ff4444;
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: bold;
}

p {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.security-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 68, 68, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 68, 68, 0.3);
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.label {
  color: #cccccc;
  font-weight: 500;
}

.value {
  color: #ff4444;
  font-weight: bold;
  font-size: 1.1rem;
}

.close-btn {
  background: linear-gradient(135deg, #ff4444, #cc3333);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 68, 68, 0.4);
}

.close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 68, 68, 0.6);
}

@keyframes securityPulse {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Responsive */
@media (max-width: 768px) {
  .security-warning {
    margin: 20px;
    padding: 30px 20px;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  .warning-icon {
    font-size: 3rem;
  }
}
</style>
