import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Homepage from './pages/Home';
import EditPage from './pages/Edit';

function App() {

  return (
    <div className=''>
      <h1>Memes</h1>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/edit" element={<EditPage />}/>
      </Routes>
    </div>
  )
}

export default App
