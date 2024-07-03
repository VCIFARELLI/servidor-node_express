import axios from 'axios';
import Autor from '../models/autor.js';

const baseURL = 'http://localhost:3002';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/autores`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los autores');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/autores/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el autor');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoAutor = new Autor(null, req.body.nombre,req.body.nacionalidad);
        const response = await axios.post(`${baseURL}/autores`, nuevoAutor);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el autor');
    }
};

export const update = async (req, res) => {
    try {
        const autorActualizado = new Autor(req.params.id, req.body.nombre, req.body.nacionalidad);
        const response = await axios.put(`${baseURL}/autores/${req.params.id}`, autorActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el autor');
    }
};

export const deleteAutor = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/autores/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el autor');
    }
};
