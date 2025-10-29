// 🖼️ Image Protection - Block interaction with images only
// Блокирует только взаимодействие с изображениями

class ImageProtection {
  constructor() {
    this.init();
  }

  init() {
    this.blockImageRightClick();
    this.blockImageKeyboardShortcuts();
    this.blockImageCopy();
    this.addImageProtectionStyles();
  }

  // 🚫 Блокировка правого клика по изображениям
  blockImageRightClick() {
    document.addEventListener('contextmenu', (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        this.showImageProtectionMessage('Right-click on images is disabled');
        return false;
      }
    });
  }

  // ⌨️ Блокировка клавиш для изображений
  blockImageKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Если фокус на изображении или выделено изображение
      if (e.target.tagName === 'IMG' || 
          (e.ctrlKey && e.key === 'c' && this.isImageSelected())) {
        e.preventDefault();
        this.showImageProtectionMessage('Image copying is disabled');
        return false;
      }
    });
  }

  // 📋 Блокировка копирования изображений
  blockImageCopy() {
    document.addEventListener('copy', (e) => {
      if (this.isImageSelected()) {
        e.preventDefault();
        this.showImageProtectionMessage('Image copying is disabled');
        return false;
      }
    });
  }

  // 🎨 Добавление CSS стилей для защиты изображений
  addImageProtectionStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Блокируем перетаскивание изображений */
      img {
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      
      /* Разрешаем взаимодействие с кнопками */
      button, .btn, .button, [role="button"], a[href], input, textarea, select {
        pointer-events: auto !important;
        -webkit-user-select: auto !important;
        -moz-user-select: auto !important;
        -ms-user-select: auto !important;
        user-select: auto !important;
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);
  }

  // 🔍 Проверка, выделено ли изображение
  isImageSelected() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      return range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE &&
             range.commonAncestorContainer.tagName === 'IMG';
    }
    return false;
  }

  // ⚠️ Показ сообщения о защите изображений
  showImageProtectionMessage(message) {
    // Создаем временное уведомление
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff4444;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
      animation: slideIn 0.3s ease-out;
    `;

    // Добавляем анимацию
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// 🚀 Инициализация защиты изображений
export default ImageProtection;

// Автоматический запуск защиты изображений
if (typeof window !== 'undefined') {
  window.ImageProtection = ImageProtection;
  
  // Запускаем защиту после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new ImageProtection();
    });
  } else {
    new ImageProtection();
  }
}
