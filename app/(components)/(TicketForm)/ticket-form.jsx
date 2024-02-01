"use client"
import { useRouter } from "next/navigation";
import "./ticket-form.css"
import { SwalToast } from "@/app/_utis/swal-toast";
import { useEffect, useState } from "react";

export default function TicketForm({ updatedTicket }) {
    const router = useRouter()

    const initialData = {
        title: "",
        description: "",
        category: "Select Category",
        priority: 1,
        progress: 0,
        status: "Select Status"
    }

    const [ticketData, setTicketData] = useState(updatedTicket ? updatedTicket : initialData)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTicketData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    async function onFormSubmit(e) {
        e.preventDefault();

        const formElement = e.target;
        const formData = new FormData(formElement);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log("🚀 ~ onFormSubmit ~ formDataObject:", formDataObject)

        if (updatedTicket) {
            const res = await fetch(`/api/tickets/${updatedTicket._id}`,)

            console.log("🚀 ~ onFormSubmit ~ res:", res)
            {/*
        const res = await fetch(`/api/tickets/${updatedTicket._id}`, {
                method: 'POST',
                body: JSON.stringify(formDataObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('An error occurred while updating the ticket: ' + res.statusText);
            } */}
        } else {
            const res = await fetch('/api/tickets', {
                method: 'POST',
                body: JSON.stringify(formDataObject),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('Ticket oluştururken hata meydana geldi');
            }
        }

        router.push('/');
        router.refresh();
    };

    return (
        <div className="flex justify-center items-center">
            <form className="flex flex-col w-3/4 md:w-1/2 my-2"
                onSubmit={onFormSubmit}>
                <h3 className="text-center">{
                    updatedTicket ? "Update Ticket" : "Create Ticket"
                }</h3>

                <label className="text-center">Title</label>
                <hr className="hr-styled"></hr>
                <input type="text" name="title" required value={ticketData.title} onChange={handleChange} />

                <label className="text-center">Description</label>
                <hr className="hr-styled"></hr>
                <textarea type="text" name="description" required
                    value={ticketData.description} onChange={handleChange} />

                <label className="text-center">Category</label>
                <hr className="hr-styled"></hr>
                <select type="text" name="category" required
                    value={ticketData.category} onChange={handleChange}
                >
                    <option>Select category</option>
                    <option>Hardware Issue</option>
                    <option>Software Issue</option>
                    <option>Connection Issue</option>
                    <option>Other</option>
                </select>

                <label className="text-center">Priority</label>
                <hr className="hr-styled"></hr>
                <div className="text-center space-x-3">

                    <input type="radio" name="priority" value={1} id="High" onChange={handleChange}
                        checked={ticketData.priority == 1} />
                    <label htmlFor="High">Low</label>

                    <input type="radio" name="priority" value={2}
                        onChange={handleChange} id="Normal"
                        checked={ticketData.priority == 2} />
                    <label htmlFor="Normal">Normal</label>

                    <input type="radio" name="priority" value={3}
                        onChange={handleChange}
                        checked={ticketData.priority == 3}
                        id="Low" />
                    <label htmlFor="Low">High</label>
                </div>


                <label className="text-center">Progress</label>
                <hr className="hr-styled"></hr>
                <input type="range" name="progress" min={0} max={100}
                    value={ticketData.progress}
                    onChange={handleChange} />

                <label className="text-center">Status</label>
                <hr className="hr-styled"></hr>
                <select type="text" name="status" required
                    value={ticketData.status}
                    onChange={handleChange}>
                    <option>Select status</option>
                    <option>Not started</option>
                    <option>In progress</option>
                    <option>Mitigated</option>
                    <option>Resolved</option>
                </select>
                <div className="flex justify-center">
                    <button className="btn w-2/3 md:w-1/3 my-2" type="submit">{updatedTicket ? "Update Ticket" : "Create Ticket"}</button>
                </div>

            </form>
        </div>
    )
}