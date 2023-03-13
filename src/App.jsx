import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function HolaMundo() {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export { HolaMundo };
