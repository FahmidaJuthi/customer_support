import { toast } from "react-toastify";

export default function TaskStatus({ tasks = [], resolved = [], completeTask }) {
  return (
    <div className="p-4  rounded   space-y-6">
      {/* In Progress */}
      <div>
        <h2 className="font-bold mb-4 text-lg">Task Status</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-400 text-sm">No tasks in progress</p>
        ) : (
          tasks.map((task) => {
            const priorityClass =
              task.priority === "High"
                ? "text-red-500"
                : task.priority === "Medium"
                ? "text-yellow-600"
                : "text-green-500";

            const createdDate = task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "";

            return (
              <div
                key={task.id}
                className="items-start shadow mt-4 p-4 bg-white  py-3 "
              >
                <div className="w-full">
                  
                  
                    <h3 className="font-semibold text-center text-base">{task.title}</h3> 
                </div>

                {/* Complete button */}
                <div className="w-full ">
                  <button
                    onClick={() => {
                      toast.success(`${task.title} completed!`);
                      completeTask(task.id);
                    }}
                    className="bg-green-700 px-3 w-full py-1 rounded text-white hover:bg-green-900 cursor-pointer mt-4 transition-colors duration-200"
                  >
                    Complete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Resolved Section */}
      <div>
        <h2 className="font-bold mb-4 text-lg">Resolved Tasks</h2>
        {resolved.length === 0 ? (
          <p className="text-gray-400 text-sm">No tickets resolved yet</p>
        ) : (
          resolved.map((task) => (
            <div key={task.id} className="p-4 mb-4 shadow bg-blue-200 text-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{task.title}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
