import mongoose from 'mongoose';

const productionSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  rawMaterial: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RawMaterial',
    required: true,
  },
  input: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Input',
    required: true,
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true,
  },
  fechaCompletado: { type: Date, default: Date.now },
  completado: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Production', productionSchema);
