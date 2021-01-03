import React from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Search from './Search.js';
import Trip from './Trip.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="my-4">เที่ยวไหนดี</h1>
        </div>
        <Search></Search>
        <div className="mt-4"></div>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
      </div>
    </div>
  );
}

export default App;
