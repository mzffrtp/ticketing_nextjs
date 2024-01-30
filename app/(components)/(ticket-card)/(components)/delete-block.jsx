"use client"
import { useRouter } from "next/navigation";
import { RiDeleteBin3Line } from "react-icons/ri";
import Swal from "sweetalert2";


export default function DeleteBlock({ ticketId }) {
    console.log("🚀 ~ DeleteBlock ~ id:", ticketId)
    const router = useRouter()
    const handleDelete = async () => {
        const deleteRes = await fetch(`http://localhost:3001/api/tickets/${ticketId}`,
            { method: "DELETE" });
        console.log("🚀 ~ handleDelete ~ deleteRes:", deleteRes)


        if (deleteRes.ok) {
            Swal.fire({
                icon: "success",
                title: "Ticket deleted successfuly"
            })
            router.refresh()

        }
    }


    return (
        <RiDeleteBin3Line
            className="cursor-pointer text-2xl  hover:bg-red-500"
            onClick={handleDelete} />
    )
}