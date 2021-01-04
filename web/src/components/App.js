  
import React, { useState, useCallback } from "react";
import './App.css';
import Search from './Search.js';
import Trip from './Trip.js';

function App() {

  const [trips, setTrips] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredTripsHandler = useCallback((filteredTrips) => {
    setTrips(filteredTrips);
  }, []);
  const tagClickHandler = (tag) => {
    setFilter(tag);
  };

  return (
    <div className="App cloud l">
      <div className="container">
        <div className="row">
          <div className="my-3 title cloud l"><a href="/">เที่ยวไหนดี</a></div>
        </div>
        <Search onLoadTrips={filteredTripsHandler} filter={filter} />
        <div className="mt-5"></div>
        <Trip trips={trips} tagClick={tagClickHandler}/>
      </div>
    </div>
  );
}

export default App;
