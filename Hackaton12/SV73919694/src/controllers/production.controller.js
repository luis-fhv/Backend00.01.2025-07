import Production from '../models/Production.js';

export const getProductions = async (req, res) => {
  try {
    const productions = await Production.find();
    return res.status(200).json(productions);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createProduction = async (req, res) => {
  try {
    const { producto, rawMaterial, input, staff, fechaCompletado, completado } = req.body;

    if (!producto || !rawMaterial || !input || !staff) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduction = new Production({
      producto,
      rawMaterial,
      input,
      staff,
      fechaCompletado,
      completado,
    });

    const nueva = await newProduction.save();

    const result = await Production.findById(nueva._id)
      .populate('rawMaterial')
      .populate('input')
      .populate('staff');

    return res.status(201).json(result);

  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getProductionById = async (req, res) => {
  try {
    const { id } = req.params;

    const production = await Production.findById(id)
      .populate('rawMaterial')
      .populate('input')
      .populate('staff');

    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }
    return res.status(200).json(production);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateProduction = async (req, res) => {
  try {
    const { id } = req.query;
    const { producto, materiaPrima, insumo, personal, fechaCompletado, completado } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const production = await Production.findById(id);
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }

    if (producto !== undefined) production.producto = producto;
    if (materiaPrima !== undefined) production.materiaPrima = materiaPrima;
    if (insumo !== undefined) production.insumo = insumo;
    if (personal !== undefined) production.personal = personal;
    if (fechaCompletado !== undefined) production.fechaCompletado = fechaCompletado;
    if (completado !== undefined) production.completado = completado;
    await production.save();
    return res.status(200).json(production);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteProduction = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const production = await Production.findById(id);
    if (!production) {
      return res.status(404).json({ message: 'Production not found' });
    }

    await Production.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Production deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
