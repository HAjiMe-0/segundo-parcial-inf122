import React, { useState } from 'react';
import './App.css';
import BotonList from './components/BotonList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className='title'>Mis Metas</h1>
      <input className='almacen'
        type="text"
        placeholder="Nueva Meta..."
        value={task}
        onChange={handleInputChange}
      />
      <div>
        h
      </div>
      <button className='Boton-Agregar' onClick={handleAddTodo}>Agregar</button>
      <BotonList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;