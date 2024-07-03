import axios from 'axios';
import Prestamo from '../models/prestamo.js';

const baseURL = 'http://localhost:3002';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/prestamos`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los préstamos');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/prestamos/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el préstamo');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamo(null, req.body.libro_Id, req.body.usuario_Id, req.body.fecha_prestamo, req.body.fecha_devolucion);
        const response = await axios.post(`${baseURL}/prestamos`, nuevoPrestamo);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el préstamo');
    }
};

export const update = async (req, res) => {
    try {
        const prestamoActualizado = new Prestamo(req.params.id, req.body.libro_id, req.body.usuario_id, req.body.fecha_prestamo, req.body.fecha_devolucion);
        const response = await axios.put(`${baseURL}/prestamos/${req.params.id}`, prestamoActualizado);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el préstamo');
    }
};

export const deletePrestamo = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/prestamos/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el préstamo');
    }
};
