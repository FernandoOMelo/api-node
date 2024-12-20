import livro from "../models/Livro.js";
import { Autor as autor} from "../models/Autor.js";

class LivroController {

    static async listaLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async listaLivroPorID(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async cadastraLivro(req, res){
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {... autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({mensagem: "Livro cadastrado com sucesso!", livro: livroCriado});
        } catch (erro) {
            res.status(500).send({ mensagem: `Houve uma falha ao cadastrar o livro: ${erro.message}` });
        };
    };

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ mensagem: "Livro atualizado com sucesso!" });
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async deletarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ mensagem: "Livro deletado com sucesso!" });
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async listaLivrosPorEditora(req, res){
        const editora = req.query.editora;
        try {
            const livrosEncontrados = await livro.find({ editora: editora });
            res.status(200).json(livrosEncontrados);
        } catch (error) {
            res.status(500).send(error.message);
        };
    }
};

export default LivroController;
