
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes/routes.js';


// Crear una instancia de Express
const server = express();

const appName = 'API'; 
const port = 3001;

// Middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// CORS configuration
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Ajustar según sea necesario
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas
server.use('/', routes);

// Manejador de errores
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Iniciar el servidor
server.listen(port, () => {
  console.log(`${appName} escuchando en el puerto ${port}`); // Utilizamos la variable appName aquí
});

// Exportar server para ser utilizado donde sea necesario
export default server;