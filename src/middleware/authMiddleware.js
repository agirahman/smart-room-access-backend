import { API_KEY } from "../../config/env.js";
import { sendError } from "../utils/response.js";

/**
 * Middleware to verify the X-API-KEY header.
 * Express automatically lowercases header names in req.headers,
 * but using req.header() is more robust as it's case-insensitive.
 */
export const verifyApiKey = (req, res, next) => {
    const userApiKey = req.header('X-API-KEY');

    if (!userApiKey || userApiKey !== API_KEY) {
        return sendError(res, 401, "Unauthorized: Invalid or missing API Key");
    }

    next();
};