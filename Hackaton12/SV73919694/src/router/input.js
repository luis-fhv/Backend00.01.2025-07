import express from 'express';
import {
  createInput,
  deleteInput,
  getInputById,
  getInputs,
  updateInput,
} from '../controllers/input.controller.js';

const router = express.Router();

router.get('/', getInputs);
router.post('/', createInput);
router.get('/:id', getInputById);
router.put('/', updateInput);
router.delete('/', deleteInput);

export default router;
