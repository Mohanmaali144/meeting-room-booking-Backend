
import type {Room} from "../types/room.types"

import type { Request, Response, NextFunction } from "express"

import { getAllRooms } from "../services/rooms.service"
import { json } from "node:stream/consumers"

export async function getRooms(_req:Request, res:Response, next:NextFunction) {
    try {
      
      const rooms = await getAllRooms();
        res.status(200).json({
            success :true,
            data :rooms,
        })
    } catch (error) {
        next(error)
    }
}