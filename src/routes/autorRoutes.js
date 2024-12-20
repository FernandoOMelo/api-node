import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router();

router.get('/autores', autorController.listaAutores);
router.get('/autores/:id', autorController.listaAutorPorID);
router.post('/autores', autorController.cadastraAutor);
router.put('/autores/:id', autorController.atualizarAutor);
router.delete('/autores/:id', autorController.deletaAutor);

export default router;