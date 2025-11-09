Cities API v3
==

API de ciudades con las siguientes funcionalidades:

- CRUD completo
  - GET /cities
  - GET /cities/:id
  - POST /cities
  - PUST /cities/:id
  - DELETE /cities/id
- Utiliza una base de datos SQLite (no incluida en el repositorio) que contiene una tabla `cities` con las columnas: `id`, `name`, `population`, `altitude` y `capital`
- Control de errores: 404