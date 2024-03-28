import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

export const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
