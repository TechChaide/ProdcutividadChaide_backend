# Dockerfile para la carpeta /Backend

# Usar una imagen base oficial de Node.js con Alpine Linux
FROM node:20-alpine

# --- 1. Instalar CRON y dos2unix ---
# dcron: demonio de cron | dos2unix: convertir terminaciones de línea CRLF -> LF
RUN apk update && apk add --no-cache dcron dos2unix

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias e instalarlas
# - npm ci: instalación limpia y reproducible desde package-lock.json
# - Reintentos de red: en redes inestables npm puede crashear silenciosamente
#   ("Exit handler never called!") dejando node_modules corrupto sin fallar el build
COPY package*.json ./
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm ci --no-audit --no-fund

# Verificación: el build DEBE fallar aquí si npm dejó las dependencias incompletas,
# para no producir nunca una imagen rota
RUN test -f node_modules/.package-lock.json && \
    node -e "require('express'); require('sequelize'); require('tedious'); require('cors'); require('dotenv'); require('body-parser'); console.log('Dependencias verificadas OK')"

# Copiar el resto del código del backend
COPY . .

# Convertir el script de entrypoint a formato Unix y darle permisos
RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh

# Exponer el puerto en el que corre tu API
EXPOSE 5400

# Establece el script como el comando a ejecutar al iniciar el contenedor
CMD ["./entrypoint.sh"]
