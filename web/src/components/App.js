import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Search from './Search.js';
import Trip from './Trip.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          เที่ยวไหนดี
        </h1>
      </header>
      <Search></Search>
      <div className="container">
        <Trip></Trip>
      </div>
    </div>
  );
}

export default App;
