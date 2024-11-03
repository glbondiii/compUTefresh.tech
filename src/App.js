import React from 'react';
import './App.css';
import './Nav.js';
import links from './Nav.js';
import Navbar from './Nav.js';
import Queue from './Queue.js';

function Nav() {
  return Navbar();
}

function QueuePage(){
  return Queue();
}
// returning the whole function
function App() {
  return (
    <>
      <Nav />
      <QueuePage />
    </>
  );
}

export default App;
