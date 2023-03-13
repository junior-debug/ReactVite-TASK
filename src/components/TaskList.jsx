import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { task } = useContext(TaskContext);
  return (
    <div>
      {task.map((data) => (
        <TaskCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export { TaskList };
