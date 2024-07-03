import axios from 'axios';
import Usuario from '../models/usuario.js';

const baseURL = 'http://localhost:3002';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/usuarios`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/usuarios/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el usuario');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(null, req.body.nombre, req.body.email);
        const response = await axios.post(`${baseURL}/usuarios`, nuevoUsuario);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el usuario');
    }
};

export const update = async (req, res) => {
    try {
        const usuarioActualizado = new Usuario(req.params.id, req.body.nombre, req.body.email);
        const response = await axios.put(`${baseURL}/usuarios/${req.params.id}`, usuarioActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/usuarios/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }
};

