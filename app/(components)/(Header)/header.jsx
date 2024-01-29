import Link from "next/link";
import { CgHome } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="flex justify-between bg-nav p-4">
            <div className="flex items-center space-x-5">
                <Link href="/" className="flex icon items-center"><CgHome className="mx-3" />Home</Link>
                <Link href="/ticket-page/new" className="icon flex items-center"><IoTicketOutline className="mx-3" />Ticket</Link>
            </div>

            {/*//todo login register*/}
            <div className="text-default-text">User</div>
        </header>

    )
}