import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendMovies } from "../../services/services";
import { HomeStyled } from "./Home.styled";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendMovies()
      .then((data) => {
        setMovies(data.filter((item) => item.title));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <HomeStyled>Trending today</HomeStyled>
      <MovieList movies={movies} />
    </div>
  );
}
