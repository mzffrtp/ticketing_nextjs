export default function StatusBlock({ status }) {
    const getColor = () => {
        let color = "#EF4444"
        switch (status.toLowerCase()) {
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
        <span
            style={{ background: getColor() }}
            className="inline-block rounded-full p-2 font-semibold text-gray-700 text-xs">{status}</span>
    )
}