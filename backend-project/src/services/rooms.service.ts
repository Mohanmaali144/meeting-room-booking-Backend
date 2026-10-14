import { findAllRooms } from "../repositories/room.repository";
import type { Room } from "../types/room.types.js"



export async function getAllRooms(): Promise<Room[]> {

    return findAllRooms();
}