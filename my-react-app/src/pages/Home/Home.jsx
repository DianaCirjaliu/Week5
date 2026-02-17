import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBtns from "../../components/FilterBtns/FilterBtns";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.css";
import { useEffect, useState } from "react";
import Data from "../../assets/movies/movies.json";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [watchlist, setWatchList] = useState(() => {
    const saved = localStorage.getItem("movies-watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    setWatchList((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      if (exists) return prev.filter((m) => m.id !== movie.id);
      return [...prev, movie];
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container-home">
      <SearchBar onSearch={setSearch} />
      <FilterBtns
        onGenreChange={setSelectedGenre}
        onRatingChange={setSelectedRating}
      />
      <MovieCard
        movies={Data}
        searchTerm={search}
        genreFilter={selectedGenre}
        ratingFilter={selectedRating}
        watchlist={watchlist}
        onFavToggle={toggleWatchlist}
      />
    </div>
  );
}

export default Home;
