import express from 'express';
import { getAll, getById, create, update, deleteLibro } from '../controllers/librosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteLibro);

export default router;

