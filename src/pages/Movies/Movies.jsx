import MovieaList from "../../components/MovieaList/MovieaList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../../services/services";
import {
  MoviesSearchBtn,
  MoviesSearchForme,
  MoviesSearchInput,
  MoviesTitle,
} from "./Movies.styled";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();

  const [moviesFound, setMoviesFound] = useState(true);

  const filmQuery = query.get("query");

  useEffect(() => {
    if (filmQuery) {
      getMoviesByQuery(filmQuery)
        .then((movies) => {
          setMovies(movies);
          setMoviesFound(movies.length > 0);
        })
        .catch((error) => {
          console.log(error);
          setMoviesFound(false);
        });
      // .then(setMovies)
      // .catch(error => console.log(error));
    }
  }, [filmQuery]);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery({ query: event.target.elements.query.value });
  }

  return (
    <div>
      <MoviesTitle>Search movie</MoviesTitle>
      <MoviesSearchForme onSubmit={handleSubmit}>
        <MoviesSearchInput type="text" name="query" required />
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesSearchForme>
      {moviesFound ? (
        <MovieaList movies={movies} />
      ) : (
        <p
          style={{
            color: "red",
            marginLeft: "50px",
            fontSize: "30px",
          }}
        >
          No movies found
        </p>
      )}
    </div>
  );
}
