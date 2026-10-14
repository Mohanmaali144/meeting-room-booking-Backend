
import express, {type Request, type Response} from "express"
import { pool } from "./config/db.js"
import roomsRoutes from "./routes/room.routes.js"
import cors from "cors"
import bookingRoute from "./routes/booking.routes.js"
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req:Request,res:Response)=>{

    res.status(200).json({
        success :true,
        message : "Metting Room Booking Backend Running"
    })
})

app.use("/api/rooms", roomsRoutes)
app.use("/api/bookings",bookingRoute)
export default app
// import cors from 'cors';

