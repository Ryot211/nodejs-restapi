import express from 'express';
import cors from 'cors';
import carroRoutes from './routes/carro.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(cors({
  origin: 'https://ryot211.github.io', // Actualiza la URL al dominio de tu aplicación
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permite que el navegador envíe cookies
}));
app.use(express.json());

app.use(indexRoutes);
app.use('/api', carroRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint no encontrado',
  });
});

app.listen(PORT);
