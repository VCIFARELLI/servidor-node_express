import axios from 'axios';
import Libro from '../models/libro.js'; 

const baseURL = 'http://localhost:3002';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/libros`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los libros');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/libros/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el libro');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoLibro = new Libro(null, req.body.titulo, req.body.autorID, req.body.categoria);
        const response = await axios.post(`${baseURL}/libros`, nuevoLibro);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el libro');
    }
};

export const update = async (req, res) => {
    try {
        const libroActualizado = new Libro(req.params.id, req.body.titulo, req.body.autorID, req.body.categoria);
        const response = await axios.put(`${baseURL}/libros/${req.params.id}`, libroActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el libro');
    }
};

export const deleteLibro = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/libros/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el libro');
    }
};
