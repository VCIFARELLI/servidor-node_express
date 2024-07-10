import axios from 'axios';
import Autor from '../models/autor.js';

const baseURL = 'https://api.mockaroo.com/api/d7664fe0?count=10&key=94fac1c0';

let autores = []; // Almacenamiento temporal de autores

// Obtener todos los autores
export const getAll = async (req, res) => {
    try {
        if (autores.length === 0) {
            const response = await axios.get(baseURL);
            autores = response.data;
        }
        res.json(autores);
    } catch (error) {
        res.status(500).send('Error al obtener los autores');
    }
};

// Obtener un autor por ID
export const getById = (req, res) => {
    const autor = autores.find(autor => autor.id_autor === parseInt(req.params.id_autor));
    if (autor) {
        res.json(autor);
    } else {
        res.status(404).send('Autor no encontrado');
    }
};

// Crear un nuevo autor
export const create = (req, res) => {
    const nuevoAutor = new Autor(
        autores.length > 0 ? autores[autores.length - 1].id_autor + 1 : 1,
        req.body.nombre,
        req.body.nacionalidad
    );
    autores.push(nuevoAutor);
    res.status(201).json(nuevoAutor);
};

// Actualizar un autor existente
export const update = (req, res) => {
    const autorIndex = autores.findIndex(autor => autor.id_autor === parseInt(req.params.id_autor));
    if (autorIndex !== -1) {
        autores[autorIndex] = {
            id_autor: parseInt(req.params.id_autor),
            nombre: req.body.nombre,
            nacionalidad: req.body.nacionalidad
        };
        res.json(autores[autorIndex]);
    } else {
        res.status(404).send('Autor no encontrado');
    }
};

// Eliminar un autor
export const deleteAutor = (req, res) => {
    const autorIndex = autores.findIndex(autor => autor.id_autor === parseInt(req.params.id_autor));
    if (autorIndex !== -1) {
        const deletedAutor = autores.splice(autorIndex, 1);
        res.json(deletedAutor);
    } else {
        res.status(404).send('Autor no encontrado');
    }
};
