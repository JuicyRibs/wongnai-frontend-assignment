import React, {useState, useEffect, useRef } from "react";

const Search = React.memo((props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { onLoadTrips, filter } = props;
  const [enteredFilter, setEnteredFilter] = useState(filter);
  const inputRef = useRef();

  useEffect(() => {
    setEnteredFilter(filter);
  }, [filter]);

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0 ? "" : `?keyword="${enteredFilter}"`;
        const f = async () => {
          var tempData = await fetch("http://localhost:4000/api/trips"+query)
          tempData = await tempData.json()
          setData(tempData.trips)
          setLoading(false)
        }
        f();
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, filter]);

  useEffect(() => {
    if (!isLoading && data !== "undefined"){
      onLoadTrips(data)
    }
  }, [onLoadTrips, isLoading, data]);

  return (
    <input
     ref = {inputRef}
     style={{'font-family': "Cloud-light" ,width:"45%", border:"none",'border-bottom':"2px solid #D4D4D4", padding:"0.5rem", textAlign: 'center', outline: "none"}}
     key="searchLocation"
     value={enteredFilter}
     placeholder={"หาที่เที่ยวแล้วไปกัน..."}
     onChange={(e) => setEnteredFilter(e.target.value)}
    />
  );
})

export default Search