import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    
    <div>
        <input></input>
      <form onSubmit={handleSubmit}>
        <label>
          Add a todo:
          <input type="text" value={input} onChange={event => setInput(event.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
