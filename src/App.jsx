import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";

import Footer from "./components/Footer";
import { tickets as initialTickets } from "./data/tickets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

 
  const addToTask = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    
    const updatedTickets = tickets.map((t) =>
      t.id === ticketId ? { ...t, status: "In-progress" } : t
    );
    setTickets(updatedTickets);

    
    if (!tasks.find((t) => t.id === ticketId)) {
      setTasks([...tasks, { ...ticket, status: "In-progress" }]);
    }
  };

  // Complete a task
  const completeTask = (ticketId) => {
    const task = tasks.find((t) => t.id === ticketId);
    if (!task) return;

    // remove from tasks
    setTasks(tasks.filter((t) => t.id !== ticketId));

   
    const updatedTickets = tickets.map((t) =>
      t.id === ticketId ? { ...t, status: "resolved" } : t
    );
    setTickets(updatedTickets);

    // add to resolved
    setResolved([...resolved, { ...task, status: "resolved" }]);
  };

  return (
    


    <div className="container-full">
      <div className="bg-white">
        <div className="container mx-auto py-2 px-4">
           <Navbar />
        </div>
          
      </div>
      
      
    <div className="container mx-auto p-4"> 
     
      <Banner inProgress={tasks.length} resolved={resolved.length} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        {/* Left side: Tickets 2-column grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <h2 className="md:col-span-2 grid grid-cols-1 font-bold text-lg">Customer Tickets</h2>
          {tickets
          .filter((t) => String(t.status || "").toLowerCase() !== "resolved") 
          .map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              addToTask={() => addToTask(ticket.id)}
            />
          ))}
        </div>

        {/* Right side: Task Status */}
        <div className="md:col-span-1">
          
          <TaskStatus
            tasks={tasks}
            resolved={resolved}
            completeTask={completeTask}
          />
        </div>
      </div>

      
      
      <ToastContainer position="top-right" />
    </div>
    <div className="container-full"> <Footer /></div>
    
    </div>
    
  );
}

export default App;
