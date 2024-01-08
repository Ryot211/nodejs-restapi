import express from 'express';
import cors from 'cors';
import carroRoutes from './routes/carro.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';

const app = express();

const allowedOrigins = [
  'https://ryot211.github.io',
  'https://otrodominio.com',
  'https://dominioadicional.com',
  'http://localhost', // Aquí se agrega localhost
  'http://127.0.0.1', // Y aquí
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Dominio no permitido por CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
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
