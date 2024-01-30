import Ticket from "../../(models)/Ticket.js"
import { NextResponse } from "next/server"

export async function POST(req) {

    try {
        const body = await req.json()
        const newTicket = await Ticket.create(body)

        return NextResponse.json(
            { status: 201 },
            { message: "ticket created" },
        )
    } catch (e) {
        return NextResponse.json(
            { status: 500 },
            { message: "error occured" })
    }
}

export async function GET(req) {

    try {
        const tickets = await Ticket.find()

        return NextResponse.json({
            status: 201,
            message: "Ticket fetching success",
            tickets: tickets
        })
    } catch (e) {
        return NextResponse.json({
            status: 500,
            message: "Error when fetching data",
            e
        })
    }
}