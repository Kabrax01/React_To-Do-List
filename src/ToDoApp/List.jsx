import { ToDo } from "./ToDo";

export function List({ toDos, onDelete, onEdit }) {
  return (
    <ul className="todos_list">
      {toDos.map((el) => (
        <ToDo
          id={el.id}
          text={el.text}
          key={el.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
