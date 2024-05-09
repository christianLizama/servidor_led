import express from "express";
import { agregarTexto, obtenerTextos, obtenerTextoPorId, actualizarTexto, eliminarTexto } from "../controllers/texto.js";

const router = express.Router();

router.post("/add", agregarTexto);
router.get("/getAll", obtenerTextos);
router.get("/get/:id", obtenerTextoPorId);
router.put("/update/:id", actualizarTexto);
router.delete("/delete/:id", eliminarTexto);

export default router;