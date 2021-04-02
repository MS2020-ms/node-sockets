# Inicio
- >npm init -y (crear archivo package.json)
- crear app.js
- crear models/server.js
- crear .env
- >npm i express cors dotenv
- crear public/index.html
  link bootstrap en index.html
- crear public/js/socket-client.js
# Instalacion socket.io en nuestro servidor
- Escuchando cuando se hace una nueva coneccion
- >npm install socket.io
- ir models/server.js
  copiar de https://www.npmjs.com/package/socket.io -> In conjunction with Express
## Mensaje en HTML de Conexion y Desconexion
- ir public/js/socket-client.js
## Emitir desde cliente (Front) - Escuchar en servidor (Back)
- ir public/js/socket-client.js
- ir models/server.js
- ir public/index.html
## Emitir desde servidor (Back) - Escuchar en cliente (Front)
- ir public/js/socket-client.js
- ir models/server.js
## Retroalimentación de emisiones del cliente hacia el servidor

# Ordenar el codigo
- crear sockets/controller.js
# Socket a Heroku
- crear nueva aplicacion en Heroku (maximo 5 app en heroku)
- >git init
  >git add .
