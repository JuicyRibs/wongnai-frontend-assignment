import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {'font-family': "Cloud-light" ,width:"45%", border:"none",'border-bottom':"2px solid #D4D4D4", padding:"0.5rem", textAlign: 'center', outline: "none"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"หาที่เที่ยวแล้วไปกัน..."}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar