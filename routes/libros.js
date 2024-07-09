import express from 'express';
import { getAll, getById, create, update, deleteLibro } from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_libro', getById);
router.post('/', create);
router.put('/:id_libro', update);
router.delete('/:id_libro', deleteLibro);

export default router;

