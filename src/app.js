import express from 'express';
import conectaBanco from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await conectaBanco();

conexao.on('connectionError', (erro) => {
    console.error('Erro de conexão: ', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco de dados bem sucedida!');
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send('Curso de Node.js');
});

app.get("/livros", async (req, res) => {
    try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    } catch (erro) {
        res.status(500).send(erro.message);
    }    
});

app.get("/livros/:id", (req, res) => {

});

app.put("/livros/:id", (req, res) => {

});

app.post("/livros", (req, res) => {

});

app.delete("/livros/:id", (req, res) => {

});

export default app;