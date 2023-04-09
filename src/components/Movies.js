import React from "react";
import { movies } from "../data";

function Movies() {
 const moviesList = movies.map((movie) => (
  <div key={movie.title}>{movie.title}
    <ul>{movie.genres.map((genre, i) => 
      <li key={i}>{genre}</li>
    )}</ul>
  </div>

 ));
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{moviesList}</div>
    </div>
  )
}

export default Movies;
