import { Autor } from "../models/Autor.js";

class AutorController {

    static async listaAutores(req, res){
        try {
            const listaAutores = await Autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async listaAutorPorID(req, res){
        try {
            const id = req.params.id;
            const AutorEncontrado = await Autor.findById(id);
            res.status(200).json(AutorEncontrado);
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async cadastraAutor(req, res){
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({mensagem: "Autor cadastrado com sucesso!", Autor: novoAutor});
        } catch (erro) {
            res.status(500).send({ mensagem: `Houve uma falha ao cadastrar o Autor: ${erro.message}` });
        };
    };

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            await Autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ mensagem: "Autor atualizado com sucesso!" });
        } catch (error) {
            res.status(500).send(error.message);
        };
    };

    static async deletaAutor(req, res){
        try {
            const id = req.params.id;
            await Autor.findByIdAndDelete(id);
            res.status(200).json({ mensagem: "Autor deletado com sucesso!" });
        } catch (error) {
            res.status(500).send(error.message);
        };
    };
};

export default AutorController;
