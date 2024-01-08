import express from 'express';
import cors from 'cors';
import carroRoutes from './routes/carro.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

const corsOptions = {
  origin: ['https://nodejs-restapi-production-dfc4.up.railway.app', 'http://127.0.0.1:5000'], // Dominios permitidos
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(indexRoutes);
app.use('/api', carroRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint no encontrado',
  });
});

app.listen(PORT);
