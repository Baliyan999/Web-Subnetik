#!/bin/bash

echo "🔐 Setting up SSL for subnetik.pro..."

# Install certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
fi

# Stop nginx temporarily
echo "⏸️ Stopping nginx..."
systemctl stop nginx

# Get SSL certificate
echo "🔑 Getting SSL certificate for subnetik.pro..."
certbot certonly --standalone -d subnetik.pro -d www.subnetik.pro --non-interactive --agree-tos --email admin@subnetik.pro

# Copy nginx config
echo "📝 Copying nginx configuration..."
cp nginx-subnetik.conf /etc/nginx/sites-available/subnetik.pro
ln -sf /etc/nginx/sites-available/subnetik.pro /etc/nginx/sites-enabled/

# Remove default nginx config
rm -f /etc/nginx/sites-enabled/default

# Test nginx config
echo "🧪 Testing nginx configuration..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Start nginx
    echo "🚀 Starting nginx..."
    systemctl start nginx
    systemctl enable nginx
    
    # Setup auto-renewal
    echo "🔄 Setting up SSL auto-renewal..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    
    echo "✅ SSL setup complete!"
    echo "🌐 Your site should now be available at https://subnetik.pro"
else
    echo "❌ Nginx configuration test failed"
    exit 1
fi
