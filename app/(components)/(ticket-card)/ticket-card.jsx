import Link from "next/link";
import DeleteBlock from "./(components)/delete-block";
import PriorityBlock from "./(components)/prioroty-block";
import ProgressBlock from "./(components)/progress-block 2";
import StatusBlock from "./(components)/status-block 3";

export default function TicketCard({ ticket }) {
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 my-1">
            <div className="flex mb-3 justify-between">
                <PriorityBlock priority={ticket.priority} />
                <DeleteBlock ticketId={ticket._id} />
            </div>
            {console.log("🚀 ~ TicketCard ~ ticket._id:", ticket._id)}
            <Link href={`/ticket-page/${ticket._id}`} style={{ display: "contents" }}>
                <h4>{ticket.title}</h4>
                <hr className="h-px border-0 bg-page mb-2"></hr>
                <p className="whitespace-pre-wrap">{ticket.description}</p>
                <div className="flex mt-2">
                    <div className="flex flex-col">
                        <ProgressBlock progress={ticket.progress} />
                    </div>
                    <div className="flex items-end ml-auto">
                        <StatusBlock status={ticket.status} />
                    </div>
                </div>
            </Link>
        </div>
    )
}