import express from 'express';
import conectaBanco from './config/dbConnect.js';
import router from './routes/index.js';

const conexao = await conectaBanco();

conexao.on('connectionError', (erro) => {
    console.error('Erro de conexão: ', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco de dados bem sucedida!');
});

const app = express();
router(app);

export default app;