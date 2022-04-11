import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ... itemProps } = item;
    return (
      <li key={ id }>
        <TodoListItem { ... itemProps } /> {/* взять все свойства из объекта item и передать их в качестве атрибута вместе со значением */}
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;
