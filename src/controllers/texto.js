import Texto from "../models/texto.js";
import { sendMessageToESP32 } from "../services/messageSender.js";
//agregar texto
export const agregarTexto = async (req, res) => {
  try {
    const texto = new Texto(req.body);
    await texto.save();
    res.status(201).json(texto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

//obtener textos
export const obtenerTextos = async (req, res) => {
  try {
    const texto = await Texto.find();
    res.status(200).json(texto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

//obtener texto por id
export const obtenerTextoPorId = async (req, res) => {
  try {
    const texto = await Texto.findById(req.params.id);
    res.status(200).json(texto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

//actualizar un texto
export const actualizarTexto = async (req, res) => {
  try {
    const texto = await Texto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(texto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

//eliminar un texto
export const eliminarTexto = async (req, res) => {
  try {
    await Texto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Texto eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const enviarTexto = async (req, res) => {
  try {
    // Extrae el mensaje de la solicitud HTTP
    const {message,color} = req.body;
    const jsonMessage = {
      message: message,
      color: color,
    };
    
    // Envía el mensaje al ESP32
    sendMessageToESP32(jsonMessage);

    // Envía una respuesta HTTP de éxito
    res
      .status(200)
      .json({ success: true, message: "Mensaje enviado al ESP32." });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
