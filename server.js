import express from 'express';
import librosRoutes from './routes/libros.js';
import autoresRoutes from './routes/autores.js';
import usuariosRoutes from './routes/usuarios.js';
import prestamosRoutes from './routes/prestamos.js';

const app = express();
const port = 3000;

app.use(express.json());

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
