import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { id: uuidv4(), task: "Learn React", isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: newTodo, isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
  };
  let markAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
            isDone: true,
        };
      })
    );
  };
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <input
        placeholder="Add Your task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp;
      <button onClick={addNewTask}>Add</button>
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}{" "}
              </span>{" "}
              &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button> &nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={markAllAsDone}>Mark All As Done</button>
    </div>
  );
}
