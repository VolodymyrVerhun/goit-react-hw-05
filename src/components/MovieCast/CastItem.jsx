import PropTypes from "prop-types";

import { Base__Url__Img__Actor } from "../../utils/constans";
import { CastItemStyle } from "../../pages/MovieDetailsPage/MovieDetails.styled";

export default function CastItem({ name, img, character }) {
  return (
    <CastItemStyle>
      <img src={Base__Url__Img__Actor + img} alt="" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </CastItemStyle>
  );
}

CastItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  character: PropTypes.string,
};
