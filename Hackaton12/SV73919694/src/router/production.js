import express from 'express';
import {
  createProduction,
  deleteProduction,
  getProductionById,
  getProductions,
  updateProduction,
} from '../controllers/production.controller.js';

const router = express.Router();

router.get('/', getProductions);
router.get('/:id', getProductionById);
router.post('/', createProduction);
router.put('/', updateProduction);
router.delete('/', deleteProduction);

export default router;
