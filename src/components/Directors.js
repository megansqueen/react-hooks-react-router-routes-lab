import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director) => (
    <div key={director.name}>{director.name}
      <ul>{director.movies.map((movie, i) => 
        <ul key={i}>{movie}</ul>
      )}</ul>
    </div>
  
   ));

  return (
  <div>
    <h1>Directors Page</h1>
      <div>{directorList}</div>
    </div>  
  )
}

export default Directors;
