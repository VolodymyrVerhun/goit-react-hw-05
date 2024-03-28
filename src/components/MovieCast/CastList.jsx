import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/services";

import CastItem from "./CastItem";
import { CastListStyle } from "../../pages/MovieDetailsPage/MovieDetails.styled";

export default function CastList() {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCast(id)
      .then(setCast)

      .catch((error) => console.log(error));
  }, [id]);

  return (
    <CastListStyle>
      {cast &&
        cast.map((item) => (
          <CastItem
            key={item.id}
            name={item.name}
            img={item.profile_path}
            character={item.character}
          />
        ))}
    </CastListStyle>
  );
}
