interface TodoElementProps {
  content: string;
  isDone: boolean;
}

function TodoElement({ content, isDone }: TodoElementProps) {
  return (
    <li>
      <p>{content}</p> <span>{isDone ? "DONE" : "TODO"} </span>
    </li>
  );
}

export default TodoElement;
