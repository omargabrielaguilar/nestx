# Usa la imagen oficial de Node.js (versión 23)
FROM node:23

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Ejecuta el proceso de build de TypeScript
RUN npm run build

# Exponemos el puerto donde la aplicación escuchará
EXPOSE 3000

# Comando para iniciar la aplicación en modo producción
CMD ["node", "dist/infrastructure/main.js"]
