import PropTypes from "prop-types";
import MovieListItem from "../MovieListItem/MovieListItem";

import { MovieListStyled } from "./MovieList.styled";

export default function MovieaList({ movies }) {
  return (
    <MovieListStyled>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          title={movie.original_title || movie.name}
          id={movie.id}
        />
      ))}
    </MovieListStyled>
  );
}

MovieListItem.propTypes = {
  movies: PropTypes.array,
};
