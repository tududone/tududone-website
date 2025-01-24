#!/bin/bash

echo "🚀 Iniciando deploy do Tududone com Docker..."

# Puxa as últimas alterações do GitHub
echo "📥 Atualizando código do repositório..."
git pull

# Para os containers existentes
echo "🛑 Parando containers existentes..."
docker-compose down

# Constrói e inicia os containers
echo "🏗️ Construindo e iniciando containers..."
docker-compose up -d --build

echo "✅ Deploy concluído!"
echo "🌐 Site disponível em: https://tududone.com"
echo "⚙️ Painel Strapi em: https://tududone.com/api/admin" 