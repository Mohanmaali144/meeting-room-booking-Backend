import { pool } from "../config/db.js"
import type { Room } from "../types/room.types.js"

export async function findAllRooms(): Promise<Room[]> {

    const result = await pool.query<Room>(`
            SELECT 
            id,
            name
            capecity,
            floor,
            amenities
            FROM rooms
            ORDER BY capecity ASC, id ASC
        `)

    return result.rows
}