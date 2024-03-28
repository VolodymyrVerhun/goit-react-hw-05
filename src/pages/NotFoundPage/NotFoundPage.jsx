import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>
        404 Not Found, go to <Link to="/">Home</Link>
      </h1>
    </div>
  );
}
