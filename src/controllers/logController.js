import { getAllLogs } from '../services/logService.js';
import { sendResponse, sendError } from '../utils/response.js';

export const getLogs = async (req, res) => {
    try {
        const logs = await getAllLogs();
        return sendResponse(res, 200, logs, "Logs retrieved successfully");
    } catch (error) {
        console.error("Get Logs Error", error);
        return sendError(res, 500, "Internal server error");
    }
};
