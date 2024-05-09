import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servidor LED");
});

export default router;
