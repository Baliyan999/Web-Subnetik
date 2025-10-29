# Backend stage
FROM node:18-alpine AS backend

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ ./

# Production stage
FROM nginx:alpine

# Копируем собранный фронтенд (уже собранный локально)
COPY dist /usr/share/nginx/html

# Копируем backend
COPY --from=backend /app/backend /app/backend

# Устанавливаем Node.js для backend
RUN apk add --no-cache nodejs npm

# Копируем nginx конфиг
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем startup скрипт
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80 3001

CMD ["/start.sh"]
