import express from 'express';
import {
  createStaff,
  deleteStaff,
  getStaffById,
  getStaffs,
  updateStaff,
} from '../controllers/staff.controller.js';

const router = express.Router();

router.get('/', getStaffs);
router.post('/', createStaff);
router.get('/:id', getStaffById);
router.put('/', updateStaff);
router.delete('/', deleteStaff);

export default router;
