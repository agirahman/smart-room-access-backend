import { Router } from 'express';
import { handleAccessRequest } from '../controllers/accessController.js';
import { verifyApiKey } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', verifyApiKey, handleAccessRequest);

export default router;
