import React, { useState, useRef } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();
  const titleRef = useRef();
  const gradeRef = useRef();

  function addMovie(e) {
    e.preventDefault();
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    setMovies([
      ...movies,
      {
        id: newId,
        title: titleRef.current.value,
        grade: gradeRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  }

  function deleteMovie(id) {
    setMovies(movies.filter((item) => item.id !== id));
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Lägg till en film</legend>
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            ref={titleRef}
            placeholder="Movie"
          ></input>
          <label htmlFor="rating">Betyg:</label>
          <select
            type="text"
            id="rating"
            className="form-control"
            ref={gradeRef}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            className="btn btn-success mt-3"
            ref={inputRef}
            onClick={addMovie}
          >
            Spara film
          </button>
        </fieldset>
      </form>

      <h2>Filmer</h2>
      <ul className="list-group">
        {movies.map((movie) => (
          <Movie key={movie.id} item={movie} deleteItem={deleteMovie} />
        ))}
      </ul>
    </div>
  );
}
