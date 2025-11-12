const express = require('express');
const app = express();
app.use(express.json());



app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
