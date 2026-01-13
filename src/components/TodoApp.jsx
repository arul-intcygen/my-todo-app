// File: src/components/TodoApp.jsx
import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

// Ganti return statement di TodoApp.jsx dengan ini:
    return (
    <div>
        <form onSubmit={addTodo} className="task-input-group">
        <input 
            type="text" 
            className="task-input"
            placeholder="Add a new task..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-pomo">Add</button>
        </form>
        
        <div>
        {todos.map((todo) => (
            <div key={todo.id} className="task-item">
            <div className="task-left">
                <div 
                className={`check-circle ${todo.completed ? 'checked' : ''}`} 
                onClick={() => toggleTodo(todo.id)}
                ></div>
                <span className={`task-text ${todo.completed ? 'done' : ''}`}>
                {todo.text}
                </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} style={{background:'none', border:'none', color:'#fb6f6f', cursor:'pointer'}}>×</button>
            </div>
        ))}
        </div>
    </div>
    );
    };

export default TodoApp;