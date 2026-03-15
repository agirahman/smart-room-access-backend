import { Router } from 'express';
import { getAllUsers, getUserById, getUserByUid, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/:uid', getUserByUid);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
