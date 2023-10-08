import classes from "./TodoElement.module.css";
import deleteIcon from "../../../assets/trash-2.svg";

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
      <button className={classes["delete-button"]}>
        <img src={deleteIcon} alt="Delete todo" />
      </button>
    </li>
  );
}

export default TodoElement;
