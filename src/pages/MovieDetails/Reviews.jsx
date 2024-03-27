import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/services";
import ReviewsItem from "./ReviewsItem";
import { ReviewsStyle } from "./MovieDetails.styled";

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then(setReviews)

      .catch((error) => console.log(error));
  }, [id]);

  return (
    <ReviewsStyle>
      {reviews &&
        reviews.map((item) => (
          <ReviewsItem
            key={item.id}
            author={item.author}
            content={item.content}
          />
        ))}
    </ReviewsStyle>
  );
}
