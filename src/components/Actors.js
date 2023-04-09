import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => (
    <div key={actor.name}>{actor.name}
      <ul>{actor.movies.map((movie, i) => 
        <ul key={i}>{movie}</ul>
      )}</ul>
    </div>
  
   ));
 
  
  return (
  <div> 
  <h1>Actors Page</h1>
    <div>{actorsList}</div>
    </div> 
  )
}

export default Actors;
