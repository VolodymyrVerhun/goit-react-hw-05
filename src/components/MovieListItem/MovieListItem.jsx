import PropTypes from "prop-types";
import { MovieItemStyled } from "../MovieaList/MovieaList.styled";

import { useLocation } from "react-router-dom";

export default function MovieListItem({ title, id }) {
  const location = useLocation();
  return (
    <div>
      <MovieItemStyled to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </MovieItemStyled>
    </div>
  );
}
MovieListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
