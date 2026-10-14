import { createBooking, getBookings, findRoomCapacity } from "../repositories/booking.repository";


export async function bookRoom(data: {
    roomId: number,
    title: string,
    organizerEmail: string,
    attendees: number,
    start: string,
    end: string,
}) {
    const capecity = await findRoomCapacity(data.roomId);
    if (capecity === null) {
        throw new Error("ROOM_NOT_FOUND")
    }
    if (data.attendees > capecity) {
        throw new Error("INVALID_CAPACITY")
    }
    return createBooking(data)

}


export async function listBookings(date: string, roomId: number) {
    return getBookings(date, roomId)
}





