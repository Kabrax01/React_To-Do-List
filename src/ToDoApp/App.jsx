import { useState, useEffect } from "react";
import { List } from "./List";
import { Input } from "./Input";
import { EmptyMessage } from "./EmptyMessage";

export default function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("todos")));
  const [edit, setEdit] = useState(false);
  const [toDoEdit, setToDoEdit] = useState("");
  const isEmpty = list.length === 0;

  function handleSetList(newToDo) {
    setList([...list, newToDo]);
  }

  function handleDeleteToDo(toDoId) {
    const filteredToDos = list.filter((el) => el.id !== toDoId);
    setList(filteredToDos);
  }

  function handleEditToDo(toDoId) {
    setEdit(true);

    const toEdit = list.filter((el) => el.id === toDoId);

    setToDoEdit(toEdit);
  }

  function handleUpdate(toDo) {
    const updated = list.map((el) =>
      el.id === toDo.id ? { id: toDo.id, text: toDo.text } : el
    );
    setList(updated);
    setEdit(false);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <div className="container">
        <Input
          onAddToDo={handleSetList}
          edit={edit}
          editedToDo={toDoEdit}
          onUpdate={handleUpdate}
        />
        {isEmpty ? (
          <EmptyMessage />
        ) : (
          <List
            toDos={list}
            onDelete={handleDeleteToDo}
            onEdit={handleEditToDo}
          />
        )}
      </div>
    </div>
  );
}
