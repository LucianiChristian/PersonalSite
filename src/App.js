import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home.js';
import Works from './components/Works/Works.js';
import Posts from './components/Posts/Posts.js';
import Contact from './components/Contact/Contact.js';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
