import React, { useState, useRef } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const Movies = styled.ul`
  padding: 0;
`;

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(0);
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
    sortedMovies.sort((a, b) => (b.title > a.title ? -1 : 1));
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

  function AddMovieForm() {
    return (
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
            className="btn btn-success mt-3 mb-3"
            onClick={addMovie}
          >
            Spara film
          </button>
        </fieldset>
      </form>
    );
  }

  return (
    <>
      <AddMovieForm />

      <h2>Filmer</h2>
      <hr />
      <Movies>
        {movies.map((movie) => (
          <Movie key={movie.id} item={movie} deleteItem={deleteMovie} />
        ))}
      </Movies>

      <button
        id="order-alphabetic"
        className="btn btn-primary me-3"
        onClick={titleSort}
      >
        Alfabetisk ordning
      </button>
      <button id="order-grade" className="btn btn-primary" onClick={gradeSort}>
        Betygsordning
      </button>
    </>
  );
}
