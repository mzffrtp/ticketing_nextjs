import TicketForm from "@/app/(components)/(TicketForm)/ticket-form";


const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3001/api/tickets/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Verileri alırken problem oldu');
    }

    return res.json();
};


export default async function TicketPage({ params }) {

    const editMode = params.id === "new" ? false : true;
    let updatedTicket = null;


    if (editMode) {
        const res = await getTicketById(params.id)

        updatedTicket = res.ticket
    }



    return (
        <div>
            <TicketForm updatedTicket={updatedTicket} />
        </div>
    )
}