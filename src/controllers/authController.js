import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env.js";
import { sendResponse, sendError } from "../utils/response.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Simulasi Akun Admin
        if (username === "admin" && password === "123") {
            const payload = { username, role: "admin" };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

            // Urutan: res, statusCode, data, message
            return sendResponse(res, 200, { token }, "Login successfully");
        }

        return sendError(res, 401, "Invalid username or password");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};