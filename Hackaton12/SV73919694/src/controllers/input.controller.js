import Input from '../models/Input.js';

export const getInputs = async (req, res) => {
  try {
    const inputs = await Input.find();
    return res.status(200).json(inputs);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createInput = async (req, res) => {
  try {
    const { nombre, cantidad, unidad, costoUnitario } = req.body;

    if (!nombre || !cantidad || !costoUnitario) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newInput = new Input({ nombre, cantidad, unidad, costoUnitario });
    await newInput.save();
    return res.status(201).json(newInput);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getInputById = async (req, res) => {
  try {
    const { id } = req.params;
    const input = await Input.findById(id);

    if (!input) {
      return res.status(404).json({ message: 'Input not found' });
    }
    return res.status(200).json(input);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateInput = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, cantidad, unidad, costoUnitario } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const input = await Input.findById(id);
    if (!input) {
      return res.status(404).json({ message: 'Input not found' });
    }

    if (nombre !== undefined) input.nombre = nombre;
    if (cantidad !== undefined) input.cantidad = cantidad;
    if (unidad !== undefined) input.unidad = unidad;
    if (costoUnitario !== undefined) input.costoUnitario = costoUnitario;
    await input.save();
    return res.status(200).json(input);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteInput = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    const input = await Input.findById(id);
    if (!input) {
      return res.status(404).json({ message: 'Input not found' });
    }

    await input.remove();
    return res.status(200).json({ message: 'Input deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
