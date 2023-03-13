import { createContext, useEffect, useState } from "react";
import { dataJson } from "../data/task";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(title, apellido) {
    setTask([
      ...task,
      {
        name: title,
        id: task.length + 1,
        apellido: apellido,
      },
    ]);
  }

  function deleteTask(taskid) {
    setTask(task.filter((task) => task.id != taskid));
  }

  useEffect(() => {
    setTask(dataJson);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
