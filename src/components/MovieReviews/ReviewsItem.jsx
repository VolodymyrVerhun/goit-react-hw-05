import PropTypes from "prop-types";

export default function ReviewsItem({ author, content }) {
  return (
    <div>
      <h3>AUTHOR: {author}</h3>
      <p>{content}</p>
    </div>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
