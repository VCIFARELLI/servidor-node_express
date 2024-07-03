import express from 'express';
import { getAll, getById, create, update, deletePrestamo } from '../controllers/prestamosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deletePrestamo);

export default router;

