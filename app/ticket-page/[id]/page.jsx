import TicketForm from "@/app/(components)/(TicketForm)/ticket-form";

{
    /*
    const getTicketById = async (id) => {
    const getTicketRes = await fetch(`http://localhost:3001/ticket-page/${id}`, { cache: "no-store" })

    if (!getTicketRes.ok) {
        console.log("<<<<< error occured");
    }
    return getTicketRes.json()
}
    */
}
export default async function TicketPage({ params }) {

    // const res = await getTicketById(params.id)
    // console.log("🚀 ~ TicketPage ~ res:", res)

    return (
        <div>
            <TicketForm />
        </div>
    )
}