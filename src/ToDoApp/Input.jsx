import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditInput } from "./EditInput";
import { SubmitInput } from "./SubmitInput";

export function Input({ onAddToDo, edit, editedToDo, onUpdate }) {
  const [toDo, setToDo] = useState("");

  const id = uuidv4();

  const newToDo = { id, text: toDo };

  function handleSubmit(e) {
    e.preventDefault();

    if (!toDo) return;

    onAddToDo(newToDo);
    setToDo("");
  }

  function handleEdit(e) {
    e.preventDefault();

    onUpdate(toDo);
    setToDo("");
  }

  function handleSetEdit(editedText) {
    const toEdit = { id: editedToDo[0].id, text: editedText };

    setToDo(toEdit);
  }

  return (
    <form onSubmit={edit ? handleEdit : handleSubmit}>
      {!edit ? (
        <SubmitInput toDo={toDo} onSetToDo={setToDo} />
      ) : (
        <EditInput editedToDo={editedToDo} onSetEdit={handleSetEdit} />
      )}
      <button>{edit ? "Edit" : "Add"}</button>
    </form>
  );
}
