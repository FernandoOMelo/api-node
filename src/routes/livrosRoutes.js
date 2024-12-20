import express from 'express';
import LivroController from '../controllers/livroController.js';

const router = express.Router();

router.get('/livros', LivroController.listaLivros);
router.get('/livros/busca', LivroController.listaLivrosPorEditora);
router.get('/livros/:id', LivroController.listaLivroPorID);
router.post('/livros', LivroController.cadastraLivro);
router.put('/livros/:id', LivroController.atualizarLivro);
router.delete('/livros/:id', LivroController.deletarLivro);

export default router;