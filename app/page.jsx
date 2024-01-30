import { SwalToast } from "@/app/_utis/swal-toast";
import TicketCard from "./(components)/(ticket-card)/ticket-card";


const getTickets = async () => {
  try {
    const resGetTickets = await fetch("http://localhost:3001/api/tickets", { cache: "no-store" })

    return resGetTickets.json()


  } catch (e) {
    SwalToast.fire({
      icon: "error",
      title: e
    })
  }
};


export default async function Homepage() {
  const { tickets } = await getTickets()

  const homepageCategories = [...new Set(tickets.map(({ category }) => category))]

  return (
    <div>
      {tickets && homepageCategories?.map((category, index) => (
        <div className="m-3" key={index}>
          <h2> {category}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {
              tickets
                .filter((ticket) => ticket.category === category)
                .map((ticket) => (
                  <div key={ticket.title}>
                    <TicketCard
                      ticket={ticket} />
                  </div>
                ))
            }
          </div>
        </div >
      ))
      }
    </div >
  )
}