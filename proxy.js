const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

// Middleware para agregar encabezados CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Ruta para manejar las solicitudes de equipos
app.get('/teams', async (req, res) => {
  try {
    const response = await fetch('https://api.sportmonks.com/v3/football/teams?api_token=f9208yug7macl1syQ2a6aivTns0PqFA6d6s0q86O9uwQmGLF3ffHumAPsIZ9');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al obtener los equipos:', error);
    res.status(500).json({ error: 'Error al obtener los equipos' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor proxy escuchando en el puerto ${PORT}`);
});
