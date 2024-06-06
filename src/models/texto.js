import mongoosee from "mongoose";
import { Schema } from "mongoose";

const textoSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
  texto: { type: String, required: true },
  color: { type: String },
});

const Texto = mongoosee.model("Texto", textoSchema);

export default Texto;
