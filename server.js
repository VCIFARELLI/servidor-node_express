import express from 'express';
import morgan from 'morgan';
import axios from 'axios';

//importo las rutas
import librosRoutes from './routes/libros.js';
import autoresRoutes from './routes/autores.js';
import usuariosRoutes from './routes/usuarios.js';
import prestamosRoutes from './routes/prestamos.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// Inicializar datos de Mockaroo (función para obtener datos de Mockaroo)
let libros = [];
let autores = [];
let prestamos = [];
let usuarios = [];

const fetchDataFromMockaroo = async () => {
  try {
    const autoresResponse = await axios.get('https://api.mockaroo.com/api/d7664fe0?count=10&key=94fac1c0');
    const librosResponse = await axios.get('https://api.mockaroo.com/api/ff52adb0?count=20&key=94fac1c0');
    const prestamosResponse = await axios.get('https://api.mockaroo.com/api/8cf19770?count=5&key=94fac1c0');
    const usuariosResponse = await axios.get('https://api.mockaroo.com/api/207f1de0?count=10&key=94fac1c0');

    libros = librosResponse.data;
    autores = autoresResponse.data;
    prestamos = prestamosResponse.data;
    usuarios = usuariosResponse.data;
  } catch (error) {
    console.error('Error fetching data from Mockaroo:', error);
  }
};

fetchDataFromMockaroo();

app.use('/libros', librosRoutes);
app.use('/autores', autoresRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/prestamos', prestamosRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});