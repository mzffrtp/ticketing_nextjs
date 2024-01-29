"use client"
import { useRouter } from "next/navigation";
import "./ticket-form.css"
import { SwalToast } from "@/app/_utis/swal-toast";

export default function TicketForm() {
    const router = useRouter()

    async function onFormSubmit(e) {
        e.preventDefault();

        const formElement = e.target;
        const formData = new FormData(formElement);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log("🚀 ~ onFormSubmit ~ formDataObject:", formDataObject)

        const resTickets = await fetch("/api/tickets", {
            method: "POST",
            body: JSON.stringify(formDataObject),
            'content-type': 'application/json',
        })


        if (!resTickets.ok) {
            SwalToast.fire({
                icon: "error",
                title: "An erro occured during form submitting"
            })
        } else {
            SwalToast.fire({
                icon: "success",
                title: "Ticket created successfully!"
            })
            router.push("/")
            router.refresh()
        }

    }

    return (
        <div className="flex justify-center items-center">
            <form className="flex flex-col w-3/4 md:w-1/2 my-2"
                onSubmit={onFormSubmit}>
                <h3 className="text-center">Create Ticket</h3>

                <label className="text-center">Title</label>
                <hr className="hr-styled"></hr>
                <input type="text" name="title" required />

                <label className="text-center">Description</label>
                <hr className="hr-styled"></hr>
                <textarea type="text" name="description" required />

                <label className="text-center">Category</label>
                <hr className="hr-styled"></hr>
                <select type="text" name="category" required >
                    <option>Select category</option>
                    <option>Hardware Issue</option>
                    <option>Software Issue</option>
                    <option>Connection Issue</option>
                    <option>Other</option>
                </select>

                <label className="text-center">Priority</label>
                <hr className="hr-styled"></hr>
                <div className="text-center space-x-3">

                    <input type="radio" name="priority" value={1} id="High" />
                    <label htmlFor="High">High</label>

                    <input type="radio" name="priority" value={1} id="Normal" />
                    <label htmlFor="Normal">Normal</label>

                    <input type="radio" name="priority" value={1} id="Low" />
                    <label htmlFor="Low">Low</label>
                </div>


                <label className="text-center">Progress</label>
                <hr className="hr-styled"></hr>
                <input type="range" name="progress" min={0} max={100} />

                <label className="text-center">Status</label>
                <hr className="hr-styled"></hr>
                <select type="text" name="status" required>
                    <option>Select status</option>
                    <option>Not started</option>
                    <option>In progress</option>
                    <option>Mitigated</option>
                    <option>Resolved</option>
                </select>
                <div className="flex justify-center">
                    <button className="btn w-2/3 md:w-1/3 my-2" type="submit">Submit Ticket</button>
                </div>

            </form>
        </div>
    )
}