const express = require('express');
const router = require('./route/cities');

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
