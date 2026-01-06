# Dockerfile para la carpeta /Backend

# Usar una imagen base oficial de Node.js con Alpine Linux
FROM node:18-alpine

# --- 1. Instalar CRON ---
# Actualizar los paquetes e instalar el demonio de cron (el paquete se llama 'dcron')
RUN apk update && apk add --no-cache dcron

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Instalar dos2unix para convertir terminaciones de línea de Windows (CRLF) a Linux (LF)
RUN apk add --no-cache dos2unix

# Copiar el resto del código del backend
COPY . .

# Convertir el script de entrypoint a formato Unix y darle permisos
RUN dos2unix entrypoint.sh && chmod +x entrypoint.sh

# Exponer el puerto en el que corre tu API
EXPOSE 5400

# Establece el script como el comando a ejecutar al iniciar el contenedor
CMD ["./entrypoint.sh"]