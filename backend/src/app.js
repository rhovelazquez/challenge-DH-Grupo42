const express = require('express');
const app = express();
const PORT = 3001;

const professionsRoutes = require('/routes/api/professions.js');
const candidatesRoutes = require('/routes/api/candidates.js');

app.listen(PORT, () => {console.log('El servidor esta corriendo en el puerto: ' + PORT);
});

app.get('/', (req, res) => {
    res.send('hola mundo');
})