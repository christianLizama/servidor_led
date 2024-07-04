import mongoose from "mongoose";
const { Schema } = mongoose;

const textoSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario"},
  texto: { type: String, required: true },
  color: { type: String },
  velocidad: {
    type: Number,
    default: 30, // Valor por defecto
    min: 1,     // Valor mínimo permitido
    max: 30     // Valor máximo permitido
  }
});

const Texto = mongoose.model("Texto", textoSchema);

export default Texto;
