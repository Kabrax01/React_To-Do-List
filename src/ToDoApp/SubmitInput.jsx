export function SubmitInput({ toDo, onSetToDo }) {
  return (
    <input
      type="text"
      maxLength="35"
      placeholder="Write something..."
      value={toDo}
      onInput={(e) => onSetToDo(e.target.value)}
    ></input>
  );
}
