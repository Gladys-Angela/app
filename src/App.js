import React from 'react';
import './style.css';
import {  BrowserRouter as Router,  Route,  Routes } from "react-router-dom"
import Todos from './Todos';
import Todo from './Todo';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<Todos/>} />
          <Route path='/todo/:id' element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

