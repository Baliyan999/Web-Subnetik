#!/bin/sh

# Start backend in background
cd /app/backend/backend
node server.js &

# Start nginx in foreground
nginx -g "daemon off;"
