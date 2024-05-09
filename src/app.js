import config from './config.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import texto from './routes/texto.js';

const uri = config.db.host;
mongoose.connect(uri).then((cliente) => { 
    console.log('Conectado a la base de datos', cliente.connection.name);
}, (err) => {
    console.log('Error al conectar a la base de datos', err);
});

import initRoute from './routes/initRoute.js';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',initRoute);
app.use('/texto', texto);

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    //para visitar la pagina
    console.log(`http://localhost:${PORT}`);
});