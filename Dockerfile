# Utiliza una imagen de Node.js como base con la versión 18.18.2
FROM node:18.18.2

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm i

# Construye la aplicación
RUN ng build

# Expone el puerto 80 del contenedor
EXPOSE 80

# Comando para ejecutar la aplicación cuando se inicia el contenedor
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
