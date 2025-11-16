import mongoose from "mongoose";

const rawMaterialSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidad: { type: Number, required: true },
  unidad: { type: String, default: "tablon" },
  costoUnitario: { type: Number, required: true },
});

export default mongoose.model("RawMaterial", rawMaterialSchema);
