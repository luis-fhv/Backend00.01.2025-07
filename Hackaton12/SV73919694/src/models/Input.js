import mongoose from 'mongoose';

const inputSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidad: { type: Number, required: true },
  unidad: { type: String, default: 'kg' },
  costoUnitario: { type: Number, required: true },
});

export default mongoose.model('Input', inputSchema);
