import axios from 'axios';
import Autor from '../models/autor.js';

const baseURL = 'https://api.mockaroo.com/api/d7664fe0?count=10&key=94fac1c0';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(baseURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los autores');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/${req.params.id_autor}`);
        res.json(response.data);
        } catch (error) {
            res.status(500).send('Error al obtener el autor');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoAutor = new Autor(req.body.id_autor, req.body.nombre, req.body.nacionalidad);
        const response = await axios.post(baseURL, nuevoAutor);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el autor');
    }
};

export const update = async (req, res) => {
    try {
        const autorActualizado = new Autor(req.params.id_autor, req.body.nombre, req.body.nacionalidad);
        const response = await axios.put(`${baseURL}/${req.params.id_autor}`, autorActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el autor');
    }
};

export const deleteAutor = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/${req.params.id_autor}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el autor');
    }
};
