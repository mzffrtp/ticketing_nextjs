export default function StatusBlock({ status }) {
    console.log(status.toLowerCase());
    const getColor = () => {
        let color = "#EF4444"
        switch (status) {
            case "in progress":
                return (color = "#1e40af");
            case "mitigated":
                return (color = "orange");
            case "resolved":
                return (color = "green")
            default:
                return color
        }
    }
    return (
        <div>
            <span
                style={{ background: getColor() }}
                className="inline-block rounded-full p-2 font-semibold text-gray-700 text-xs">{status}</span>
        </div>
    )
}