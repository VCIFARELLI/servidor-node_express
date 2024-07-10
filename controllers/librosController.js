import axios from 'axios';
import Libro from '../models/libro.js';

const baseURL = 'https://api.mockaroo.com/api/ff52adb0?count=20&key=94fac1c0';

let libros = []; // Almacenamiento temporal de libros

// Obtener todos los libros
export const getAll = async (req, res) => {
    try {
        if (libros.length === 0) {
            const response = await axios.get(baseURL);
            libros = response.data;
        }
        res.json(libros);
    } catch (error) {
        res.status(500).send('Error al obtener los libros');
    }
};

// Obtener un libro por ID
export const getById = (req, res) => {
    const libro = libros.find(libro => libro.id_libro === parseInt(req.params.id_libro));
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
};

// Crear un nuevo libro
export const create = (req, res) => {
    const nuevoLibro = new Libro(
        libros.length > 0 ? libros[libros.length - 1].id_libro + 1 : 1,
        req.body.titulo,
        req.body.id_autor,
        req.body.categoria
    );
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

// Actualizar un libro existente
export const update = (req, res) => {
    const libroIndex = libros.findIndex(libro => libro.id_libro === parseInt(req.params.id_libro));
    if (libroIndex !== -1) {
        libros[libroIndex] = {
            id_libro: parseInt(req.params.id_libro),
            titulo: req.body.titulo,
            id_autor: req.body.id_autor,
            categoria: req.body.categoria
        };
        res.json(libros[libroIndex]);
    } else {
        res.status(404).send('Libro no encontrado');
    }
};

// Eliminar un libro
export const deleteLibro = (req, res) => {
    const libroIndex = libros.findIndex(libro => libro.id_libro === parseInt(req.params.id_libro));
    if (libroIndex !== -1) {
        const deletedLibro = libros.splice(libroIndex, 1);
        res.json(deletedLibro);
    } else {
        res.status(404).send('Libro no encontrado');
    }
};
