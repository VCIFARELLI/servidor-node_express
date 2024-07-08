import axios from 'axios';
import Usuario from '../models/usuario.js';

const baseURL =  'https://api.mockaroo.com/api/207f1de0?key=94fac1c0';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(baseURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/${req.params.id_usuario}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el usuario');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.params.id_usuario, req.body.nombre, req.body.email);
        const response = await axios.post(baseURL, nuevoUsuario);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el usuario');
    }
};

export const update = async (req, res) => {
    try {
        const usuarioActualizado = new Usuario(req.params.id_usuario, req.body.nombre, req.body.email);
        const response = await axios.put(`${baseURL}/${req.params.id_usuario}`, usuarioActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/${req.params.id_usuario}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }
};

