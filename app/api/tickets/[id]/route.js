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
};

export async function GET(req, { params }) {
    try {
        const ticket = await Ticket.findById(params.id);

        return NextResponse.json({ ticket }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: 'Error occured during ticket fetching', err },
            { status: 500 }
        );
    }
}
