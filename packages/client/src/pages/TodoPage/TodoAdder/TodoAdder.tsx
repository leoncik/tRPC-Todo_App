import classes from "./TodoAdder.module.css";

function TodoAdder() {
  return (
    <div className={classes["add-wrapper"]}>
      <label htmlFor="add">Todo's content:</label>
      <textarea id="add" />
    </div>
  );
}

export default TodoAdder;
