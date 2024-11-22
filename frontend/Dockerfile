# Imagen base de Node.js
FROM node:18

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package.json yarn.lock ./
RUN yarn install

# Copiar el código fuente
COPY . .

# Construir la aplicación para producción
RUN yarn build

# Usar un servidor ligero para servir la app
RUN yarn global add serve

# Exponer el puerto para servir la app
EXPOSE 3000

# Comando para servir la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
