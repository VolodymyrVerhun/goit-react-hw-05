import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getMoviesDetails } from "../../services/services";
import { Base__Url__Img } from "../../utils/constans";
import CastList from "./CastList";
import Reviews from "./Reviews";
import {
  AdditionalInfo,
  AdditionalInfoLink,
  BtnGoBack,
  MovieBlockInfo,
  MovieImg,
  MovieInfo,
} from "./MovieDetails.styled";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMoviesDetails(id)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [id]);
  function handleClickBack() {
    navigate(location?.state?.from ?? "/");
  }

  if (!movie) {
    return <h2>...Loading</h2>;
  }

  return (
    <div>
      <BtnGoBack onClick={handleClickBack}>go back</BtnGoBack>
      <MovieBlockInfo>
        <MovieImg src={Base__Url__Img + movie.poster_path} alt="" />
        <MovieInfo>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres.map((item) => {
              return item.name + " ";
            })}
          </p>
        </MovieInfo>
      </MovieBlockInfo>
      <AdditionalInfo>
        <p>Additional information</p>
        <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
        <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
      </AdditionalInfo>
      <Routes>
        <Route path="cast" element={<CastList />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Routes>
    </div>
  );
}
