// Конфигурация для Telegram бота
module.exports = {
  telegram: {
    botToken: '8207249023:AAGtsYLNUu0PQnrudpsXDyYcAiBmHKAI5FU',
    chatId: '718997850'
  },
  server: {
    port: process.env.PORT || 3001,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
  }
}
