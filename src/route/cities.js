const express = require('express');
const router = express.Router();

const { getCities, getCity, postCity, putCity, deleteCity } = require('../controller/cities');

router.get('/cities', getCities);
router.get('/cities/:id',getCity);
router.post('/cities', postCity);
router.put('/cities/:id', putCity);
router.delete('/cities/:id', deleteCity);

module.exports = router;
