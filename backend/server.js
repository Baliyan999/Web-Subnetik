const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const config = require('./config');

const app = express();

// Middleware
app.use(helmet()); // Безопасность
app.use(express.json({ limit: '10mb' })); // Парсинг JSON
app.use(express.urlencoded({ extended: true })); // Парсинг URL-encoded

// CORS настройки
app.use(cors({
  origin: config.server.frontendUrl,
  credentials: true
}));

// Rate limiting - защита от спама (увеличено для тестирования)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 50, // максимум 50 запросов с одного IP за 15 минут (было 5)
  message: {
    error: 'Слишком много запросов. Попробуйте позже.',
    retryAfter: '15 минут'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/send-telegram', limiter);

// Функция для отправки сообщения в Telegram
async function sendToTelegram(data) {
  try {
    const message = formatMessage(data);
    
    const response = await axios.post(
      `https://api.telegram.org/bot${config.telegram.botToken}/sendMessage`,
      {
        chat_id: config.telegram.chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }
    );

    return {
      success: true,
      messageId: response.data.result.message_id
    };
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error.response?.data || error.message);
    throw new Error('Не удалось отправить сообщение в Telegram');
  }
}

// Форматирование сообщения для Telegram
function formatMessage(data) {
  const currentDate = new Date().toLocaleString('ru-RU', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `🆕 <b>Новая заявка с сайта Web-Subnetik!</b>

👤 <b>Имя:</b> ${data.name || 'Не указано'}
📞 <b>Телефон:</b> ${data.phone || 'Не указано'}
💬 <b>Комментарий:</b> ${data.comment || 'Нет комментария'}

⏰ <b>Время:</b> ${currentDate}
🌐 <b>Источник:</b> ${data.source || 'Главная страница'}

#заявка #web-subnetik`;
}

// API маршрут для отправки заявки
app.post('/api/send-telegram', async (req, res) => {
  try {
    // Валидация данных
    const { name, phone, comment, source } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Имя и телефон обязательны для заполнения'
      });
    }

    // Проверка формата телефона (базовая)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Неверный формат номера телефона'
      });
    }

    // Отправка в Telegram
    const result = await sendToTelegram({
      name: name.trim(),
      phone: phone.trim(),
      comment: comment ? comment.trim() : '',
      source: source || 'Главная страница'
    });

    res.json({
      success: true,
      message: 'Заявка успешно отправлена!',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Ошибка обработки заявки:', error);
    res.status(500).json({
      success: false,
      error: 'Внутренняя ошибка сервера. Попробуйте позже.'
    });
  }
});

// Проверка здоровья сервера
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Обработка 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Маршрут не найден'
  });
});

// Обработка ошибок
app.use((error, req, res, next) => {
  console.error('Необработанная ошибка:', error);
  res.status(500).json({
    success: false,
    error: 'Внутренняя ошибка сервера'
  });
});

// Запуск сервера
const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`🚀 Backend сервер запущен на порту ${PORT}`);
  console.log(`📱 Telegram бот настроен для отправки в чат: ${config.telegram.chatId}`);
  console.log(`🌐 CORS настроен для: ${config.server.frontendUrl}`);
});

module.exports = app;
