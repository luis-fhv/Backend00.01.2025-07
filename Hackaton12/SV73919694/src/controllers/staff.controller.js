import Staff from '../models/Staff.js';

export const getStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    return res.status(200).json(staffs);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createStaff = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ message: 'Nombre is required' });
    }

    const newStaff = new Staff({ nombre });
    await newStaff.save();
    return res.status(201).json({ message: 'Staff created successfully', newStaff });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);

    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    return res.status(200).json(staff);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, horasDisponibles, horasUsadas } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }
    const staff = await Staff.findById(id);
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    if (nombre !== undefined) staff.nombre = nombre;
    if (horasDisponibles !== undefined) staff.horasDisponibles = horasDisponibles;
    if (horasUsadas !== undefined) staff.horasUsadas = horasUsadas;

    await staff.save();
    return res.status(200).json({ message: 'Staff updated successfully', staff });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    const staff = await Staff.findById(id);
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    await Staff.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
