#!/usr/bin/env node

// Тест интеграции Web-Subnetik
const https = require('https');

console.log('🧪 Тестирование интеграции Web-Subnetik...\n');

// Тест 1: Проверка backend health
console.log('1️⃣ Проверка backend сервера...');
fetch('http://localhost:3002/api/health')
  .then(response => response.json())
  .then(data => {
    console.log('✅ Backend работает:', data.status);
    
    // Тест 2: Отправка тестовой заявки
    console.log('\n2️⃣ Отправка тестовой заявки в Telegram...');
    return fetch('http://localhost:3002/api/send-telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Тест Интеграции',
        phone: '+998 33 666 99 44',
        comment: 'Автоматический тест интеграции системы',
        source: 'Тестирование'
      })
    });
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('✅ Заявка успешно отправлена в Telegram!');
      console.log('📱 ID сообщения:', data.messageId);
      console.log('\n🎉 ВСЕ РАБОТАЕТ! Проверьте ваш Telegram бот.');
    } else {
      console.log('❌ Ошибка отправки:', data.error);
    }
  })
  .catch(error => {
    console.log('❌ Ошибка:', error.message);
  });
