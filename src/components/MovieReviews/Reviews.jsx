import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/services";
import ReviewsItem from "./ReviewsItem";
import { ReviewsStyle } from "../../pages/MovieDetailsPage/MovieDetails.styled";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(setReviews)

      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <ReviewsStyle>
      {Array.isArray(reviews) && reviews.length > 0 ? (
        reviews.map((item) => (
          <ReviewsItem
            key={item.id}
            author={item.author}
            content={item.content}
          />
        ))
      ) : (
        <p>No reviews found</p>
      )}
    </ReviewsStyle>
  );
}
