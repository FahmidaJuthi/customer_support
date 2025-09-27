import { FaRegCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function StatusPill({ status }) {
  const isInProgress = status === "In Progress" || status === "In-Progress";
  const isOpen = status === "Open";
  const pillBg = isOpen ? "bg-green-100" : "bg-yellow-100";
  const circleClass = isOpen ? "bg-green-500" : "bg-yellow-500";
 
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${pillBg}`}>
      <span className={`w-3 h-3 rounded-full ${circleClass} inline-block`} />
      <span>{status}</span>
    </div>
  );
}

export default function TicketCard({ ticket, addToTask }) {
  const handleClick = () => {
  toast.success(`${ticket.title} added to Task Status!`);
  addToTask(); 
};

  const createdDate = ticket.createdAt
    ? new Date(ticket.createdAt).toLocaleDateString()
    : "";


  const priorityClass =
    ticket.priority === "High"
      ? "text-red-500"
      : ticket.priority === "Medium"
      ? "text-yellow-600"
      : "text-green-500";

  return (
    
    <div
      onClick={handleClick}
      className={`p-4 rounded shadow mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 border-l-4 ${
        ticket.priority === "High"
          ? "border-red-500"
          : ticket.priority === "Medium"
          ? "border-yellow-500"
          : "border-green-500"
      } bg-white`}
    >
    
      
      <div className="flex items-start justify-between">
        <h3 className="font-bold text-lg truncate mr-4">{ticket.title}</h3>

        <div className="flex-shrink-0">
          <StatusPill status={ticket.status} />
        </div>
      </div>

      {/* description */}
      <p className="text-gray-700 mt-2">{ticket.description}</p>

     
      <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-gray-500">#{ticket.id}</span>
          <span className={`font-semibold ${priorityClass}`}>{ticket.priority}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="truncate">{ticket.customer}</span>

          
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt className="w-5 h-5 text-gray-700" />
            <span>{createdDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
