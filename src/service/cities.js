const db = require('../configuration/database.js').db;

const findAllCities = (async () => {
    return await db('cities').select('*');
});

const findCity = (async(id) => {
    return await db('cities').select('*').where({id: id}).first();
});

const addCity = (async(name, altitude, population, capital) => {
    return await db('cities').insert({
        name: name,
        altitude: altitude,
        population: population,
        capital: capital
    });
});

const modifyCity = (async(id, name, altitude, population, capital) => {
    await db('cities').where({id: id}).update({
        name: name,
        altitude: altitude,
        population: population,
        capital: capital
    });
});

const removeCity = (async(id) => {
    await db('cities').where({id: id}).del();
});

const cityExistsById = (async(id) => {
    const city = await db('cities').select('*').where({id: id}).first();
    return city != null;
});

const cityExistsByName = (async(name) => {
    const city = await db('cities').select('*').where({name: name}).first();
    if (city === undefined) {
        return false;
    } else {
        return true;
    }
});



module.exports = {
    findAllCities,
    findCity,
    addCity,
    modifyCity,
    removeCity,
    cityExistsById,
    cityExistsByName
}