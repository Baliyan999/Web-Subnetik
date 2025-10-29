// 🛡️ Security Protection System for Web-Subnetik
// Блокирует скриншоты, выделение текста, копирование и DevTools

class SecurityProtection {
  constructor() {
    this.isDevToolsOpen = false;
    this.screenshotAttempts = 0;
    this.securityEvents = [];
    this.init();
  }

  init() {
    this.blockRightClick();
    this.blockKeyboardShortcuts();
    this.blockTextSelection();
    this.blockCopyPaste();
    this.detectDevTools();
    this.addWatermark();
    this.blockScreenshots();
    this.trackSecurityEvents();
  }

  // 🚫 Блокировка правого клика
  blockRightClick() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.logSecurityEvent('right_click_blocked');
      return false;
    });
  }

  // ⌨️ Блокировка клавиатурных сокращений
  blockKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u') ||
          (e.ctrlKey && e.key === 's') ||
          (e.ctrlKey && e.key === 'a') ||
          (e.ctrlKey && e.key === 'c') ||
          (e.ctrlKey && e.key === 'v') ||
          (e.ctrlKey && e.key === 'x')) {
        e.preventDefault();
        this.logSecurityEvent('keyboard_shortcut_blocked', { key: e.key });
        return false;
      }
    });
  }

  // 📝 Блокировка выделения текста (кроме кнопок)
  blockTextSelection() {
    // Добавляем CSS для блокировки выделения
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      /* Разрешаем выделение только для кнопок и инпутов */
      button, input, textarea, [role="button"], .btn, .button {
        -webkit-user-select: auto !important;
        -moz-user-select: auto !important;
        -ms-user-select: auto !important;
        user-select: auto !important;
        cursor: pointer !important;
      }
      
      /* Блокируем перетаскивание изображений */
      img {
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important;
      }
      
      /* Разрешаем клики по кнопкам */
      button, .btn, .button, [role="button"], a {
        pointer-events: auto !important;
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 📋 Блокировка копирования
  blockCopyPaste() {
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      this.logSecurityEvent('copy_blocked');
      return false;
    });

    document.addEventListener('paste', (e) => {
      e.preventDefault();
      this.logSecurityEvent('paste_blocked');
      return false;
    });

    document.addEventListener('cut', (e) => {
      e.preventDefault();
      this.logSecurityEvent('cut_blocked');
      return false;
    });
  }

  // 🔍 Детекция DevTools
  detectDevTools() {
    let devtools = {
      open: false,
      orientation: null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          this.handleDevToolsOpen();
        }
      } else {
        if (devtools.open) {
          devtools.open = false;
          this.handleDevToolsClose();
        }
      }
    }, 500);
  }

  handleDevToolsOpen() {
    this.isDevToolsOpen = true;
    this.logSecurityEvent('devtools_opened');
    
    // Блокируем контент при открытии DevTools
    document.body.style.filter = 'blur(10px)';
    document.body.style.pointerEvents = 'none';
    
    // Показываем предупреждение
    this.showSecurityWarning('DevTools detected! Content blocked for security.');
    
    // Закрываем DevTools через 3 секунды
    setTimeout(() => {
      this.closeDevTools();
    }, 3000);
  }

  handleDevToolsClose() {
    this.isDevToolsOpen = false;
    document.body.style.filter = 'none';
    document.body.style.pointerEvents = 'auto';
    this.hideSecurityWarning();
  }

  closeDevTools() {
    // Попытка закрыть DevTools (работает не во всех браузерах)
    if (window.chrome && window.chrome.runtime) {
      window.chrome.runtime.sendMessage({action: 'closeDevTools'});
    }
  }

  // 📸 Блокировка скриншотов
  blockScreenshots() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        this.screenshotAttempts++;
        this.logSecurityEvent('screenshot_attempt', { attempts: this.screenshotAttempts });
        
        // Блокируем экран при попытке скриншота
        document.body.style.filter = 'blur(15px) brightness(0.3)';
        setTimeout(() => {
          document.body.style.filter = 'none';
        }, 2000);
        
        this.showSecurityWarning('Screenshot blocked! Attempt logged.');
        return false;
      }
    });
  }

  // 🏷️ Добавление водяных знаков
  addWatermark() {
    const watermark = document.createElement('div');
    watermark.id = 'security-watermark';
    watermark.innerHTML = '© Web-Subnetik 2024 - Protected Content';
    watermark.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 50px,
        rgba(0,0,0,0.03) 50px,
        rgba(0,0,0,0.03) 100px
      );
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: rgba(0,0,0,0.1);
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(watermark);
  }

  // ⚠️ Показ предупреждений безопасности
  showSecurityWarning(message) {
    const warning = document.createElement('div');
    warning.id = 'security-warning';
    warning.textContent = message;
    warning.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ff4444;
      color: white;
      padding: 20px 40px;
      border-radius: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(255,68,68,0.5);
      animation: securityPulse 0.5s ease-in-out;
    `;

    // Добавляем анимацию
    const style = document.createElement('style');
    style.textContent = `
      @keyframes securityPulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(warning);
  }

  hideSecurityWarning() {
    const warning = document.getElementById('security-warning');
    if (warning) {
      warning.remove();
    }
  }

  // 📊 Логирование событий безопасности
  logSecurityEvent(type, data = {}) {
    const event = {
      type,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      data
    };
    
    this.securityEvents.push(event);
    
    // Отправляем на сервер (опционально)
    this.sendSecurityEvent(event);
    
    console.warn(`🛡️ Security Event: ${type}`, event);
  }

  sendSecurityEvent(event) {
    // Отправляем события безопасности на сервер
    fetch('/api/security-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    }).catch(err => {
      console.log('Security event logging failed:', err);
    });
  }

  // 📈 Отслеживание событий безопасности
  trackSecurityEvents() {
    setInterval(() => {
      if (this.securityEvents.length > 0) {
        console.log(`🛡️ Security Events Logged: ${this.securityEvents.length}`);
      }
    }, 30000); // Каждые 30 секунд
  }

  // 🔓 Метод для отключения защиты (только для разработки)
  disableProtection() {
    console.warn('🛡️ Security protection disabled!');
    document.removeEventListener('contextmenu', this.blockRightClick);
    document.removeEventListener('keydown', this.blockKeyboardShortcuts);
    document.removeEventListener('copy', this.blockCopyPaste);
    document.removeEventListener('paste', this.blockCopyPaste);
    document.removeEventListener('cut', this.blockCopyPaste);
    
    // Удаляем водяной знак
    const watermark = document.getElementById('security-watermark');
    if (watermark) watermark.remove();
  }
}

// 🚀 Инициализация защиты
export default SecurityProtection;

// Автоматический запуск защиты
if (typeof window !== 'undefined') {
  window.SecurityProtection = SecurityProtection;
  
  // Запускаем защиту после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new SecurityProtection();
    });
  } else {
    new SecurityProtection();
  }
}
