const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

const professionsRoutes = require('./routes/api/professions.js');
const candidatesRoutes = require('./routes/api/candidates.js');

app.use('/uploads', express.static(path.join(__dirname, '.' ,'uploads')));

app.listen(PORT, () => {console.log('El servidor esta corriendo en el puerto: ' + PORT);
});

/**
 * CORS: es un paquete que simplifica la configuración de políticas de acceso cruzado (CORS) en 
 * Express.
 */
const cors = require("cors");

/**
 * Especifica que se permite el acceso desde cualquier origen (origin: "*")
 * Esto permite que cualquier dominio realice solicitudes al servidor
 */
let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

/**
 * Esto define una función llamada allowCrossDomain, que actúa como un middleware personalizado.
 * La función toma tres argumentos: req (la solicitud), res (la respuesta) y next (una función que
 * permite pasar la solicitud al siguiente middleware
 */
let allowCrossDomain = function(req, res, next) {
  /**
   *  Se establecen varias cabeceras de respuesta (res.header) para permitir que diferentes dominios 
   *  realicen solicitudes a tu servido
   */
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }

  // Se ejecuta el middleware creado
app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.send('hola mundo');
})

app.use("/professions", professionsRoutes);
app.use("/candidate", candidatesRoutes);