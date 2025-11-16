import RawMaterial from '../models/RawMaterial.js';

export const getRawMaterials = async (req, res) => {
  try {
    const rawMaterials = await RawMaterial.find();
    return res.status(200).json(rawMaterials);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createRawMaterial = async (req, res) => {
  try {
    const { nombre, cantidad, unidad, costoUnitario } = req.body;

    if (!nombre || cantidad === undefined || costoUnitario === undefined) {
      return res.status(400).json({ message: 'Nombre, cantidad, and costoUnitario are required' });
    }

    const newRawMaterial = new RawMaterial({ nombre, cantidad, unidad, costoUnitario });
    await newRawMaterial.save();
    return res.status(201).json(newRawMaterial);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getRawMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    const rawMaterial = await RawMaterial.findById(id);

    if (!rawMaterial) {
      return res.status(404).json({ message: 'Raw material not found' });
    }
    return res.status(200).json(rawMaterial);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateRawMaterial = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, cantidad, unidad, costoUnitario } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const rawMaterial = await RawMaterial.findById(id);
    if (!rawMaterial) {
      return res.status(404).json({ message: 'Raw material not found' });
    }

    if (nombre !== undefined) rawMaterial.nombre = nombre;
    if (cantidad !== undefined) rawMaterial.cantidad = cantidad;
    if (unidad !== undefined) rawMaterial.unidad = unidad;
    if (costoUnitario !== undefined) rawMaterial.costoUnitario = costoUnitario;
    await rawMaterial.save();
    return res.status(200).json(rawMaterial);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteRawMaterial = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const rawMaterial = await RawMaterial.findById(id);
    if (!rawMaterial) {
      return res.status(404).json({ message: 'Raw material not found' });
    }
    await rawMaterial.deleteOne();
    return res.status(200).json({ message: 'Raw material deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
