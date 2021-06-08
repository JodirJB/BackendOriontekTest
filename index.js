const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Se crea el servidor
const app = express();

// Se conecta a la base de datos
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/clients', require('./routes/client.router'));

app.listen(3000, () => {
    console.log("Desde el puerto 3000");
});