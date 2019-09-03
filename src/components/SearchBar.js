import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong><br/>
        <input type="radio" value="Alphabetically" checked={props.name} onChange={(e) => props.sortName(e)}/>
        <label> Alphabetically</label> <br/>
        <input type="radio" value="Price" checked={false} onChange={(e) => props.sortPrice(e)}/> 
        <label> Price</label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterType(e)}>
          <option value="All"> All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
