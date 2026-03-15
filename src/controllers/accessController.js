import { validateAccess } from '../services/accessService.js';
import { sendResponse, sendError } from '../utils/response.js';

export const handleAccessRequest = async (req, res) => {
    try {
        const { uid, room } = req.body;

        if (!uid || !room) {
            return sendError(res, 400, "Missing required fields: uid or room");
        }

        const result = await validateAccess(uid, room);

        // Required API format: { "status": "allowed/denied", "message": "reason..." }
        return res.status(200).json({ status: result.status, message: result.message });
    } catch (error) {
        console.error("Access Request Error:", error);
        return sendError(res, 500, "Internal server error");
    }
};
