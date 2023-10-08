import classes from "./TodoElement.module.css";

interface TodoElementProps {
  content: string;
  isDone: boolean;
}

function TodoElement({ content, isDone }: TodoElementProps) {
  return (
    <li className={classes.todo}>
      <p>{content}</p>{" "}
      <span
        className={`${classes.status} ${
          isDone ? classes.done : classes["not-done"]
        }`}
      >
        {isDone ? "DONE" : "TODO"}{" "}
      </span>
    </li>
  );
}

export default TodoElement;
