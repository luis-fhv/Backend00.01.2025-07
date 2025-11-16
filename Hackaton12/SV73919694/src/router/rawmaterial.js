import express from 'express';
import {
  createRawMaterial,
  deleteRawMaterial,
  getRawMaterialById,
  getRawMaterials,
  updateRawMaterial,
} from '../controllers/rawmaterial.controller.js';

const router = express.Router();

router.get('/', getRawMaterials);
router.post('/', createRawMaterial);
router.get('/:id', getRawMaterialById);
router.put('/', updateRawMaterial);
router.delete('/', deleteRawMaterial);

export default router;
