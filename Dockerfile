# Imagen base de Node.js
FROM node:18

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos al contenedor
COPY . .

# Exponer el puerto del backend
EXPOSE 5000

# Comando para iniciar el backend
CMD ["node", "server.js"]
