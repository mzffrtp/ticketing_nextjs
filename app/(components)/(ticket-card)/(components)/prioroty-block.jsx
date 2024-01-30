import { FaFireExtinguisher } from "react-icons/fa";

export default function PriorityBlock({ priority }) {
    return (
        <div className="flex justify-start align-baseline space-x-1">
            <FaFireExtinguisher className={`pr-1`}
                style={{ color: priority > 0 ? "#FF5C5C" : "gray" }} />
            <FaFireExtinguisher className={`pr-1`}
                style={{ color: priority > 1 ? "#FF5C5C" : "gray" }} />
            <FaFireExtinguisher className={`pr-1`}
                style={{ color: priority > 2 ? "#FF5C5C" : "gray" }} />
        </div>
    )
}