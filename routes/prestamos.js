import express from 'express';
import { getAll, getById, create, update, deletePrestamo } from '../controllers/prestamosController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id_prestamo', getById);
router.post('/', create);
router.put('/:id_prestamo', update);
router.delete('/:id_prestamo', deletePrestamo);

export default router;

