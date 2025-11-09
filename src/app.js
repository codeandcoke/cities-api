const express = require('express');
const { findAllCities, findCity, addCity, modifyCity, removeCity, cityExistsById, cityExistsByName } = require('./service/cities');
const app = express();
app.use(express.json());

app.get('/cities', async (req, res) => {
    // TODO Añadir soporte para filtros
    const cities = findAllCities();

    res.status(200).json(cities);
});

app.get('/cities/:id', async (req, res) => {
    const id = req.params.id;

    if (!cityExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the city does not exist'
        });
    }

    res.status(200).json(city);
});

app.post('/cities', async (req, res) => {
    const name = req.body.name;

    if (cityExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'a city already exists with that name'
        });
    }

    // TODO Comprobar que altitude y population son de tipo entero
    const altitude = req.body.altitude;
    const population = req.body.population;
    const capital = req.body.capital;

    const newCity = addCity(name, altitude, population, capital);
    // TODO Devolver todos los datos de la ciudad como respuesta
    res.status(201).json(newCity);
});

app.delete('/cities/:id', async (req, res) => {
    const id = req.params.id;
    
    if (!cityExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the city does not exist'
        });
    }
    removeCity(id);
    
    res.status(204).end();
});

app.put('/cities/:id', async (req, res) => {
    const id = req.params.id;
    
    if (!cityExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the city does not exist'
        });
    }

    const name = req.body.name;
    // TODO Validar alguna cosa
    const altitude = req.body.altitude;
    const population = req.body.population;
    const capital = req.body.capital;

    await db('cities').where({id: id}).update({
        name: name,
        altitude: altitude,
        population: population,
        capital: capital
    });

    res.status(204).end();
});

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
