import express from 'express'
import carroRoutes from './routes/carro.routes.js'
import indexRoutes from './routes/index.routes.js'


import cors from 'cors';



const corsOptions = {
  origin: ['https://nodejs-restapi-production-dfc4.up.railway.app/api/carros','http://127.0.0.1:500'], // Reemplaza esto con tu dominio de aplicación web
  methods: ['GET', 'POST', 'PATCH','PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.use(cors(corsOptions));

// Resto de tu configuración de Express y definición de rutas...




import {PORT} from './config.js'

const app =express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',carroRoutes)

app.use((req, res , next ) =>{
    res.status(404).json({
        message:'endpoint Not found '
    })
} )

app.listen(PORT)