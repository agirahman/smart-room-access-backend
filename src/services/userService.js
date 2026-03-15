import { db as drizzleDb } from '../database/db.js';
import { eq } from 'drizzle-orm';
import { users } from '../database/schema.js';

export const getDataAllUsers = async () => {
    try {
        return await drizzleDb.select().from(users).orderBy(users.id);
    } catch (error) {
        console.error("Failed to get all users", error);
        throw error;
    }
}

export const getDataUserById = async (id) => {
    try {
        const result = await drizzleDb.select().from(users).where(eq(users.id, parseInt(id)));
        return result[0] || null;
    } catch (error) {
        console.error("Failed to get user by id", error);
        throw error;
    }
}

export const getDataUserByUid = async (uid) => {
    try {
        // Ingat, nama kolom di schema adalah rfid_uid, bukan uid
        const result = await drizzleDb.select().from(users).where(eq(users.rfid_uid, uid));
        return result[0] || null;
    } catch (error) {
        console.error("Failed to get user by uid", error);
        throw error;
    }
}

export const createDataUser = async (userData) => {
    try {
        const result = await drizzleDb.insert(users).values({
            name: userData.name,
            rfid_uid: userData.rfid_uid,
            role: userData.role,
            schedule_start: userData.schedule_start,
            schedule_end: userData.schedule_end,
            valid_until: userData.valid_until || null
        }).returning();
        return result[0];
    } catch (error) {
        console.error("Failed to create user", error);
        throw error;
    }
}

export const updateDataUser = async (id, updateData) => {
    try {
        const result = await drizzleDb.update(users)
            .set({
                ...updateData,
                updated_at: new Date()
            })
            .where(eq(users.id, parseInt(id)))
            .returning();
        return result[0] || null;
    } catch (error) {
        console.error("Failed to update user", error);
        throw error;
    }
}

export const deleteDataUser = async (id) => {
    try {
        const result = await drizzleDb.delete(users)
            .where(eq(users.id, parseInt(id)))
            .returning();
        return result.length > 0;
    } catch (error) {   
        console.error("Failed to delete user", error);
        throw error;
    }
}