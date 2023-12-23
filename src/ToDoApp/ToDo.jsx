import { useState } from "react";

export function ToDo({ id, text, onDelete, onEdit }) {
  const [done, setDone] = useState(false);

  function deleteToDo() {
    onDelete(id);
  }

  function editToDo() {
    onEdit(id, text);
  }

  return (
    <li id={id}>
      <div className={done ? "todo checked" : "todo"}>
        <input
          type="checkbox"
          onChange={(e) => setDone(e.target.checked)}
        ></input>
        <p>{text}</p>
      </div>
      <div className="icons">
        <button className="btn-close">
          <span className="material-symbols-outlined" onClick={deleteToDo}>
            close
          </span>
        </button>
        <button className="btn-edit">
          <span className="material-symbols-outlined" onClick={editToDo}>
            edit
          </span>
        </button>
      </div>
    </li>
  );
}
