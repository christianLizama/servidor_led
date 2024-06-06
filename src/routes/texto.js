import express from "express";
import { agregarTexto, obtenerTextos, obtenerTextoPorId, actualizarTexto, eliminarTexto,enviarTexto } from "../controllers/texto.js";

const router = express.Router();

router.post("/add", agregarTexto);
router.get("/getAll", obtenerTextos);
router.get("/get/:id", obtenerTextoPorId);
router.put("/update/:id", actualizarTexto);
router.delete("/delete/:id", eliminarTexto);
router.post("/send", enviarTexto);

export default router;