import express from 'express';
import { getAll, getById, create, update, deleteUsuario } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteUsuario);

export default router;
