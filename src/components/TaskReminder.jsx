import { useEffect, useState } from "react";

export default function TaskReminder({ tasks }) {
  const [visible, setVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState("");

  useEffect(() => {
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    setCurrentTask(task);
    setVisible(true);

    const timeout = setTimeout(() => setVisible(false), 8000);

    return () => clearTimeout(timeout);
  }, [tasks]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 max-w-xs sm:max-w-sm bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-lg px-4 py-3 text-sm text-yellow-900 animate-fade-in-up">
      <div className="font-semibold mb-1">⏰ Task Reminder</div>
      <p>{currentTask}</p>
    </div>
  );
}
