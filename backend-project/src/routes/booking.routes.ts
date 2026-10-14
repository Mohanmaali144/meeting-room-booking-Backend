import { Router } from "express";
import { getRooms } from "../controllers/room.controller";
import { createBookingController, getBookingsController } from "../controllers/booking.controller";

const router =  Router();
 router.post("/",createBookingController)
 router.get("/",getBookingsController)

 export default router

