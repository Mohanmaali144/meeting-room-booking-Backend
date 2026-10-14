import { pool } from "../config/db.js"
import type { Room } from "../types/room.types.js"

export async function createBooking(data: {
    roomId: number,
    title: string,
    organizerEmail: string,
    attendees: number,
    start: string,
    end: string,
}) {

    const result = await pool.query(`
    INSERT INTO bookings
    (room_id, title,orgnizer_email, attendees, start_time, end_time)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
    `, [data.roomId,
    data.title,
    data.organizerEmail,
    data.attendees,
    data.start,
    data.end,

    ])

    return result.rows[0];
}


export async function getBookings(date: string, roomId: number) {

    console.log(date, roomId)

    const sql = `
        SELECT 
        b.id,
        b.room_id AS "roomId",
        b.title,
        b.orgnizer_email AS "orgnizerEmail",
        b.attendees,
        b.start_time AS "start",
        b.end_time AS "end",
        b.status,
        b.created_at AS "createdAt",
        r.name AS "roomName",
        r.capecity
        FROM bookings b
        JOIN rooms r ON r.id = b.room_id

        WHERE b.start_time>=$1::date::timestamp AT TIME ZONE 'UTC'
        AND b.status='confirmed'
        AND ($2::integer IS NULL OR b.room_id =$2)
        ORDER BY b.start_time ASC`

    // console.log("SQL QUERY : ", sql)
    const result = await pool.query(sql,
        [date, roomId ?? null]

    )

    return result.rows;
}


export async function findRoomCapacity(
    roomId :number
):Promise<number | null> {

    const result  =  await pool.query(
        `SELECT capecity FROM rooms where id = $1`,
        [roomId]
    )
    return result.rows[0]?.capecity ?? null
}