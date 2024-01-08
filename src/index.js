import express from 'express';
import cors from 'cors';
import carroRoutes from './routes/carro.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Cambia esta URL al dominio de tu aplicación
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Permite que el navegador envíe cookies
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(express.json());

app.use(indexRoutes);
app.use('/api', carroRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint no encontrado',
  });
});

app.listen(PORT);
