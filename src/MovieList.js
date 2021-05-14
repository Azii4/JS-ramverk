import React, { useState, useRef } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(0);
  const inputRef = useRef();
  const titleRef = useRef();
  const gradeRef = useRef();

  function addMovie(e) {
    e.preventDefault();
    if (!titleRef.current.value && gradeRef.current.value === "0") {
      alert("Både titel och betyg saknas, försök igen!");
      return false;
    }

    if (!titleRef.current.value) {
      alert("Titel saknas, försök igen!");
      return false;
    }

    if (gradeRef.current.value === "0") {
      alert("Betyg saknas, försök igen!");
      return false;
    }

    setId(id + 1);
    setMovies([
      ...movies,
      {
        id: id,
        title: titleRef.current.value,
        grade: parseInt(gradeRef.current.value),
      },
    ]);
    titleRef.current.value = "";
    gradeRef.current.value = 0;
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function titleSort(e) {
    e.preventDefault();
    let sortedMovies = clone(movies);
    sortedMovies.sort((a, b) => b.title < a.title);
    setMovies(sortedMovies);
  }

  function gradeSort(e) {
    e.preventDefault();
    let sortedMovies = clone(movies);
    sortedMovies.sort((a, b) => b.grade - a.grade);
    setMovies(sortedMovies);
  }

  function deleteMovie(id) {
    setMovies(movies.filter((item) => item.id !== id));
  }

  function gradeSorting() {
    setMovies(
      movies.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      })
    );
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
            //ref={inputRef}
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

      <button
        id="order-alphabetic"
        className="btn btn-primary"
        onClick={titleSort}
      >
        Alfabetisk ordning
      </button>
      <button id="order-grade" className="btn btn-primary" onClick={gradeSort}>
        Betygsordning
      </button>
    </div>
  );
}
