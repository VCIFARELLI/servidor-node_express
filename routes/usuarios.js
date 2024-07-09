import express from 'express';
import { getAll, getById, create, update, deleteUsuario } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_usuario', getById);
router.post('/', create);
router.put('/:id_usuario', update);
router.delete('/:id_usuario', deleteUsuario);

export default router;
