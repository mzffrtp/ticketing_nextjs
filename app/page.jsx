import { SwalToast } from "@/app/_utis/swal-toast";


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
  console.log("🚀 ~ Homepage ~ tickets:", tickets.length)

  return (
    <div>
      Homepage
    </div>
  )
}