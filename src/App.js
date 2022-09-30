import Layout from './components/Layout/Layout.js';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
