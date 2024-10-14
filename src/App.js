import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; // Importer le Header
import TodoList from './components/todolist';

const App = () => {
  return (
    <Router>
      <Header /> {/* Inclure le Header ici */}
      <Routes>
        <Route path="/" element={<TodoList />} />
        {/* Ajoutez d'autres routes ici */}
        {/* <Route path="/autre-page" element={<AutrePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
