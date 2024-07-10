import axios from 'axios';
import Prestamo from '../models/prestamo.js';

const baseURL = 'https://api.mockaroo.com/api/8cf19770?count=5&key=94fac1c0';

let prestamos = []; // Almacenamiento temporal de préstamos

// Obtener todos los préstamos
export const getAll = async (req, res) => {
    try {
        if (prestamos.length === 0) {
            const response = await axios.get(baseURL);
            prestamos = response.data;
        }
        res.json(prestamos);
    } catch (error) {
        res.status(500).send('Error al obtener los préstamos');
    }
};

// Obtener un préstamo por ID
export const getById = (req, res) => {
    const prestamo = prestamos.find(prestamo => prestamo.id_prestamo === parseInt(req.params.id_prestamo));
    if (prestamo) {
        res.json(prestamo);
    } else {
        res.status(404).send('Préstamo no encontrado');
    }
};

// Crear un nuevo préstamo
export const create = (req, res) => {
    const nuevoPrestamo = new Prestamo(
        prestamos.length > 0 ? prestamos[prestamos.length - 1].id_prestamo + 1 : 1,
        req.body.id_libro,
        req.body.id_usuario,
        req.body.fecha_prestamo,
        req.body.fecha_devolucion
    );
    prestamos.push(nuevoPrestamo);
    res.status(201).json(nuevoPrestamo);
};

// Actualizar un préstamo existente
export const update = (req, res) => {
    const prestamoIndex = prestamos.findIndex(prestamo => prestamo.id_prestamo === parseInt(req.params.id_prestamo));
    if (prestamoIndex !== -1) {
        prestamos[prestamoIndex] = {
            id_prestamo: parseInt(req.params.id_prestamo),
            id_libro: req.body.id_libro,
            id_usuario: req.body.id_usuario,
            fecha_prestamo: req.body.fecha_prestamo,
            fecha_devolucion: req.body.fecha_devolucion
        };
        res.json(prestamos[prestamoIndex]);
    } else {
        res.status(404).send('Préstamo no encontrado');
    }
};

// Eliminar un préstamo
export const deletePrestamo = (req, res) => {
    const prestamoIndex = prestamos.findIndex(prestamo => prestamo.id_prestamo === parseInt(req.params.id_prestamo));
    if (prestamoIndex !== -1) {
        const deletedPrestamo = prestamos.splice(prestamoIndex, 1);
        res.json(deletedPrestamo);
    } else {
        res.status(404).send('Préstamo no encontrado');
    }
};
