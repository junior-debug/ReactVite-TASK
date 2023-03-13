import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ data }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div id={data.id}>
      <h1>{data.name}</h1>
      <p>{data.apellido}</p>
      <button
        onClick={() => {
          deleteTask(data.id);
        }}
      >
        eliminar Tarea
      </button>
    </div>
  );
}

export { TaskCard };
