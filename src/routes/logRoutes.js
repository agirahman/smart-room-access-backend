import { Router } from 'express';
import { getLogs } from '../controllers/logController.js';

const router = Router();

/**
 * @openapi
 * /api/v1/logs:
 *   get:
 *     tags:
 *       - Access Logs
 *     summary: Get all access logs
 *     description: Retrieves the full list of room access logs. Requires JWT authentication (admin dashboard).
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Logs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Logs retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AccessLog'
 *       401:
 *         description: No token provided or invalid format
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Invalid or expired token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', getLogs);

export default router;
