import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  horasDisponibles: { type: Number, default: 40 },
  horasUsadas: { type: Number, default: 0 },
});

export default mongoose.model("Staff", staffSchema);
