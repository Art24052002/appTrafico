const express = require('express');
const app = express();

// Configuración para permitir solicitudes de origen cruzado (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta para manejar la solicitud GET en la ruta raíz "/"
app.get('/', (req, res) => {
  const data = { message: 'Respuesta desde el servidor de Google Cloud' };
  res.json(data);
});

// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
