#!/bin/bash

echo "🚀 Deploying Web-Subnetik to Docker..."

# Build frontend
echo "📦 Building frontend..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t web-subnetik .

# Stop existing container
echo "🛑 Stopping existing container..."
docker-compose down || true

# Start new container
echo "▶️ Starting new container..."
docker-compose up -d

# Show status
echo "✅ Deployment complete!"
docker-compose ps
