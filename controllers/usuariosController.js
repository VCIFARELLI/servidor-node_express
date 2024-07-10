import axios from 'axios';
import Usuario from '../models/usuario.js';

const baseURL = 'https://api.mockaroo.com/api/207f1de0?key=94fac1c0';

let usuarios = []; // Almacenamiento temporal de usuarios

// Obtener todos los usuarios
export const getAll = async (req, res) => {
    try {
        if (usuarios.length === 0) {
            const response = await axios.get(baseURL);
            usuarios = response.data;
        }
        res.json(usuarios);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios');
    }
};

// Obtener un usuario por ID
export const getById = (req, res) => {
    const usuario = usuarios.find(usuario => usuario.id_usuario === parseInt(req.params.id_usuario));
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};

// Crear un nuevo usuario
export const create = (req, res) => {
    const nuevoUsuario = new Usuario(
        usuarios.length > 0 ? usuarios[usuarios.length - 1].id_usuario + 1 : 1,
        req.body.nombre,
        req.body.email
    );
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
};

// Actualizar un usuario existente
export const update = (req, res) => {
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id_usuario === parseInt(req.params.id_usuario));
    if (usuarioIndex !== -1) {
        usuarios[usuarioIndex] = {
            id_usuario: parseInt(req.params.id_usuario),
            nombre: req.body.nombre,
            email: req.body.email
        };
        res.json(usuarios[usuarioIndex]);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};

// Eliminar un usuario
export const deleteUsuario = (req, res) => {
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id_usuario === parseInt(req.params.id_usuario));
    if (usuarioIndex !== -1) {
        const deletedUsuario = usuarios.splice(usuarioIndex, 1);
        res.json(deletedUsuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
};
