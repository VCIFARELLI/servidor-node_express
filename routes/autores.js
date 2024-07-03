import express from 'express';
import { getAll, getById, create, update, deleteAutor } from '../controllers/autoresController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteAutor);

export default router;

