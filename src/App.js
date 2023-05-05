import React, { useState } from 'react';
import './App.scss';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos([...todos, { task: newTodo, completed: false }]);
  }

  function handleToggleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  return (
    <div id="a">
      <h2 id="todo">To Do List</h2>
      <TodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input id="caja" type="text" value={inputValue} onChange={handleChange} />
      <button className="button" type="submit">Add To Do</button>
    </form>
  );
}

function TodoItem({ index, todo, onToggleComplete }) {
  function handleToggle() {
    onToggleComplete(index);
  }

  return (
    <div id="b">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
    </div>
  );
}

export default TodoList;