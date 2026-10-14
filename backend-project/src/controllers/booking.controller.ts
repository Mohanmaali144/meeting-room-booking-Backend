
import type { Request, Response, NextFunction } from "express"

import { bookRoom, listBookings } from "../services/booking.service."

export async function createBookingController(
req:Request,
res:Response,
next:NextFunction
){
try {
     console.log("req.body",req.body)
    const booking  = await bookRoom(req.body);

    // console.log("req.body",req.body)
    res.status(200).json({
        success:true,
        data:booking,
    })
} catch (error) {
    console.log("==ERROR", error)
    res.status(500).json({
        success:false,
        message : "Internal server Error"
    })
}

}


export async function getBookingsController(req:Request, res:Response) {
    try {
    
        const date = String(req.query?.date) || "";

       const  roomId = Number(req.query.roomId)

        const bookings =  await listBookings(date,roomId)

        res.status(200).json({
            success :true,
            data : bookings,
        })
    } catch (error) {

        console.log("=====error======",error)

        throw error
    //    return res.status(500).json({
    //     success : false,
    //     messgae : "internal server error"

    //    }) 
    }
}

