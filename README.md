# Web-Subnetik 🌐

Профессиональная разработка веб-сайтов и приложений под ключ. Современные решения для вашего бизнеса с поддержкой 4 языков.

## 🚀 Особенности

- **Многоязычная поддержка**: Русский, English, 中文, Oʻzbek
- **Адаптивный дизайн**: Отлично выглядит на всех устройствах
- **SEO оптимизация**: Настроено для поисковых систем
- **Telegram интеграция**: Заявки приходят прямо в бот
- **Современные технологии**: Vue.js 3, Tailwind CSS, Vite
- **Docker готовность**: Легкое развертывание

## 🛠 Технологии

### Frontend
- **Vue.js 3** - Прогрессивный JavaScript фреймворк
- **Vite** - Быстрый инструмент сборки
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Vue Router** - Маршрутизация
- **Vue I18n** - Интернационализация

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web фреймворк
- **Telegram Bot API** - Интеграция с Telegram
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Защита от спама

### DevOps
- **Docker** - Контейнеризация
- **Nginx** - Web сервер и reverse proxy
- **Let's Encrypt** - SSL сертификаты
- **GitHub Actions** - CI/CD (готово к настройке)

## 📁 Структура проекта

```
web-subnetik/
├── src/                    # Исходный код frontend
│   ├── components/         # Vue компоненты
│   ├── views/             # Страницы
│   ├── i18n/              # Переводы
│   ├── assets/            # Статические ресурсы
│   └── utils/             # Утилиты
├── backend/               # Backend API
│   ├── server.js          # Express сервер
│   ├── config.js          # Конфигурация
│   └── package.json       # Зависимости
├── public/                # Публичные файлы
├── docker-compose.yml     # Docker Compose
├── Dockerfile            # Docker образ
└── nginx.conf            # Nginx конфигурация
```

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/baliyan99/web-subnetik.git
   cd web-subnetik
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите frontend:**
   ```bash
   npm run dev
   ```

4. **Запустите backend (в отдельном терминале):**
   ```bash
   cd backend
   npm install
   node server.js
   ```

### Docker развертывание

1. **Соберите проект:**
   ```bash
   npm run build
   ```

2. **Запустите с Docker Compose:**
   ```bash
   docker-compose up -d
   ```

## 🌍 Многоязычность

Проект поддерживает 4 языка:
- 🇷🇺 **Русский** (по умолчанию)
- 🇬🇧 **English**
- 🇨🇳 **中文** (Chinese)
- 🇺🇿 **Oʻzbek** (Uzbek)

Переводы находятся в `src/i18n/locales/`

## 📱 Telegram интеграция

Заявки с сайта автоматически отправляются в Telegram бот:
- **Bot Token**: `8207249023:AAGtsYLNUu0PQnrudpsXDyYcAiBmHKAI5FU`
- **Chat ID**: `718997850`

## 🔧 Конфигурация

### Backend настройки
Отредактируйте `backend/config.js`:
```javascript
module.exports = {
  telegram: {
    botToken: 'YOUR_BOT_TOKEN',
    chatId: 'YOUR_CHAT_ID'
  },
  server: {
    port: process.env.PORT || 3001,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
  }
}
```

### Frontend настройки
API endpoint в `src/components/ContactSection.vue`:
```javascript
const response = await fetch('https://subnetik.pro/api/send-telegram', {
  // ...
});
```

## 📊 SEO оптимизация

- **Meta теги** для всех страниц
- **Open Graph** для социальных сетей
- **Structured Data** (JSON-LD)
- **Sitemap.xml** и **robots.txt**
- **Локальная SEO** для Ташкента
- **Google Analytics 4** интеграция

## 🚀 Развертывание на сервере

1. **Подготовьте сервер:**
   ```bash
   # Установите Docker и Docker Compose
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   ```

2. **Загрузите проект:**
   ```bash
   git clone https://github.com/baliyan99/web-subnetik.git
   cd web-subnetik
   ```

3. **Настройте SSL:**
   ```bash
   chmod +x setup-ssl.sh
   ./setup-ssl.sh
   ```

4. **Запустите:**
   ```bash
   docker-compose up -d
   ```

## 📝 Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предварительный просмотр сборки
- `docker-compose up -d` - Запуск в Docker
- `docker-compose down` - Остановка Docker

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 📞 Контакты

- **Сайт**: https://subnetik.pro
- **Email**: thesubnetik@gmail.com
- **Telegram**: @subnetik
- **GitHub**: [@baliyan99](https://github.com/baliyan99)

---

Сделано с ❤️ командой Web-Subnetik