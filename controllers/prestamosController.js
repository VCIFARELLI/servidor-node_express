import axios from 'axios';
import Prestamo from '../models/prestamo.js';

const baseURL = 'https://api.mockaroo.com/api/8cf19770?count=5&key=94fac1c0';

export const getAll = async (req, res) => {
    try {
        const response = await axios.get(baseURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener los préstamos');
    }
};

export const getById = async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/${req.params.id_prestamo}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el préstamo');
    }
};

export const create = async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamo(req.body.id_prestamo, req.body.id_libro, req.body.id_usuario, req.body.fecha_prestamo, req.body.fecha_devolucion);
        const response = await axios.post(baseURL, nuevoPrestamo);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).send('Error al crear el préstamo');
    }
};

export const update = async (req, res) => {
    try {
        const prestamoActualizado = new Prestamo(req.params.id_prestamo, req.body.id_libro, req.body.id_usuario, req.body.fecha_prestamo, req.body.fecha_devolucion);
        const response = await axios.put(`${baseURL}/${req.params.id_prestamo}`, prestamoActualizado);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error al actualizar el préstamo');
    }
};

export const deletePrestamo = async (req, res) => {
    try {
        const response = await axios.delete(`${baseURL}/${req.params.id_prestamo}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al eliminar el préstamo');
    }
};
