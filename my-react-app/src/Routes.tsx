import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/Index";
import HomePage from "./pages/Home/Home";
import Watchlist from "./pages/Watchlist/Watchlist";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErorrFallback";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import moviesData from "../src/assets/movies/movies.json";
import FilteredMovies from "./components/FilteredMovies/FilteresMovies";
import MainLayout from "./components/MainLayout/MainLayout";

function AppRoutes() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<div>Page not found (404)</div>} />

          {/*individual page for a movie */}
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={moviesData} />}
          />

          {/*filtered movie list */}
          <Route
            path="/movies"
            element={<FilteredMovies movies={moviesData} />}
          />

          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default AppRoutes;
