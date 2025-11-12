const { getCities, getCity, postCity, putCity, deleteCity } = require('../controller/cities');

app.get('/cities', getCities);
app.get('/cities/:id',getCity);
app.post('/cities', postCity);
app.put('/cities/:id', putCity);
app.delete('/cities/:id', deleteCity);
