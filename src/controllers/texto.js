import Texto from '../models/texto.js';

//agregar texto
export const agregarTexto = async (req, res) => {
    try {
        const texto = new Texto(req.body);
        await texto.save();
        res.status(201).json(texto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener textos
export const obtenerTextos = async (req, res) => {
    try {
        const texto = await Texto.find();
        res.status(200).json(texto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//obtener texto por id
export const obtenerTextoPorId = async (req, res) => {
    try {
        const texto = await Texto.findById(req.params.id);
        res.status(200).json(texto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un texto
export const actualizarTexto = async (req, res) => {
    try {
        const texto = await Texto.findByIdAndUpdate(req
            .params.id, req.body, { new: true });
        res.status(200).json(texto);
    }
    catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un texto
export const eliminarTexto = async (req, res) => {
    try {
        await Texto.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "Texto eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}