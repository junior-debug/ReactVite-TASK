import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskForm() {
  const [title, setTitle] = useState("");
  const [apellido, setApellido] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = function (e) {
    e.preventDefault();
    createTask(title, apellido);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="inserta tu nueva tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="apellido"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}
