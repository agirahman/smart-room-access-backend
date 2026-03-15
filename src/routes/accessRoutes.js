import { Router } from 'express';
import { handleAccessRequest } from '../controllers/accessController.js';
import { verifyApiKey } from '../middleware/authMiddleware.js';

const router = Router();

/**
 * @openapi
 * /api/v1/access:
 *   post:
 *     tags:
 *       - Access (IoT Device)
 *     summary: Validate room access
 *     description: Validates whether an RFID card holder is allowed to enter a specific room. Used by ESP32 / IoT devices. Requires API Key authentication via the `X-API-KEY` header.
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccessRequest'
 *     responses:
 *       200:
 *         description: Access validation result
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccessResponse'
 *             examples:
 *               allowed:
 *                 summary: Access granted
 *                 value:
 *                   status: allowed
 *                   message: Akses berhasil diberikan
 *               denied:
 *                 summary: Access denied
 *                 value:
 *                   status: denied
 *                   message: Akses ditolak di luar jadwal operasional
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Invalid or missing API Key
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
router.post('/', verifyApiKey, handleAccessRequest);

export default router;
