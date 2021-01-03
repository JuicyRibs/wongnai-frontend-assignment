import React from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Search from './Search.js';
import Trip from './Trip.js';

function App() {
  return (
    <div className="App cloud l">
      <div className="container">
        <div className="row">
          <div className="my-3 title cloud l">เที่ยวไหนดี</div>
        </div>
        <Search></Search>
        <div className="mt-5"></div>
        <Trip></Trip>
        <Trip></Trip>
        <Trip></Trip>
      </div>
    </div>
  );
}

export default App;
