import { sendResponse, sendError } from '../utils/response.js';
import { getDataAllUsers, getDataUserById, getDataUserByUid, createDataUser, updateDataUser, deleteDataUser } from '../services/userService.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await getDataAllUsers();
        return sendResponse(res, 200, users, "Users retrieved successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await getDataUserById(req.params.id);
        if (!user) {
            return sendError(res, 404, "User not found");
        }
        return sendResponse(res, 200, user, "User retrieved successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};

export const getUserByUid = async (req, res) => {
    try {
        const user = await getDataUserByUid(req.params.uid);
        if (!user) {
            return sendError(res, 404, "User not found");
        }
        return sendResponse(res, 200, user, "User retrieved successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};

export const createUser = async (req, res) => {
    try {
        const newUser = await createDataUser(req.body);
        return sendResponse(res, 201, newUser, "User created successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};

export const updateUser = async (req, res) => {
    try {
        const updated = await updateDataUser(req.params.id, req.body);
        if (!updated) {
            return sendError(res, 404, "User not found");
        }
        return sendResponse(res, 200, updated, "User updated successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};

export const deleteUser = async (req, res) => {
    try {
        const success = await deleteDataUser(req.params.id);
        if (!success) {
            return sendError(res, 404, "User not found");
        }
        return sendResponse(res, 200, null, "User deleted successfully");
    } catch (error) {
        return sendError(res, 500, "Internal server error");
    }
};
