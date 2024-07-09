import express from 'express';
import { getAll, getById, create, update, deleteAutor } from '../controllers/autoresController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_autor', getById);
router.post('/', create);
router.put('/:id_autor', update);
router.delete('/:id_autor', deleteAutor);

export default router;

