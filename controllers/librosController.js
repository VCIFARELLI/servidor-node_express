import axios from 'axios';
import Libro from '../models/libro.js'; 

const baseURL = 'https://api.mockaroo.com/api/ff52adb0?count=20&key=94fac1c0';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(baseURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los libros');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/${req.params.id_libro}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el libro');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body.id_libro, req.body.titulo, req.body.id_autor, req.body.categoria);
        const response = await axios.post(baseURL, nuevoLibro);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el libro');
    }
};

export const update = async (req, res) => {
    try {
        const libroActualizado = new Libro(req.params.id_libro, req.body.titulo, req.body.id_autor, req.body.categoria);
        const response = await axios.put(`${baseURL}/${req.params.id_libro}`, libroActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el libro');
    }
};

export const deleteLibro = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/${req.params.id_libro}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el libro');
    }
};