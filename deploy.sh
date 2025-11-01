#!/bin/bash

set -e

echo "🚀 Starting deployment..."

cd /home/forge/account.orcarealty.ca

echo "📦 Installing Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

echo "📦 Installing NPM dependencies..."
npm ci --production=false

echo "🏗️ Building assets..."
npm run build

echo "⚙️ Running Laravel commands..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

echo "✅ Deployment complete!"

