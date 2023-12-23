export function EditInput({ editedToDo, onSetEdit }) {
  return (
    <input
      type="text"
      maxLength="35"
      defaultValue={editedToDo[0].text}
      onInput={(e) => onSetEdit(e.target.value)}
    ></input>
  );
}
