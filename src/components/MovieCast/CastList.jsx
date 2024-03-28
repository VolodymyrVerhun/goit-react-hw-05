import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/services";

import CastItem from "./CastItem";
import { CastListStyle } from "../../pages/MovieDetailsPage/MovieDetails.styled";

export default function CastList() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(setCast)

      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <CastListStyle>
      {Array.isArray(cast) && cast.length > 0 ? (
        cast.map((item) => (
          <CastItem
            key={item.id}
            name={item.name}
            img={item.profile_path}
            character={item.character}
          />
        ))
      ) : (
        <p>No cast found</p>
      )}
    </CastListStyle>
  );
}
