import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarOverrides.css"; // for .highlight-day style

export default function FarmCalendarPage() {
  const [date, setDate] = useState(new Date());

  const [tasks, setTasks] = useState({
    "2024-06-08": ["Fertilize paddy field", "Inspect tomato leaves"]
  });

  const [newTask, setNewTask] = useState("");

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setNewTask("");
  };

  const addTask = () => {
    const key = formatDate(date);
    if (!newTask.trim()) return;
    setTasks((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), newTask],
    }));
    setNewTask("");
  };

  const tileClassName = ({ date }) => {
    const key = formatDate(date);
    return tasks[key] ? "highlight-day" : null;
  };

  return (
    <div className="pt-24 px-6 pb-12 min-h-screen bg-gradient-to-b from-stone-50 via-white to-lime-50 text-gray-800">
      <h1 className="text-3xl font-bold text-lime-700 mb-6">📅 My Farm Calendar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar View */}
        <div className="bg-white rounded-xl shadow p-6">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={tileClassName}
          />
          <p className="mt-4 text-sm text-gray-600">
            Selected Date: <strong>{date.toDateString()}</strong>
          </p>
        </div>

        {/* Task Manager */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-lime-700 mb-2">
            📝 Tasks for {date.toDateString()}
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {(tasks[formatDate(date)] || []).map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
            {!(tasks[formatDate(date)] || []).length && (
              <li className="italic text-gray-400">No tasks added yet</li>
            )}
          </ul>

          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task..."
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm"
            />
            <button
              onClick={addTask}
              className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-md text-sm"
            >
              ➕ Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
