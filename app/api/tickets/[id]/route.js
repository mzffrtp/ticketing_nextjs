import Ticket from "../../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const res = await Ticket.findByIdAndDelete(params.id)

    try {
        return NextResponse.json(
            { status: 201 },
            { message: "Ticket deleted succesfully!" }
        )
    } catch (e) {
        return NextResponse.json(
            { status: 500 },
            { message: "Error occured during deleting ticket}", e })
    }
}

{
    /*
    
    export async function GET(req, { params }) {
    console.log("🚀 ~ GET ~ params:", params)


    try {
        const ticket = await Ticket.findById(params.id)
        console.log("🚀 ~ GET ~ ticket:", ticket)

        return NextResponse.json(
            { status: 200 },
            { message: "Ticket fetched succesfully!" },
            { data: ticket }
        )
    } catch (e) {
        return NextResponse.json(
            { status: 500 },
            { message: "Error occured fetching ticket}", e })
    }
}
*/
}