# Web-Subnetik Backend

Backend сервер для отправки заявок с сайта в Telegram бот.

## Установка и запуск

1. **Установка зависимостей:**
```bash
cd backend
npm install
```

2. **Запуск в режиме разработки:**
```bash
npm run dev
```

3. **Запуск в продакшене:**
```bash
npm start
```

## API Endpoints

### POST /api/send-telegram
Отправляет заявку в Telegram бот.

**Тело запроса:**
```json
{
  "name": "Имя клиента",
  "phone": "+998 33 666 99 44",
  "comment": "Комментарий клиента",
  "source": "Главная страница"
}
```

**Ответ при успехе:**
```json
{
  "success": true,
  "message": "Заявка успешно отправлена!",
  "messageId": 12345
}
```

**Ответ при ошибке:**
```json
{
  "success": false,
  "error": "Описание ошибки"
}
```

### GET /api/health
Проверка состояния сервера.

## Конфигурация

Настройки находятся в файле `config.js`:
- `telegram.botToken` - токен Telegram бота
- `telegram.chatId` - ID чата для получения сообщений
- `server.port` - порт сервера (по умолчанию 3001)
- `server.frontendUrl` - URL фронтенда для CORS

## Безопасность

- Rate limiting: максимум 5 запросов с одного IP за 15 минут
- Валидация входных данных
- CORS защита
- Helmet для базовой безопасности

## Логирование

Все ошибки и успешные отправки логируются в консоль.
